import { useState } from 'react';

interface CheatSheetFormProps {
  questionId?: string;
  onSubmit: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export default function CheatSheetForm({ questionId, onSubmit, onCancel }: CheatSheetFormProps) {
  const [form, setForm] = useState({
    question_id: questionId || '',
    pattern: '',
    recognition: '',
    approach: '',
    time_complexity: '',
    space_complexity: '',
    template_javascript: '',
    template_python: '',
    template_java: '',
    template_cpp: '',
    template_c: '',
    approach_steps: '',
    approach_diagram: '',
    mistakes: '',
    premium_recognition_signals: '',
    premium_interview_notes: '',
    premium_edge_cases: '',
    premium_optimization_tricks: '',
    premium_pattern_deep_dive: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({
      ...form,
      recognition: form.recognition.split('\n').filter(Boolean),
      mistakes: form.mistakes.split('\n').filter(Boolean),
      template: {
        javascript: form.template_javascript,
        python: form.template_python,
        java: form.template_java,
        cpp: form.template_cpp,
        c: form.template_c,
      },
      approach_steps: form.approach_steps.split('\n').filter(Boolean),
      approach_diagram: form.approach_diagram,
    });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Question ID</label>
        <input type="text" required value={form.question_id} onChange={(e) => setForm({ ...form, question_id: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="question-slug" disabled={!!questionId} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pattern</label>
          <input type="text" required value={form.pattern} onChange={(e) => setForm({ ...form, pattern: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time Complexity</label>
          <input type="text" required value={form.time_complexity} onChange={(e) => setForm({ ...form, time_complexity: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="O(n)" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Space Complexity</label>
          <input type="text" required value={form.space_complexity} onChange={(e) => setForm({ ...form, space_complexity: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="O(n)" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Recognition (one per line)</label>
        <textarea rows={3} value={form.recognition} onChange={(e) => setForm({ ...form, recognition: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Approach</label>
        <textarea rows={3} value={form.approach} onChange={(e) => setForm({ ...form, approach: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Approach Steps (one per line)</label>
        <textarea rows={4} value={form.approach_steps} onChange={(e) => setForm({ ...form, approach_steps: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Step 1 description&#10;Step 2 description&#10;Step 3 description" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Approach Diagram (ASCII flow)</label>
        <textarea rows={4} value={form.approach_diagram} onChange={(e) => setForm({ ...form, approach_diagram: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Input -> Step1 -> Step2 -> Output" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Code Template (multi-language)</label>
        <div className="space-y-2">
          {(['javascript', 'python', 'java', 'cpp', 'c'] as const).map((lang) => (
            <div key={lang} className="flex gap-2 items-start">
              <span className="text-xs font-mono w-20 mt-3 text-gray-500 uppercase">{lang}</span>
              <textarea rows={4} value={(form as any)[`template_${lang}`] || ''}
                onChange={(e) => setForm({ ...form, [`template_${lang}`]: e.target.value })}
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder={`${lang} code template...`} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Common Mistakes (one per line)</label>
        <textarea rows={3} value={form.mistakes} onChange={(e) => setForm({ ...form, mistakes: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <details className="border border-gray-200 rounded-xl p-4">
        <summary className="text-sm font-medium text-gray-700 cursor-pointer">Premium Content</summary>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Recognition Signals</label>
            <textarea rows={2} value={form.premium_recognition_signals} onChange={(e) => setForm({ ...form, premium_recognition_signals: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interview Notes</label>
            <textarea rows={2} value={form.premium_interview_notes} onChange={(e) => setForm({ ...form, premium_interview_notes: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Edge Cases</label>
            <textarea rows={2} value={form.premium_edge_cases} onChange={(e) => setForm({ ...form, premium_edge_cases: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Optimization Tricks</label>
            <textarea rows={2} value={form.premium_optimization_tricks} onChange={(e) => setForm({ ...form, premium_optimization_tricks: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pattern Deep Dive</label>
            <textarea rows={2} value={form.premium_pattern_deep_dive} onChange={(e) => setForm({ ...form, premium_pattern_deep_dive: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
        </div>
      </details>
      <div className="flex gap-3">
        <button type="submit" disabled={loading} className="btn-primary">{loading ? 'Saving...' : 'Save Cheat Sheet'}</button>
        {onCancel && <button type="button" onClick={onCancel} className="btn-secondary">Cancel</button>}
      </div>
    </form>
  );
}
