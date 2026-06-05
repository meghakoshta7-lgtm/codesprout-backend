import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Award, Link2, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { StudyProgress, InterviewExperience, CommunityResource, WeeklyChallenge } from '../types/community';

export default function FeedTab({ community, communityId }: { community: any; communityId: string }) {
  const [progress, setProgress] = useState<StudyProgress[]>([]);
  const [interviews, setInterviews] = useState<InterviewExperience[]>([]);
  const [resources, setResources] = useState<CommunityResource[]>([]);
  const [challenges, setChallenges] = useState<WeeklyChallenge[]>([]);

  useEffect(() => { loadFeed(); }, [communityId]);

  const loadFeed = async () => {
    try {
      const [pRes, iRes, rRes, cRes] = await Promise.all([
        communityApi.getProgress(communityId).catch(() => ({ data: [] })),
        communityApi.getInterviews(communityId).catch(() => ({ data: [] })),
        communityApi.getResources(communityId).catch(() => ({ data: [] })),
        communityApi.getChallenges(communityId).catch(() => ({ data: [] })),
      ]);
      setProgress(pRes.data.slice(-5));
      setInterviews(iRes.data.slice(-3));
      setResources(rRes.data.slice(-3));
      setChallenges(cRes.data.filter(c => c.active));
    } catch { /* ignore */ }
  };

  const items: { icon: any; color: string; content: any }[] = [];

  progress.forEach(p => items.push({
    icon: CheckCircle, color: 'text-emerald-400',
    content: <span><strong className="text-white">{p.user_name}</strong> <span className="text-white/60">solved {p.questions_solved} question{p.questions_solved !== 1 ? 's' : ''}{p.note ? ` — ${p.note}` : ''}</span></span>,
  }));

  challenges.filter(c => c.active).forEach(c => items.push({
    icon: Award, color: 'text-amber-400',
    content: <span><strong className="text-white">New Challenge:</strong> <span className="text-white/60">{c.title} — {c.days.length} days</span></span>,
  }));

  interviews.forEach(i => items.push({
    icon: Briefcase, color: 'text-blue-400',
    content: <span><strong className="text-white">{i.user_name}</strong> <span className="text-white/60">shared {i.company} interview experience</span></span>,
  }));

  resources.forEach(r => items.push({
    icon: Link2, color: 'text-purple-400',
    content: <span><strong className="text-white">{r.user_name}</strong> <span className="text-white/60">shared <Link to={r.url} target="_blank" className="text-primary-400 hover:underline">{r.title}</Link></span></span>,
  }));

  items.sort(() => Math.random() - 0.5);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-4 h-4 text-primary-400" />
        <h3 className="text-sm font-semibold text-white">Activity Feed</h3>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-12 text-white/30 bg-white/5 rounded-xl border border-white/10">
          <TrendingUp className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm px-4">No activity yet. Join discussions, share resources, or solve questions!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <item.icon className={`w-4 h-4 mt-0.5 ${item.color} shrink-0`} />
              <div className="text-sm break-words flex-1 min-w-0">{item.content}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
