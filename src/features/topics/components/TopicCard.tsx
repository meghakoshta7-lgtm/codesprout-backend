import { motion } from 'framer-motion';
import { ArrowRight, Database, Braces, Hash, Link2, Layers, MoveVertical, Trello, GitBranch, TreePine, Network, Target, Puzzle, RefreshCw, Maximize2, Search, Code2, Cpu, BookOpen, Binary, Boxes, Binary as BinaryIcon, Box, Sigma, FlaskConical, Zap, Wrench, ListTree, Map, Calculator, Hash as HashIcon, KeyRound, Grid3X3, Gauge, Activity, ChevronRight, TrendingUp, FileSearch, Workflow, BrainCircuit, Crown } from 'lucide-react';
import type { Topic } from '../types/topic';

const topicIcons: Record<string, React.ReactNode> = {
  arrays: <Database className="w-5 h-5" />,
  strings: <Braces className="w-5 h-5" />,
  hashing: <Hash className="w-5 h-5" />,
  'linked list': <Link2 className="w-5 h-5" />,
  stack: <Layers className="w-5 h-5" />,
  queue: <MoveVertical className="w-5 h-5" />,
  heap: <Trello className="w-5 h-5" />,
  trees: <GitBranch className="w-5 h-5" />,
  bst: <TreePine className="w-5 h-5" />,
  graphs: <Network className="w-5 h-5" />,
  greedy: <Target className="w-5 h-5" />,
  dp: <Puzzle className="w-5 h-5" />,
  backtracking: <RefreshCw className="w-5 h-5" />,
  'sliding window': <Maximize2 className="w-5 h-5" />,
  'binary search': <Search className="w-5 h-5" />,
  recursion: <Workflow className="w-5 h-5" />,
  deque: <Boxes className="w-5 h-5" />,
  searching: <FileSearch className="w-5 h-5" />,
  sorting: <ListTree className="w-5 h-5" />,
  'two-pointers': <ChevronRight className="w-5 h-5" />,
  'prefix-sum': <TrendingUp className="w-5 h-5" />,
  'bit-manipulation': <Binary className="w-5 h-5" />,
  mathematics: <Sigma className="w-5 h-5" />,
  'divide-and-conquer': <Cpu className="w-5 h-5" />,
  'binary-tree': <GitBranch className="w-5 h-5" />,
  'binary-search-tree': <TreePine className="w-5 h-5" />,
  'heap-priority-queue': <Trello className="w-5 h-5" />,
  trie: <BookOpen className="w-5 h-5" />,
  dsu: <Network className="w-5 h-5" />,
  'segment-tree': <Box className="w-5 h-5" />,
  'fenwick-tree': <Box className="w-5 h-5" />,
  'sparse-table': <Grid3X3 className="w-5 h-5" />,
  'monotonic-stack': <Layers className="w-5 h-5" />,
  'monotonic-queue': <MoveVertical className="w-5 h-5" />,
  'topological-sort': <Workflow className="w-5 h-5" />,
  'shortest-path': <Map className="w-5 h-5" />,
  mst: <Network className="w-5 h-5" />,
  scc: <Network className="w-5 h-5" />,
  'network-flow': <Activity className="w-5 h-5" />,
  'bipartite-graphs': <Network className="w-5 h-5" />,
  'string-algorithms': <Code2 className="w-5 h-5" />,
  'rolling-hash': <Hash className="w-5 h-5" />,
  'kmp-algorithm': <Code2 className="w-5 h-5" />,
  'rabin-karp-algorithm': <Code2 className="w-5 h-5" />,
  'z-algorithm': <Code2 className="w-5 h-5" />,
  'suffix-array': <ListTree className="w-5 h-5" />,
  'suffix-tree': <ListTree className="w-5 h-5" />,
  'computational-geometry': <Gauge className="w-5 h-5" />,
  'number-theory': <Calculator className="w-5 h-5" />,
  'game-theory': <BrainCircuit className="w-5 h-5" />,
  bitmasking: <Binary className="w-5 h-5" />,
  'meet-in-the-middle': <Cpu className="w-5 h-5" />,
  'mos-algorithm': <Zap className="w-5 h-5" />,
  'sqrt-decomposition': <Box className="w-5 h-5" />,
  hld: <Wrench className="w-5 h-5" />,
  'centroid-decomposition': <Crown className="w-5 h-5" />,
  'advanced-dp': <Puzzle className="w-5 h-5" />,
  'advanced-graphs': <Network className="w-5 h-5" />,
  'cp-techniques': <FlaskConical className="w-5 h-5" />,
};

const topicColors: Record<string, { bg: string; text: string; shadow: string }> = {
  arrays: { bg: 'from-blue-500/10 to-cyan-500/10', text: 'text-blue-400', shadow: 'shadow-blue-500/20' },
  strings: { bg: 'from-emerald-500/10 to-teal-500/10', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20' },
  hashing: { bg: 'from-violet-500/10 to-purple-500/10', text: 'text-violet-400', shadow: 'shadow-violet-500/20' },
  'linked list': { bg: 'from-pink-500/10 to-rose-500/10', text: 'text-pink-400', shadow: 'shadow-pink-500/20' },
  stack: { bg: 'from-amber-500/10 to-orange-500/10', text: 'text-amber-400', shadow: 'shadow-amber-500/20' },
  queue: { bg: 'from-cyan-500/10 to-sky-500/10', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
  heap: { bg: 'from-fuchsia-500/10 to-pink-500/10', text: 'text-fuchsia-400', shadow: 'shadow-fuchsia-500/20' },
  trees: { bg: 'from-green-500/10 to-emerald-500/10', text: 'text-green-400', shadow: 'shadow-green-500/20' },
  bst: { bg: 'from-lime-500/10 to-green-500/10', text: 'text-lime-400', shadow: 'shadow-lime-500/20' },
  graphs: { bg: 'from-indigo-500/10 to-blue-500/10', text: 'text-indigo-400', shadow: 'shadow-indigo-500/20' },
  greedy: { bg: 'from-rose-500/10 to-red-500/10', text: 'text-rose-400', shadow: 'shadow-rose-500/20' },
  dp: { bg: 'from-yellow-500/10 to-amber-500/10', text: 'text-yellow-400', shadow: 'shadow-yellow-500/20' },
  backtracking: { bg: 'from-teal-500/10 to-emerald-500/10', text: 'text-teal-400', shadow: 'shadow-teal-500/20' },
  'sliding window': { bg: 'from-orange-500/10 to-red-500/10', text: 'text-orange-400', shadow: 'shadow-orange-500/20' },
  'binary search': { bg: 'from-sky-500/10 to-blue-500/10', text: 'text-sky-400', shadow: 'shadow-sky-500/20' },
  recursion: { bg: 'from-purple-500/10 to-fuchsia-500/10', text: 'text-purple-400', shadow: 'shadow-purple-500/20' },
  deque: { bg: 'from-emerald-500/10 to-green-500/10', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20' },
  searching: { bg: 'from-cyan-500/10 to-teal-500/10', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
  sorting: { bg: 'from-pink-500/10 to-fuchsia-500/10', text: 'text-pink-400', shadow: 'shadow-pink-500/20' },
  'two-pointers': { bg: 'from-violet-500/10 to-indigo-500/10', text: 'text-violet-400', shadow: 'shadow-violet-500/20' },
  'prefix-sum': { bg: 'from-blue-500/10 to-indigo-500/10', text: 'text-blue-400', shadow: 'shadow-blue-500/20' },
  'bit-manipulation': { bg: 'from-amber-500/10 to-yellow-500/10', text: 'text-amber-400', shadow: 'shadow-amber-500/20' },
  mathematics: { bg: 'from-red-500/10 to-rose-500/10', text: 'text-red-400', shadow: 'shadow-red-500/20' },
  'divide-and-conquer': { bg: 'from-fuchsia-500/10 to-purple-500/10', text: 'text-fuchsia-400', shadow: 'shadow-fuchsia-500/20' },
  'binary-tree': { bg: 'from-green-500/10 to-lime-500/10', text: 'text-green-400', shadow: 'shadow-green-500/20' },
  'binary-search-tree': { bg: 'from-lime-500/10 to-emerald-500/10', text: 'text-lime-400', shadow: 'shadow-lime-500/20' },
  'heap-priority-queue': { bg: 'from-pink-500/10 to-rose-500/10', text: 'text-pink-400', shadow: 'shadow-pink-500/20' },
  trie: { bg: 'from-violet-500/10 to-purple-500/10', text: 'text-violet-400', shadow: 'shadow-violet-500/20' },
  dsu: { bg: 'from-indigo-500/10 to-violet-500/10', text: 'text-indigo-400', shadow: 'shadow-indigo-500/20' },
  'segment-tree': { bg: 'from-orange-500/10 to-amber-500/10', text: 'text-orange-400', shadow: 'shadow-orange-500/20' },
  'fenwick-tree': { bg: 'from-amber-500/10 to-yellow-500/10', text: 'text-amber-400', shadow: 'shadow-amber-500/20' },
  'sparse-table': { bg: 'from-cyan-500/10 to-blue-500/10', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
  'monotonic-stack': { bg: 'from-rose-500/10 to-orange-500/10', text: 'text-rose-400', shadow: 'shadow-rose-500/20' },
  'monotonic-queue': { bg: 'from-orange-500/10 to-amber-500/10', text: 'text-orange-400', shadow: 'shadow-orange-500/20' },
  'topological-sort': { bg: 'from-teal-500/10 to-cyan-500/10', text: 'text-teal-400', shadow: 'shadow-teal-500/20' },
  'shortest-path': { bg: 'from-blue-500/10 to-cyan-500/10', text: 'text-blue-400', shadow: 'shadow-blue-500/20' },
  mst: { bg: 'from-emerald-500/10 to-teal-500/10', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20' },
  scc: { bg: 'from-cyan-500/10 to-sky-500/10', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
  'network-flow': { bg: 'from-red-500/10 to-orange-500/10', text: 'text-red-400', shadow: 'shadow-red-500/20' },
  'bipartite-graphs': { bg: 'from-sky-500/10 to-indigo-500/10', text: 'text-sky-400', shadow: 'shadow-sky-500/20' },
  'string-algorithms': { bg: 'from-emerald-500/10 to-lime-500/10', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20' },
  'rolling-hash': { bg: 'from-purple-500/10 to-pink-500/10', text: 'text-purple-400', shadow: 'shadow-purple-500/20' },
  'kmp-algorithm': { bg: 'from-blue-500/10 to-indigo-500/10', text: 'text-blue-400', shadow: 'shadow-blue-500/20' },
  'rabin-karp-algorithm': { bg: 'from-violet-500/10 to-fuchsia-500/10', text: 'text-violet-400', shadow: 'shadow-violet-500/20' },
  'z-algorithm': { bg: 'from-indigo-500/10 to-blue-500/10', text: 'text-indigo-400', shadow: 'shadow-indigo-500/20' },
  'suffix-array': { bg: 'from-yellow-500/10 to-amber-500/10', text: 'text-yellow-400', shadow: 'shadow-yellow-500/20' },
  'suffix-tree': { bg: 'from-amber-500/10 to-orange-500/10', text: 'text-amber-400', shadow: 'shadow-amber-500/20' },
  'computational-geometry': { bg: 'from-fuchsia-500/10 to-pink-500/10', text: 'text-fuchsia-400', shadow: 'shadow-fuchsia-500/20' },
  'number-theory': { bg: 'from-rose-500/10 to-pink-500/10', text: 'text-rose-400', shadow: 'shadow-rose-500/20' },
  'game-theory': { bg: 'from-pink-500/10 to-purple-500/10', text: 'text-pink-400', shadow: 'shadow-pink-500/20' },
  bitmasking: { bg: 'from-yellow-500/10 to-orange-500/10', text: 'text-yellow-400', shadow: 'shadow-yellow-500/20' },
  'meet-in-the-middle': { bg: 'from-teal-500/10 to-emerald-500/10', text: 'text-teal-400', shadow: 'shadow-teal-500/20' },
  'mos-algorithm': { bg: 'from-orange-500/10 to-red-500/10', text: 'text-orange-400', shadow: 'shadow-orange-500/20' },
  'sqrt-decomposition': { bg: 'from-lime-500/10 to-green-500/10', text: 'text-lime-400', shadow: 'shadow-lime-500/20' },
  hld: { bg: 'from-cyan-500/10 to-emerald-500/10', text: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
  'centroid-decomposition': { bg: 'from-red-500/10 to-rose-500/10', text: 'text-red-400', shadow: 'shadow-red-500/20' },
  'advanced-dp': { bg: 'from-violet-500/10 to-purple-500/10', text: 'text-violet-400', shadow: 'shadow-violet-500/20' },
  'advanced-graphs': { bg: 'from-indigo-500/10 to-violet-500/10', text: 'text-indigo-400', shadow: 'shadow-indigo-500/20' },
  'cp-techniques': { bg: 'from-emerald-500/10 to-cyan-500/10', text: 'text-emerald-400', shadow: 'shadow-emerald-500/20' },
};

interface TopicCardProps {
  topic: Topic;
  index: number;
  onClick: () => void;
}

export default function TopicCard({ topic, index, onClick }: TopicCardProps) {
  const colors = topicColors[topic.name.toLowerCase()] || { bg: 'from-purple-500/10 to-violet-500/10', text: 'text-purple-400', shadow: 'shadow-purple-500/20' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      <button
        onClick={onClick}
        className={`group relative block w-full text-left p-5 rounded-2xl bg-[#111827]/80 border border-white/5 overflow-hidden transition-all duration-300 hover:bg-[#111827] hover:border-white/10 hover:shadow-xl hover:${colors.shadow} cursor-pointer`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.bg} ${colors.text} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
            {topicIcons[topic.name.toLowerCase()] || <Database className="w-5 h-5" />}
          </div>
          <h3 className="text-base font-semibold text-white mb-1 group-hover:text-white transition-colors line-clamp-2 min-h-[2.5rem]">
            {topic.name}
          </h3>
          <p className="text-sm text-white/40 mb-3">{topic.questionCount || 0} questions</p>
          <div className="flex items-center text-xs font-medium text-white/0 group-hover:text-white/60 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
            Open <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </button>
    </motion.div>
  );
}
