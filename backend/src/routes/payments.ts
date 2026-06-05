import { Router, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { isPremium, addSubscription } from '../data/store';
import { getUserById } from '../data/db';
import { sendPremiumNotification } from '../services/notifications';
import { sendSubscriptionEmail } from '../services/email';
import type { Subscription } from '../types';

const router = Router();

interface PaymentRequest {
  id: string;
  user_id: string;
  user_name: string;
  user_email: string;
  plan: 'premium';
  amount: number;
  upi_id: string;
  qr_data: string;
  utr?: string;
  status: 'pending' | 'verified' | 'failed';
  created_at: string;
  verified_at?: string;
}

const UPI_ID = process.env.UPI_ID || 'codesprout@upi';
const UPI_PAYEE_NAME = process.env.UPI_PAYEE_NAME || 'CodeSprout';
const UPI_CURRENCY = process.env.UPI_CURRENCY || 'INR';
const AMOUNT = Number(process.env.PREMIUM_AMOUNT) || 49;
const SUBSCRIPTION_DAYS = Number(process.env.SUBSCRIPTION_DAYS) || 30;
const paymentRequests: PaymentRequest[] = [];

const buildUpiLink = (txnNote: string) => {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_PAYEE_NAME,
    am: String(AMOUNT),
    cu: UPI_CURRENCY,
    tn: txnNote,
  });
  return `upi://pay?${params.toString()}`;
};

router.use(authenticate);

router.post('/init', (req: AuthRequest, res: Response) => {
  const userId = req.user!.id;

  if (isPremium(userId)) {
    return res.status(400).json({ error: 'Already premium user' });
  }

  const txnId = `CS${Date.now()}${userId.slice(-4).toUpperCase()}`;
  const upiLink = buildUpiLink(`Premium ${txnId}`);

  const payment: PaymentRequest = {
    id: String(paymentRequests.length + 1),
    user_id: userId,
    user_name: req.user!.name || req.user!.email,
    user_email: req.user!.email,
    plan: 'premium',
    amount: AMOUNT,
    upi_id: UPI_ID,
    qr_data: upiLink,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  paymentRequests.push(payment);

  res.json({
    payment_id: payment.id,
    txn_id: txnId,
    amount: AMOUNT,
    currency: UPI_CURRENCY,
    upi_id: UPI_ID,
    payee_name: UPI_PAYEE_NAME,
    qr_data: upiLink,
    upi_deep_link: upiLink,
    status: 'pending',
    expires_in: '15 minutes',
  });
});

router.post('/verify', async (req: AuthRequest, res: Response) => {
  const { utr, payment_id } = req.body;
  const userId = req.user!.id;

  if (!utr || utr.length < 5) {
    return res.status(400).json({ error: 'Valid UTR number required' });
  }

  const payment = paymentRequests.find(
    (p) => p.user_id === userId && p.id === (payment_id || String(paymentRequests.length))
  );

  if (!payment) {
    return res.status(404).json({ error: 'Payment request not found' });
  }

  if (payment.status === 'verified') {
    return res.status(400).json({ error: 'Payment already verified' });
  }

  payment.utr = utr;
  payment.status = 'verified';
  payment.verified_at = new Date().toISOString();

  const newSub: Subscription = {
    id: String(Date.now()),
    user_id: userId,
    plan: 'premium',
    status: 'active',
    start_date: new Date().toISOString(),
    end_date: new Date(Date.now() + SUBSCRIPTION_DAYS * 24 * 60 * 60 * 1000).toISOString(),
  };

  addSubscription(newSub);

  try {
    sendPremiumNotification(userId);
    const user = getUserById(userId);
    if (user) {
      await sendSubscriptionEmail(user.email, user.name, 'Premium', new Date(newSub.end_date!), payment.amount);
    }
  } catch (e) { console.error('[payments] premium notif/email failed:', e); }

  res.json({
    success: true,
    message: 'Payment verified! Premium subscription activated.',
    payment: {
      id: payment.id,
      utr: payment.utr,
      amount: payment.amount,
      verified_at: payment.verified_at,
    },
    subscription: newSub,
  });
});

router.get('/status', (req: AuthRequest, res: Response) => {
  const payment = paymentRequests.find((p) => p.user_id === req.user!.id);
  if (!payment) {
    return res.json({ status: 'no_payment' });
  }
  res.json({
    id: payment.id,
    status: payment.status,
    amount: payment.amount,
    upi_id: payment.upi_id,
    utr: payment.utr || null,
    created_at: payment.created_at,
    verified_at: payment.verified_at || null,
  });
});

router.get('/requests', (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin only' });
  }
  res.json(paymentRequests);
});

router.post('/admin-verify', async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin only' });
  }

  const { payment_id, action } = req.body;
  const payment = paymentRequests.find((p) => p.id === payment_id);
  if (!payment) return res.status(404).json({ error: 'Payment not found' });

  if (action === 'verify') {
    payment.status = 'verified';
    payment.verified_at = new Date().toISOString();

    const newSub: Subscription = {
      id: String(Date.now()),
      user_id: payment.user_id,
      plan: 'premium',
      status: 'active',
      start_date: new Date().toISOString(),
      end_date: new Date(Date.now() + SUBSCRIPTION_DAYS * 24 * 60 * 60 * 1000).toISOString(),
    };
    addSubscription(newSub);

    try {
      sendPremiumNotification(payment.user_id);
      const user = getUserById(payment.user_id);
      if (user) await sendSubscriptionEmail(user.email, user.name, 'Premium', new Date(newSub.end_date!), payment.amount);
    } catch (e) { console.error('[payments] premium notif/email failed:', e); }

    return res.json({ success: true, message: 'Payment verified by admin' });
  }

  if (action === 'reject') {
    payment.status = 'failed';
    return res.json({ success: true, message: 'Payment rejected' });
  }

  res.status(400).json({ error: 'Invalid action' });
});

export default router;
