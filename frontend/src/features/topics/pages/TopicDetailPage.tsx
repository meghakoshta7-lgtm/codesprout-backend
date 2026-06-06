import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, ChevronRight, Search, Filter, Hash } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useTopic } from '../hooks/useTopics';
import { getDifficultyColor } from '@/shared/utils/helpers';
import SEO, { buildBreadcrumbJsonLd } from '@/shared/components/SEO';

export default function TopicDetailPage() {
  return (
    <>
      <TopicDetailSEO />
      <TopicDetailContent />
    </>
  );
}

function TopicDetailSEO() {
  const { slug } = useParams<{ slug: string }>();
  const display = (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <SEO
      title={`${display} Coding Questions - Practice & Master ${display} | CodeSprout`}
      description={`Practice ${display} coding interview questions on CodeSprout. Curated problems with pattern-based cheat sheets, examples, constraints, and time complexity analysis.`}
      path={`/topics/${slug}`}
      keywords={[`${display.toLowerCase()} questions`, `${display.toLowerCase()} DSA`, `${display.toLowerCase()} leetcode`, 'coding interview practice']}
      jsonLd={buildBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Topics', url: '/topics' },
        { name: display, url: `/topics/${slug}` },
      ])}
    />
  );
}

function TopicDetailContent() {
  const { slug } = useParams<{ slug: string }>();
  const { topic, loading } = useTopic(slug || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [patternFilter, setPatternFilter] = useState('All');

  const easy = topic?.questions?.filter((q: any) => q.difficulty === 'Easy').length || 0;
  const medium = topic?.questions?.filter((q: any) => q.difficulty === 'Medium').length || 0;
  const hard = topic?.questions?.filter((q: any) => q.difficulty === 'Hard').length || 0;

  const patterns = useMemo(() => {
    if (!topic?.questions) return ['All'];
    const patternSet = new Set<string>();
    topic.questions.forEach((q: any) => { if (q.pattern) patternSet.add(q.pattern); });
    return ['All', ...Array.from(patternSet).sort()];
  }, [topic?.questions]);

  const filteredQuestions = useMemo(() => {
    if (!topic?.questions) return [];
    return topic.questions.filter((q: any) => {
      const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = difficultyFilter === 'All' || q.difficulty === difficultyFilter;
      const matchesPattern = patternFilter === 'All' || q.pattern === patternFilter;
      return matchesSearch && matchesDifficulty && matchesPattern;
    });
  }, [topic?.questions, searchQuery, difficultyFilter, patternFilter]);

  const questionsByPattern = useMemo(() => {
    const groups: Record<string, any[]> = {};
    filteredQuestions.forEach((q: any) => {
      const pattern = q.pattern || 'Other';
      if (!groups[pattern]) groups[pattern] = [];
      groups[pattern].push(q);
    });
    return groups;
  }, [filteredQuestions]);

  const patternsInView = Object.keys(questionsByPattern).sort();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary-500 border-t-transparent" />
          <p className="text-sm text-slate-400">Loading topic...</p>
        </div>
      </div>
    );
  }

  if (!topic) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Topic not found</h2>
        <Link to="/topics" className="text-primary-400 hover:underline text-sm">Back to topics</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/topics" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-primary-400 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Topics
          </Link>

          {/* Hero Card */}
          <div className="card p-6 sm:p-8 mb-8 bg-gradient-to-br from-primary-500/10 via-primary-600/5 to-transparent border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{topic.name}</h1>
              <p className="text-slate-400 mb-6 text-sm sm:text-base">{topic.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#111827] rounded-xl border border-white/5">
                  <BookOpen className="w-4 h-4 text-primary-400" />
                  <span className="font-bold text-white text-lg">{topic.questions.length}</span>
                  <span className="text-slate-400">questions</span>
                </div>
                {easy > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-emerald-400 font-medium">{easy}</span>
                    <span className="text-emerald-400/60">Easy</span>
                  </div>
                )}
                {medium > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-amber-400 font-medium">{medium}</span>
                    <span className="text-amber-400/60">Medium</span>
                  </div>
                )}
                {hard > 0 && (
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-rose-400 font-medium">{hard}</span>
                    <span className="text-rose-400/60">Hard</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400">Difficulty:</span>
              </div>
              {(['All', 'Easy', 'Medium', 'Hard'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficultyFilter(d)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    difficultyFilter === d
                      ? d === 'Easy' ? 'bg-emerald-500 text-white' : d === 'Medium' ? 'bg-amber-500 text-white' : d === 'Hard' ? 'bg-rose-500 text-white' : 'bg-primary-500 text-white'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}

              {patterns.length > 1 && (
                <>
                  <div className="w-px h-4 bg-white/10 mx-1" />
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-400">Pattern:</span>
                  </div>
                  <select
                    value={patternFilter}
                    onChange={(e) => setPatternFilter(e.target.value)}
                    className="px-3 py-1.5 bg-[#111827] border border-white/10 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-primary-500/50"
                  >
                    {patterns.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </>
              )}
            </div>

            {(searchQuery || difficultyFilter !== 'All' || patternFilter !== 'All') && (
              <p className="text-xs text-slate-500">
                Showing {filteredQuestions.length} of {topic.questions.length} questions
              </p>
            )}
          </div>

          {/* Questions List */}
          {patternsInView.length > 0 ? (
            <div className="space-y-6">
              {patternsInView.map((pattern) => {
                const questions = questionsByPattern[pattern];
                return (
                  <div key={pattern}>
                    {pattern !== 'Other' && patternFilter === 'All' && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-primary-500 rounded-full" />
                        <h3 className="text-sm font-semibold text-slate-300">{pattern}</h3>
                        <span className="text-xs text-slate-500">({questions.length})</span>
                      </div>
                    )}
                    <div className="space-y-1.5">
                      {questions.map((q: any, i: number) => (
                        <motion.div key={q.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.02 }}>
                          <Link
                            to={`/questions/${q.slug}`}
                            className={`card p-4 flex items-center justify-between border-l-4 ${
                              q.difficulty === 'Easy' ? 'border-l-emerald-500' : q.difficulty === 'Medium' ? 'border-l-amber-500' : 'border-l-rose-500'
                            } card-hover group`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="text-xs font-mono text-white/20 w-6 flex-shrink-0">{i + 1}</span>
                              <div className="min-w-0 flex-1">
                                <span className="font-medium text-white group-hover:text-primary-400 transition-colors block truncate">{q.title}</span>
                                {q.pattern && patternFilter === 'All' && (
                                  <span className="text-xs text-slate-500 mt-0.5 block">{q.pattern}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getDifficultyColor(q.difficulty)}`}>
                                {q.difficulty}
                              </span>
                              <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 text-sm">No questions match your filters</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
