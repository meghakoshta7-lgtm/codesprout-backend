import Razorpay from 'razorpay';
import crypto from 'crypto';

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || '';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || '';
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || '';

let instance: Razorpay | null = null;

export function getRazorpay(): Razorpay | null {
  if (instance) return instance;
  const hasKey = Boolean(RAZORPAY_KEY_ID && RAZORPAY_KEY_SECRET);
  console.log(`[razorpay] KEY_ID=${RAZORPAY_KEY_ID ? RAZORPAY_KEY_ID.slice(0, 12) + '...' : 'MISSING'} KEY_SECRET=${RAZORPAY_KEY_SECRET ? 'SET' : 'MISSING'}`);
  if (!hasKey) {
    console.log('[razorpay] RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET not set — Razorpay disabled');
    return null;
  }
  instance = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET });
  console.log(`[razorpay] initialized successfully`);
  return instance;
}

export function isRazorpayEnabled(): boolean {
  return Boolean(RAZORPAY_KEY_ID && RAZORPAY_KEY_SECRET);
}

export interface RazorpayOrderInput {
  amount: number;
  currency?: string;
  receipt: string;
  notes?: Record<string, string>;
}

export async function createRazorpayOrder(input: RazorpayOrderInput) {
  const rzp = getRazorpay();
  if (!rzp) throw new Error('Razorpay not configured');
  return rzp.orders.create({
    amount: Math.round(input.amount * 100),
    currency: input.currency || 'INR',
    receipt: input.receipt,
    notes: input.notes || {},
  });
}

export interface RazorpayVerifyInput {
  orderId: string;
  paymentId: string;
  signature: string;
}

export function verifyRazorpaySignature({ orderId, paymentId, signature }: RazorpayVerifyInput): boolean {
  if (!RAZORPAY_KEY_SECRET) return false;
  const expected = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');
  return expected === signature;
}

export function verifyRazorpayWebhook(body: string, signature: string): boolean {
  if (!RAZORPAY_WEBHOOK_SECRET) return false;
  const expected = crypto
    .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex');
  return expected === signature;
}

export async function fetchRazorpayPayment(paymentId: string) {
  const rzp = getRazorpay();
  if (!rzp) throw new Error('Razorpay not configured');
  return rzp.payments.fetch(paymentId);
}

export async function refundRazorpayPayment(paymentId: string, amount?: number) {
  const rzp = getRazorpay();
  if (!rzp) throw new Error('Razorpay not configured');
  if (amount) {
    return rzp.payments.refund(paymentId, { amount: Math.round(amount * 100) });
  }
  return rzp.payments.refund(paymentId, {});
}
