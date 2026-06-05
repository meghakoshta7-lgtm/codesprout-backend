import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'codesprout_game_progress_v1';

export interface LevelResult {
  score: number;
  total: number;
  stars: number;
  best: number;
  completedAt: number;
  perfect: boolean;
}

export interface TopicProgress {
  levels: Record<number, LevelResult>;
}

export interface GameProgress {
  topics: Record<string, TopicProgress>;
  stickers: string[];
  badges: string[];
  streak: { count: number; lastDate: string };
  totalXp: number;
  perfectLevels: number;
}

const empty: GameProgress = {
  topics: {},
  stickers: [],
  badges: [],
  streak: { count: 0, lastDate: '' },
  totalXp: 0,
  perfectLevels: 0,
};

function read(): GameProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...empty };
    const parsed = JSON.parse(raw);
    return { ...empty, ...parsed, streak: { ...empty.streak, ...(parsed.streak || {}) } };
  } catch { return { ...empty }; }
}

function write(p: GameProgress) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

function today() { return new Date().toDateString(); }

export function calcStars(score: number, total: number): number {
  if (total === 0) return 0;
  const pct = score / total;
  if (pct >= 1) return 3;
  if (pct >= 0.66) return 2;
  if (pct >= 0.34) return 1;
  return 0;
}

export function useGameProgress() {
  const [progress, setProgress] = useState<GameProgress>(() => read());

  useEffect(() => { write(progress); }, [progress]);

  const getLevel = useCallback((topic: string, levelId: number): LevelResult | undefined => {
    return progress.topics[topic]?.levels?.[levelId];
  }, [progress]);

  const isLevelUnlocked = useCallback((topic: string, levelId: number): boolean => {
    if (levelId === 1) return true;
    const prev = getLevel(topic, levelId - 1);
    if (!prev) return false;
    return prev.stars >= 1;
  }, [getLevel]);

  const saveLevel = useCallback((
    topic: string,
    levelId: number,
    score: number,
    total: number,
    stickersEarned: string[],
    badgesEarned: string[],
  ) => {
    setProgress((prev) => {
      const next: GameProgress = {
        ...prev,
        topics: { ...prev.topics },
        stickers: [...prev.stickers],
        badges: [...prev.badges],
      };
      const topicPrev = next.topics[topic] || { levels: {} };
      const levelPrev = topicPrev.levels[levelId];
      const stars = calcStars(score, total);
      const perfect = score === total;
      const newResult: LevelResult = {
        score,
        total,
        stars: Math.max(levelPrev?.stars || 0, stars),
        best: Math.max(levelPrev?.best || 0, score),
        completedAt: Date.now(),
        perfect: perfect || !!levelPrev?.perfect,
      };
      next.topics[topic] = {
        levels: { ...topicPrev.levels, [levelId]: newResult },
      };

      for (const s of stickersEarned) if (!next.stickers.includes(s)) next.stickers.push(s);
      for (const b of badgesEarned) if (!next.badges.includes(b)) next.badges.push(b);

      const xpGain = score * 10 + (perfect ? 50 : 0) + stars * 5;
      next.totalXp = (next.totalXp || 0) + xpGain;
      if (perfect && !levelPrev?.perfect) next.perfectLevels = (next.perfectLevels || 0) + 1;

      const lastDate = next.streak.lastDate;
      const todayStr = today();
      if (lastDate !== todayStr) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        next.streak = {
          count: lastDate === yesterday ? next.streak.count + 1 : 1,
          lastDate: todayStr,
        };
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => { setProgress({ ...empty }); }, []);

  return {
    progress,
    getLevel,
    isLevelUnlocked,
    saveLevel,
    reset,
  };
}
