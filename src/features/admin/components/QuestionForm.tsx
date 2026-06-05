import { useState, useEffect } from 'react';
import { TOPICS, PATTERNS } from '@/shared/utils/constants';
import type { AdminQuestion } from '../types/admin';
import { adminApi } from '../api/adminApi';

interface QuestionFormProps {
  initial?: Partial<AdminQuestion>;
  onSubmit: (data: any) => Promise<void>;
  onCancel?: () => void;
}

const VISUALIZATION_TYPES = [
  { value: 'array', label: 'Array' },
  { value: 'hashmap', label: 'HashMap' },
  { value: 'linkedlist', label: 'Linked List' },
  { value: 'tree', label: 'Tree' },
  { value: 'graph', label: 'Graph' },
  { value: 'stack', label: 'Stack' },
  { value: 'queue', label: 'Queue' },
  { value: 'heap', label: 'Heap' },
  { value: 'binarysearch', label: 'Binary Search' },
  { value: 'slidingwindow', label: 'Sliding Window' },
  { value: 'dp', label: 'DP Grid' },
];

const ALGORITHM_TYPES = [
  { value: 'two_sum', label: 'Two Sum' },
  { value: 'contains_duplicate', label: 'Contains Duplicate' },
  { value: 'binary_search', label: 'Binary Search' },
  { value: 'max_depth_tree', label: 'Max Depth Tree' },
  { value: 'level_order_bfs', label: 'Level Order BFS' },
  { value: 'reverse_linked_list', label: 'Reverse Linked List' },
  { value: 'kadane', label: "Kadane's Algorithm" },
  { value: 'sliding_window', label: 'Sliding Window' },
  { value: 'dfs', label: 'DFS Traversal' },
  { value: 'bfs', label: 'BFS Traversal' },
  { value: 'stack_parentheses', label: 'Stack Parentheses' },
  { value: 'hashset', label: 'HashSet Lookup' },
];

const COMPANIES = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix', 'Adobe', 'Uber', 'LinkedIn', 'Twitter'];

const DEFAULT_STARTER: Record<string, string> = {
  javascript: '',
  python: '',
  java: '',
  cpp: '',
  c: '',
};

export default function QuestionForm({ initial, onSubmit, onCancel }: QuestionFormProps) {
  const [activeTab, setActiveTab] = useState<'basic' | 'content' | 'starter' | 'tests' | 'visualization' | 'cheatsheet'>('basic');
  const [form, setForm] = useState({
    title: initial?.title || '',
    slug: initial?.slug || '',
    difficulty: initial?.difficulty || 'Easy',
    topic_id: initial?.topic_id || '',
    pattern: initial?.pattern || '',
    description: initial?.description || '',
    problem_statement: initial?.problem_statement || '',
    input_format: initial?.input_format || '',
    output_format: initial?.output_format || '',
    constraints: initial?.constraints || '',
    explanation: initial?.explanation || '',
    visualization_type: initial?.visualization_type || 'array',
    algorithm_type: initial?.algorithm_type || '',
    sample_input: initial?.sample_input || '',
    enable_visualization: initial?.enable_visualization ?? true,
    companies: initial?.companies || [],
    company_frequency: initial?.company_frequency || 'Medium',
  });
  const [starterCode, setStarterCode] = useState<Record<string, string>>(initial?.starter_code || DEFAULT_STARTER);
  const [examples, setExamples] = useState<{ input: string; output: string; explanation: string }[]>(
    initial?.examples?.map(e => ({ ...e, explanation: e.explanation || '' })) || [{ input: '', output: '', explanation: '' }]
  );
  const [testCases, setTestCases] = useState<{ input: string; expected_output: string; is_hidden: boolean }[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingTests, setLoadingTests] = useState(false);

  // Load test cases when editing
  useEffect(() => {
    if (initial?.slug) {
      setLoadingTests(true);
      adminApi.getTestCases(initial.slug).then(res => {
        if (res.data.length > 0) {
          setTestCases(res.data);
        } else {
          setTestCases([{ input: '', expected_output: '', is_hidden: false }]);
        }
      }).catch(() => {
        setTestCases([{ input: '', expected_output: '', is_hidden: false }]);
      }).finally(() => setLoadingTests(false));
    } else {
      setTestCases([{ input: '', expected_output: '', is_hidden: false }]);
    }
  }, [initial?.slug]);

  // Auto-generate slug from title
  const handleTitleChange = (title: string) => {
    const slug = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    setForm(prev => ({ ...prev, title, slug }));
  };

  const addExample = () => setExamples(prev => [...prev, { input: '', output: '', explanation: '' }]);
  const removeExample = (i: number) => setExamples(prev => prev.filter((_, idx) => idx !== i));
  const updateExample = (i: number, field: keyof typeof examples[0], value: string) => {
    setExamples(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: value } : e));
  };

  const addTestCase = () => setTestCases(prev => [...prev, { input: '', expected_output: '', is_hidden: false }]);
  const removeTestCase = (i: number) => setTestCases(prev => prev.filter((_, idx) => idx !== i));
  const updateTestCase = (i: number, field: keyof typeof testCases[0], value: any) => {
    setTestCases(prev => prev.map((tc, idx) => idx === i ? { ...tc, [field]: value } : tc));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validExamples = examples.filter(ex => ex.input && ex.output);
    const sampleTestsData = testCases.filter(tc => tc.input && tc.expected_output && !tc.is_hidden);
    const hiddenTestsData = testCases.filter(tc => tc.input && tc.expected_output && tc.is_hidden);

    await onSubmit({
      ...form,
      starter_code: starterCode,
      examples: validExamples.length > 0 ? validExamples : undefined,
      sample_tests: sampleTestsData,
      hidden_tests: hiddenTestsData,
    });
    setLoading(false);
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'content', label: 'Content' },
    { id: 'starter', label: 'Starter Code' },
    { id: 'tests', label: 'Test Cases' },
    { id: 'visualization', label: 'Visualization' },
    { id: 'cheatsheet', label: 'Cheat Sheet' },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-1 p-1 rounded-xl" style={{ backgroundColor: '#1E293B' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-primary-500 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Section 1: Basic Information */}
      {activeTab === 'basic' && (
        <div className="space-y-4 p-4 rounded-xl border border-white/10" style={{ backgroundColor: '#0B1020' }}>
          <h3 className="text-sm font-semibold text-white">Basic Information</h3>
          
          <div>
            <label className="block text-xs text-slate-400 mb-1">Question Title *</label>
            <input
              type="text" required value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Two Sum"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Slug</label>
            <input
              type="text" value={form.slug} readOnly
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-slate-500 text-sm font-mono"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Difficulty *</label>
              <select value={form.difficulty} onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Topic *</label>
              <select value={form.topic_id} onChange={(e) => setForm({ ...form, topic_id: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="">Select topic</option>
                {TOPICS.map((t) => <option key={t} value={t.toLowerCase().replace(/\s+/g, '-')}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Pattern</label>
              <select value={form.pattern} onChange={(e) => setForm({ ...form, pattern: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="">Select pattern</option>
                {PATTERNS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Short Description</label>
            <textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              placeholder="Brief description for question cards..."
            />
          </div>
        </div>
      )}

      {/* Section 2: Question Content */}
      {activeTab === 'content' && (
        <div className="space-y-4 p-4 rounded-xl border border-white/10" style={{ backgroundColor: '#0B1020' }}>
          <h3 className="text-sm font-semibold text-white">Question Content</h3>
          
          <div>
            <label className="block text-xs text-slate-400 mb-1">Problem Statement *</label>
            <textarea rows={6} value={form.problem_statement} onChange={(e) => setForm({ ...form, problem_statement: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              placeholder="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target..."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Input Format</label>
              <textarea rows={3} value={form.input_format} onChange={(e) => setForm({ ...form, input_format: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                placeholder="nums = [2,7,11,15], target = 9"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Output Format</label>
              <textarea rows={3} value={form.output_format} onChange={(e) => setForm({ ...form, output_format: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                placeholder="[0,1]"
              />
            </div>
          </div>

          {/* Examples */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs text-slate-400">Examples (shown on left panel)</label>
              <button type="button" onClick={addExample}
                className="px-3 py-1 rounded-lg bg-primary-500/20 text-primary-300 text-xs font-medium hover:bg-primary-500/30 transition-colors">
                + Add Example
              </button>
            </div>
            <div className="space-y-3">
              {examples.map((ex, i) => (
                <div key={i} className="p-3 rounded-lg border border-white/10" style={{ backgroundColor: '#0A0F1E' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-300">Example {i + 1}</span>
                    {examples.length > 1 && (
                      <button type="button" onClick={() => removeExample(i)}
                        className="text-danger-400 hover:text-danger-300 text-xs">Remove</button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input value={ex.input} onChange={(e) => updateExample(i, 'input', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder='nums = [2,7,11,15], target = 9'
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input value={ex.output} onChange={(e) => updateExample(i, 'output', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none"
                        placeholder='[0,1]'
                      />
                      <input value={ex.explanation} onChange={(e) => updateExample(i, 'explanation', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none"
                        placeholder='Explanation (optional)'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Constraints</label>
            <textarea rows={2} value={form.constraints} onChange={(e) => setForm({ ...form, constraints: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              placeholder="2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Explanation</label>
            <textarea rows={3} value={form.explanation} onChange={(e) => setForm({ ...form, explanation: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              placeholder="Because nums[0] + nums[1] == 9, we return [0, 1]..."
            />
          </div>
        </div>
      )}

      {/* Section 3: Starter Code */}
      {activeTab === 'starter' && (
        <div className="space-y-4 p-4 rounded-xl border border-white/10" style={{ backgroundColor: '#0B1020' }}>
          <h3 className="text-sm font-semibold text-white">Starter Code</h3>
          {Object.entries({ javascript: 'JavaScript', python: 'Python', java: 'Java', cpp: 'C++', c: 'C' }).map(([key, label]) => (
            <div key={key}>
              <label className="block text-xs text-slate-400 mb-1">{label}</label>
              <textarea rows={6} value={starterCode[key] || ''} onChange={(e) => setStarterCode({ ...starterCode, [key]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                placeholder={`// ${label} starter code...`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Section 4: Test Cases */}
      {activeTab === 'tests' && (
        <div className="space-y-4 p-4 rounded-xl border border-white/10" style={{ backgroundColor: '#0B1020' }}>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Test Cases</h3>
            <button type="button" onClick={addTestCase}
              className="px-3 py-1.5 rounded-lg bg-primary-500/20 text-primary-300 text-xs font-medium hover:bg-primary-500/30 transition-colors">
              + Add Test Case
            </button>
          </div>

          {loadingTests ? (
            <div className="text-xs text-slate-400 py-4 text-center">Loading test cases...</div>
          ) : (
            <div className="space-y-3">
              {testCases.map((tc, i) => (
                <div key={i} className="p-3 rounded-lg border border-white/10" style={{ backgroundColor: '#0A0F1E' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-300">
                      {tc.is_hidden ? '🔒 Hidden' : '📖 Sample'} Test {i + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input type="checkbox" checked={tc.is_hidden}
                          onChange={(e) => updateTestCase(i, 'is_hidden', e.target.checked)}
                          className="w-3 h-3 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500"
                        />
                        <span className="text-[10px] text-slate-500">Hidden</span>
                      </label>
                      {testCases.length > 1 && (
                        <button type="button" onClick={() => removeTestCase(i)}
                          className="text-danger-400 hover:text-danger-300 text-xs">Remove</button>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input value={tc.input} onChange={(e) => updateTestCase(i, 'input', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder='[2,7,11,15], target=9'
                    />
                    <input value={tc.expected_output} onChange={(e) => updateTestCase(i, 'expected_output', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder='[0,1]'
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Section 5: Visualization */}
      {activeTab === 'visualization' && (
        <div className="space-y-4 p-4 rounded-xl border border-white/10" style={{ backgroundColor: '#0B1020' }}>
          <h3 className="text-sm font-semibold text-white">Visualization Settings</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Visualization Type</label>
              <select value={form.visualization_type} onChange={(e) => setForm({ ...form, visualization_type: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                {VISUALIZATION_TYPES.map(vt => (
                  <option key={vt.value} value={vt.value}>{vt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Algorithm Type</label>
              <select value={form.algorithm_type} onChange={(e) => setForm({ ...form, algorithm_type: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                <option value="">Select algorithm</option>
                {ALGORITHM_TYPES.map(at => (
                  <option key={at.value} value={at.value}>{at.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Sample Visualization Input</label>
            <textarea rows={3} value={form.sample_input} onChange={(e) => setForm({ ...form, sample_input: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-mono focus:ring-2 focus:ring-primary-500 outline-none resize-none"
              placeholder='[2,7,11,15], target=9'
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.enable_visualization} onChange={(e) => setForm({ ...form, enable_visualization: e.target.checked })}
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-sm text-white">Enable Visualization</span>
            </label>
          </div>
        </div>
      )}

      {/* Section 6: Cheat Sheet & Interview */}
      {activeTab === 'cheatsheet' && (
        <div className="space-y-4 p-4 rounded-xl border border-white/10" style={{ backgroundColor: '#0B1020' }}>
          <h3 className="text-sm font-semibold text-white">Interview Preparation</h3>
          
          <div>
            <label className="block text-xs text-slate-400 mb-2">Companies</label>
            <div className="flex flex-wrap gap-2">
              {COMPANIES.map(company => (
                <button
                  key={company}
                  type="button"
                  onClick={() => {
                    const companies = form.companies.includes(company)
                      ? form.companies.filter(c => c !== company)
                      : [...form.companies, company];
                    setForm({ ...form, companies });
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    form.companies.includes(company)
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {company}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Company Frequency</label>
            <select value={form.company_frequency} onChange={(e) => setForm({ ...form, company_frequency: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      )}

      {/* Submit Buttons */}
      <div className="flex gap-3 pt-4">
        <button type="submit" disabled={loading}
          className="px-6 py-2.5 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors disabled:opacity-50">
          {loading ? 'Saving...' : initial ? 'Update Question' : 'Add Question'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel}
            className="px-6 py-2.5 rounded-xl bg-white/5 text-slate-400 text-sm font-medium hover:bg-white/10 transition-colors">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}