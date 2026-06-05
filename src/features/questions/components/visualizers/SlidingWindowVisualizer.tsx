import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface SlidingWindowVisualizerProps {
  input: string;
  title: string;
}

function parseInput(input: string): { arr: number[]; windowSize: number } {
  try {
    const cleaned = input.replace(/\s/g, '');
    const arrMatch = cleaned.match(/\[([^\]]*)\]/);
    const kMatch = cleaned.match(/k\s*=\s*(\d+)/);
    if (!arrMatch) return { arr: [], windowSize: 3 };
    const arr = arrMatch[1].split(',').map(v => Number(v.trim())).filter(n => !isNaN(n));
    const k = kMatch ? Number(kMatch[1]) : 3;
    return { arr, windowSize: Math.min(k, arr.length) };
  } catch {
    return { arr: [], windowSize: 3 };
  }
}

export default function SlidingWindowVisualizer({ input, title }: SlidingWindowVisualizerProps) {
  const { arr, windowSize } = parseInput(input);
  const [windowStart, setWindowStart] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('Click play to slide the window');
  const [windowSum, setWindowSum] = useState(0);
  const [maxSum, setMaxSum] = useState(0);
  const windowStartRef = useRef(0);
  const maxSumRef = useRef(0);

  const reset = useCallback(() => {
    setWindowStart(0);
    windowStartRef.current = 0;
    setIsPlaying(false);
    setMessage('Click play to slide the window');
    setWindowSum(0);
    setMaxSum(0);
    maxSumRef.current = 0;
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const ws = windowStartRef.current;
      const ms = maxSumRef.current;
      if (ws + windowSize <= arr.length) {
        const windowElements = arr.slice(ws, ws + windowSize);
        const sum = windowElements.reduce((a, b) => a + b, 0);
        setWindowSum(sum);
        if (sum > ms) {
          maxSumRef.current = sum;
          setMaxSum(sum);
        }
        setMessage(`Window [${ws}..${ws + windowSize - 1}]: [${windowElements.join(',')}] sum=${sum}`);
        windowStartRef.current = ws + 1;
        setWindowStart(ws + 1);
      } else {
        setIsPlaying(false);
        setMessage(`Done! Max window sum = ${maxSumRef.current}`);
      }
    }, 1200);
    return () => clearInterval(timer);
  }, [isPlaying, arr, windowSize]);

  const step = useCallback(() => {
    const ws = windowStartRef.current;
    const ms = maxSumRef.current;
    if (ws + windowSize <= arr.length) {
      const windowElements = arr.slice(ws, ws + windowSize);
      const sum = windowElements.reduce((a, b) => a + b, 0);
      setWindowSum(sum);
      if (sum > ms) {
        maxSumRef.current = sum;
        setMaxSum(sum);
      }
      setMessage(`Window [${ws}..${ws + windowSize - 1}]: [${windowElements.join(',')}] sum=${sum}`);
      windowStartRef.current = ws + 1;
      setWindowStart(ws + 1);
    }
  }, [arr, windowSize]);

  const goPrev = useCallback(() => {
    const ws = windowStartRef.current;
    if (ws > 0) {
      windowStartRef.current = ws - 1;
      setWindowStart(ws - 1);
    }
  }, []);

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Sliding Window</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>

      <div className="p-4">
        {/* Array with Window */}
        <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
          {arr.map((val, i) => {
            const inWindow = i >= windowStart && i < windowStart + windowSize;
            const isEdge = i === windowStart || i === windowStart + windowSize - 1;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: inWindow ? 1.1 : 1,
                  opacity: 1,
                  borderColor: isEdge ? '#7C6CF6' : inWindow ? 'rgba(124,108,246,0.3)' : 'rgba(255,255,255,0.1)',
                  backgroundColor: inWindow ? 'rgba(124,108,246,0.12)' : 'rgba(255,255,255,0.03)',
                }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <div className="w-11 h-11 rounded-lg flex flex-col items-center justify-center border">
                  <span className={`text-sm font-mono font-bold ${inWindow ? 'text-primary-300' : 'text-slate-400'}`}>
                    {val}
                  </span>
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] text-slate-500">[{i}]</span>
              </motion.div>
            );
          })}
        </div>

        {/* Window bracket */}
        {windowStart + windowSize <= arr.length && (
          <div className="flex justify-center mb-4">
            <div className="text-[10px] text-primary-400 font-mono">
              ▲ window size = {windowSize}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[9px] text-slate-500 block">Current Sum</span>
            <span className="text-sm font-bold text-primary-300 font-mono">{windowSum}</span>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
            <span className="text-[9px] text-slate-500 block">Max Sum</span>
            <span className="text-sm font-bold text-success-400 font-mono">{maxSum}</span>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
          <p className="text-[11px] text-slate-400">{message}</p>
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
        <span className="text-[10px] text-slate-500 font-mono">
          {windowStart + windowSize <= arr.length ? `${windowStart + 1}/${arr.length - windowSize + 1}` : 'Done'}
        </span>
      </div>
    </div>
  );
}
