import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CreditCard, Check,
  Loader2, Shield, Banknote,
  Sparkles, Calendar, Gift, PartyPopper, Zap,
} from 'lucide-react';
import {
  useRazorpayCheckout,
} from '../hooks/usePayment';
import type { PaymentVerify } from '../types/payment';
import { subscriptionStorage } from '@/shared/utils/subscriptionStorage';

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function daysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function PaymentPage() {
  const navigate = useNavigate();
  const { openCheckout, opening: razorpayOpening } = useRazorpayCheckout();
  const [verified, setVerified] = useState(false);
  const [verifyData, setVerifyData] = useState<PaymentVerify | null>(null);

  const handleRazorpayPay = async () => {
    const result = await openCheckout();
    if (result) {
      setVerifyData(result as unknown as PaymentVerify);
      setVerified(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-primary-400 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
              <CreditCard className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white">Upgrade to Premium</h1>
            <p className="text-slate-400 mt-1">One-time payment for lifetime access</p>
          </div>

          <AnimatePresence mode="wait">
            {!verified && (
              <motion.div key="init" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="card p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700" />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center mx-auto mb-6">
                    <Banknote className="w-10 h-10 text-primary-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Premium Subscription</h2>
                  <div className="text-5xl font-extrabold text-white mb-1">₹1</div>
                  <p className="text-sm text-slate-400 mb-6">30 days access • All features • No recurring charges</p>
                  <ul className="text-left space-y-3 mb-8 bg-white/5 rounded-xl p-5">
                    {[
                      'Full access to all 2000+ questions',
                      'Complete cheat sheets with patterns',
                      'Recognition signals & interview notes',
                      'Edge cases & optimization tricks',
                      'Company frequency data',
                      'Related question chains',
                    ].map((f, i) => (
                      <motion.li key={f} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-success-500" />
                        </span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                  <button onClick={handleRazorpayPay} disabled={razorpayOpening} className="btn-primary w-full inline-flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25">
                    {razorpayOpening ? <><Loader2 className="w-4 h-4 animate-spin" /> Opening checkout...</> : <><Zap className="w-4 h-4" /> Pay ₹1 with Razorpay</>}
                  </button>
                  <p className="text-xs text-slate-500 mt-4">Cards • UPI • NetBanking • Wallets</p>
                </div>
              </motion.div>
            )}

            {verified && (
              <motion.div key="verified" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <div className="card p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-success-500/10 to-success-600/10" />
                  <div className="relative">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500/20 to-success-600/20 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-success-500/30">
                        <PartyPopper className="w-10 h-10 text-success-500" />
                      </div>
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-white mb-1">Welcome to Premium!</motion.h2>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-slate-400 mb-6">Payment verified automatically by Razorpay</motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/5 border border-primary-500/20 rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Gift className="w-5 h-5 text-primary-400" />
                        <span className="text-sm font-semibold text-primary-400">Premium Plan Active</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                          <div className="flex items-center gap-2 text-slate-400 text-sm"><Calendar className="w-4 h-4" />Start Date</div>
                          <span className="text-white font-medium text-sm">{verifyData?.subscription?.start_date ? formatDate(verifyData.subscription.start_date) : 'Today'}</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                          <div className="flex items-center gap-2 text-slate-400 text-sm"><Calendar className="w-4 h-4" />End Date</div>
                          <span className="text-white font-medium text-sm">{verifyData?.subscription?.end_date ? formatDate(verifyData.subscription.end_date) : '—'}</span>
                        </div>
                        {verifyData?.subscription?.end_date && (
                          <div className="text-center pt-1">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success-500/10 text-success-400 text-xs font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-success-500 animate-pulse" />
                              {daysRemaining(verifyData.subscription.end_date)} days remaining
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="space-y-3">
                      <button onClick={() => navigate('/questions')} className="btn-primary w-full shadow-lg shadow-primary-500/25">Start Solving Questions</button>
                      <button onClick={() => navigate('/dashboard')} className="w-full py-3 rounded-xl border-2 border-white/10 text-slate-300 font-medium hover:border-primary-500 hover:text-primary-400 transition-all">Go to Dashboard</button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <Zap className="w-3 h-3" /> Powered by Razorpay
              <span className="mx-2">|</span>
              <Shield className="w-3 h-3" /> Secure payment
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
