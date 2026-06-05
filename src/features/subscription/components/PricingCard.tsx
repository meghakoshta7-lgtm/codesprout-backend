import { motion } from 'framer-motion';
import { Check, Crown, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';
import type { PricingPlan } from '../types/subscription';

export default function PricingCard({ plan, index, onSelect, isCurrentPlan }: { plan: PricingPlan; index: number; onSelect: () => void; isCurrentPlan?: boolean }) {
  const isPopular = plan.popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? 'bg-[#0d0f1f] border border-violet-500/30 shadow-[0_0_60px_-15px_rgba(139,92,246,0.25)] hover:shadow-[0_0_80px_-15px_rgba(139,92,246,0.35)]'
          : 'bg-[#0d0f1f] border border-white/[0.08] hover:border-white/[0.15]'
      }`}
    >
      {isPopular && (
        <>
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className="p-6 sm:p-8">
        {/* Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              isPopular
                ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25'
                : 'bg-white/[0.06]'
            }`}>
              <Crown className={`w-6 h-6 ${isPopular ? 'text-white' : 'text-white/50'}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="text-xs text-white/40">{isPopular ? 'For serious candidates' : 'Get started free'}</p>
            </div>
          </div>
          {isPopular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-semibold">
              <Sparkles className="w-3 h-3" /> Popular
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-white/[0.06]">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-extrabold text-white">₹{plan.price}</span>
            {plan.price > 0 && <span className="text-white/30 text-sm">/month</span>}
            {plan.price === 0 && <span className="text-white/20 text-sm ml-1">forever</span>}
          </div>
          {isPopular && (
            <p className="text-xs text-violet-400/70 mt-1">Less than a cup of chai ☕</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((f, i) => {
            const isExcluded = plan.price === 0 && i > 2;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  isExcluded ? 'bg-white/[0.03]' : isPopular ? 'bg-violet-500/15' : 'bg-white/[0.06]'
                }`}>
                  {isExcluded ? (
                    <div className="w-[2px] h-[10px] bg-white/20 rotate-45 rounded-full" />
                  ) : (
                    <Check className={`w-3 h-3 ${isPopular ? 'text-violet-400' : 'text-emerald-400'}`} />
                  )}
                </div>
                <span className={`text-sm ${isExcluded ? 'text-white/20 line-through' : 'text-white/70'}`}>{f}</span>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        {isCurrentPlan ? (
          <div className="w-full py-3.5 rounded-xl font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center gap-2 text-sm">
            <Shield className="w-4 h-4" />
            Current Plan
          </div>
        ) : (
          <button
            onClick={onSelect}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              isPopular
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30'
                : 'bg-white/[0.06] border border-white/[0.08] text-white/80 hover:bg-white/[0.1] hover:text-white'
            }`}
          >
            {plan.price === 0 ? 'Start Free' : 'Upgrade Now'}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
