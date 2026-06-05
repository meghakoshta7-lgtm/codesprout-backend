import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Plus, X, Send } from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { Discussion } from '../types/community';
import toast from 'react-hot-toast';

export default function DiscussionsTab({ community, communityId }: { community: any; communityId: string }) {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);

  useEffect(() => { loadDiscussions(); }, []);

  const loadDiscussions = async () => {
    try { const res = await communityApi.getAllDiscussions(); setDiscussions(res.data.slice(-20).reverse()); }
    catch { /* ignore */ }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary-400" /> Recent Discussions
        </h3>
      </div>
      {discussions.length === 0 ? (
        <div className="text-center py-12 text-white/30 bg-white/5 rounded-xl border border-white/10">
          <MessageSquare className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm">No discussions yet. Start one on a question page!</p>
        </div>
      ) : (
        discussions.map((d, i) => (
          <motion.div key={d.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-7 h-7 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold flex items-center justify-center shrink-0">
                  {d.user_name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-medium text-white break-words block">{d.title || d.content.slice(0, 50)}</span>
                  <p className="text-[10px] text-white/40">{d.user_name} · {new Date(d.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/60 mb-2 line-clamp-2 break-words">{d.content}</p>
            <div className="flex items-center gap-3 text-[10px] text-white/40">
              <span>{d.replies.length} replies</span>
              <Link to={`/questions/${d.question_slug}`} className="text-primary-400 hover:underline">View Question</Link>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
