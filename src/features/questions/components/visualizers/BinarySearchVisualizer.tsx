import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface BinarySearchVisualizerProps {
  input: string;
  title: string;
}

function parseArrayInput(input: string): number[] {
  try {
    const match = input.match(/\[([^\]]*)\]/);
    if (!match) return [];
    return match[1].split(',').map(v => Number(v.trim())).filter(n => !isNaN(n)).sort((a, b) => a - b);
  } catch {
    return [];
  }
}

export default function BinarySearchVisualizer({ input, title }: BinarySearchVisualizerProps) {
  const arr = parseArrayInput(input);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(arr.length - 1);
  const [mid, setMid] = useState(-1);
  const [found, setFound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('Click play to start binary search');
  const [stepCount, setStepCount] = useState(0);
  const leftRef = useRef(0);
  const rightRef = useRef(arr.length - 1);
  const foundRef = useRef(false);
  const stepCountRef = useRef(0);

  const reset = useCallback(() => {
    setLeft(0);
    setRight(arr.length - 1);
    setMid(-1);
    setFound(false);
    setIsPlaying(false);
    setMessage('Click play to start binary search');
    setStepCount(0);
    leftRef.current = 0;
    rightRef.current = arr.length - 1;
    foundRef.current = false;
    stepCountRef.current = 0;
  }, [arr.length]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const l = leftRef.current;
      const r = rightRef.current;
      const f = foundRef.current;
      const sc = stepCountRef.current;
      if (l > r || f) {
        setIsPlaying(false);
        setMessage(f ? 'Element found!' : 'Element not in array');
        return;
      }
      const m = Math.floor((l + r) / 2);
      setMid(m);
      stepCountRef.current = sc + 1;
      setStepCount(sc + 1);
      setMessage(`Step ${sc + 1}: left=${l}, right=${r}, mid=${m}, arr[mid]=${arr[m]}`);
      if (arr[m] < arr[Math.min(r, arr.length - 1)]) {
        leftRef.current = m + 1;
        setLeft(m + 1);
      } else if (arr[m] > arr[Math.max(l, 0)]) {
        rightRef.current = m - 1;
        setRight(m - 1);
      } else {
        foundRef.current = true;
        setFound(true);
        setMessage(`Found at index ${m}!`);
      }
    }, 1500);
    return () => clearInterval(timer);
  }, [isPlaying, arr]);

  const step = useCallback(() => {
    const l = leftRef.current;
    const r = rightRef.current;
    const f = foundRef.current;
    const sc = stepCountRef.current;
    if (l > r || f) return;
    const m = Math.floor((l + r) / 2);
    setMid(m);
    stepCountRef.current = sc + 1;
    setStepCount(sc + 1);
    setMessage(`Step ${sc + 1}: left=${l}, right=${r}, mid=${m}, arr[mid]=${arr[m]}`);
    if (arr[m] < arr[Math.min(r, arr.length - 1)]) {
      leftRef.current = m + 1;
      setLeft(m + 1);
    } else if (arr[m] > arr[Math.max(l, 0)]) {
      rightRef.current = m - 1;
      setRight(m - 1);
    } else {
      foundRef.current = true;
      setFound(true);
      setMessage(`Found at index ${m}!`);
    }
  }, [arr]);

  const goPrev = useCallback(() => {
    reset();
  }, [reset]);

  const getElementState = (i: number) => {
    if (i === mid) return 'mid';
    if (i >= left && i <= right) return 'active';
    return 'eliminated';
  };

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Binary Search Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>

      <div className="p-4">
        {/* Sorted Array */}
        <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
          {arr.map((val, i) => {
            const state = getElementState(i);
            return (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: state === 'mid' ? 1.2 : 1,
                  opacity: state === 'eliminated' ? 0.3 : 1,
                  borderColor: state === 'mid' ? '#7C6CF6' : state === 'active' ? '#22c55e' : 'rgba(255,255,255,0.1)',
                  backgroundColor: state === 'mid' ? 'rgba(124,108,246,0.2)' : state === 'active' ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.02)',
                }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <div className="w-11 h-11 rounded-lg flex flex-col items-center justify-center border">
                  <span className={`text-sm font-mono font-bold ${state === 'mid' ? 'text-primary-300' : state === 'active' ? 'text-slate-300' : 'text-slate-600'}`}>
                    {val}
                  </span>
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] text-slate-500">[{i}]</span>
              </motion.div>
            );
          })}
        </div>

        {/* Pointers */}
        <div className="flex justify-center gap-6 mb-4 text-[10px] font-mono">
          <span className="text-success-400">L={left <= right ? left : '-'}</span>
          <span className="text-primary-400">M={mid >= 0 ? mid : '-'}</span>
          <span className="text-danger-400">R={left <= right ? right : '-'}</span>
        </div>

        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
          <p className="text-[11px] text-slate-400">{message}</p>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <span>Steps: {stepCount}</span>
          <span>|</span>
          <span>Array size: {arr.length}</span>
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
          O(log n)
        </span>
      </div>
    </div>
  );
}
