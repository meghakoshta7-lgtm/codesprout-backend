import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, Bookmark, ChevronRight, Sparkles } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import { getDifficultyColor } from '@/shared/utils/helpers';

function SkeletonList() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="card p-4 animate-pulse flex items-center gap-3">
          <div className="h-4 w-4 bg-gray-200 rounded" />
          <div className="flex-1 h-4 bg-gray-200 rounded w-48" />
          <div className="h-6 w-16 bg-gray-100 rounded-full" />
        </div>
      ))}
    </div>
  );
}

export default function BookmarksPage() {
  const { bookmarks, loading } = useBookmarks();

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-primary-400 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning-500 to-orange-500 flex items-center justify-center shadow-lg shadow-warning-500/25">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Bookmarks</h1>
              <p className="text-slate-400">Your saved questions</p>
            </div>
          </div>

          {loading ? (
            <SkeletonList />
          ) : bookmarks.length === 0 ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-[#111827] flex items-center justify-center mx-auto mb-6">
                <Bookmark className="w-10 h-10 text-slate-400" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">No bookmarks yet</h2>
              <p className="text-slate-400 mb-8 max-w-sm mx-auto">Start bookmarking questions to save them here. Mark questions you want to review later.</p>
              <Link to="/questions" className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-primary-500/25">
                <Sparkles className="w-4 h-4" /> Browse Questions
              </Link>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
                <Bookmark className="w-4 h-4" />
                <span>{bookmarks.length} bookmarked {bookmarks.length === 1 ? 'question' : 'questions'}</span>
              </div>
              {bookmarks.map((b, i) => (
                <motion.div key={b.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link
                    to={`/questions/${b.slug}`}
                    className="card p-4 flex items-center justify-between card-hover group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-warning-500/10 text-warning-500 flex items-center justify-center shrink-0">
                        <Star className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium text-white group-hover:text-primary-400 transition-colors">{b.title}</span>
                        {b.topic_name && <span className="text-xs text-slate-400 ml-2">{b.topic_name}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getDifficultyColor(b.difficulty)}`}>
                        {b.difficulty}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
