import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Flame, Target, Crown, Sparkles, Loader2 } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  user_id: string;
  user_name: string;
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  total_submissions: number;
  streak: number;
  points: number;
}

const rankStyles: Record<number, { bg: string; ring: string; text: string; icon: any; label: string }> = {
  1: { bg: 'from-amber-400 to-yellow-500', ring: 'ring-amber-400/50', text: 'text-amber-300', icon: Crown, label: 'Champion' },
  2: { bg: 'from-slate-300 to-slate-400', ring: 'ring-slate-300/50', text: 'text-slate-200', icon: Medal, label: 'Runner-up' },
  3: { bg: 'from-orange-400 to-amber-600', ring: 'ring-orange-400/50', text: 'text-orange-300', icon: Award, label: '3rd Place' },
};

function getRankStyle(rank: number) {
  if (rankStyles[rank]) return rankStyles[rank];
  return { bg: 'from-primary-500 to-indigo-600', ring: 'ring-white/10', text: 'text-white/60', icon: Trophy, label: `Rank #${rank}` };
}

function avatarColor(name: string): string {
  const colors = [
    'from-rose-500 to-pink-500', 'from-violet-500 to-purple-500', 'from-indigo-500 to-blue-500',
    'from-sky-500 to-cyan-500', 'from-emerald-500 to-teal-500', 'from-lime-500 to-green-500',
    'from-amber-500 to-orange-500', 'from-fuchsia-500 to-pink-500', 'from-cyan-500 to-blue-500',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return colors[hash % colors.length];
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() || '')
    .slice(0, 2)
    .join('');
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((r) => r.json())
      .then((data) => {
        setEntries(data.leaderboard || []);
        setTotalUsers(data.total_users || 0);
      })
      .catch(() => setError('Failed to load leaderboard'))
      .finally(() => setLoading(false));
  }, []);

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0" style={{ backgroundColor: '#0B1020' }}>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-yellow-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-orange-500/6 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-medium"
          >
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Top 10 Coders
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            <span className="text-white">Leader</span>
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">board</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-white/50 max-w-xl mx-auto px-2"
          >
            Earn points by solving problems. Easy = 10 pts, Medium = 25 pts, Hard = 50 pts. Keep your streak alive.
          </motion.p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-amber-400 animate-spin" />
            <span className="ml-3 text-white/50">Loading rankings...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-rose-400">{error}</div>
        ) : entries.length === 0 ? (
          <div className="text-center py-20 max-w-md mx-auto">
            <Trophy className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No rankings yet</h3>
            <p className="text-sm text-white/50 mb-6">
              Be the first to solve a problem and claim the top spot. Every accepted submission adds points to the leaderboard.
            </p>
            <a
              href="/questions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4" /> Start Solving
            </a>
          </div>
        ) : (
          <>
            {/* Podium - Top 3 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12 max-w-3xl mx-auto items-end">
              {[1, 0, 2].map((displayIdx, i) => {
                const entry = top3[displayIdx];
                if (!entry) return <div key={i} />;
                const style = getRankStyle(entry.rank);
                const Icon = style.icon;
                const heights = ['h-32 sm:h-44', 'h-24 sm:h-32', 'h-20 sm:h-28'];
                const height = heights[displayIdx] || 'h-24 sm:h-32';
                return (
                  <motion.div
                    key={entry.user_id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative mb-2 sm:mb-3">
                      <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${avatarColor(entry.user_name)} flex items-center justify-center text-white text-base sm:text-2xl font-bold ring-2 sm:ring-4 ${style.ring} shadow-xl`}>
                        {initials(entry.user_name)}
                      </div>
                      <div className={`absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${style.bg} flex items-center justify-center shadow-lg ring-2 sm:ring-4 ring-[#0B1020]`}>
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-white text-center truncate w-full px-1">{entry.user_name}</p>
                    <p className={`text-[10px] sm:text-xs ${style.text} font-medium hidden sm:block`}>{style.label}</p>
                    <p className="text-[10px] sm:text-xs text-white/40 mt-0.5 sm:mt-1">{entry.points} pts</p>

                    <div className={`mt-2 sm:mt-4 w-full ${height} rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b ${style.bg} flex flex-col items-center justify-start pt-2 sm:pt-3 text-white shadow-2xl`}>
                      <span className="text-xl sm:text-3xl font-bold">#{entry.rank}</span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-80 mt-0.5 sm:mt-1">{entry.solved} solved</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Rest of top 10 */}
            {rest.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{ backgroundColor: '#111827' }}
              >
                <div className="sticky top-0 z-10 hidden sm:grid grid-cols-12 gap-2 px-5 py-3 text-[10px] uppercase tracking-wider text-white/40 border-b border-white/5 font-medium" style={{ backgroundColor: '#111827' }}>
                  <div className="col-span-1">Rank</div>
                  <div className="col-span-4">Coder</div>
                  <div className="col-span-2 text-right">Points</div>
                  <div className="col-span-1 text-right">Solved</div>
                  <div className="col-span-1 text-right">E/M/H</div>
                  <div className="col-span-1 text-right">Streak</div>
                  <div className="col-span-2 text-right">Submissions</div>
                </div>

                <div className="sm:hidden px-3 py-2 text-[10px] uppercase tracking-wider text-white/40 border-b border-white/5 font-medium" style={{ backgroundColor: '#111827' }}>
                  Top 10 Leaderboard
                </div>

                <div className="max-h-[420px] overflow-y-auto leaderboard-scroll">
                {rest.map((entry, i) => (
                  <motion.div
                    key={entry.user_id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.04 }}
                    className="grid grid-cols-12 gap-2 px-3 sm:px-5 py-3 sm:py-4 items-center border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <span className="text-sm font-mono text-white/50">#{entry.rank}</span>
                    </div>
                    <div className="col-span-6 sm:col-span-4 flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${avatarColor(entry.user_name)} flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shrink-0`}>
                        {initials(entry.user_name)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-white truncate">{entry.user_name}</p>
                      </div>
                    </div>
                    <div className="col-span-4 sm:col-span-2 text-right">
                      <span className="text-xs sm:text-sm font-bold text-amber-300">{entry.points.toLocaleString()}</span>
                      <div className="text-[10px] text-white/40 sm:hidden">{entry.solved} solved · 🔥{entry.streak || 0}</div>
                    </div>
                    <div className="hidden sm:block sm:col-span-1 text-right">
                      <span className="text-sm text-white/70">{entry.solved}</span>
                    </div>
                    <div className="hidden sm:block sm:col-span-1 text-right text-[11px] text-white/50 font-mono">
                      {entry.easy}/{entry.medium}/{entry.hard}
                    </div>
                    <div className="hidden sm:block sm:col-span-1 text-right">
                      {entry.streak > 0 ? (
                        <span className="inline-flex items-center gap-0.5 text-xs text-orange-400">
                          <Flame className="w-3 h-3" /> {entry.streak}
                        </span>
                      ) : (
                        <span className="text-xs text-white/30">—</span>
                      )}
                    </div>
                    <div className="hidden sm:block sm:col-span-2 text-right">
                      <span className="text-xs text-white/40">{entry.total_submissions}</span>
                    </div>
                  </motion.div>
                ))}
                </div>
              </motion.div>
            )}

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="p-4 sm:p-5 rounded-2xl border border-white/10" style={{ backgroundColor: '#111827' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-semibold text-white">Scoring</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Earn <span className="text-emerald-300 font-semibold">10</span> pts for Easy,
                  <span className="text-amber-300 font-semibold"> 25</span> for Medium,
                  <span className="text-rose-300 font-semibold"> 50</span> for Hard.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl border border-white/10" style={{ backgroundColor: '#111827' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <h3 className="text-sm font-semibold text-white">Streak</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Solve at least one problem every day to keep your streak alive. Bonus recognition for top streaks.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl border border-white/10" style={{ backgroundColor: '#111827' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-semibold text-white">{totalUsers} {totalUsers === 1 ? 'Coder' : 'Coders'}</h3>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">
                  Showing only the top 10. Solve more to climb the ranks and unlock the podium.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
