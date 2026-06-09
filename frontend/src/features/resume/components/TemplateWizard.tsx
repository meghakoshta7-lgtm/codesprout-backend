import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, FileText, Upload, Trash2, Loader2, ChevronRight, ArrowRight,
} from 'lucide-react';
import { resumeApi } from '../api/resumeApi';
import toast from 'react-hot-toast';

/* ─── types ─────────────────────────────────────────────────────────────── */
interface Template {
  id: string;
  name: string;
  description: string;
  is_ats_friendly: boolean;
  columns: number;
  colors?: string[];
  sections?: string[];
}

interface Props {
  onComplete: (data: { templateId: string; formData: any; resumeText?: string }) => void;
  onCancel: () => void;
}

/* ─── mini resume preview per template type ─────────────────────────────── */
function MiniResume({ type, colors }: { type: string; colors: string[] }) {
  const accent = colors?.[0] || '#6d28d9';
  const bg = colors?.[1] || '#f8fafc';

  const layouts: Record<string, React.ReactNode> = {
    'ats-beginner': (
      <div className="flex h-full">
        <div className="w-[32%] h-full p-2 flex flex-col gap-2" style={{ backgroundColor: accent }}>
          <div className="w-6 h-6 rounded-full bg-white/20 mx-auto" />
          <div className="space-y-1 mt-1">
            {['Contact', 'Skills', 'Links'].map(s => <div key={s} className="text-[5px] font-bold text-white/90 uppercase">{s}</div>)}
            <div className="space-y-0.5">{['React', 'Node.js', 'TS', 'Python', 'SQL'].map(sk => <div key={sk} className="text-[4px] text-white/70">{sk}</div>)}</div>
          </div>
        </div>
        <div className="flex-1 p-2 space-y-2" style={{ backgroundColor: bg }}>
          <div className="h-1.5 w-20 rounded" style={{ backgroundColor: accent }} />
          <div className="h-1 w-16 rounded bg-gray-300" />
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase border-b" style={{ borderColor: accent }}>Experience</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-3/4 rounded bg-gray-200" /></div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase border-b" style={{ borderColor: accent }}>Education</div><div className="h-1 w-full rounded bg-gray-200" /></div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase border-b" style={{ borderColor: accent }}>Projects</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-4/5 rounded bg-gray-200" /></div>
        </div>
      </div>
    ),
    'sde': (
      <div className="flex h-full">
        <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
          <div className="text-center border-b pb-1" style={{ borderColor: accent }}>
            <div className="h-1.5 w-16 rounded mx-auto" style={{ backgroundColor: accent }} />
            <div className="h-0.5 w-12 rounded bg-gray-300 mx-auto mt-0.5" />
          </div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Skills</div>
            <div className="flex flex-wrap gap-0.5">{['Java', 'Python', 'SQL', 'Docker', 'AWS', 'Redis', 'Kafka'].map(sk => <span key={sk} className="text-[3.5px] px-1 py-0.5 rounded border" style={{ borderColor: accent, color: accent }}>{sk}</span>)}</div>
          </div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-5/6 rounded bg-gray-200" /><div className="h-1 w-3/4 rounded bg-gray-200" /></div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Education</div><div className="h-1 w-full rounded bg-gray-200" /></div>
        </div>
      </div>
    ),
    'frontend': (
      <div className="flex h-full">
        <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
          <div className="flex items-center gap-2 border-b pb-1" style={{ borderColor: accent }}>
            <div className="h-5 w-5 rounded-full" style={{ backgroundColor: accent }} />
            <div><div className="h-1.5 w-14 rounded" style={{ backgroundColor: accent }} /><div className="h-0.5 w-10 rounded bg-gray-300 mt-0.5" /></div>
          </div>
          <div className="grid grid-cols-3 gap-1">{['React', 'TS', 'Tailwind', 'Next.js', 'Redux', 'CSS3'].map(sk => <div key={sk} className="text-[4px] px-1 py-0.5 rounded text-center text-white" style={{ backgroundColor: accent }}>{sk}</div>)}</div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-4/5 rounded bg-gray-200" /></div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Projects</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-3/4 rounded bg-gray-200" /></div>
        </div>
      </div>
    ),
    'backend': (
      <div className="flex h-full">
        <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
          <div className="text-center border-b pb-1" style={{ borderColor: accent }}>
            <div className="h-1.5 w-16 rounded mx-auto" style={{ backgroundColor: accent }} />
            <div className="h-0.5 w-12 rounded bg-gray-300 mx-auto mt-0.5" />
          </div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Skills</div>
            <div className="flex flex-wrap gap-0.5">{['Java', 'Python', 'SQL', 'Docker', 'AWS', 'Redis', 'Kafka'].map(sk => <span key={sk} className="text-[3.5px] px-1 py-0.5 rounded border" style={{ borderColor: accent, color: accent }}>{sk}</span>)}</div>
          </div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-5/6 rounded bg-gray-200" /><div className="h-1 w-3/4 rounded bg-gray-200" /></div>
        </div>
      </div>
    ),
    'ai-ml': (
      <div className="flex h-full">
        <div className="w-full p-2 space-y-1.5" style={{ backgroundColor: bg }}>
          <div className="flex justify-between items-start border-b pb-1" style={{ borderColor: accent }}>
            <div><div className="h-1.5 w-14 rounded" style={{ backgroundColor: accent }} /><div className="h-0.5 w-10 rounded bg-gray-300 mt-0.5" /></div>
            <div className="space-y-0.5 text-right"><div className="h-0.5 w-10 rounded bg-gray-300" /><div className="h-0.5 w-8 rounded bg-gray-300" /></div>
          </div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>ML/AI Skills</div>
            <div className="grid grid-cols-2 gap-0.5">{['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'CV', 'Deep Learning'].map(sk => <div key={sk} className="text-[3.5px] px-1 py-0.5 rounded text-white text-center" style={{ backgroundColor: accent }}>{sk}</div>)}</div>
          </div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Projects</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-4/5 rounded bg-gray-200" /></div>
        </div>
      </div>
    ),
    'fullstack': (
      <div className="flex h-full">
        <div className="w-[30%] h-full p-1.5 flex flex-col gap-1.5" style={{ backgroundColor: accent }}>
          <div className="w-5 h-5 rounded-full bg-white/20 mx-auto" />
          <div className="text-[4px] text-white/90 font-bold uppercase">Skills</div>
          <div className="space-y-0.5">{['React', 'Node.js', 'TS', 'Python', 'SQL', 'Docker', 'AWS'].map(sk => <div key={sk} className="text-[3.5px] text-white/70">{sk}</div>)}</div>
        </div>
        <div className="flex-1 p-2 space-y-1.5" style={{ backgroundColor: bg }}>
          <div className="h-1.5 w-16 rounded" style={{ backgroundColor: accent }} />
          <div className="h-0.5 w-12 rounded bg-gray-300" />
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Experience</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-4/5 rounded bg-gray-200" /></div>
          <div className="space-y-1"><div className="text-[5px] font-bold uppercase" style={{ color: accent }}>Projects</div><div className="h-1 w-full rounded bg-gray-200" /><div className="h-1 w-5/6 rounded bg-gray-200" /></div>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full h-full rounded overflow-hidden border border-gray-200" style={{ backgroundColor: bg }}>
      {layouts[type] || layouts['sde-beginner']}
    </div>
  );
}

/* ─── Large Resume Preview (for popup) ──────────────────────────────────── */
function LargeResumePreview({ template }: { template: Template }) {
  const accent = template.colors?.[0] || '#6d28d9';
  const bg = template.colors?.[1] || '#f8fafc';
  const isTwoCol = template.columns === 2;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl border border-gray-200 flex" style={{ backgroundColor: bg, minHeight: '500px' }}>
      {isTwoCol && (
        <div className="w-[35%] h-full p-4 flex flex-col gap-3" style={{ backgroundColor: accent }}>
          <div className="w-16 h-16 rounded-full bg-white/20 mx-auto" />
          <div>
            <div className="text-[10px] font-bold text-white uppercase tracking-wide mb-1">Contact</div>
            <div className="space-y-0.5 text-[8px] text-white/70">
              <div>email@email.com</div><div>+1 234 567 890</div><div>linkedin.com/in/user</div><div>github.com/user</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-white uppercase tracking-wide mb-1">Skills</div>
            <div className="flex flex-wrap gap-1">
              {['React', 'Node.js', 'TypeScript', 'Python', 'SQL', 'Docker', 'AWS', 'MongoDB'].map(s => (
                <span key={s} className="text-[7px] px-1.5 py-0.5 rounded bg-white/10 text-white/80">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-white uppercase tracking-wide mb-1">Education</div>
            <div className="space-y-1 text-[8px] text-white/70">
              <div><div className="font-semibold text-white/90">B.Tech CSE</div><div>University Name</div><div>2020 - 2024</div></div>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 p-4 space-y-3" style={{ backgroundColor: bg }}>
        <div>
          <div className="text-lg font-bold" style={{ color: accent }}>John Doe</div>
          <div className="text-xs text-gray-500">Software Engineer</div>
          {!isTwoCol && <div className="text-[10px] text-gray-400 mt-1">email@email.com | +1 234 567 890 | linkedin.com/in/user</div>}
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase border-b-2 pb-0.5 mb-1" style={{ borderColor: accent, color: accent }}>Professional Summary</div>
          <div className="text-[9px] text-gray-600 leading-relaxed">Results-driven software engineer with 5+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about clean code and user-centric design.</div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase border-b-2 pb-0.5 mb-1" style={{ borderColor: accent, color: accent }}>Experience</div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between items-start"><div className="text-[9px] font-semibold text-gray-800">Senior Developer</div><div className="text-[8px] text-gray-400">2022 - Present</div></div>
              <div className="text-[8px] text-gray-500">Tech Company Inc.</div>
              <div className="text-[8px] text-gray-600 mt-0.5 space-y-0.5">
                <div>• Led development of microservices architecture serving 1M+ users</div>
                <div>• Mentored junior developers and conducted code reviews</div>
                <div>• Improved application performance by 40% through optimization</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start"><div className="text-[9px] font-semibold text-gray-800">Full Stack Developer</div><div className="text-[8px] text-gray-400">2020 - 2022</div></div>
              <div className="text-[8px] text-gray-500">Startup Corp</div>
              <div className="text-[8px] text-gray-600 mt-0.5 space-y-0.5">
                <div>• Built and deployed 10+ features using React and Node.js</div>
                <div>• Implemented CI/CD pipelines reducing deployment time by 60%</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase border-b-2 pb-0.5 mb-1" style={{ borderColor: accent, color: accent }}>Projects</div>
          <div className="space-y-1">
            <div>
              <div className="text-[9px] font-semibold text-gray-800">E-Commerce Platform</div>
              <div className="text-[8px] text-gray-600 space-y-0.5">
                <div>• Full-stack e-commerce with React, Node.js, MongoDB, Stripe integration</div>
                <div>• Features: cart, payments, admin dashboard, real-time inventory</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── main wizard ───────────────────────────────────────────────────────── */

export default function TemplateWizard({ onComplete, onCancel }: Props) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [filter, setFilter] = useState<'all' | 'simple' | 'modern' | 'creative'>('all');
  const [uploading, setUploading] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const [importMode, setImportMode] = useState<'file' | 'paste'>('file');
  const fileRef = useRef<HTMLInputElement>(null);

  // form state for step 5
  const [form, setForm] = useState({
    name: '', email: '', phone: '', linkedin: '', github: '', skills: '',
    experience: [{ role: '', company: '', duration: '', description: '' }],
    education: [{ degree: '', institution: '', year: '' }],
    projects: [{ title: '', description: '', link: '' }],
    certifications: [{ name: '', issuer: '', year: '' }],
    summary: '',
  });

  const FALLBACK_TEMPLATES: Template[] = [
    { id: 'ats-beginner', name: 'ATS Beginner', description: 'Clean single-column layout optimized for ATS parsers', is_ats_friendly: true, columns: 1, colors: ['#1e293b', '#f8fafc'] },
    { id: 'sde', name: 'SDE Resume', description: 'Software engineering focused with technical skills emphasis', is_ats_friendly: true, columns: 1, colors: ['#0f172a', '#e2e8f0'] },
    { id: 'frontend', name: 'Frontend Resume', description: 'Modern layout with visual portfolio & project highlights', is_ats_friendly: false, columns: 2, colors: ['#312e81', '#f0f9ff'] },
    { id: 'backend', name: 'Backend Resume', description: 'System design & architecture focused clean format', is_ats_friendly: true, columns: 1, colors: ['#1e3a5f', '#f1f5f9'] },
    { id: 'ai-ml', name: 'AI/ML Resume', description: 'Research & model-focused layout for data scientists', is_ats_friendly: false, columns: 2, colors: ['#581c87', '#fdf4ff'] },
    { id: 'fullstack', name: 'Full Stack Resume', description: 'Versatile format balancing frontend & backend skills', is_ats_friendly: true, columns: 1, colors: ['#0d9488', '#f0fdfa'] },
  ];

  useEffect(() => {
    resumeApi.getTemplates()
      .then(r => {
        const t = r.data.templates || [];
        setTemplates(t.length > 0 ? t : FALLBACK_TEMPLATES);
      })
      .catch(() => setTemplates(FALLBACK_TEMPLATES));
  }, []);

  const filtered = templates.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'simple') return t.is_ats_friendly;
    if (filter === 'modern') return t.columns === 2;
    if (filter === 'creative') return !t.is_ats_friendly;
    return true;
  });

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    setUploading(true);
    try {
      const res = await resumeApi.upload(file);
      const sections = res.data.sections || [];
      const text = sections.map((s: any) => s.value || '').join('\n');
      setForm(f => ({
        ...f,
        name: extractField(text, 'name') || f.name,
        email: extractField(text, 'email') || f.email,
        phone: extractField(text, 'phone') || f.phone,
        linkedin: extractField(text, 'linkedin') || f.linkedin,
        github: extractField(text, 'github') || f.github,
        summary: sections.find((s: any) => s.type === 'summary')?.value || f.summary,
        skills: sections.find((s: any) => s.type === 'skills')?.items?.join(', ') || f.skills,
      }));
      toast.success('Resume imported successfully!');
      setStep(5);
    } catch {
      toast.error('Failed to import resume. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const extractField = (text: string, field: string): string => {
    const lines = text.split('\n');
    for (const line of lines) {
      if (field === 'email' && /[\w.]+@[\w.]+\.\w+/.test(line)) {
        const m = line.match(/[\w.]+@[\w.]+\.\w+/);
        return m ? m[0] : '';
      }
      if (field === 'phone' && /\+?\d[\d\s-]{8,}/.test(line)) {
        const m = line.match(/\+?\d[\d\s-]{8,}/);
        return m ? m[0].trim() : '';
      }
      if (field === 'linkedin' && /linkedin\.com/.test(line)) {
        const m = line.match(/linkedin\.com\/[^\s]+/);
        return m ? m[0] : '';
      }
      if (field === 'github' && /github\.com/.test(line)) {
        const m = line.match(/github\.com\/[^\s]+/);
        return m ? m[0] : '';
      }
    }
    return '';
  };

  const handleStartBlank = () => setStep(5);

  const addEntry = (field: 'experience' | 'education' | 'projects' | 'certifications') => {
    const blank: Record<string, any> = {
      experience: { role: '', company: '', duration: '', description: '' },
      education: { degree: '', institution: '', year: '' },
      projects: { title: '', description: '', link: '' },
      certifications: { name: '', issuer: '', year: '' },
    };
    setForm(f => ({ ...f, [field]: [...f[field], blank[field]] }));
  };

  const removeEntry = (field: 'experience' | 'education' | 'projects' | 'certifications', idx: number) => {
    setForm(f => ({ ...f, [field]: f[field].filter((_: any, i: number) => i !== idx) }));
  };

  const updateEntry = (field: 'experience' | 'education' | 'projects' | 'certifications', idx: number, key: string, val: string) => {
    setForm(f => {
      const arr = [...f[field]];
      arr[idx] = { ...arr[idx], [key]: val };
      return { ...f, [field]: arr };
    });
  };

  const handleFinish = () => {
    onComplete({ templateId: selectedTemplate?.id || 'ats-beginner', formData: form });
  };

  /* ── STEP 1: Template Gallery ──────────────────────────────────────── */
  if (step === 1) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen" style={{ backgroundColor: '#faf9f6' }}>
        {/* header */}
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Start building your resume</h1>
          <p className="text-gray-500 text-lg">Choose a design you like. You can customize or switch it later.</p>
        </div>

        {/* filter tabs */}
        <div className="max-w-6xl mx-auto px-6 mb-8 flex gap-3">
          {[
            { key: 'all' as const, label: 'All Templates', icon: null },
            { key: 'simple' as const, label: 'Simple', icon: null },
            { key: 'modern' as const, label: 'Modern', icon: null },
            { key: 'creative' as const, label: 'Creative', icon: null },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                filter === f.key
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* template grid */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="cursor-pointer group"
                onClick={() => { setSelectedTemplate(t); setStep(2); }}
              >
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="h-64 overflow-hidden">
                    <MiniResume type={t.id} colors={t.colors || ['#6d28d9', '#f8fafc']} />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{t.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  /* ── STEP 2: Template Detail Popup ─────────────────────────────────── */
  if (step === 2 && selectedTemplate) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex shadow-2xl">
          {/* left: large preview */}
          <div className="w-[55%] p-6 overflow-y-auto" style={{ backgroundColor: '#f5f5f0' }}>
            <LargeResumePreview template={selectedTemplate} />
          </div>
          {/* right: info */}
          <div className="w-[45%] p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedTemplate.name}</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">{selectedTemplate.description}</p>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> A4 / US-Letter Size</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Editable Text</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Fully customizable</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Print ready format</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Online resume with shareable link</li>
            </ul>
            <div className="flex gap-3">
              <button onClick={() => setStep(3)} className="flex-1 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">
                Use this template
              </button>
              <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                Back
              </button>
            </div>
            <button onClick={onCancel} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  /* ── STEP 3: Import or Start Blank Popup ───────────────────────────── */
  if (step === 3) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative">
          <button onClick={() => setStep(2)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Import your existing resume</h2>
          <p className="text-gray-500 mb-8">Start faster by prefilling your resume content.</p>
          <div className="space-y-4">
            <button onClick={() => setStep(4)} className="w-full py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-lg">
              <Upload className="w-5 h-5" /> Import resume
            </button>
            <button onClick={handleStartBlank} className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-lg">
              Start from blank
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  /* ── STEP 4: File Upload / Paste Text Popup ────────────────────────── */
  if (step === 4) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative">
          <button onClick={() => setStep(3)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Import Resume</h2>

          {/* tabs */}
          <div className="flex gap-2 mb-6">
            <button onClick={() => setImportMode('file')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${importMode === 'file' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              Resume File
            </button>
            <button onClick={() => setImportMode('paste')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${importMode === 'paste' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              Paste Text
            </button>
          </div>

          {importMode === 'file' ? (
            <div>
              <input ref={fileRef} type="file" accept=".pdf,.docx,.png,.jpg,.jpeg" className="hidden" onChange={e => { if (e.target.files?.[0]) handleFileUpload(e.target.files[0]); }} />
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                {uploading ? (
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-10 h-10 text-gray-400 animate-spin" />
                    <p className="text-gray-500">Uploading...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Choose a file or drag and drop it here</p>
                      <p className="text-gray-400 text-sm mt-1">.pdf, .docx, .png, .jpeg, .jpg</p>
                    </div>
                    <button className="mt-2 px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                      Select Resume
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <textarea
                value={pasteText}
                onChange={e => setPasteText(e.target.value)}
                placeholder="Paste your resume content here..."
                className="w-full h-48 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-400"
              />
              <button
                onClick={() => {
                  if (!pasteText.trim()) { toast.error('Please paste your resume content'); return; }
                  setForm(f => ({ ...f, summary: pasteText }));
                  toast.success('Content imported!');
                  setStep(5);
                }}
                className="mt-4 w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Import Text
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  }

  /* ── STEP 5: Editor (Form + Live Preview) ──────────────────────────── */
  if (step === 5) {
    const accent = selectedTemplate?.colors?.[0] || '#6d28d9';
    const bg = selectedTemplate?.colors?.[1] || '#f8fafc';

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-50">
        {/* top bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-700">Templates</button>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-medium text-gray-800">{selectedTemplate?.name || 'Resume'}</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleFinish} className="px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" /> Save Resume
            </button>
          </div>
        </div>

        {/* content: form left + preview right */}
        <div className="flex h-[calc(100vh-53px)]">
          {/* left: form */}
          <div className="w-[45%] overflow-y-auto p-6 space-y-5">
            {/* personal info */}
            <FormSection title="Personal Information" icon={<div className="w-5 h-5 rounded-full bg-gray-200" />}>
              <Input label="Full Name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="John Doe" />
              <div className="grid grid-cols-2 gap-3">
                <Input label="Email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="john@email.com" />
                <Input label="Phone" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} placeholder="+1 234 567 890" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input label="LinkedIn" value={form.linkedin} onChange={v => setForm(f => ({ ...f, linkedin: v }))} placeholder="linkedin.com/in/johndoe" />
                <Input label="GitHub" value={form.github} onChange={v => setForm(f => ({ ...f, github: v }))} placeholder="github.com/johndoe" />
              </div>
            </FormSection>

            {/* summary */}
            <FormSection title="Professional Summary">
              <textarea
                value={form.summary}
                onChange={e => setForm(f => ({ ...f, summary: e.target.value }))}
                placeholder="Write a brief professional summary..."
                className="w-full h-28 border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400"
              />
            </FormSection>

            {/* experience */}
            <FormSection title="Experience" onAdd={() => addEntry('experience')}>
              {form.experience.map((exp, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-3 space-y-2 relative">
                  {form.experience.length > 1 && <button onClick={() => removeEntry('experience', i)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <Input label="Role" value={exp.role} onChange={v => updateEntry('experience', i, 'role', v)} placeholder="Software Engineer" />
                  <Input label="Company" value={exp.company} onChange={v => updateEntry('experience', i, 'company', v)} placeholder="Company Name" />
                  <Input label="Duration" value={exp.duration} onChange={v => updateEntry('experience', i, 'duration', v)} placeholder="2022 - Present" />
                  <textarea value={exp.description} onChange={e => updateEntry('experience', i, 'description', e.target.value)} placeholder="Description..." className="w-full h-20 border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400" />
                </div>
              ))}
            </FormSection>

            {/* education */}
            <FormSection title="Education" onAdd={() => addEntry('education')}>
              {form.education.map((edu, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-3 space-y-2 relative">
                  {form.education.length > 1 && <button onClick={() => removeEntry('education', i)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <Input label="Degree" value={edu.degree} onChange={v => updateEntry('education', i, 'degree', v)} placeholder="B.Tech CSE" />
                  <Input label="Institution" value={edu.institution} onChange={v => updateEntry('education', i, 'institution', v)} placeholder="University Name" />
                  <Input label="Year" value={edu.year} onChange={v => updateEntry('education', i, 'year', v)} placeholder="2020 - 2024" />
                </div>
              ))}
            </FormSection>

            {/* skills */}
            <FormSection title="Technical Skills">
              <textarea
                value={form.skills}
                onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                placeholder="React, Node.js, TypeScript, Python, SQL..."
                className="w-full h-20 border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400"
              />
            </FormSection>

            {/* projects */}
            <FormSection title="Projects" onAdd={() => addEntry('projects')}>
              {form.projects.map((proj, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-3 space-y-2 relative">
                  {form.projects.length > 1 && <button onClick={() => removeEntry('projects', i)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <Input label="Title" value={proj.title} onChange={v => updateEntry('projects', i, 'title', v)} placeholder="Project Name" />
                  <Input label="Link" value={proj.link} onChange={v => updateEntry('projects', i, 'link', v)} placeholder="github.com/..." />
                  <textarea value={proj.description} onChange={e => updateEntry('projects', i, 'description', e.target.value)} placeholder="Description..." className="w-full h-20 border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400" />
                </div>
              ))}
            </FormSection>

            {/* certifications */}
            <FormSection title="Certifications" onAdd={() => addEntry('certifications')}>
              {form.certifications.map((cert, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-3 space-y-2 relative">
                  {form.certifications.length > 1 && <button onClick={() => removeEntry('certifications', i)} className="absolute top-2 right-2 text-gray-300 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>}
                  <Input label="Name" value={cert.name} onChange={v => updateEntry('certifications', i, 'name', v)} placeholder="Certification Name" />
                  <Input label="Issuer" value={cert.issuer} onChange={v => updateEntry('certifications', i, 'issuer', v)} placeholder="Issuer" />
                  <Input label="Year" value={cert.year} onChange={v => updateEntry('certifications', i, 'year', v)} placeholder="2024" />
                </div>
              ))}
            </FormSection>
          </div>

          {/* right: live preview */}
          <div className="w-[55%] overflow-y-auto p-6" style={{ backgroundColor: '#e8e6e1' }}>
            <ResumePreview
              template={selectedTemplate}
              form={form}
              accent={accent}
              bg={bg}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
}

/* ─── template-aware resume preview ───────────────────────────────────── */

function ResumePreview({ template, form, accent, bg }: {
  template: Template | null; form: any; accent: string; bg: string;
}) {
  const isTwoCol = template?.columns === 2;
  const tid = template?.id || '';

  // shared section renderers
  const Summary = () => form.summary ? (
    <div className="mb-4"><SectionTitle text="Professional Summary" accent={accent} /><p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">{form.summary}</p></div>
  ) : null;

  const Experience = () => form.experience.some((e: any) => e.role || e.company) ? (
    <div className="mb-4"><SectionTitle text="Experience" accent={accent} />
      {form.experience.filter((e: any) => e.role || e.company).map((exp: any, i: number) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between items-start"><span className="text-xs font-semibold text-gray-800">{exp.role}</span><span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">{exp.duration}</span></div>
          <div className="text-[11px] text-gray-500">{exp.company}</div>
          {exp.description && <div className="text-[11px] text-gray-600 mt-0.5 whitespace-pre-wrap">{exp.description}</div>}
        </div>
      ))}
    </div>
  ) : null;

  const Education = () => form.education.some((e: any) => e.degree || e.institution) ? (
    <div className="mb-4"><SectionTitle text="Education" accent={accent} />
      {form.education.filter((e: any) => e.degree || e.institution).map((edu: any, i: number) => (
        <div key={i} className="mb-1.5">
          <div className="flex justify-between"><span className="text-xs font-semibold text-gray-800">{edu.degree}</span><span className="text-[10px] text-gray-400">{edu.year}</span></div>
          <div className="text-[11px] text-gray-500">{edu.institution}</div>
        </div>
      ))}
    </div>
  ) : null;

  const Skills = () => form.skills ? (
    <div className="mb-4"><SectionTitle text={tid.includes('ai') ? 'ML/AI Skills' : 'Technical Skills'} accent={accent} />
      <div className="flex flex-wrap gap-1">
        {form.skills.split(',').map((s: string, i: number) => s.trim() && (
          tid.includes('ai') || tid === 'frontend' || tid === 'frontend-advanced'
            ? <span key={i} className="text-[10px] px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: accent }}>{s.trim()}</span>
            : <span key={i} className="text-[10px] px-1.5 py-0.5 rounded border" style={{ borderColor: accent, color: accent }}>{s.trim()}</span>
        ))}
      </div>
    </div>
  ) : null;

  const Projects = () => form.projects.some((p: any) => p.title) ? (
    <div className="mb-4"><SectionTitle text="Projects" accent={accent} />
      {form.projects.filter((p: any) => p.title).map((proj: any, i: number) => (
        <div key={i} className="mb-2">
          <div className="text-xs font-semibold text-gray-800">{proj.title}{proj.link ? <span className="text-[10px] text-gray-400 ml-2">{proj.link}</span> : ''}</div>
          {proj.description && <div className="text-[11px] text-gray-600 mt-0.5 whitespace-pre-wrap">{proj.description}</div>}
        </div>
      ))}
    </div>
  ) : null;

  const Certs = () => form.certifications.some((c: any) => c.name) ? (
    <div className="mb-4"><SectionTitle text="Certifications" accent={accent} />
      {form.certifications.filter((c: any) => c.name).map((cert: any, i: number) => (
        <div key={i} className="mb-0.5 text-xs"><span className="font-semibold text-gray-800">{cert.name}</span><span className="text-gray-400 ml-1">{cert.issuer}{cert.year ? ` • ${cert.year}` : ''}</span></div>
      ))}
    </div>
  ) : null;

  /* ── Single column layout (ATS, SDE, Backend) ── */
  const SingleColumn = () => (
    <div className="mx-auto max-w-[600px] bg-white shadow-2xl rounded-lg overflow-hidden" style={{ minHeight: '800px' }}>
      {/* header */}
      <div className="p-6" style={{ backgroundColor: bg }}>
        <div className="text-xl font-bold" style={{ color: accent }}>{form.name || 'Your Name'}</div>
        {tid === 'backend' ? (
          <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500">
            {form.email && <span>{form.email}</span>}{form.phone && <span>| {form.phone}</span>}
          </div>
        ) : (
          <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-500">
            {form.email && <span>{form.email}</span>}
            {form.phone && <span>{form.phone}</span>}
            {form.linkedin && <span>{form.linkedin.replace('https://', '')}</span>}
            {form.github && <span>{form.github.replace('https://', '')}</span>}
          </div>
        )}
        {tid === 'backend' && (form.linkedin || form.github) && (
          <div className="text-[10px] text-gray-400 mt-1 flex gap-2">
            {form.linkedin && <span>{form.linkedin}</span>}{form.github && <span>{form.github}</span>}
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <Summary /><Experience /><Education /><Skills /><Projects /><Certs />
      </div>
    </div>
  );

  /* ── Two column layout (Frontend, AI/ML) ── */
  const TwoColumn = () => (
    <div className="mx-auto max-w-[600px] bg-white shadow-2xl rounded-lg overflow-hidden flex" style={{ minHeight: '800px' }}>
      {/* sidebar */}
      <div className="w-[35%] p-4 flex flex-col" style={{ backgroundColor: accent }}>
        <div className="w-12 h-12 rounded-full bg-white/20 mx-auto mb-3" />
        <div className="mb-4">
          <div className="text-[9px] font-bold text-white/90 uppercase tracking-wide mb-1.5">Contact</div>
          <div className="space-y-0.5 text-[9px] text-white/70 break-all">
            {form.email && <div>{form.email}</div>}
            {form.phone && <div>{form.phone}</div>}
            {form.linkedin && <div>{form.linkedin}</div>}
            {form.github && <div>{form.github}</div>}
          </div>
        </div>
        <div className="mb-4">
          <div className="text-[9px] font-bold text-white/90 uppercase tracking-wide mb-1.5">Education</div>
          {form.education.filter((e: any) => e.degree || e.institution).map((edu: any, i: number) => (
            <div key={i} className="mb-1.5">
              <div className="text-[9px] font-semibold text-white/90">{edu.degree}</div>
              <div className="text-[8px] text-white/70">{edu.institution}</div>
              <div className="text-[8px] text-white/50">{edu.year}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[9px] font-bold text-white/90 uppercase tracking-wide mb-1.5">Skills</div>
          <div className="flex flex-wrap gap-1">
            {form.skills.split(',').map((s: string, i: number) => s.trim() && (
              <span key={i} className="text-[7px] px-1.5 py-0.5 rounded bg-white/10 text-white/80">{s.trim()}</span>
            ))}
          </div>
        </div>
      </div>
      {/* main */}
      <div className="w-[65%] p-5 space-y-3" style={{ backgroundColor: bg }}>
        <div>
          <div className="text-lg font-bold" style={{ color: accent }}>{form.name || 'Your Name'}</div>
          <div className="text-[11px] text-gray-500 mt-0.5">
            {form.email || 'email@example.com'} {form.phone && `| ${form.phone}`}
          </div>
        </div>
        <Summary /><Experience /><Projects /><Certs />
      </div>
    </div>
  );

  /* ── Fullstack layout (sidebar + main, different styling) ── */
  const FullstackLayout = () => (
    <div className="mx-auto max-w-[600px] bg-white shadow-2xl rounded-lg overflow-hidden flex" style={{ minHeight: '800px' }}>
      <div className="w-[30%] p-4 flex flex-col gap-3" style={{ backgroundColor: accent }}>
        <div className="w-12 h-12 rounded-full bg-white/20 mx-auto" />
        <div>
          <div className="text-[9px] font-bold text-white/90 uppercase mb-1">Contact</div>
          <div className="space-y-0.5 text-[8px] text-white/70 break-all">
            {form.email && <div>{form.email}</div>}
            {form.phone && <div>{form.phone}</div>}
            {form.linkedin && <div>{form.linkedin}</div>}
            {form.github && <div>{form.github}</div>}
          </div>
        </div>
        <div>
          <div className="text-[9px] font-bold text-white/90 uppercase mb-1">Skills</div>
          <div className="space-y-0.5">
            {form.skills.split(',').map((s: string, i: number) => s.trim() && (
              <div key={i} className="text-[8px] text-white/70">{s.trim()}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 space-y-3" style={{ backgroundColor: bg }}>
        <div className="text-xl font-bold" style={{ color: accent }}>{form.name || 'Your Name'}</div>
        <Summary /><Experience /><Education /><Projects /><Certs />
      </div>
    </div>
  );

  // pick layout based on template id
  if (tid === 'fullstack') return <FullstackLayout />;
  if (isTwoCol) return <TwoColumn />;
  return <SingleColumn />;
}

function SectionTitle({ text, accent }: { text: string; accent: string }) {
  return <div className="text-[10px] font-bold uppercase border-b-2 pb-0.5 mb-1.5" style={{ borderColor: accent, color: accent }}>{text}</div>;
}

/* ─── reusable form components ──────────────────────────────────────────── */

function FormSection({ title, icon, children, onAdd }: {
  title: string; icon?: React.ReactNode; children: React.ReactNode; onAdd?: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        </div>
        {onAdd && (
          <button onClick={onAdd} className="text-xs text-violet-600 hover:text-violet-700 font-medium">+ Add</button>
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Input({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400"
      />
    </div>
  );
}
