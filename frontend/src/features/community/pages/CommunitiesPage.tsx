import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Plus, LogIn, Copy, X, UserPlus, Hash,
  MessageCircle, ExternalLink, Group, Sparkles,
  ChevronRight, CalendarDays
} from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { Community } from '../types/community';
import toast from 'react-hot-toast';

const COLORS = ['from-purple-500 to-violet-600', 'from-emerald-500 to-teal-500', 'from-amber-500 to-orange-500', 'from-blue-500 to-cyan-500', 'from-rose-500 to-pink-500', 'from-indigo-500 to-purple-500'];

function CommunityCard({ community, index }: { community: Community; index: number }) {
  const color = COLORS[index % COLORS.length];
  const navigate = useNavigate();

  const copyInvite = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(community.invite_code);
    toast.success('Invite code copied!');
  };

  const memberNames = community.members || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      onClick={() => navigate(`/communities/${community.id}`)}
      className="group cursor-pointer bg-[#111827] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
    >
      <div className={`h-24 bg-gradient-to-br ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
        <div className="relative p-4 flex items-end h-full">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors mb-1 truncate">{community.name}</h3>
        {community.description && (
          <p className="text-xs text-white/50 line-clamp-2 mb-3 leading-relaxed">{community.description}</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              {memberNames.length}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5" />
              {community.created_by_name}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={copyInvite}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              title="Copy invite code"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-all">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [form, setForm] = useState({ name: '', description: '' });
  const [inviteCode, setInviteCode] = useState('');
  const [creating, setCreating] = useState(false);
  const [joining, setJoining] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    loadCommunities();
  }, []);

  const loadCommunities = async () => {
    try {
      const res = await communityApi.list();
      setCommunities(res.data);
    } catch { /* ignore */ }
    setLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setCreating(true);
    try {
      const res = await communityApi.create(form.name, form.description);
      setCommunities(prev => [...prev, res.data]);
      setShowCreate(false);
      setForm({ name: '', description: '' });
      toast.success('Community created!');
    } catch { toast.error('Failed to create community'); }
    setCreating(false);
  };

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteCode.trim()) return;
    setJoining(true);
    try {
      const res = await communityApi.join(inviteCode);
      setCommunities(prev => {
        const exists = prev.find(c => c.id === res.data.id);
        return exists ? prev.map(c => c.id === res.data.id ? res.data : c) : [...prev, res.data];
      });
      setShowJoin(false);
      setInviteCode('');
      toast.success('Joined community!');
    } catch { toast.error('Invalid invite code'); }
    setJoining(false);
  };

  return (
    <div className="min-h-screen pb-12 sm:pb-16 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0d0a1a 0%, #130e2a 40%, #0B1020 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168,85,247,0.2) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(124,108,246,0.2) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div>
              <Link to="/" className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm mb-4 transition-colors group">
                <ChevronRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight" style={{ textShadow: '0 0 40px rgba(139,92,246,0.3)' }}>Communities</h1>
              </div>
              <p className="text-white/50 text-sm sm:text-base mb-6 max-w-sm">Create or join study groups to learn together</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all text-sm shadow-lg shadow-purple-500/30">
                  <Plus className="w-4 h-4" /> Create Community
                </button>
                <button onClick={() => setShowJoin(true)} className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all text-sm font-medium">
                  <UserPlus className="w-4 h-4" /> Join Community
                </button>
              </div>
            </div>
            {/* Right Illustration */}
            <div className="hidden lg:flex justify-end">
              <img src="/communities-hero.png" alt="Communities" className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-24 bg-white/5" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                  <div className="h-3 bg-white/5 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : communities.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16 sm:py-20">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
              <Users className="w-10 h-10 text-white/20" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No communities yet</h3>
            <p className="text-white/50 text-sm mb-6 max-w-sm mx-auto">Create a study group or join one with an invite code to start learning together</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => setShowCreate(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all text-sm shadow-lg shadow-purple-500/25">
                <Plus className="w-4 h-4" /> Create Community
              </button>
              <button onClick={() => setShowJoin(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm">
                <LogIn className="w-4 h-4" /> Join
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communities.map((c, i) => (
              <CommunityCard key={c.id} community={c} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* Create Modal */}
      <AnimatePresence>
        {showCreate && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowCreate(false)}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="bg-[#111827] border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 w-full sm:max-w-md shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </span>
                  Create Community
                </h2>
                <button onClick={() => setShowCreate(false)} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all"><X className="w-4 h-4" /></button>
              </div>
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Community Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all text-sm"
                    placeholder="e.g. DSA Warriors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Description <span className="text-white/30">(optional)</span></label>
                  <textarea
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all resize-none text-sm h-24"
                    placeholder="What's this group about?"
                  />
                </div>
                <button
                  type="submit" disabled={creating}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all disabled:opacity-50 text-sm shadow-lg shadow-purple-500/20"
                >
                  {creating ? (
                    <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Creating...</span>
                  ) : 'Create Community'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Join Modal */}
      <AnimatePresence>
        {showJoin && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowJoin(false)}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="bg-[#111827] border border-white/10 rounded-t-2xl sm:rounded-2xl p-6 w-full sm:max-w-md shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <UserPlus className="w-4 h-4 text-white" />
                  </span>
                  Join Community
                </h2>
                <button onClick={() => setShowJoin(false)} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all"><X className="w-4 h-4" /></button>
              </div>
              <form onSubmit={handleJoin} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Invite Code</label>
                  <div className="relative">
                    <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text" required value={inviteCode}
                      onChange={e => setInviteCode(e.target.value.toUpperCase())}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 transition-all uppercase tracking-[0.3em] text-sm font-mono text-center"
                      placeholder="ABCDEF"
                      maxLength={6}
                    />
                  </div>
                  <p className="text-[10px] text-white/30 mt-1.5 text-center">Enter the 6-character invite code shared by community admin</p>
                </div>
                <button
                  type="submit" disabled={joining}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all disabled:opacity-50 text-sm shadow-lg shadow-purple-500/20"
                >
                  {joining ? (
                    <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Joining...</span>
                  ) : 'Join Community'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
