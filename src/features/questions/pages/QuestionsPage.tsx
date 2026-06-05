import { useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useQuestions } from '../hooks/useQuestions';
import QuestionCard from '../components/QuestionCard';
import SearchBar from '@/shared/components/SearchBar';
import { Filter, Code2, BookOpen, Zap, Trophy } from 'lucide-react';

const difficulties = ['All', 'Easy', 'Medium', 'Hard'] as const;

function SkeletonList() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="card p-4 animate-pulse flex items-center gap-4">
          <div className="h-4 w-4 bg-white/10 rounded" />
          <div className="flex-1">
            <div className="h-4 bg-white/10 rounded w-48 mb-2" />
            <div className="h-3 bg-white/5 rounded w-32" />
          </div>
          <div className="h-6 w-16 bg-white/5 rounded-full" />
        </div>
      ))}
    </div>
  );
}

export default function QuestionsPage() {
  const [difficulty, setDifficulty] = useState<string>('All');
  const { questions, loading } = useQuestions();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const filtered = useMemo(() => {
    if (difficulty === 'All') return questions;
    return questions.filter((q) => q.difficulty === difficulty);
  }, [questions, difficulty]);

  const stats = useMemo(() => {
    const total = questions.length;
    const easy = questions.filter((q) => q.difficulty === 'Easy').length;
    const medium = questions.filter((q) => q.difficulty === 'Medium').length;
    const hard = questions.filter((q) => q.difficulty === 'Hard').length;
    return [
      { icon: BookOpen, label: 'Total', value: total.toString(), color: 'text-purple-400' },
      { icon: Zap, label: 'Easy', value: easy.toString(), color: 'text-green-400' },
      { icon: Code2, label: 'Medium', value: medium.toString(), color: 'text-yellow-400' },
      { icon: Trophy, label: 'Hard', value: hard.toString(), color: 'text-red-400' },
    ];
  }, [questions]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full page background */}
      <div className="fixed inset-0" style={{ backgroundColor: '#0B1020' }}>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                <Code2 className="w-4 h-4" />
                Problem Library
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-white">All </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed px-2"
            >
              Browse our curated collection of coding questions with pattern-based solutions.
              Filter by difficulty and master each topic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-10 flex justify-center"
            >
              <SearchBar />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                  <span className="text-lg sm:text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs text-white/40">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Question list */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16" ref={ref}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
          <div className="flex items-center gap-1 p-1 bg-[#111827]/80 backdrop-blur-sm rounded-xl border border-white/5 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  difficulty === d
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <span className="text-xs text-white/40 shrink-0">{loading ? '...' : `${filtered.length} ${difficulty === 'All' ? 'questions' : difficulty.toLowerCase() + ' questions'}`}</span>
        </div>

        {loading ? (
          <SkeletonList />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="space-y-3"
          >
            {filtered.map((q, i) => (
              <QuestionCard key={q.id} question={q} index={i} />
            ))}
            {filtered.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <Filter className="w-12 h-12 text-white/10 mx-auto mb-3" />
                <p className="text-white/40 font-medium">No questions found</p>
                <p className="text-white/20 text-sm mt-1">Try a different filter</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </section>
    </div>
  );
}
