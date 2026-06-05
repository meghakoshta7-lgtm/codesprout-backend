import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus, X, Edit3 } from 'lucide-react';
import { communityApi } from '../api/communityApi';
import type { CommunityNote } from '../types/community';
import toast from 'react-hot-toast';

export default function NotesTab({ community, communityId }: { community: any; communityId: string }) {
  const [notes, setNotes] = useState<CommunityNote[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => { loadNotes(); }, []);

  const loadNotes = async () => {
    try { const res = await communityApi.getNotes(communityId); setNotes(res.data); }
    catch { /* ignore */ }
  };

  const saveNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    try {
      if (editing) {
        await communityApi.updateNote(editing, form);
        toast.success('Note updated!');
      } else {
        await communityApi.createNote({ community_id: communityId, ...form });
        toast.success('Note created!');
      }
      setShowForm(false); setEditing(null); setForm({ title: '', content: '' }); loadNotes();
    } catch { toast.error('Failed to save'); }
  };

  const edit = (note: CommunityNote) => {
    setForm({ title: note.title, content: note.content }); setEditing(note.id); setShowForm(true);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2"><FileText className="w-4 h-4 text-primary-400" /> Community Notes</h3>
        <button onClick={() => { setShowForm(!showForm); setEditing(null); setForm({ title: '', content: '' }); }}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-all text-xs">
          <Plus className="w-3.5 h-3.5" /> {showForm ? 'Cancel' : 'New Note'}
        </button>
      </div>

      {showForm && (
        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={saveNote} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Note title" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm font-semibold" />
          <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Write your notes here... use markdown or plain text" className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm resize-none min-h-[150px]" rows={6} />
          <button type="submit" className="px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600">{editing ? 'Update' : 'Create'} Note</button>
        </motion.form>
      )}

      {notes.length === 0 ? (
        <div className="text-center py-12 text-white/30 bg-white/5 rounded-xl border border-white/10">
          <FileText className="w-12 h-12 mx-auto mb-3" />
          <p className="text-sm">No notes yet. Create study notes for your group!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {notes.map((note, i) => (
            <motion.div key={note.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-sm font-semibold text-white break-words flex-1 min-w-0">{note.title}</h4>
                <button onClick={() => edit(note)} className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 p-1 rounded text-white/40 hover:text-white transition-all shrink-0">
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-xs text-white/60 whitespace-pre-wrap line-clamp-4">{note.content}</p>
              <div className="flex items-center justify-between mt-2 text-[10px] text-white/30">
                <span>By {note.user_name}</span>
                <span>{new Date(note.updated_at || note.created_at).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
