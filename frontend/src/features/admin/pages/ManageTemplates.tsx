import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit3, Trash2, Lock, Unlock, Eye, X, Crown, Check, Copy, Layout } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import toast from 'react-hot-toast';

interface TemplateData {
  id: string;
  name: string;
  description: string;
  is_ats_friendly: boolean;
  columns: 1 | 2;
  colors: string[];
  isPremium: boolean;
  price: number;
  sections: string[];
}

const DEFAULT_SECTIONS = ['summary', 'skills', 'experience', 'education', 'projects', 'certifications'];

const FALLBACK_TEMPLATES: TemplateData[] = [
  { id: 'ats-beginner', name: 'ATS Beginner', description: 'Clean single-column layout optimized for ATS parsers', is_ats_friendly: true, columns: 1, colors: ['#1e293b', '#f8fafc'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'sde', name: 'SDE Resume', description: 'Software engineering focused with technical skills emphasis', is_ats_friendly: true, columns: 1, colors: ['#0f172a', '#e2e8f0'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'frontend', name: 'Frontend Resume', description: 'Modern layout with visual portfolio & project highlights', is_ats_friendly: false, columns: 2, colors: ['#312e81', '#f0f9ff'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'backend', name: 'Backend Resume', description: 'System design & architecture focused clean format', is_ats_friendly: true, columns: 1, colors: ['#1e3a5f', '#f1f5f9'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'fullstack', name: 'Full Stack Resume', description: 'Versatile format balancing frontend & backend skills', is_ats_friendly: true, columns: 1, colors: ['#0d9488', '#f0fdfa'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'modern-professional', name: 'Modern Professional CV', description: 'Dark sidebar with photo, About Me, Skills & Language sections', is_ats_friendly: false, columns: 2, colors: ['#2d3748', '#ffffff'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'blank-canvas', name: 'Blank Canvas Builder', description: 'Fully editable blank canvas — add/remove sections, upload photo, two-column professional layout', is_ats_friendly: true, columns: 2, colors: ['#2563eb', '#ffffff'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS },
  { id: 'grayblue-premium', name: 'Gray Blue Pro', description: 'Premium gray-blue sidebar layout with enhanced design', is_ats_friendly: false, columns: 2, colors: ['#4a5568', '#ffffff'], isPremium: true, price: 5, sections: DEFAULT_SECTIONS },
  { id: 'dark-photo-premium', name: 'Dark Photo Pro', description: 'Premium dark sidebar with photo & refined typography', is_ats_friendly: false, columns: 2, colors: ['#1a202c', '#ffffff'], isPremium: true, price: 5, sections: DEFAULT_SECTIONS },
  { id: 'centered-premium', name: 'Centered Pro', description: 'Premium centered single-column with pro finishing', is_ats_friendly: true, columns: 1, colors: ['#2d3748', '#f7fafc'], isPremium: true, price: 5, sections: DEFAULT_SECTIONS },
  { id: 'brown-premium', name: 'Brown Pro', description: 'Premium brown sidebar with advanced styling', is_ats_friendly: false, columns: 2, colors: ['#744210', '#ffffff'], isPremium: true, price: 5, sections: DEFAULT_SECTIONS },
  { id: 'dark-right-premium', name: 'Dark Right Pro', description: 'Premium dark sidebar right with photo & contact', is_ats_friendly: false, columns: 2, colors: ['#1a202c', '#ffffff'], isPremium: true, price: 5, sections: DEFAULT_SECTIONS },
];

const STORAGE_KEY = 'admin_templates';

function MiniPreview({ t }: { t: TemplateData }) {
  const accent = t.colors[0] || '#6d28d9';
  const bg = t.colors[1] || '#f8fafc';
  return (
    <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-200 flex" style={{ backgroundColor: bg }}>
      {t.columns === 2 && (
        <div className="w-[38%] p-2 flex flex-col gap-1" style={{ backgroundColor: accent }}>
          <div className="w-8 h-8 rounded-full mx-auto bg-white/20" />
          <div className="h-2 w-16 mx-auto bg-white/20 rounded" />
          <div className="space-y-1 mt-2">
            <div className="h-1.5 w-full bg-white/10 rounded" />
            <div className="h-1.5 w-full bg-white/10 rounded" />
            <div className="h-1.5 w-3/4 bg-white/10 rounded" />
          </div>
        </div>
      )}
      <div className="flex-1 p-2 space-y-1.5">
        <div className="h-3 w-24 rounded" style={{ backgroundColor: accent + '20' }} />
        <div className="h-2 w-32 bg-gray-100 rounded" />
        <div className="space-y-1 mt-2">
          <div className="h-2 w-full bg-gray-100 rounded" />
          <div className="h-2 w-5/6 bg-gray-100 rounded" />
          <div className="h-2 w-4/6 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}

function TemplateForm({ data, onSave, onClose }: {
  data?: TemplateData;
  onSave: (t: TemplateData) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<TemplateData>(
    data || {
      id: '', name: '', description: '', is_ats_friendly: true, columns: 1,
      colors: ['#6d28d9', '#f8fafc'], isPremium: false, price: 0, sections: DEFAULT_SECTIONS,
    }
  );

  const sectionOptions = [
    { value: 'summary', label: 'Profile / Summary' },
    { value: 'skills', label: 'Skills' },
    { value: 'experience', label: 'Work Experience' },
    { value: 'education', label: 'Education' },
    { value: 'projects', label: 'Projects' },
    { value: 'certifications', label: 'Certifications / Languages' },
  ];

  return (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="text-xs text-slate-400 mb-1 block">Template ID (unique, use hyphens)</label>
          <input value={form.id} onChange={e => setForm(f => ({ ...f, id: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="my-custom-template" />
        </div>
        <div className="col-span-2">
          <label className="text-xs text-slate-400 mb-1 block">Template Name</label>
          <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="My Custom Template" />
        </div>
        <div className="col-span-2">
          <label className="text-xs text-slate-400 mb-1 block">Description</label>
          <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 h-16 resize-none" placeholder="Describe your template..." />
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Columns</label>
          <select value={form.columns} onChange={e => setForm(f => ({ ...f, columns: Number(e.target.value) }))} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50">
            <option value={1}>Single Column</option>
            <option value={2}>Two Columns</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">ATS Friendly</label>
          <select value={form.is_ats_friendly ? 'yes' : 'no'} onChange={e => setForm(f => ({ ...f, is_ats_friendly: e.target.value === 'yes' }))} className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Accent Color</label>
          <div className="flex gap-2 items-center">
            <input type="color" value={form.colors[0]} onChange={e => setForm(f => ({ ...f, colors: [e.target.value, f.colors[1]] }))} className="w-10 h-10 rounded cursor-pointer border border-white/10" />
            <span className="text-xs text-slate-500">{form.colors[0]}</span>
          </div>
        </div>
        <div>
          <label className="text-xs text-slate-400 mb-1 block">Background Color</label>
          <div className="flex gap-2 items-center">
            <input type="color" value={form.colors[1]} onChange={e => setForm(f => ({ ...f, colors: [f.colors[0], e.target.value] }))} className="w-10 h-10 rounded cursor-pointer border border-white/10" />
            <span className="text-xs text-slate-500">{form.colors[1]}</span>
          </div>
        </div>
        <div className="flex gap-4 items-end">
          <div>
            <label className="text-xs text-slate-400 mb-1 block flex items-center gap-1"><Lock className="w-3 h-3" /> Premium</label>
            <button
              onClick={() => setForm(f => ({ ...f, isPremium: !f.isPremium, price: !f.isPremium ? 5 : 0 }))}
              className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${form.isPremium ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400' : 'bg-white/5 border-white/10 text-slate-400'}`}
            >
              {form.isPremium ? 'Premium ✓' : 'Free'}
            </button>
          </div>
          {form.isPremium && (
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Price (₹)</label>
              <input type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))} className="w-20 bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50" />
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="text-xs text-slate-400 mb-1 block">Sections (tap to toggle)</label>
        <div className="flex flex-wrap gap-2">
          {sectionOptions.map(s => {
            const active = form.sections.includes(s.value);
            return (
              <button key={s.value} onClick={() => setForm(f => ({
                ...f, sections: active ? f.sections.filter(x => x !== s.value) : [...f.sections, s.value],
              }))} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${active ? 'bg-violet-600/20 border-violet-500/50 text-violet-300' : 'bg-white/5 border-white/10 text-slate-500'}`}>
                {active && <Check className="w-3 h-3 inline mr-1" />}{s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button onClick={() => onSave(form)} className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-fuchsia-500 transition-all">
          {data ? 'Update Template' : 'Create Template'}
        </button>
        <button onClick={onClose} className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-400 text-sm hover:bg-white/5 transition-colors">Cancel</button>
      </div>
    </div>
  );
}

export default function ManageTemplates() {
  const [templates, setTemplates] = useState<TemplateData[]>([]);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<TemplateData | undefined>(undefined);
  const [showPreview, setShowPreview] = useState<string | null>(null);

  const uniqueId = (base: string) => {
    const exists = templates.some(t => t.id === base);
    if (!exists) return base;
    let i = 1;
    while (templates.some(t => t.id === `${base}-${i}`)) i++;
    return `${base}-${i}`;
  };

  useEffect(() => {
    import('@/features/resume/api/resumeApi').then(({ resumeApi }) =>
      resumeApi.getTemplates().then(r => setTemplates(r.data.templates || [])).catch(() => setTemplates(FALLBACK_TEMPLATES))
    );
  }, []);

  const persist = (ts: TemplateData[]) => { setTemplates(ts); };

  const filtered = useMemo(() => {
    if (!search) return templates;
    const q = search.toLowerCase();
    return templates.filter(t => t.name.toLowerCase().includes(q) || t.id.includes(q));
  }, [templates, search]);

  const handleSave = async (data: TemplateData) => {
    try {
      const { resumeApi } = await import('@/features/resume/api/resumeApi');
      if (editData) {
        await resumeApi.updateTemplate(editData.id, data);
        persist(templates.map(t => t.id === editData.id ? data : t));
        toast.success('Template updated!');
      } else {
        if (!data.id.trim()) { toast.error('Template ID is required'); return; }
        await resumeApi.createTemplate(data);
        persist([...templates, data]);
        toast.success('Template created!');
      }
      setShowModal(false);
      setEditData(undefined);
    } catch (e: any) {
      toast.error(e.response?.data?.error || 'Save failed');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this template?')) return;
    try {
      const { resumeApi } = await import('@/features/resume/api/resumeApi');
      await resumeApi.deleteTemplate(id);
      persist(templates.filter(t => t.id !== id));
      toast.success('Template deleted');
    } catch { toast.error('Delete failed'); }
  };

  const togglePremium = async (id: string) => {
    try {
      const { resumeApi } = await import('@/features/resume/api/resumeApi');
      const tpl = templates.find(t => t.id === id);
      await resumeApi.updateTemplate(id, { isPremium: !tpl?.isPremium, price: !tpl?.isPremium ? 5 : 0 });
      persist(templates.map(t => t.id === id ? { ...t, isPremium: !t.isPremium, price: !t.isPremium ? 5 : 0 } : t));
      toast.success('Premium status toggled');
    } catch { toast.error('Toggle failed'); }
  };

  const handleAdd = () => {
    setEditData(undefined);
    setShowModal(true);
  };

  const handleEdit = (t: TemplateData) => {
    setEditData(t);
    setShowModal(true);
  };

  const handleDuplicate = async (t: TemplateData) => {
    try {
      const { resumeApi } = await import('@/features/resume/api/resumeApi');
      await resumeApi.duplicateTemplate(t.id);
      const newId = uniqueId(t.id + '-copy');
      const copy = { ...t, id: newId, name: t.name + ' (Copy)' };
      persist([...templates, copy]);
      toast.success('Template duplicated!');
    } catch { toast.error('Duplicate failed'); }
  };

  return (
    <div className="flex bg-gray-900 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2"><Layout className="w-6 h-6 text-violet-400" /> Resume Template Builder</h1>
            <p className="text-slate-400 text-sm mt-1">{templates.length} templates · Manage, create & customize resume templates</p>
          </div>
          <button onClick={handleAdd} className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Template
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-5 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search templates..." className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50" />
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {filtered.map(t => (
            <motion.div key={t.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden group hover:border-violet-500/50 transition-all hover:shadow-lg hover:shadow-violet-500/5">
              {/* Mini Preview */}
              <div className="relative h-40" onClick={() => setShowPreview(showPreview === t.id ? null : t.id)}>
                <MiniPreview t={t} />
                {t.isPremium && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                    <Crown className="w-3 h-3" /> ₹{t.price}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white/0 group-hover:text-white/80 transition-all" />
                </div>
              </div>

              {/* Info */}
              <div className="p-3 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate">{t.name}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{t.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span className={`px-1.5 py-0.5 rounded-full ${t.is_ats_friendly ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'}`}>{t.is_ats_friendly ? 'ATS' : 'Design'}</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-white/5">{t.columns}c</span>
                  <span className="px-1.5 py-0.5 rounded-full" style={{ backgroundColor: t.colors[0] + '20', color: t.colors[0] }}>{t.isPremium ? 'Premium' : 'Free'}</span>
                  <span className="text-[9px] text-slate-500 ml-auto">{t.id}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-1.5 pt-1">
                  <button onClick={() => handleEdit(t)} className="flex-1 py-1.5 rounded-lg bg-white/5 text-slate-400 text-[11px] hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-1"><Edit3 className="w-3 h-3" /> Edit</button>
                  <button onClick={() => handleDuplicate(t)} className="flex-1 py-1.5 rounded-lg bg-white/5 text-slate-400 text-[11px] hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-1"><Copy className="w-3 h-3" /> Duplicate</button>
                  <button onClick={() => togglePremium(t.id)} className={`py-1.5 px-2 rounded-lg text-[11px] border transition-colors ${t.isPremium ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}>{t.isPremium ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}</button>
                  <button onClick={() => handleDelete(t.id)} className="py-1.5 px-2 rounded-lg bg-red-500/10 text-red-400 text-[11px] hover:bg-red-500/20 transition-colors"><Trash2 className="w-3 h-3" /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Layout className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-500">No templates found</p>
          </div>
        )}

        {/* Add/Edit Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="rounded-2xl max-w-lg w-full p-6 border border-white/10" style={{ backgroundColor: 'rgba(17, 24, 39, 0.98)', backdropFilter: 'blur(20px)' }}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white">{editData ? 'Edit Template' : 'Create Template'}</h3>
                  <button onClick={() => { setShowModal(false); setEditData(undefined); }} className="text-slate-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                </div>
                <TemplateForm data={editData} onSave={handleSave} onClose={() => { setShowModal(false); setEditData(undefined); }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} onClick={() => setShowPreview(null)}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="rounded-2xl max-w-2xl w-full p-6 border border-white/10" style={{ backgroundColor: 'rgba(17, 24, 39, 0.98)', backdropFilter: 'blur(20px)' }} onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{templates.find(t => t.id === showPreview)?.name} Preview</h3>
                  <button onClick={() => setShowPreview(null)} className="text-slate-500 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  {showPreview && <MiniPreview t={templates.find(t => t.id === showPreview)!} />}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
