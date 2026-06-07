import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Gamepad2, Lock, Crown, Zap, Brain, Star,
  Trophy, Code2, Rocket, Flame, ChevronRight, Sparkles,
} from 'lucide-react';
import { useGameProgress } from '../hooks/useGameProgress';
import { getLevelDef, type Difficulty, getPool } from '../data/gamesData';

const difficultyMeta: Record<Difficulty, { color: string; ring: string; gradient: string; icon: any; label: string; }> = {
  easy:   { color: 'text-emerald-300', ring: 'ring-emerald-400/50',   gradient: 'from-emerald-400 to-teal-500',    icon: Brain, label: 'Easy'   },
  medium: { color: 'text-amber-300',   ring: 'ring-amber-400/50',     gradient: 'from-amber-400 to-orange-500',   icon: Zap,   label: 'Medium' },
  hard:   { color: 'text-rose-300',    ring: 'ring-rose-400/50',      gradient: 'from-rose-400 to-pink-500',      icon: Crown, label: 'Hard'   },
};
function Stars({ count, size = 'sm' }: { count: number; size?: 'sm' | 'md' }) {
  const dim = size === 'md' ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-3 h-3 sm:w-4 sm:h-4';
  return (
    <div className="flex items-center justify-center gap-0.5">
      {[0, 1, 2].map((i) => (
        <Star
          key={i}
          className={`${dim} ${i < count ? 'text-amber-400 fill-amber-400' : 'text-white/15'}`}
        />
      ))}
    </div>
  );
}

const ORIGINAL_LEVEL_COUNT = 7;

export default function GameTopicPage() {
  const { topic: topicParam } = useParams<{ topic: string }>();
  const topic = topicParam ? decodeURIComponent(topicParam) : '';
  const { getLevel, isLevelUnlocked, progress } = useGameProgress();

  const topicProgress = progress.topics[topic];
  const maxLevel = topicProgress?.maxLevel || 0;
  const completedLevelIds = useMemo(() => {
    if (!topicProgress?.levels) return [] as number[];
    return Object.keys(topicProgress.levels)
      .map((k) => Number(k))
      .filter((n) => Number.isFinite(n) && (topicProgress.levels[n]?.stars || 0) >= 1)
      .sort((a, b) => a - b);
  }, [topicProgress]);

  const pool = useMemo(() => getPool(topic), [topic]);
  const poolSize = pool.easy.length + pool.medium.length + pool.hard.length;
  const approxMaxUniqueLevels = Math.floor(poolSize / 3);
  const totalLevels = Math.max(ORIGINAL_LEVEL_COUNT, maxLevel + 1, approxMaxUniqueLevels);
  const displayLevels = ORIGINAL_LEVEL_COUNT;

  const levelResults = Array.from({ length: displayLevels }, (_, i) => getLevel(topic, i + 1));
  const completedCount = levelResults.filter((r) => r && r.stars >= 1).length;
  const allOriginalDone = completedCount === ORIGINAL_LEVEL_COUNT;
  const totalStars = Object.values(topicProgress?.levels || {}).reduce((s, r) => s + (r.stars || 0), 0);
  const totalPossibleStars = totalLevels * 3;
  const progressPct = Math.min(100, (totalStars / Math.max(1, totalPossibleStars)) * 100);

  const completedSet = new Set(completedLevelIds);
  const extraCompleted = completedLevelIds.filter((id) => id > ORIGINAL_LEVEL_COUNT);
  const nextUnlockedLevel = Math.max(maxLevel + 1, 1);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0" style={{ backgroundColor: '#0B1020' }}>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Top bar: back link + stats */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <Link to="/games" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> All Topics
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-semibold">
              <Zap className="w-3 h-3" /> {progress.streak.count}d
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Trophy className="w-3 h-3" /> {progress.totalXp}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <CheckIcon /> {completedSet.size}
            </span>
          </div>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg shrink-0">
              <Gamepad2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight truncate">{topic}</h1>
              <p className="text-white/50 text-xs sm:text-sm mt-0.5">
                {completedSet.size} levels cleared · {totalStars} ⭐ earned
              </p>
            </div>
            {allOriginalDone && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Crown className="w-3.5 h-3.5" /> Mastered
              </div>
            )}
          </div>
        </motion.div>

        {/* Original 7 levels: candy-cane path */}
        <div className="bg-[#0d0f1f] border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-5 mb-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 sm:mb-4 px-1 relative z-10">
            <h2 className="text-sm sm:text-base font-semibold text-white">Starter Path</h2>
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-amber-300 font-semibold">{levelResults.reduce((s, r) => s + (r?.stars || 0), 0)}</span>
              <span>/ 21</span>
            </div>
          </div>

          {(() => {
            const H = 340;
            const centers = [70, 200, 110, 230, 80, 210, 130];
            const nodeSize = 72;
            const innerW = 900;
            const innerH = H;
            const xPositions = Array.from({ length: displayLevels }, (_, i) => (i + 0.5) * (innerW / displayLevels));

            const segs = Array.from({ length: displayLevels - 1 }, (_, i) => ({
              x1: xPositions[i], y1: centers[i],
              x2: xPositions[i + 1], y2: centers[i + 1],
            }));

            return (
              <div className="relative w-full" style={{ height: H }}>
                <svg
                  viewBox={`0 0 ${innerW} ${innerH}`}
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <defs>
                    <linearGradient id="candy" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="candyDim" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" stopOpacity="0.45" />
                      <stop offset="50%" stopColor="#64748b" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#475569" stopOpacity="0.45" />
                    </linearGradient>
                  </defs>
                  {segs.map((s, i) => {
                    const midX = (s.x1 + s.x2) / 2;
                    const cp1Y = s.y1 + (s.y2 - s.y1) * 0.3;
                    const cp2Y = s.y2 - (s.y2 - s.y1) * 0.3;
                    const d = `M ${s.x1} ${s.y1} C ${midX} ${cp1Y}, ${midX} ${cp2Y}, ${s.x2} ${s.y2}`;
                    const isActive = !!(levelResults[i]?.stars && levelResults[i + 1]?.stars);
                    return (
                      <g key={i}>
                        <path d={d} stroke="url(#candyDim)" strokeWidth="8" fill="none" strokeLinecap="round" />
                        {isActive && (
                          <>
                            <path d={d} stroke="url(#candy)" strokeWidth="8" fill="none" strokeLinecap="round" />
                            <path d={d} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="8 10" opacity="0.7" />
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {Array.from({ length: displayLevels }, (_, i) => {
                  const id = i + 1;
                  const lvl = getLevelDef(id);
                  const meta = difficultyMeta[lvl.difficulty];
                  const result = levelResults[i];
                  const unlocked = isLevelUnlocked(topic, id);
                  const isCompleted = result && result.stars >= 1;
                  const leftPct = (xPositions[i] / innerW) * 100;
                  return (
                    <div
                      key={id}
                      className="absolute"
                      style={{
                        left: `calc(${leftPct}% - ${nodeSize / 2}px)`,
                        top: centers[i] - nodeSize / 2,
                        width: nodeSize,
                      }}
                    >
                      {unlocked ? (
                        <Link to={`/games/${encodeURIComponent(topic)}/${id}`} className="block group">
                          <Stars count={result?.stars || 0} />
                          <div className={`relative w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-xl transition-all ${
                            isCompleted
                              ? `bg-gradient-to-br ${meta.gradient} ring-2 ${meta.ring} group-hover:scale-110 group-hover:shadow-2xl`
                              : `bg-gradient-to-br ${meta.gradient} ring-2 ${meta.ring} group-hover:scale-110 group-hover:brightness-110`
                          }`}>
                            <span className="drop-shadow-md">{id}</span>
                            {isCompleted && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-2 border-[#0d0f1f] flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="text-center mt-1.5 px-0.5">
                            <div className={`text-[9px] sm:text-[11px] font-semibold ${meta.color}`}>{meta.label}</div>
                            <div className="text-[10px] sm:text-sm font-bold text-white leading-tight whitespace-nowrap">{lvl.name}</div>
                            <div className="hidden sm:block text-[10px] text-white/40 leading-tight whitespace-nowrap">{lvl.desc}</div>
                          </div>
                        </Link>
                      ) : (
                        <div className="block cursor-not-allowed">
                          <div className="flex justify-center h-3.5 mb-0.5">
                            <Stars count={0} />
                          </div>
                          <div className="relative w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full bg-white/[0.04] border-2 border-white/10 flex items-center justify-center text-white/30 text-lg sm:text-xl font-bold">
                            {id}
                            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/40">
                              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                            </div>
                          </div>
                          <div className="text-center mt-1.5 px-0.5">
                            <div className="text-[9px] sm:text-[11px] font-semibold text-white/30">{meta.label}</div>
                            <div className="text-[10px] sm:text-sm font-bold text-white/30 leading-tight whitespace-nowrap">{lvl.name}</div>
                            <div className="hidden sm:block text-[10px] text-white/20 leading-tight whitespace-nowrap">{lvl.desc}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

        {/* Infinite Advanced Levels */}
        <div className="bg-[#0d0f1f] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                Advanced Levels
              </h2>
              <p className="text-[10px] sm:text-xs text-white/40 mt-0.5">
                Infinite levels with unique MCQ questions — pool of {poolSize} questions
              </p>
            </div>
            <Link
              to={`/games/${encodeURIComponent(topic)}/${nextUnlockedLevel}`}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition"
            >
              Play Level {nextUnlockedLevel} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {extraCompleted.length === 0 ? (
            <div className="text-center py-6 text-white/40 text-xs sm:text-sm">
              <Sparkles className="w-5 h-5 mx-auto mb-2 opacity-40" />
              Clear all 7 starter levels to unlock the advanced path.
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
              {extraCompleted.slice(-40).map((id) => {
                const lvl = getLevelDef(id);
                const meta = difficultyMeta[lvl.difficulty];
                const result = getLevel(topic, id);
                return (
                  <Link
                    key={id}
                    to={`/games/${encodeURIComponent(topic)}/${id}`}
                    className="group relative aspect-square rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition flex flex-col items-center justify-center p-1.5"
                  >
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${meta.gradient} opacity-10 group-hover:opacity-20 transition`} />
                    <div className="relative text-center">
                      <div className="text-[10px] sm:text-xs font-bold text-white">{id}</div>
                      <div className="flex justify-center mt-0.5">
                        <Stars count={result?.stars || 0} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Progress + Next Reward */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          <div className="sm:col-span-2 bg-[#0d0f1f] border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white">Your Progress</div>
                <div className="text-[10px] sm:text-xs text-white/40 mt-0.5">
                  {completedSet.size} of {totalLevels} levels · {totalStars}/{totalPossibleStars} ⭐
                </div>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-400">{Math.round(progressPct)}%</div>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              />
            </div>
          </div>
          <div className="bg-[#0d0f1f] border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-white/40">Next Reward</div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">
                +{30 + nextUnlockedLevel * 10} XP
              </div>
              <div className="text-[10px] sm:text-xs text-white/40 truncate">Complete Level {nextUnlockedLevel}</div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-[#0d0f1f] border border-white/10 rounded-2xl p-4 sm:p-5">
          <h2 className="text-sm sm:text-base font-semibold text-white mb-3">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Gamepad2, color: 'from-violet-500 to-purple-500', title: 'Pick a Level', desc: 'Starter path or advanced — every level unique' },
              { icon: Code2, color: 'from-cyan-500 to-blue-500', title: 'Solve MCQs', desc: 'Bite-sized multiple-choice questions' },
              { icon: Trophy, color: 'from-amber-500 to-orange-500', title: 'Earn Rewards', desc: 'XP, stars, stickers, and unlock the next level' },
            ].map((s) => (
              <div key={s.title} className="bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-2`}>
                  <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">{s.title}</div>
                <div className="text-[10px] sm:text-xs text-white/40 leading-relaxed mt-0.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  );
}
