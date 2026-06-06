import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTopics } from '../hooks/useTopics';
import TopicCard from '../components/TopicCard';
import TopicPopup from '../components/TopicPopup';
import SearchBar from '@/shared/components/SearchBar';
import { Sparkles, BookOpen, Code2, Zap, Target } from 'lucide-react';
import type { Topic } from '../types/topic';
import SEO, { buildBreadcrumbJsonLd } from '@/shared/components/SEO';

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="card p-6 animate-pulse">
          <div className="w-11 h-11 bg-white/10 rounded-xl mb-4" />
          <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
          <div className="h-3 bg-white/5 rounded w-1/2" />
        </div>
      ))}
    </div>
  );
}

export default function TopicsPage() {
  return (
    <>
      <SEO
        title="DSA Topics - Arrays, Strings, Trees, Graphs, DP & More"
        description="Browse all DSA topics on CodeSprout. Master arrays, strings, linked lists, trees, graphs, dynamic programming, backtracking and more with curated problems and cheat sheets."
        path="/topics"
        keywords={['DSA topics', 'arrays', 'strings', 'linked list', 'trees', 'graphs', 'dynamic programming', 'backtracking', 'stack', 'queue', 'heap', 'greedy', 'binary search']}
        jsonLd={buildBreadcrumbJsonLd([{ name: 'Home', url: '/' }, { name: 'Topics', url: '/topics' }])}
      />
      <TopicsContent />
    </>
  );
}

function TopicsContent() {
  const { topics, loading } = useTopics();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [globalStats, setGlobalStats] = useState({ questions: 0, patterns: 0, topics: 0 });

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((d) => setGlobalStats({
        questions: d.total_questions || 0,
        patterns: d.total_patterns || 0,
        topics: d.total_topics || 0,
      }))
      .catch(() => {});
  }, []);

  const formatStat = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k+` : `${n}+`);

  const stats = [
    { icon: BookOpen, label: 'Topics', value: formatStat(globalStats.topics), color: 'text-purple-400' },
    { icon: Code2, label: 'Questions', value: formatStat(globalStats.questions), color: 'text-blue-400' },
    { icon: Zap, label: 'Patterns', value: formatStat(globalStats.patterns), color: 'text-yellow-400' },
    { icon: Target, label: 'Companies', value: '50+', color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0" style={{ backgroundColor: '#0B1020' }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Master DSA Patterns
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-white">Learn </span>
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">Every Topic</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed px-2"
            >
              Master data structures and algorithms with our curated cheat sheets.
              Learn patterns, solve problems, ace your interviews.
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

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16" ref={ref}>
        {loading ? (
          <SkeletonGrid />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
          >
            {topics.map((topic, i) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={i}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </motion.div>
        )}
      </section>

      <TopicPopup topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
    </div>
  );
}
