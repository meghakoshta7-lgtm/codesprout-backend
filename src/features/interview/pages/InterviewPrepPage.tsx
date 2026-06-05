import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Target, CheckCircle, Clock, Lightbulb,
  Building2, BookOpen, Zap, Trophy, AlertTriangle, Flame,
  RotateCcw, Timer, XCircle, Award, BarChart3,
  Calendar, Bookmark, Hash, GitBranch, Network, Layers, Puzzle, RefreshCw,
  ChevronDown, ChevronUp, CircleDot, Loader2,
} from 'lucide-react';

const PATTERN_META: Record<string, { icon: any; color: string; topics: string[] }> = {
  'HashMap Lookup': { icon: Hash, color: 'from-blue-500 to-cyan-500', topics: ['Hashing', 'Arrays'] },
  'Two Pointer': { icon: Target, color: 'from-emerald-500 to-teal-500', topics: ['Arrays', 'Strings'] },
  'Sliding Window': { icon: Layers, color: 'from-purple-500 to-indigo-500', topics: ['Arrays', 'Strings'] },
  'Binary Search': { icon: CircleDot, color: 'from-amber-500 to-orange-500', topics: ['Arrays', 'Trees'] },
  'DFS': { icon: GitBranch, color: 'from-rose-500 to-pink-500', topics: ['Trees', 'Graphs'] },
  'BFS': { icon: Network, color: 'from-sky-500 to-blue-500', topics: ['Trees', 'Graphs'] },
  'Dynamic Programming': { icon: Puzzle, color: 'from-primary-500 to-indigo-600', topics: ['Arrays', 'Strings', 'Trees'] },
  'Greedy': { icon: Zap, color: 'from-lime-500 to-green-500', topics: ['Arrays'] },
  'Backtracking': { icon: RefreshCw, color: 'from-fuchsia-500 to-purple-500', topics: ['Arrays', 'Strings'] },
  'Stack': { icon: Layers, color: 'from-teal-500 to-emerald-500', topics: ['Stack', 'Strings'] },
};

const PATTERN_NOTES: Record<string, { signals: string[]; traps: string[]; rules: string[]; template: string }> = {
  'HashMap Lookup': {
    signals: ['Fast lookup needed', 'Pair matching', 'Frequency count'],
    traps: ['Forgetting collisions', 'Not handling nulls', 'Wrong key type'],
    rules: ['O(1) average lookup', 'O(n) worst case', 'Space O(n)'],
    template: 'map = {} or Map()\nmap[key] = value\nkey in map -> O(1)',
  },
  'Sliding Window': {
    signals: ['Contiguous subarray', 'Min/Max sum/length', 'Substring problems'],
    traps: ['Wrong window size', 'Off-by-one errors', 'Not resetting window'],
    rules: ['Fixed: O(n)', 'Variable: O(2n) = O(n)', 'Use deque for max/min'],
    template: 'left = 0\nfor right in range(n):\n    window.add(arr[right])\n    while shrink_condition:\n        window.remove(arr[left])\n        left += 1',
  },
  'Two Pointer': {
    signals: ['Sorted array', 'Pair/triplet sum', 'Palindrome check'],
    traps: ['Pointer overlap', 'Wrong movement', 'Missing sort step'],
    rules: ['Works on sorted data', 'O(n) time', 'O(1) space'],
    template: 'left, right = 0, n-1\nwhile left < right:\n    curr = arr[left] + arr[right]\n    if curr == target: return\n    elif curr < target: left++\n    else: right--',
  },
  'DFS': {
    signals: ['Tree traversal', 'Path finding', 'Connected components'],
    traps: ['Stack overflow', 'Infinite loops', 'Wrong base case'],
    rules: ['O(V+E) time', 'O(V) space (recursion)', 'Use visited set'],
    template: 'def dfs(node, visited):\n    if not node or node in visited:\n        return\n    visited.add(node)\n    for neighbor in node.neighbors:\n        dfs(neighbor, visited)',
  },
  'BFS': {
    signals: ['Shortest path', 'Level-order', 'Nearest neighbor'],
    traps: ['Wrong queue ops', 'Missing visited check', 'Wrong level tracking'],
    rules: ['O(V+E) time', 'O(V) space', 'Guarantees shortest path'],
    template: 'queue = deque([start])\nvisited = {start}\nwhile queue:\n    node = queue.popleft()\n    for neighbor in node.neighbors:\n        if neighbor not in visited:\n            visited.add(neighbor)\n            queue.append(neighbor)',
  },
  'Dynamic Programming': {
    signals: ['Overlapping subproblems', 'Optimal substructure', 'Min/Max/Count'],
    traps: ['Wrong base case', 'Memoization key', 'Not considering all options'],
    rules: ['Identify state', 'Write recurrence', 'Choose top-down or bottom-up'],
    template: '# Top-down (memoization)\ndef solve(n, memo={}):\n    if n in memo: return memo[n]\n    memo[n] = result\n    return memo[n]',
  },
};

function getStreak() {
  try { return JSON.parse(localStorage.getItem('streak') || '{"count":0,"lastDate":""}'); } catch { return { count: 0, lastDate: '' }; }
}

function updateStreak() {
  const streak = getStreak();
  const today = new Date().toDateString();
  if (streak.lastDate === today) return streak;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const newStreak = streak.lastDate === yesterday ? streak.count + 1 : 1;
  const updated = { count: newStreak, lastDate: today };
  localStorage.setItem('streak', JSON.stringify(updated));
  return updated;
}

function getSolvedFromStorage(): string[] {
  try { return JSON.parse(localStorage.getItem('solved_questions') || '[]'); } catch { return []; }
}

export default function InterviewPrepPage() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [topics, setTopics] = useState<any[]>([]);
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [solvedIds, setSolvedIds] = useState<string[]>(getSolvedFromStorage());
  const [activeCompany, setActiveCompany] = useState(0);
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [streak, setStreak] = useState(getStreak());

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers: Record<string, string> = {};
    if (token) headers.Authorization = `Bearer ${token}`;
    Promise.all([
      fetch('/api/questions', { headers }).then((r) => r.json()),
      fetch('/api/topics', { headers }).then((r) => r.json()),
      fetch('/api/bookmarks', { headers }).then((r) => r.ok ? r.json() : []),
    ]).then(([qs, ts, bs]) => {
      setQuestions(qs);
      setTopics(ts);
      setBookmarks(Array.isArray(bs) ? bs : []);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const isSolved = (q: any) => solvedIds.includes(q.id) || bookmarks.some((b: any) => b.id === q.id);

  const topicProgress = topics.map((t: any) => {
    const topicQs = questions.filter((q: any) => q.topic_name === t.name);
    const solvedCount = topicQs.filter(isSolved).length;
    return { name: t.name, total: topicQs.length, solved: solvedCount, percent: topicQs.length > 0 ? Math.round((solvedCount / topicQs.length) * 100) : 0 };
  }).filter((t) => t.total > 0);

  const patternNames = [...new Set(questions.map((q: any) => q.pattern))];
  const patternProgress = patternNames.map((name) => {
    const meta = PATTERN_META[name] || { icon: Target, color: 'from-gray-500 to-gray-400', topics: [] };
    const patQs = questions.filter((q: any) => q.pattern === name);
    const solvedCount = patQs.filter(isSolved).length;
    return { name, icon: meta.icon, color: meta.color, total: patQs.length, solved: solvedCount, percent: patQs.length > 0 ? Math.round((solvedCount / patQs.length) * 100) : 0 };
  }).filter((p) => p.total > 0).sort((a, b) => b.total - a.total);

  const totalSolved = topicProgress.reduce((s, t) => s + t.solved, 0);
  const totalQuestions = questions.length;
  const readinessScore = totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0;

  const weakTopics = topicProgress.filter((t) => t.percent < 50).sort((a, b) => a.percent - b.percent);
  const roadmap = weakTopics.slice(0, 4).map((t, i) => ({
    step: i + 1, title: `Complete ${t.name}`, desc: `${t.total - t.solved} questions remaining`,
    priority: t.percent < 30 ? 'high' : 'medium',
  }));

  const companyTopicCounts = topics.map((t: any) => {
    const count = questions.filter((q: any) => q.topic_name === t.name).length;
    return { topic: t.name, count };
  }).filter((c) => c.count > 0).sort((a, b) => b.count - a.count);

  const revisionQueue = bookmarks.slice(0, 4).map((b: any) => b.title);

  const topAsked = questions.filter((q: any) => q.difficulty === 'Medium').slice(0, 8);

  const todaySolved = questions.filter(isSolved).slice(0, 5).map((q: any) => q.title);

  const easyCount = questions.filter((q: any) => q.difficulty === 'Easy').length;
  const mediumCount = questions.filter((q: any) => q.difficulty === 'Medium').length;
  const hardCount = questions.filter((q: any) => q.difficulty === 'Hard').length;
  const easySolved = questions.filter((q: any) => q.difficulty === 'Easy' && isSolved(q)).length;
  const mediumSolved = questions.filter((q: any) => q.difficulty === 'Medium' && isSolved(q)).length;
  const hardSolved = questions.filter((q: any) => q.difficulty === 'Hard' && isSolved(q)).length;

  const sheetData = [
    { name: 'All Questions', total: totalQuestions, solved: totalSolved, color: 'from-primary-500 to-primary-600' },
    { name: 'Easy', total: easyCount, solved: easySolved, color: 'from-success-500 to-success-600' },
    { name: 'Medium', total: mediumCount, solved: mediumSolved, color: 'from-warning-500 to-warning-600' },
    { name: 'Hard', total: hardCount, solved: hardSolved, color: 'from-danger-500 to-danger-600' },
    { name: 'Bookmarked', total: bookmarks.length, solved: bookmarks.filter((b: any) => isSolved(b)).length, color: 'from-primary-400 to-primary-500' },
  ];

  const badges = [
    { name: 'HashMap Master', icon: Hash, color: 'text-info-500 bg-info-500/10', earned: (patternProgress.find((p) => p.name === 'HashMap Lookup')?.percent || 0) === 100 },
    { name: 'Tree Explorer', icon: GitBranch, color: 'text-success-500 bg-success-500/10', earned: (topicProgress.find((t) => t.name === 'Trees')?.percent || 0) >= 70 },
    { name: 'Graph Beginner', icon: Network, color: 'text-primary-400 bg-primary-500/10', earned: (topicProgress.find((t) => t.name === 'Graphs')?.solved || 0) >= 3 },
    { name: 'DP Warrior', icon: Puzzle, color: 'text-warning-500 bg-warning-500/10', earned: (topicProgress.find((t) => t.name === 'DP')?.percent || 0) >= 70 },
    { name: 'Streak King', icon: Flame, color: 'text-warning-500 bg-warning-500/10', earned: streak.count >= 7 },
    { name: '75 Club', icon: Trophy, color: 'text-primary-400 bg-primary-500/10', earned: totalSolved >= 75 },
  ];

  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (readinessScore / 100) * circumference;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
          <p className="text-sm text-slate-400">Loading your interview dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full page background */}
      <div className="fixed inset-0" style={{ backgroundColor: '#0B1020' }}>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left side - Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium">
                <Trophy className="w-4 h-4" /> Interview Dashboard
              </span>

              <h1 className="mt-5 sm:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-white">Ace Your </span>
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">Interview</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/50 leading-relaxed max-w-lg">
                Track your progress, master patterns, and get ready for technical interviews at top companies.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link to="/questions" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20">
                  <BookOpen className="w-4 h-4" /> Start Practicing
                </Link>
                <button onClick={() => { updateStreak(); setStreak(getStreak()); }} className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all">
                  <Calendar className="w-4 h-4" /> Daily Check-in
                </button>
              </div>
            </motion.div>

            {/* Right side - Stats grid */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Streak card */}
              <div className="col-span-2 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-amber-400/70 font-medium">Current Streak</p>
                    <p className="text-3xl sm:text-4xl font-bold text-white mt-1">{streak.count} <span className="text-base sm:text-lg text-white/50">days</span></p>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                    <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Total solved */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-2.5 sm:mb-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">{totalSolved}</p>
                <p className="text-[10px] sm:text-xs text-white/40 mt-1">Solved</p>
              </div>

              {/* Remaining */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">{totalQuestions - totalSolved}</p>
                <p className="text-[10px] sm:text-xs text-white/40 mt-1">Remaining</p>
              </div>

              {/* Readiness */}
              <div className="col-span-2 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <p className="text-xs sm:text-sm text-white/50">Interview Readiness</p>
                  <p className="text-base sm:text-lg font-bold text-amber-400">{readinessScore}%</p>
                </div>
                <div className="w-full h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${readinessScore}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 space-y-8 sm:space-y-10 lg:space-y-12">

        {/* Readiness Score */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-1 card p-6 sm:p-8 flex flex-col items-center justify-center">
              <h2 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Interview Readiness</h2>
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-3 sm:mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <motion.circle cx="60" cy="60" r="54" fill="none" stroke="url(#scoreGrad)" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: dashOffset }} transition={{ duration: 1.5, ease: 'easeOut' }} />
                  <defs><linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7C6CF6" /><stop offset="100%" stopColor="#6D5CE7" /></linearGradient></defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">{readinessScore}%</span>
                  <span className="text-[10px] sm:text-xs text-slate-400">Ready</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 text-center">{totalSolved} of {totalQuestions} solved</p>
            </div>
            <div className="lg:col-span-2 card p-4 sm:p-6">
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Topic Breakdown</h3>
              <div className="space-y-2.5 sm:space-y-3 max-h-[280px] sm:max-h-[340px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                {topicProgress.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-slate-400 w-16 sm:w-24 shrink-0 truncate">{t.name}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden min-w-0">
                      <motion.div className={`h-full rounded-full ${t.percent >= 70 ? 'bg-success-500' : t.percent >= 40 ? 'bg-warning-500' : 'bg-danger-500'}`} initial={{ width: 0 }} whileInView={{ width: `${t.percent}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-400 w-12 sm:w-16 text-right shrink-0">{t.solved}/{t.total}</span>
                    <span className={`text-[10px] sm:text-xs font-medium w-8 sm:w-10 text-right shrink-0 ${t.percent >= 70 ? 'text-success-500' : t.percent >= 40 ? 'text-warning-500' : 'text-danger-500'}`}>{t.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Personalized Roadmap */}
        {roadmap.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary-400" /> Your Next Steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {roadmap.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-4 sm:p-5 relative overflow-hidden">
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-500/10 text-primary-400 text-sm font-bold flex items-center justify-center">{step.step}</div>
                  <div className={`w-2 h-full absolute left-0 top-0 ${step.priority === 'high' ? 'bg-danger-500' : 'bg-warning-500'}`} />
                  <div className="pl-3">
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-xs text-slate-400">{step.desc}</p>
                    <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-medium ${step.priority === 'high' ? 'bg-danger-500/10 text-danger-500' : 'bg-warning-500/10 text-warning-500'}`}>
                      {step.priority === 'high' ? 'Priority' : 'Recommended'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Pattern Mastery */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary-400" /> Pattern Mastery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {patternProgress.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-3 sm:p-4 text-center">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg`}>
                  <p.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 line-clamp-1">{p.name}</h4>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <motion.div className={`h-full rounded-full ${p.percent >= 70 ? 'bg-success-500' : p.percent >= 40 ? 'bg-warning-500' : 'bg-danger-500'}`} initial={{ width: 0 }} whileInView={{ width: `${p.percent}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                </div>
                <span className="text-base sm:text-lg font-bold text-white">{p.percent}%</span>
                <p className="text-[10px] text-slate-400 mt-1">{p.solved}/{p.total}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company Preparation */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary-400" /> Topic-wise Questions
          </h2>
          <div className="card p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">Questions available per topic for targeted preparation</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 max-h-[300px] sm:max-h-[360px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
              {companyTopicCounts.map((c) => {
                const topicSolved = questions.filter((q: any) => q.topic_name === c.topic && isSolved(q)).length;
                const pct = c.count > 0 ? Math.round((topicSolved / c.count) * 100) : 0;
                return (
                  <div key={c.topic} className="p-2.5 sm:p-3 bg-[#1E293B] rounded-xl">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium text-slate-400 truncate">{c.topic}</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-primary-400 shrink-0 ml-1">{c.count} Q</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${pct >= 70 ? 'bg-success-500' : pct >= 40 ? 'bg-warning-500' : 'bg-danger-500'}`} style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">{topicSolved}/{c.count} solved</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Revision Queue */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-primary-400" /> Today's Revision
          </h2>
          {revisionQueue.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {revisionQueue.map((q, i) => (
                <motion.div key={q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center shrink-0">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium text-white truncate">{q}</h4>
                    <p className="text-xs text-slate-400">Bookmarked for review</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="card p-6 sm:p-8 text-center text-slate-400 text-sm">
              <Bookmark className="w-8 h-8 text-white/20 mx-auto mb-2" />
              Bookmark questions to build your revision queue
            </div>
          )}
        </motion.section>

        {/* Top Asked */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-warning-500" /> Medium Questions
          </h2>
          <div className="card overflow-hidden">
            <div className="divide-y divide-white/5">
              {topAsked.map((q: any, i: number) => (
                <Link key={q.id} to={`/questions/${q.slug}`} className="flex items-center justify-between px-3 sm:px-5 py-3 hover:bg-white/5 transition-colors gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <span className="text-xs font-mono text-white/20 w-4 sm:w-5 shrink-0">{i + 1}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white truncate">{q.title}</div>
                      <div className="text-xs text-slate-400 truncate">{q.topic_name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400">{q.pattern}</span>
                    {isSolved(q) && <CheckCircle className="w-4 h-4 text-success-500" />}
                  </div>
                </Link>
              ))}
              {topAsked.length === 0 && <div className="px-5 py-8 text-center text-sm text-slate-400">No medium questions available</div>}
            </div>
          </div>
        </motion.section>

        {/* Interview Sheets */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-400" /> Progress Sheets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {sheetData.map((sheet, i) => {
              const pct = sheet.total > 0 ? Math.round((sheet.solved / sheet.total) * 100) : 0;
              return (
                <motion.div key={sheet.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white text-sm sm:text-base">{sheet.name}</h4>
                    <span className="text-sm font-bold text-primary-400">{pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <motion.div className={`h-full rounded-full bg-gradient-to-r ${sheet.color}`} initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                  </div>
                  <p className="text-xs text-slate-400">{sheet.solved} / {sheet.total} Completed</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Weak Areas */}
        {weakTopics.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning-500" /> Weak Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {weakTopics.slice(0, 3).map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-4 sm:p-5 border-l-4 border-l-danger-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white text-sm sm:text-base">{t.name}</h4>
                    <span className="text-sm font-bold text-danger-500">{t.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                    <div className="h-full rounded-full bg-danger-500" style={{ width: `${t.percent}%` }} />
                  </div>
                  <p className="text-xs text-slate-400">{t.total - t.solved} questions remaining</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Pattern Notes */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-warning-500" /> Pattern Notes
          </h2>
          <div className="space-y-3">
            {patternNames.filter((n) => PATTERN_NOTES[n]).map((name, i) => {
              const notes = PATTERN_NOTES[name];
              return (
                <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card overflow-hidden">
                  <button onClick={() => setActiveNote(activeNote === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-500/10 text-primary-400 flex items-center justify-center">
                        <Hash className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white">{name}</span>
                    </div>
                    {activeNote === i ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  <AnimatePresence>
                    {activeNote === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-2">Signals</h5>
                            <ul className="space-y-1">{notes.signals.map((s, j) => <li key={j} className="text-sm text-slate-400 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-success-500 mt-0.5 shrink-0" /> {s}</li>)}</ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-2">Traps</h5>
                            <ul className="space-y-1">{notes.traps.map((t, j) => <li key={j} className="text-sm text-slate-400 flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-warning-500 mt-0.5 shrink-0" /> {t}</li>)}</ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-2">Rules</h5>
                            <ul className="space-y-1">{notes.rules.map((r, j) => <li key={j} className="text-sm text-slate-400 flex items-start gap-2"><BarChart3 className="w-3.5 h-3.5 text-primary-400 mt-0.5 shrink-0" /> {r}</li>)}</ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-2">Template</h5>
                            <pre className="bg-[#0B1020] text-success-500 rounded-xl p-3 text-xs font-mono leading-relaxed overflow-x-auto border border-white/10">{notes.template}</pre>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Activity + Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-400" /> Recent Activity
            </h2>
            <div className="card p-4 sm:p-5">
              <h3 className="text-sm font-semibold text-slate-400 mb-3">Solved ({todaySolved.length})</h3>
              <div className="space-y-2">
                {todaySolved.length > 0 ? todaySolved.map((q, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5">
                    <CheckCircle className="w-4 h-4 text-success-500 shrink-0" />
                    <span className="text-sm text-white">{q}</span>
                  </div>
                )) : <p className="text-sm text-slate-400">No questions solved yet</p>}
              </div>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-warning-500" /> Badges
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {badges.map((badge, i) => (
                <motion.div key={badge.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`card p-3 sm:p-4 text-center ${!badge.earned ? 'opacity-40 grayscale' : ''}`}>
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${badge.color} flex items-center justify-center mx-auto mb-2`}>
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-400 line-clamp-2">{badge.name}</span>
                  {badge.earned && <div className="text-[10px] text-success-500 font-medium mt-1">Earned</div>}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
