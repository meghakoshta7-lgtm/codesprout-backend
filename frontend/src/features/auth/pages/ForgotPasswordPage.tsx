import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, X } from 'lucide-react';
import api from '@/services/api';
import toast from 'react-hot-toast';
import SEO from '@/shared/components/SEO';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await api.post('/auth/forgot-password', { email });
      setSent(true);
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Forgot Password | CodeSprout"
        description="Reset your CodeSprout account password"
        path="/forgot-password"
        noindex
      />
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#0B1020' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#1a1140] to-[#0B1020]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168,85,247,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-900/40" style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(20px)' }}>
            <div className="h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500" />
            <Link to="/login" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-20" aria-label="Close">
              <X className="w-4 h-4" />
            </Link>
            <div className="p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h1 className="text-xl font-bold text-white mb-2">Check your email</h1>
                  <p className="text-sm text-white/60 mb-6">
                    If an account exists for <span className="text-white/90 font-medium">{email}</span>, we've sent a password reset link.
                  </p>
                  <Link to="/login" className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to login
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <Link to="/login" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors mb-4">
                      <ArrowLeft className="w-4 h-4" /> Back to login
                    </Link>
                    <h1 className="text-xl font-bold text-white">Forgot password?</h1>
                    <p className="text-sm text-white/50 mt-1">Enter your email and we'll send you a reset link.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wide">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                      ) : (
                        'Send reset link'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
