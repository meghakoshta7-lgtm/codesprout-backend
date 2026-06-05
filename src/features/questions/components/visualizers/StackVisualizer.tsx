import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface StackVisualizerProps {
  input: string;
  title: string;
}

function parseArrayInput(input: string): (string | number)[] {
  try {
    const match = input.match(/\[([^\]]*)\]/);
    if (!match) return [];
    return match[1].split(',').map(v => {
      const num = Number(v.trim());
      return isNaN(num) ? v.trim().replace(/"/g, '') : num;
    });
  } catch {
    return [];
  }
}

export default function StackVisualizer({ input, title }: StackVisualizerProps) {
  const arr = parseArrayInput(input);
  const [stack, setStack] = useState<(string | number)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('Click play to push elements onto stack');
  const [operation, setOperation] = useState<'push' | 'pop' | null>(null);
  const currentIndexRef = useRef(-1);
  const stackRef = useRef<(string | number)[]>([]);

  const reset = useCallback(() => {
    setStack([]);
    setCurrentIndex(-1);
    currentIndexRef.current = -1;
    stackRef.current = [];
    setIsPlaying(false);
    setMessage('Click play to push elements onto stack');
    setOperation(null);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const idx = currentIndexRef.current;
      const st = stackRef.current;
      if (idx < arr.length - 1) {
        const next = idx + 1;
        currentIndexRef.current = next;
        setCurrentIndex(next);
        const newStack = [...st, arr[next]];
        stackRef.current = newStack;
        setStack(newStack);
        setOperation('push');
        setMessage(`Push: ${arr[next]}`);
      } else if (st.length > 0) {
        const newStack = st.slice(0, -1);
        stackRef.current = newStack;
        setStack(newStack);
        setOperation('pop');
        setMessage(`Pop: ${st[st.length - 1]}`);
      } else {
        setIsPlaying(false);
        setMessage('Stack operations complete!');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, arr]);

  const step = useCallback(() => {
    const idx = currentIndexRef.current;
    const st = stackRef.current;
    if (idx < arr.length - 1) {
      const next = idx + 1;
      currentIndexRef.current = next;
      setCurrentIndex(next);
      const newStack = [...st, arr[next]];
      stackRef.current = newStack;
      setStack(newStack);
      setOperation('push');
      setMessage(`Push: ${arr[next]}`);
    } else if (st.length > 0) {
      const newStack = st.slice(0, -1);
      stackRef.current = newStack;
      setStack(newStack);
      setOperation('pop');
      setMessage(`Pop: ${st[st.length - 1]}`);
    }
  }, [arr]);

  const goPrev = useCallback(() => {
    const st = stackRef.current;
    if (st.length > 0) {
      const newStack = st.slice(0, -1);
      stackRef.current = newStack;
      setStack(newStack);
      setOperation('pop');
      setMessage(`Pop: ${st[st.length - 1]}`);
    }
  }, []);

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Stack Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>

      <div className="p-4">
        {/* Stack Visual */}
        <div className="flex justify-center mb-4">
          <div className="w-20 relative">
            {/* Stack container */}
            <div className="border-x border-b border-white/15 rounded-b-lg min-h-[160px] p-1 flex flex-col-reverse gap-1">
              <AnimatePresence>
                {stack.map((val, i) => (
                  <motion.div
                    key={`${i}-${val}`}
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    className={`h-8 rounded flex items-center justify-center text-xs font-mono font-bold border ${
                      i === stack.length - 1
                        ? 'bg-primary-500/15 border-primary-500/40 text-primary-300'
                        : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    {val}
                  </motion.div>
                ))}
              </AnimatePresence>
              {stack.length === 0 && (
                <div className="h-40 flex items-center justify-center text-[10px] text-slate-600 italic">
                  Empty
                </div>
              )}
            </div>
            {/* Bottom line */}
            <div className="h-px bg-white/20" />
            <span className="text-[9px] text-slate-500 block text-center mt-1">bottom</span>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
          <p className="text-[11px] text-slate-400">{message}</p>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span>Size: {stack.length}</span>
          {stack.length > 0 && <span className="font-mono">Top: {stack[stack.length - 1]}</span>}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2 border-t border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1">
          <button onClick={reset} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <RotateCcw className="w-3 h-3" />
          </button>
          <button onClick={goPrev} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <SkipBack className="w-3 h-3" />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="p-1.5 rounded-md bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors">
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button onClick={step} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <SkipForward className="w-3 h-3" />
          </button>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">LIFO</span>
      </div>
    </div>
  );
}
