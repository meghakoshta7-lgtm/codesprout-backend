import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowLeft, CreditCard, Smartphone, Check,
  Loader2, Shield, Clock, AlertCircle, ChevronRight, Banknote,
  Sparkles, Calendar, Gift, PartyPopper,
} from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/shared/utils/constants';
import { usePaymentInit, usePaymentVerify, usePaymentStatus } from '../hooks/usePayment';
import type { PaymentVerify } from '../types/payment';
import toast from 'react-hot-toast';

const STEPS = ['Payment', 'UTR', 'Verify'] as const;

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
  const { payment, loading: initLoading, init } = usePaymentInit();
  const { verifying, verify } = usePaymentVerify();
  const { status, check } = usePaymentStatus();
  const [step, setStep] = useState<number>(0);
  const [utr, setUtr] = useState('');
  const [verified, setVerified] = useState(false);
  const [verifyData, setVerifyData] = useState<PaymentVerify | null>(null);

  useEffect(() => { check(); }, []);

  useEffect(() => {
    if (status?.status === 'verified') {
      localStorage.setItem('subscription', 'premium');
      setVerified(true);
      setStep(2);
    }
  }, [status]);

  const handleInit = async () => {
    const p = await init();
    if (p) setStep(0);
  };

  const handleVerify = async () => {
    if (utr.length < 5) { toast.error('Please enter a valid UTR number'); return; }
    const result = await verify(utr, payment?.payment_id);
    if (result) {
      setVerifyData(result);
      setVerified(true);
      setStep(2);
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

          <div className="flex items-center justify-center gap-2 mb-8">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <motion.div
                  animate={i === step ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ repeat: i === step ? Infinity : 0, duration: 2 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    i <= step ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </motion.div>
                <span className={`text-sm font-medium ${i <= step ? 'text-primary-400' : 'text-slate-400'}`}>{s}</span>
                {i < STEPS.length - 1 && <ChevronRight className="w-4 h-4 text-slate-500" />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && !payment && (
              <motion.div key="init" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="card p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700" />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center mx-auto mb-6">
                    <Banknote className="w-10 h-10 text-primary-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">Premium Subscription</h2>
                  <div className="text-5xl font-extrabold text-white mb-1">₹{SUBSCRIPTION_PLANS.PREMIUM.price}</div>
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
                  <button onClick={handleInit} disabled={initLoading} className="btn-primary w-full inline-flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25">
                    {initLoading ? <><Loader2 className="w-4 h-4 animate-spin" /> Initializing...</> : <><Sparkles className="w-4 h-4" /> Pay ₹{SUBSCRIPTION_PLANS.PREMIUM.price} - Get Premium</>}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 0 && payment && (
              <motion.div key="payment" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="card p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700" />
                  <h2 className="text-lg font-bold text-white mb-1">Scan & Pay</h2>
                  <p className="text-sm text-slate-400 mb-6">Pay ₹{payment.amount || SUBSCRIPTION_PLANS.PREMIUM.price} via any UPI app</p>

                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 mb-5 inline-block shadow-xl">
                    <div className="bg-white rounded-xl p-4">
                      <QRCodeSVG
                        value={payment.qr_data || payment.upi_deep_link}
                        size={192}
                        level="H"
                        includeMargin={false}
                        fgColor="#0B1020"
                      />
                    </div>
                    <div className="text-[10px] font-mono text-white/80 tracking-widest mt-3">SCAN TO PAY</div>
                  </div>

                  <a href={payment.upi_deep_link} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-success-500 to-success-600 text-white font-semibold hover:from-success-600 hover:to-success-700 transition-all shadow-lg shadow-success-500/25 mb-3">
                    <Smartphone className="w-5 h-5" /> Open UPI App
                  </a>

                  <button onClick={() => setStep(1)} className="w-full py-3 rounded-xl border-2 border-white/10 text-slate-300 font-medium hover:border-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all">
                    Already paid? Enter UTR
                  </button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="utr" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <div className="card p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700" />
                  <div className="text-center mb-6">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                      <Shield className="w-12 h-12 text-primary-400 mx-auto mb-3" />
                    </motion.div>
                    <h2 className="text-xl font-bold text-white">Enter UTR Number</h2>
                    <p className="text-sm text-slate-400 mt-1">
                      After payment, find UTR in your UPI app (Google Pay / PhonePe / Paytm)
                    </p>
                  </div>

                  <div className="bg-warning-500/10 border border-warning-500/20 rounded-xl p-4 mb-6 text-sm text-warning-500">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <strong>How to find UTR:</strong> Open your UPI app &gt; Transaction History &gt; Click on this payment &gt; Copy the UTR/Reference number
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-300 mb-2">UTR Number</label>
                    <input
                      type="text"
                      value={utr}
                      onChange={(e) => setUtr(e.target.value.toUpperCase())}
                      placeholder="e.g. HDFC1234567890"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm transition-all"
                      maxLength={30}
                    />
                    <p className="text-xs text-slate-500 mt-1">UTR is 12-22 characters alphanumeric</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button onClick={handleVerify} disabled={verifying || utr.length < 5} className="btn-primary w-full inline-flex items-center justify-center gap-2">
                      {verifying ? (<span className="inline-flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Verifying...</span>) : (<span className="inline-flex items-center gap-2"><Shield className="w-4 h-4" /> Verify Payment</span>)}
                    </button>
                    <button onClick={() => setStep(0)} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                      Back to payment
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && verified && (
              <motion.div key="verified" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <div className="card p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-success-500/10 to-success-600/10" />
                  <div className="relative">
                    {/* Confetti-like particles */}
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500/20 to-success-600/20 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-success-500/30">
                        <PartyPopper className="w-10 h-10 text-success-500" />
                      </div>
                    </motion.div>

                    <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-white mb-1">
                      Welcome to Premium!
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-slate-400 mb-6">
                      Your subscription is now active
                    </motion.p>

                    {/* Subscription Dates Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/5 border border-primary-500/20 rounded-2xl p-6 mb-6"
                    >
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Gift className="w-5 h-5 text-primary-400" />
                        <span className="text-sm font-semibold text-primary-400">Premium Plan Active</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            Start Date
                          </div>
                          <span className="text-white font-medium text-sm">
                            {verifyData?.subscription?.start_date
                              ? formatDate(verifyData.subscription.start_date)
                              : status?.created_at
                                ? formatDate(status.created_at)
                                : 'Today'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            End Date
                          </div>
                          <span className="text-white font-medium text-sm">
                            {verifyData?.subscription?.end_date
                              ? formatDate(verifyData.subscription.end_date)
                              : '—'}
                          </span>
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

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xs text-slate-500 mb-6">
                      UTR: {utr || verifyData?.payment?.utr}
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="space-y-3">
                      <button onClick={() => navigate('/questions')} className="btn-primary w-full shadow-lg shadow-primary-500/25">
                        Start Solving Questions
                      </button>
                      <button onClick={() => navigate('/dashboard')} className="w-full py-3 rounded-xl border-2 border-white/10 text-slate-300 font-medium hover:border-primary-500 hover:text-primary-400 transition-all">
                        Go to Dashboard
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <Clock className="w-3 h-3" /> Auto-verified within 5 minutes
              <span className="mx-2">|</span>
              <Shield className="w-3 h-3" /> Secure payment
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
