import { useEffect, useRef, useState } from 'react';
import { Bell, Check, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNotifications, type AppNotification } from '../hooks/useNotifications';

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const s = Math.floor(ms / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}d ago`;
  return new Date(iso).toLocaleDateString();
}

const TYPE_COLORS: Record<string, string> = {
  welcome: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/30',
  level_complete: 'from-amber-500/20 to-amber-600/5 border-amber-500/30',
  badge: 'from-yellow-500/20 to-yellow-600/5 border-yellow-500/30',
  streak: 'from-orange-500/20 to-orange-600/5 border-orange-500/30',
  reminder: 'from-blue-500/20 to-blue-600/5 border-blue-500/30',
  achievement: 'from-purple-500/20 to-purple-600/5 border-purple-500/30',
  question_solved: 'from-green-500/20 to-green-600/5 border-green-500/30',
  premium: 'from-pink-500/20 to-pink-600/5 border-pink-500/30',
  nudge: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/30',
  system: 'from-slate-500/20 to-slate-600/5 border-slate-500/30',
};

export function NotificationBell() {
  const { items, unread, open, setOpen, loading, markRead, markAllRead, remove } = useNotifications();
  const ref = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(false);
  const prevUnread = useRef(unread);

  useEffect(() => {
    if (unread > prevUnread.current) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 1200);
      return () => clearTimeout(t);
    }
    prevUnread.current = unread;
  }, [unread]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, setOpen]);

  const handleClick = (n: AppNotification) => {
    if (!n.read) markRead(n.id);
    if (n.link) {
      setOpen(false);
      window.location.href = n.link;
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center hover:bg-white/5 transition text-gray-300 hover:text-white"
        aria-label="Notifications"
      >
        <Bell size={18} className={pulse ? 'animate-wiggle' : ''} />
        <AnimatePresence>
          {unread > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#0B1020]"
            >
              {unread > 9 ? '9+' : unread}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed sm:absolute left-2 right-2 sm:left-auto sm:right-0 top-16 sm:top-full mt-0 sm:mt-2 sm:w-[380px] max-w-[calc(100vw-1rem)] bg-[#11142a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center gap-2">
                <Bell size={16} className="text-purple-400" />
                <span className="font-semibold text-white text-sm">Notifications</span>
                {unread > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold">
                    {unread} new
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {unread > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-[11px] text-purple-300 hover:text-white px-2 py-1 rounded hover:bg-white/5 flex items-center gap-1"
                    title="Mark all as read"
                  >
                    <Check size={12} /> All read
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/5 sm:hidden"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            <div className="max-h-[60vh] sm:max-h-[420px] overflow-y-auto">
              {loading && items.length === 0 ? (
                <div className="p-8 text-center text-gray-400 text-sm">Loading...</div>
              ) : items.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-2">🔔</div>
                  <div className="text-gray-400 text-sm">No notifications yet</div>
                  <div className="text-gray-500 text-xs mt-1">We'll let you know when something cool happens!</div>
                </div>
              ) : (
                <ul className="divide-y divide-white/5">
                  {items.map(n => (
                    <li
                      key={n.id}
                      className={`group p-3 hover:bg-white/5 transition cursor-pointer relative ${
                        !n.read ? 'bg-white/[0.02]' : ''
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${TYPE_COLORS[n.type] || TYPE_COLORS.system} border flex items-center justify-center text-xl`}>
                          {n.icon}
                        </div>
                        <div className="flex-1 min-w-0" onClick={() => handleClick(n)}>
                          <div className="flex items-start justify-between gap-2">
                            <div className={`text-sm font-semibold ${!n.read ? 'text-white' : 'text-gray-300'} line-clamp-1`}>
                              {n.title}
                            </div>
                            {!n.read && (
                              <span className="shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-1.5" />
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2 leading-relaxed">
                            {n.message}
                          </p>
                          <span className="text-[10px] text-gray-500 mt-1 block">{timeAgo(n.created_at)}</span>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); remove(n.id); }}
                          className="opacity-0 group-hover:opacity-100 transition shrink-0 text-gray-500 hover:text-red-400 p-1"
                          title="Dismiss"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-2 border-t border-white/10 text-center bg-[#0d0f1f]">
                <span className="text-[10px] text-gray-500">Showing {items.length} latest notifications</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
