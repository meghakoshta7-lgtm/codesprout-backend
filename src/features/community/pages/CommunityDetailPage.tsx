import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, MessageCircle, Copy, ArrowLeft, LogOut,
  Activity, MessageSquare, Award, FileText,
  Briefcase, Link2, Trophy, Map, ChevronRight,
} from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { Community } from '../types/community';
import toast from 'react-hot-toast';
import FeedTab from '../components/FeedTab';
import ChatTab from '../components/ChatTab';
import DiscussionsTab from '../components/DiscussionsTab';
import LeaderboardTab from '../components/LeaderboardTab';
import ChallengesTab from '../components/ChallengesTab';
import NotesTab from '../components/NotesTab';
import InterviewsTab from '../components/InterviewsTab';
import ResourcesTab from '../components/ResourcesTab';
import RoadmapsTab from '../components/RoadmapsTab';
import MembersTab from '../components/MembersTab';

type CommunityTab = 'feed' | 'chat' | 'discussions' | 'leaderboard' | 'challenges' | 'notes' | 'interviews' | 'resources' | 'roadmaps' | 'members';

const TABS: { key: CommunityTab; label: string; icon: any }[] = [
  { key: 'feed', label: 'Feed', icon: Activity },
  { key: 'chat', label: 'Chat', icon: MessageCircle },
  { key: 'discussions', label: 'Discussions', icon: MessageSquare },
  { key: 'resources', label: 'Resources', icon: Link2 },
  { key: 'interviews', label: 'Interviews', icon: Briefcase },
  { key: 'challenges', label: 'Challenges', icon: Award },
  { key: 'leaderboard', label: 'Leaderboard', icon: Trophy },
  { key: 'notes', label: 'Notes', icon: FileText },
  { key: 'roadmaps', label: 'Roadmaps', icon: Map },
  { key: 'members', label: 'Members', icon: Users },
];

export default function CommunityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [community, setCommunity] = useState<Community | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<CommunityTab>('feed');

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    if (id) loadCommunity(id);
  }, [id]);

  const loadCommunity = async (communityId: string) => {
    try {
      const cRes = await communityApi.get(communityId);
      setCommunity(cRes.data);
    } catch { toast.error('Community not found'); navigate('/communities'); }
    setLoading(false);
  };

  const handleLeave = async () => {
    if (!id || !community) return;
    try { await communityApi.leave(id); toast.success('Left community'); navigate('/communities'); }
    catch { toast.error('Failed to leave'); }
  };

  const copyInvite = () => {
    if (!community) return;
    navigator.clipboard.writeText(community.invite_code);
    toast.success('Invite code copied!');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0B1020' }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/40 text-sm">Loading community...</p>
        </div>
      </div>
    );
  }

  if (!community) return null;

  const tabProps = { community, communityId: id! };
  const memberCount = community.members?.length || 0;

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3">
        {/* Back link */}
        <Link to="/communities" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm mb-4 transition-colors group">
          <ChevronRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform" /> All Communities
        </Link>

        {/* Header Card */}
        <div className="bg-gradient-to-br from-purple-600/20 via-violet-600/10 to-transparent border border-purple-500/20 rounded-2xl p-5 sm:p-6 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">{community.name}</h1>
                {community.description && (
                  <p className="text-white/50 text-sm leading-relaxed">{community.description}</p>
                )}
                <div className="flex items-center gap-4 mt-3 text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {memberCount} member{memberCount !== 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" /> Created by {community.created_by_name}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={copyInvite} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-medium">
                  <Copy className="w-3.5 h-3.5" /> Invite
                </button>
                <button onClick={handleLeave} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-xs font-medium">
                  <LogOut className="w-3.5 h-3.5" /> Leave
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative mb-6">
          <div className="flex gap-1 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  activeTab === tab.key
                    ? 'text-purple-300'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <tab.icon className={`w-3.5 h-3.5 shrink-0 ${activeTab === tab.key ? 'text-purple-400' : 'text-white/30'}`} />
                <span className="hidden sm:inline">{tab.label}</span>
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="community-tab-bg"
                    className="absolute inset-0 rounded-xl bg-purple-500/10 border border-purple-500/20 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          {activeTab === 'feed' && <FeedTab {...tabProps} />}
          {activeTab === 'chat' && <ChatTab {...tabProps} />}
          {activeTab === 'discussions' && <DiscussionsTab {...tabProps} />}
          {activeTab === 'leaderboard' && <LeaderboardTab {...tabProps} />}
          {activeTab === 'challenges' && <ChallengesTab {...tabProps} />}
          {activeTab === 'notes' && <NotesTab {...tabProps} />}
          {activeTab === 'interviews' && <InterviewsTab {...tabProps} />}
          {activeTab === 'resources' && <ResourcesTab {...tabProps} />}
          {activeTab === 'roadmaps' && <RoadmapsTab {...tabProps} />}
          {activeTab === 'members' && <MembersTab {...tabProps} />}
        </motion.div>
      </div>
    </div>
  );
}
