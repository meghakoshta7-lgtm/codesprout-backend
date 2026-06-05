import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link2, Plus, X, ExternalLink, Youtube, FileText, BookOpen, ChevronDown } from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { CommunityResource } from '../types/community';
import toast from 'react-hot-toast';

const typeIcons: Record<string, any> = { youtube: Youtube, article: FileText, pdf: FileText, roadmap: BookOpen, other: Link2 };
const typeColors: Record<string, string> = { youtube: 'text-red-400', article: 'text-blue-400', pdf: 'text-orange-400', roadmap: 'text-emerald-400', other: 'text-purple-400' };
const typeOptions: { value: CommunityResource['type']; label: string }[] = [
  { value: 'youtube', label: 'YouTube' },
  { value: 'article', label: 'Article' },
  { value: 'pdf', label: 'PDF' },
  { value: 'roadmap', label: 'Roadmap' },
  { value: 'other', label: 'Other' },
];

export default function ResourcesTab({ community, communityId }: { community: any; communityId: string }) {
  const [resources, setResources] = useState<CommunityResource[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', type: 'other' as CommunityResource['type'], url: '', description: '' });

  useEffect(() => { load(); }, []);

  const load = async () => {
    try { const res = await communityApi.getResources(communityId); setResources(res.data); }
    catch { /* ignore */ }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.url.trim()) return;
    try {
      await communityApi.createResource({ community_id: communityId, ...form });
      toast.success('Resource shared!'); setShowForm(false); setForm({ title: '', type: 'other', url: '', description: '' }); load();
    } catch { toast.error('Failed to share'); }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2"><Link2 className="w-4 h-4 text-purple-400" /> Shared Resources</h3>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-all text-xs">
          <Plus className="w-3.5 h-3.5" /> {showForm ? 'Cancel' : 'Share'}
        </button>
      </div>

      {showForm && (
        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Title *" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
          <input type="url" value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} placeholder="URL *" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
          <div className="relative">
            <select
              value={form.type}
              onChange={e => setForm({ ...form, type: e.target.value as CommunityResource['type'] })}
              style={{ colorScheme: 'dark' }}
              className="w-full appearance-none px-3 py-2 pr-9 rounded-lg bg-[#0d0f1f] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm cursor-pointer"
            >
              {typeOptions.map(o => (
                <option key={o.value} value={o.value} className="bg-[#0d0f1f] text-white">{o.label}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-white/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm resize-none" rows={2} />
          <button type="submit" className="px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600">Share</button>
        </motion.form>
      )}

      {resources.length === 0 ? (
        <div className="text-center py-12 text-white/30 bg-white/5 rounded-xl border border-white/10">
          <Link2 className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm">No resources shared yet.</p>
        </div>
      ) : (
        resources.map((r, i) => {
          const Icon = typeIcons[r.type] || Link2;
          return (
            <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
              className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${typeColors[r.type] || 'text-purple-400'}`} />
                <div className="flex-1 min-w-0">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary-400 hover:underline flex items-center gap-1 break-words">
                    {r.title} <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                  {r.description && <p className="text-xs text-white/50 mt-0.5 break-words">{r.description}</p>}
                  <div className="flex items-center gap-2 mt-1.5 text-[10px] text-white/30 flex-wrap">
                    <span>By {r.user_name}</span>
                    <span>·</span>
                    <span className="capitalize">{r.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </div>
  );
}
