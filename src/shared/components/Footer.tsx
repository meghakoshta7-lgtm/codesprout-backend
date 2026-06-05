import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Github, Twitter, Linkedin, Mail, Shield, Sparkles } from 'lucide-react';

const columns = [
  {
    title: 'Learn',
    underline: 'from-primary-400 to-indigo-500',
    links: [
      { label: 'Topics', to: '/topics' },
      { label: 'Questions', to: '/questions' },
      { label: 'Interview Prep', to: '/interview-prep' },
      { label: 'Patterns', to: '/patterns' },
    ],
  },
  {
    title: 'Difficulty',
    underline: 'from-emerald-400 to-teal-500',
    links: [
      { label: 'Easy', to: '/easy' },
      { label: 'Medium', to: '/medium' },
      { label: 'Hard', to: '/hard' },
    ],
  },
  {
    title: 'Company',
    underline: 'from-amber-400 to-orange-500',
    links: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Login', to: '/login' },
    ],
  },
];

function CodeIllustration() {
  return (
    <div className="relative w-full h-32 lg:h-40 flex items-center justify-end">
      <motion.img
        src="/footer-illustration.png"
        alt="CodeSprout illustration"
        className="w-full h-full object-contain"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(124,108,246,0.45))' }}
        animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: '#0B1020' }}>
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div
          className="rounded-2xl sm:rounded-3xl border border-white/10 px-4 sm:px-8 lg:px-12 py-6 sm:py-8"
          style={{ backgroundColor: '#111827' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 items-center">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4">
              <Link to="/" className="flex items-center gap-2.5 mb-3">
                <img src="/logo.png" alt="CodeSprout" className="w-14 h-14 rounded-xl object-cover shadow-lg shadow-primary-500/20" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  CodeSprout
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-xs mb-4">
                Master coding patterns faster with concise, pattern-based cheat sheets. 500+ coding questions with interview-focused notes.
              </p>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {[
                  { Icon: Github, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: Mail, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title} className="md:col-span-2">
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{col.title}</h3>
                <div className={`h-0.5 w-7 sm:w-8 rounded-full bg-gradient-to-r ${col.underline} mb-2.5 sm:mb-3`} />
                <ul className="space-y-1.5 sm:space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Illustration */}
            <div className="hidden md:flex md:col-span-2 items-center justify-end">
              <CodeIllustration />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 mt-5 sm:mt-6 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/40">
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-400" />
              <span>&copy; {new Date().getFullYear()} CodeSprout. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/40">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
              <span>Made with precision for interview prep</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
