import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2 } from 'lucide-react';
import { cn } from '@/shared/utils/helpers';

interface SearchResult {
  id: string;
  title: string;
  slug: string;
  difficulty: string;
  topic: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/questions/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
        setIsOpen(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div ref={ref} className="relative w-full max-w-lg">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, patterns, topics..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-white/10 bg-[#111827] text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
        />
        {loading && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 animate-spin" />}
      </div>
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-[#111827] rounded-xl shadow-lg border border-white/10 overflow-hidden z-50"
          >
            {results.map((r) => (
              <Link
                key={r.id}
                to={`/questions/${r.slug}`}
                onClick={() => { setIsOpen(false); setQuery(''); }}
                className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors"
              >
                <div>
                  <div className="text-sm font-medium text-white">{r.title}</div>
                  <div className="text-xs text-slate-400">{r.topic}</div>
                </div>
                <span className={cn(
                  'text-xs font-medium px-2 py-1 rounded-full',
                  r.difficulty === 'Easy' && 'bg-success-500/10 text-success-500',
                  r.difficulty === 'Medium' && 'bg-warning-500/10 text-warning-500',
                  r.difficulty === 'Hard' && 'bg-danger-500/10 text-danger-500',
                )}>
                  {r.difficulty}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
