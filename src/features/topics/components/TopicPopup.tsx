import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ArrowRight, Loader2, Sparkles, Code2 } from 'lucide-react';
import { questionsApi } from '@/features/questions/api/questionsApi';
import { getDifficultyColor } from '@/shared/utils/helpers';
import type { Question } from '@/features/questions/types/question';
import type { Topic } from '../types/topic';

interface TopicPopupProps {
  topic: Topic | null;
  onClose: () => void;
}

export default function TopicPopup({ topic, onClose }: TopicPopupProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState<string>('All');

  useEffect(() => {
    if (!topic) {
      setQuestions([]);
      return;
    }
    setLoading(true);
    questionsApi
      .getAll({ topic: topic.id })
      .then((res) => setQuestions(res.data || []))
      .catch(() => setQuestions([]))
      .finally(() => setLoading(false));
  }, [topic]);

  useEffect(() => {
    if (topic) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [topic]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const filtered = difficulty === 'All'
    ? questions
    : questions.filter((q) => q.difficulty === difficulty);

  const counts = {
    Easy: questions.filter((q) => q.difficulty === 'Easy').length,
    Medium: questions.filter((q) => q.difficulty === 'Medium').length,
    Hard: questions.filter((q) => q.difficulty === 'Hard').length,
  };

  return (
    <AnimatePresence>
      {topic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-[#0B1020] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Decorative gradient */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative p-5 sm:p-7 border-b border-white/10 flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] sm:text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Topic
                  </span>
                  <span className="text-[10px] sm:text-xs text-white/40">
                    {questions.length} questions
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {topic.name}
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-white/50 line-clamp-2">
                  {topic.description}
                </p>

                {/* Difficulty counts */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {counts.Easy} Easy
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {counts.Medium} Medium
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    {counts.Hard} Hard
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Filter row */}
            <div className="relative px-5 sm:px-7 py-3 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
              {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    difficulty === d
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'bg-white/[0.03] text-white/50 hover:bg-white/5 border border-white/5'
                  }`}
                >
                  {d}
                </button>
              ))}
              <Link
                to={`/topics/${topic.slug}`}
                onClick={onClose}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 whitespace-nowrap"
              >
                Full page <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Questions list */}
            <div className="relative flex-1 overflow-y-auto px-3 sm:px-5 py-3 sm:py-4">
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 className="w-6 h-6 text-purple-400 animate-spin" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <BookOpen className="w-10 h-10 text-white/20 mb-3" />
                  <p className="text-white/50 text-sm">No questions in this filter.</p>
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {filtered.map((q, i) => (
                    <motion.li
                      key={q.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.015, 0.3) }}
                    >
                      <Link
                        to={`/questions/${q.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all"
                      >
                        <div className={`shrink-0 w-1.5 h-10 sm:h-12 rounded-full ${getDifficultyColor(q.difficulty).replace('/10', '/40')}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] sm:text-xs text-white/30 font-mono">
                              #{q.id}
                            </span>
                            <span className="text-[10px] sm:text-xs text-white/40 truncate">
                              {q.pattern}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white truncate">
                            {q.title}
                          </h3>
                        </div>
                        <span
                          className={`shrink-0 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold ${getDifficultyColor(q.difficulty)}`}
                        >
                          {q.difficulty}
                        </span>
                        <ArrowRight className="shrink-0 w-3.5 h-3.5 text-white/0 group-hover:text-white/60 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="relative px-5 sm:px-7 py-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-xs text-white/40">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                Press Esc to close
              </div>
              <span>Showing {filtered.length} of {questions.length}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
