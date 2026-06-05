import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is CodeSprout?', a: 'A platform that provides concise, pattern-based cheat sheets for coding questions. Each question includes pattern recognition, optimal approach, complexity analysis, code templates, common mistakes, and similar questions.' },
  { q: 'Is it free?', a: 'Yes! Basic features including pattern identification, complexity analysis, and approach explanation are free. Premium subscription unlocks recognition signals, interview notes, edge cases, and company frequency data.' },
  { q: 'How is this different from LeetCode?', a: 'While LeetCode focuses on practice, we focus on learning patterns. Each question comes with a structured cheat sheet that helps you recognize patterns across different problems.' },
  { q: 'Can I contribute?', a: 'We welcome community contributions. Contact us for more information.' },
  { q: 'What topics are covered?', a: 'Arrays, Strings, Hashing, Linked Lists, Stack, Queue, Heap, Trees, BST, Graphs, Greedy, DP, Backtracking, Sliding Window, Binary Search, and more.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0B1020] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-400 mt-2">Everything you need to know about CodeSprout</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary-400 transition-transform shrink-0 ml-4 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}