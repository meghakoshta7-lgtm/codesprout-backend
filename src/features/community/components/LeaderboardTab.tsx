import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { LeaderboardEntry } from '../types/community';

const rankIcons = [Trophy, Medal, Award];
const rankColors = ['text-yellow-400', 'text-gray-300', 'text-amber-600'];

export default function LeaderboardTab({ community, communityId }: { community: any; communityId: string }) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => { loadLeaderboard(); }, []);

  const loadLeaderboard = async () => {
    try { const res = await communityApi.getLeaderboard(communityId); setEntries(res.data); }
    catch { /* ignore */ }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
        <Trophy className="w-4 h-4 text-yellow-400" /> Top Contributors
      </h3>
      {entries.length === 0 ? (
        <div className="text-center py-12 text-white/30">
          <TrendingUp className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm">No points yet. Start contributing to climb the leaderboard!</p>
          <div className="mt-3 text-xs text-white/40 space-y-1">
            <p>📝 Answer Posted +10</p>
            <p>👍 Answer Upvoted +5</p>
            <p>✅ Question Solved +2</p>
            <p>📅 Daily Login +1</p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {entries.slice(0, 20).map((e, i) => {
            const RankIcon = rankIcons[i] || null;
            return (
              <motion.div key={e.user_id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: i < 3 ? `${rankColors[i] || '#ffffff'}20` : '#ffffff10', color: rankColors[i] || '#ffffff60' }}>
                    {i < 3 && RankIcon ? <RankIcon className="w-4 h-4" /> : `#${i + 1}`}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white">{e.user_name}</span>
                    <p className="text-xs text-white/40">{e.total_points} points</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary-400">{e.total_points}</span>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
