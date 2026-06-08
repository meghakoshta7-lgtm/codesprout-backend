import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';
import ROADMAPS from '../data/roadmaps';
import type { Roadmap } from '../data/roadmaps';

export default function RoadmapPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState<Roadmap | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => { setSelected(null); onClose(); }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl"
            style={{ backgroundColor: '#0B1020', scrollbarWidth: 'thin' }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-5 border-b border-white/10" style={{ backgroundColor: '#0B1020' }}>
              <div className="flex items-center gap-3">
                {selected ? (
                  <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </span>
                )}
                <h2 className="text-lg font-bold text-white">{selected ? selected.title : 'Programming Roadmaps'}</h2>
              </div>
              <button onClick={() => { setSelected(null); onClose(); }} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
              {!selected ? (
                /* Grid of roadmap cards */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ROADMAPS.map((roadmap, i) => (
                    <motion.button
                      key={roadmap.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => setSelected(roadmap)}
                      className="text-left p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all group"
                    >
                      <div className="text-2xl mb-2">{roadmap.icon}</div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors mb-1">{roadmap.title}</h3>
                      <p className="text-xs text-white/40">{roadmap.branches.length} branches</p>
                      <ChevronRight className="w-3 h-3 text-white/20 mt-2 group-hover:translate-x-0.5 transition-transform" />
                    </motion.button>
                  ))}
                </div>
              ) : (
                /* Mind Map Layout */
                <div className="flex flex-col items-center">
                  {/* Center topic */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 mb-8"
                  >
                    <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${selected.centerColor} flex flex-col items-center justify-center shadow-2xl`}>
                      <span className="text-3xl sm:text-4xl mb-1">{selected.icon}</span>
                      <span className="text-xs sm:text-sm font-bold text-white text-center px-2 leading-tight">{selected.title}</span>
                    </div>
                    {/* Glowing ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${selected.centerColor} opacity-20 blur-xl -z-10`} />
                  </motion.div>

                  {/* Branches grid */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {selected.branches.map((branch, i) => (
                      <motion.div
                        key={branch.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="relative rounded-xl border border-white/10 overflow-hidden bg-[#111827]/80"
                      >
                        {/* Branch header */}
                        <div className={`px-4 py-2.5 bg-gradient-to-r ${branch.color}`}>
                          <h4 className="text-xs font-bold text-white">{branch.title}</h4>
                        </div>
                        {/* Connector line */}
                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b ${branch.color} opacity-50`} />
                        {/* Subtopics */}
                        <div className="p-3 space-y-1">
                          {branch.items.map((item, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.05 + j * 0.02 }}
                              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${branch.color} flex-shrink-0`} />
                              <span className="text-xs text-white/70">{item.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
