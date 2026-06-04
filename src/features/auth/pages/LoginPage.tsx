import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Mail, Lock, Eye, EyeOff, Sparkles, CheckCircle, X, Code2, Zap, Shield } from 'lucide-react';
import { useLogin, useRegister } from '../hooks/useAuth';
import { useGoogleAuth } from '../hooks/useGoogleAuth';
import toast from 'react-hot-toast';

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

export default function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilled = (location.state as { prefilledEmail?: string; prefilledPassword?: string; fromSignup?: boolean } | null) || null;

  const [isLogin, setIsLogin] = useState(prefilled?.fromSignup ? true : true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: prefilled?.prefilledEmail || '',
    password: prefilled?.prefilledPassword || '',
  });
  const { login, loading: loginLoading } = useLogin();
  const { register, loading: registerLoading } = useRegister();
  const { login: googleLogin, loading: googleLoading } = useGoogleAuth();

  // Show success toast if redirected from signup
  useEffect(() => {
    if (prefilled?.fromSignup) {
      toast.success('Account created! Please login to continue.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login({ email: form.email, password: form.password });
      } else {
        await register({ name: form.name, email: form.email, password: form.password });
      }
    } catch (err) {
      // toast handled in hooks
    }
  };

  const loading = loginLoading || registerLoading;

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#1a1140] to-[#0B1020]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(168,85,247,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,108,246,0.3) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Login popup card — stacked on mobile, two columns on sm+ */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div
          className="rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-900/40 relative"
          style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', backdropFilter: 'blur(20px)' }}
        >
          {/* Top gradient bar */}
          <div className="h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500" />

          {/* Close button */}
          <Link
            to="/"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-20"
          >
            <X className="w-4 h-4" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* LEFT SIDE — Image with overlay (proper hero banner on mobile, full panel on sm+) */}
            <div className="relative flex flex-col sm:justify-between p-5 sm:p-6 md:p-10 overflow-hidden min-h-[260px] sm:min-h-[600px]">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/footer-illustration.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Purple gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,108,246,0.85) 0%, rgba(91,33,182,0.85) 50%, rgba(76,29,149,0.9) 100%)',
                }}
              />
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Logo (top row, full width on its own) */}
              <div className="relative z-10 flex items-center justify-between">
                <Link to="/" className="inline-flex items-center gap-2.5 group">
                  <img src="/logo.png" alt="CodeSprout" className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform border border-white/30" />
                  <span className="text-lg sm:text-xl font-bold text-white">CodeSprout</span>
                </Link>
                {/* Decorative cube on mobile (top-right, away from text) */}
                <motion.div
                  className="w-7 h-7 sm:hidden"
                  animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg viewBox="0 0 60 60" className="w-full h-full">
                    <defs>
                      <linearGradient id="cubeTopMobile" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="100%" stopColor="#fbbf24" />
                      </linearGradient>
                      <linearGradient id="cubeLeftMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                      <linearGradient id="cubeRightMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fcd34d" />
                        <stop offset="100%" stopColor="#b45309" />
                      </linearGradient>
                    </defs>
                    <polygon points="30,4 54,18 30,32 6,18" fill="url(#cubeTopMobile)" />
                    <polygon points="6,18 30,32 30,56 6,42" fill="url(#cubeLeftMobile)" />
                    <polygon points="54,18 30,32 30,56 54,42" fill="url(#cubeRightMobile)" />
                  </svg>
                </motion.div>
              </div>

              {/* Headline (own row, full width) */}
              <div className="relative z-10 mt-4 sm:mt-0 sm:mb-3 flex-1 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  <span className="sm:hidden">
                    Master coding{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300">
                      patterns faster.
                    </span>
                  </span>
                  <span className="hidden sm:inline">
                    Master coding
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-300">
                      patterns faster.
                    </span>
                  </span>
                </h2>
                <p className="hidden md:block text-white/80 text-sm leading-relaxed max-w-xs mt-3">
                  Join 10,000+ developers preparing for top tech interviews with our concise, pattern-based cheat sheets.
                </p>
              </div>

              {/* Mobile feature pills (full width row at bottom) */}
              <div className="relative z-10 flex sm:hidden flex-wrap gap-1.5 mt-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] text-white">
                  <Code2 className="w-3 h-3" /> 500+ questions
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] text-white">
                  <Zap className="w-3 h-3" /> 50+ sheets
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] text-white">
                  <Shield className="w-3 h-3" /> FAANG-ready
                </span>
              </div>

              {/* Feature highlights at bottom (sm+ only) */}
              <div className="relative z-10 hidden sm:block space-y-3 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-white/90">500+ coding questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-white/90">50+ pattern cheat sheets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-white/90">Trusted by FAANG candidates</span>
                </div>
              </div>

              {/* Decorative cubes (sm+ only) */}
              <motion.div
                className="hidden sm:block absolute top-20 right-8 w-12 h-12 z-10"
                animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="cubeTopL" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                    <linearGradient id="cubeLeftL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="cubeRightL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fcd34d" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>
                  <polygon points="30,4 54,18 30,32 6,18" fill="url(#cubeTopL)" />
                  <polygon points="6,18 30,32 30,56 6,42" fill="url(#cubeLeftL)" />
                  <polygon points="54,18 30,32 30,56 54,42" fill="url(#cubeRightL)" />
                </svg>
              </motion.div>
              <motion.div
                className="hidden sm:block absolute bottom-32 right-4 w-10 h-10 z-10"
                animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="cubeTopR" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fce7f3" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="cubeLeftR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#be185d" />
                    </linearGradient>
                    <linearGradient id="cubeRightR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f9a8d4" />
                      <stop offset="100%" stopColor="#9d174d" />
                    </linearGradient>
                  </defs>
                  <polygon points="30,4 54,18 30,32 6,18" fill="url(#cubeTopR)" />
                  <polygon points="6,18 30,32 30,56 6,42" fill="url(#cubeLeftR)" />
                  <polygon points="54,18 30,32 30,56 54,42" fill="url(#cubeRightR)" />
                </svg>
              </motion.div>
            </div>

            {/* RIGHT SIDE — Form */}
            <div className="p-5 sm:p-6 md:p-10 overflow-y-auto">

              <div className="mb-5 sm:mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
                  {isLogin ? 'Welcome back' : 'Create account'}
                </h1>
                <p className="text-white/50 text-xs sm:text-sm mt-1.5">
                  {isLogin ? 'Sign in to continue your coding journey' : 'Start your coding journey today'}
                </p>
              </div>

              {/* Tab switcher */}
              <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl mb-6">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                    isLogin
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                    !isLogin
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <AnimatePresence mode="wait">
                <motion.form
                  key={isLogin ? 'login' : 'register'}
                  initial={{ opacity: 0, x: isLogin ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLogin ? 10 : -10 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wide">Name</label>
                      <div className="relative">
                        <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wide">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wide">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between text-xs">
                      <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                        <input type="checkbox" className="rounded border-white/20 bg-white/5 text-violet-500 focus:ring-violet-500/30" />
                        Remember me
                      </label>
                      <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Please wait...
                      </>
                    ) : isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </motion.form>
              </AnimatePresence>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-white/40 uppercase tracking-wider">or continue with</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Google Sign-In */}
              <button
                type="button"
                onClick={() => googleLogin()}
                disabled={googleLoading}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl bg-white hover:bg-white/95 text-gray-800 font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {googleLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin" />
                    <span className="text-sm">Signing in...</span>
                  </>
                ) : (
                  <>
                    <GoogleIcon />
                    <span className="text-sm">Continue with Google</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bottom perks */}
          <div className="flex border-t border-white/5 px-4 sm:px-8 py-3 sm:py-3.5 items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-[11px] text-white/40 flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" /> Free access
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" /> No credit card
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-violet-400" /> Premium features
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
