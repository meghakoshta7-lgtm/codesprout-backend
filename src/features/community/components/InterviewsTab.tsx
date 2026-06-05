import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Plus, X, Building2 } from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { InterviewExperience } from '../types/community';
import toast from 'react-hot-toast';

export default function InterviewsTab({ community, communityId }: { community: any; communityId: string }) {
  const [interviews, setInterviews] = useState<InterviewExperience[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ company: '', role: '', rounds: 1, questions_asked: '', experience: '', result: '' });

  useEffect(() => { load(); }, []);

  const load = async () => {
    try { const res = await communityApi.getInterviews(communityId); setInterviews(res.data); }
    catch { /* ignore */ }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company.trim()) return;
    try {
      await communityApi.createInterview({
        community_id: communityId, company: form.company, role: form.role,
        rounds: form.rounds, questions_asked: form.questions_asked.split(',').map(s => s.trim()),
        experience: form.experience, result: form.result,
      });
      toast.success('Experience shared!'); setShowForm(false); setForm({ company: '', role: '', rounds: 1, questions_asked: '', experience: '', result: '' }); load();
    } catch { toast.error('Failed to share'); }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2"><Briefcase className="w-4 h-4 text-blue-400" /> Interview Experiences</h3>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-all text-xs">
          <Plus className="w-3.5 h-3.5" /> {showForm ? 'Cancel' : 'Share'}
        </button>
      </div>

      {showForm && (
        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company *" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
            <input type="text" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="Role (optional)" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="number" value={form.rounds} onChange={e => setForm({ ...form, rounds: parseInt(e.target.value) || 1 })} min={1} placeholder="Rounds" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
            <input type="text" value={form.result} onChange={e => setForm({ ...form, result: e.target.value })} placeholder="Result (e.g. Selected/Rejected)" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
          </div>
          <input type="text" value={form.questions_asked} onChange={e => setForm({ ...form, questions_asked: e.target.value })} placeholder="Questions asked (comma separated)" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm" />
          <textarea value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} placeholder="Share your experience..." className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm resize-none" rows={4} />
          <button type="submit" className="px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600">Share</button>
        </motion.form>
      )}

      {interviews.length === 0 ? (
        <div className="text-center py-12 text-white/30 bg-white/5 rounded-xl border border-white/10">
          <Building2 className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm">No interview experiences shared yet.</p>
        </div>
      ) : (
        interviews.map((item, i) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-white break-words">{item.company} {item.role && <span className="text-white/50">— {item.role}</span>}</h4>
                <p className="text-[10px] text-white/40">{item.user_name} · {item.rounds} round{item.rounds > 1 ? 's' : ''} · {new Date(item.created_at).toLocaleDateString()}</p>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${item.result === 'Selected' ? 'bg-emerald-500/20 text-emerald-400' : item.result === 'Rejected' ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/50'}`}>{item.result || 'N/A'}</span>
            </div>
            {item.experience && <p className="text-xs text-white/60 mb-2 whitespace-pre-wrap break-words">{item.experience}</p>}
            {item.questions_asked.length > 0 && (
              <div>
                <p className="text-[10px] text-white/40 mb-1">Questions Asked:</p>
                <div className="flex flex-wrap gap-1">
                  {item.questions_asked.map((q, qi) => <span key={qi} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10 break-words">{q}</span>)}
                </div>
              </div>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
}
