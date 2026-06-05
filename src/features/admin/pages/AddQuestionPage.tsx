import { motion } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import QuestionForm from '../components/QuestionForm';
import CheatSheetForm from '../components/CheatSheetForm';
import { adminApi } from '../api/adminApi';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function AddQuestionPage() {
  const [mode, setMode] = useState<'question' | 'cheatsheet'>('question');
  const [questionId, setQuestionId] = useState('');

  const handleAddQuestion = async (data: any) => {
    try {
      const res = await adminApi.addQuestion(data);
      setQuestionId(res.data.slug);
      toast.success('Question added! Now add cheat sheet.');
      setMode('cheatsheet');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to add question');
    }
  };

  const handleAddCheatSheet = async (data: any) => {
    try {
      await adminApi.addCheatSheet(data);
      toast.success('Cheat sheet added!');
      setMode('question');
      setQuestionId('');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Failed to add cheat sheet');
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Add Content</h1>
          <p className="text-gray-500 mb-8">Add new questions and cheat sheets</p>

          <div className="flex gap-2 mb-6">
            <button onClick={() => setMode('question')} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === 'question' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              Add Question
            </button>
            <button onClick={() => setMode('cheatsheet')} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === 'cheatsheet' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
              Add Cheat Sheet
            </button>
          </div>

          <div className="card p-6 max-w-2xl">
            {mode === 'question' ? (
              <QuestionForm onSubmit={handleAddQuestion} />
            ) : (
              <CheatSheetForm questionId={questionId} onSubmit={handleAddCheatSheet} />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
