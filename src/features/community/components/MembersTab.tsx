import { Users, Crown } from 'lucide-react';
import type { Community } from '../types/community';

export default function MembersTab({ community }: { community: Community; communityId: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-6">
      <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
        <Users className="w-4 h-4 text-primary-400" /> Members ({community.members.length})
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {community.members.map(m => (
          <div key={m.user_id} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 min-w-0">
            <div className="w-10 h-10 rounded-full bg-primary-500/20 text-primary-400 text-sm font-bold flex items-center justify-center shrink-0">
              {m.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-sm font-medium text-white break-words">{m.name}</span>
                {m.user_id === community.created_by && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 shrink-0"><Crown className="w-3 h-3" /> Owner</span>
                )}
              </div>
              <p className="text-[10px] text-white/40">Joined {new Date(m.joined_at).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
