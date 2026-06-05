import { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Trash2, X } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import QuestionForm from '../components/QuestionForm';
import { useAdminQuestions } from '../hooks/useAdmin';
import { adminApi } from '../api/adminApi';
import { getDifficultyColor } from '@/shared/utils/helpers';
import toast from 'react-hot-toast';

export default function ManageQuestions() {
  const { questions, loading, refetch } = useAdminQuestions();
  const [deleting, setDeleting] = useState<string | null>(null);
  const [editQuestion, setEditQuestion] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const handleEdit = async (slug: string) => {
    setLoadingDetail(true);
    try {
      const res = await adminApi.getQuestion(slug);
      setEditQuestion(res.data);
      setShowEditModal(true);
    } catch {
      toast.error('Failed to load question details');
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleUpdate = async (data: any) => {
    try {
      await adminApi.updateQuestion(editQuestion.slug, data);
      toast.success('Question updated!');
      setShowEditModal(false);
      setEditQuestion(null);
      refetch();
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to update question');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this question?')) return;
    setDeleting(id);
    try {
      await adminApi.deleteQuestion(id);
      toast.success('Deleted');
      refetch();
    } catch {
      toast.error('Failed to delete');
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8 max-w-full overflow-x-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-white mb-1">Manage Questions</h1>
          <p className="text-slate-400 mb-8">Edit or remove questions from the platform</p>

          {loading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="card p-4 animate-pulse"><div className="h-5 bg-gray-200 rounded w-48" /></div>
              ))}
            </div>
          ) : (
            <div className="bg-[#111827] rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1E293B] border-b border-white/10">
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Title</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Topic</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Difficulty</th>
                    <th className="text-left px-4 py-3 font-medium text-slate-400">Viz</th>
                    <th className="text-right px-4 py-3 font-medium text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q) => (
                    <tr key={q.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-white">{q.title}</td>
                      <td className="px-4 py-3 text-slate-400">{q.topic_name}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getDifficultyColor(q.difficulty)}`}>{q.difficulty}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[10px] font-mono text-slate-500">{q.visualization_type || '-'}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleEdit(q.slug)} disabled={loadingDetail}
                            className="p-2 rounded-lg hover:bg-white/5 text-slate-400 disabled:opacity-50">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(q.id)} disabled={deleting === q.id}
                            className="p-2 rounded-lg hover:bg-danger-500/10 text-danger-500 disabled:opacity-50">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {questions.length === 0 && <p className="text-center text-slate-400 py-8">No questions yet</p>}
            </div>
          )}
        </motion.div>
      </div>

      {/* Edit Modal */}
      {showEditModal && editQuestion && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 pb-12 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl mx-4 p-6 rounded-2xl border border-white/10" style={{ backgroundColor: '#111827' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Edit: {editQuestion.title}</h2>
              <button onClick={() => { setShowEditModal(false); setEditQuestion(null); }}
                className="p-2 rounded-lg hover:bg-white/5 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <QuestionForm
              initial={editQuestion}
              onSubmit={handleUpdate}
              onCancel={() => { setShowEditModal(false); setEditQuestion(null); }}
            />
          </div>
        </div>
      )}
    </div>
  );
}