import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface LinkedListVisualizerProps {
  input: string;
  title: string;
}

function parseListInput(input: string): number[] {
  try {
    const cleaned = input.replace(/\s/g, '');
    const match = cleaned.match(/\[([^\]]*)\]/);
    if (!match) return [];
    return match[1].split(',').map(v => Number(v)).filter(n => !isNaN(n));
  } catch {
    return [];
  }
}

interface StepState {
  arr: number[];
  pointers: Record<string, number>;
  message: string;
  highlightIdx: number[];
  highlightColor: string;
}

function getReverseSteps(arr: number[]): StepState[] {
  const steps: StepState[] = [];
  const a = [...arr];
  steps.push({ arr: [...a], pointers: {}, message: 'Reverse: prev=null, curr=node1', highlightIdx: [], highlightColor: '' });
  let prev = -1, curr = 0;
  for (let i = 0; i < a.length; i++) {
    steps.push({ arr: [...a], pointers: prev >= 0 ? { prev, curr } : { curr }, message: `curr=${a[curr]}, prev=${prev >= 0 ? a[prev] : 'null'}`, highlightIdx: [curr], highlightColor: '#7C6CF6' });
    const nextVal = a[curr];
    const nextIdx = curr + 1 < a.length ? curr + 1 : -1;
    // Reverse pointer
    if (prev >= 0) {
      steps.push({ arr: [...a], pointers: { prev, curr }, message: `Reverse link: ${a[curr]} → ${a[prev]}`, highlightIdx: [prev, curr], highlightColor: '#22c55e' });
    }
    prev = curr;
    curr = nextIdx >= 0 ? nextIdx : -1;
    if (curr < 0) {
      steps.push({ arr: [...a], pointers: { prev }, message: `Done! Head is now ${a[prev]}`, highlightIdx: [prev], highlightColor: '#22c55e' });
    }
  }
  // Show final reversed order
  steps.push({ arr: [...a].reverse(), pointers: {}, message: `Reversed: [${[...a].reverse().join(' → ')}]`, highlightIdx: a.map((_, i) => i), highlightColor: '#22c55e' });
  return steps;
}

function getFastSlowSteps(arr: number[]): StepState[] {
  const steps: StepState[] = [];
  steps.push({ arr: [...arr], pointers: { slow: 0, fast: 0 }, message: 'Floyd Cycle: slow=1 step, fast=2 steps', highlightIdx: [], highlightColor: '' });
  let slow = 0, fast = 0;
  while (fast + 1 < arr.length && slow < arr.length) {
    slow++;
    fast += 2;
    if (fast >= arr.length) {
      steps.push({ arr: [...arr], pointers: { slow, fast }, message: `slow=${slow}, fast=${fast} (out of bounds) → No cycle`, highlightIdx: [slow], highlightColor: '#22c55e' });
      return steps;
    }
    steps.push({ arr: [...arr], pointers: { slow, fast }, message: `Move: slow=${slow} (val=${arr[slow]}), fast=${fast} (val=${arr[fast]})`, highlightIdx: [slow, fast], highlightColor: '#7C6CF6' });
    if (slow === fast) {
      steps.push({ arr: [...arr], pointers: { slow, fast }, message: `Cycle detected at node ${slow}! slow==fast`, highlightIdx: [slow, fast], highlightColor: '#ef4444' });
      return steps;
    }
  }
  steps.push({ arr: [...arr], pointers: { slow, fast }, message: 'No cycle found', highlightIdx: arr.map((_, i) => i), highlightColor: '#22c55e' });
  return steps;
}

function getGenericLLSteps(arr: number[]): StepState[] {
  const steps: StepState[] = [];
  for (let i = 0; i < arr.length; i++) {
    steps.push({ arr: [...arr], pointers: { curr: i }, message: `Visit node ${i}: val=${arr[i]}, next→${i < arr.length - 1 ? arr[i + 1] : 'null'}`, highlightIdx: [i], highlightColor: '#7C6CF6' });
  }
  steps.push({ arr: [...arr], pointers: {}, message: 'Traversal complete!', highlightIdx: arr.map((_, i) => i), highlightColor: '#22c55e' });
  return steps;
}

function getSteps(title: string, arr: number[]): StepState[] {
  const t = title.toLowerCase();
  if (t.includes('reverse')) return getReverseSteps(arr);
  if (t.includes('cycle') || t.includes('fast') || t.includes('slow') || t.includes('middle')) return getFastSlowSteps(arr);
  return getGenericLLSteps(arr);
}

function getPointerColor(key: string): string {
  if (key === 'prev') return '#ef4444';
  if (key === 'curr') return '#7C6CF6';
  if (key === 'slow') return '#3b82f6';
  if (key === 'fast') return '#22c55e';
  return '#7C6CF6';
}

export default function LinkedListVisualizer({ input, title }: LinkedListVisualizerProps) {
  const arr = parseListInput(input);
  const stepsRef = useRef<StepState[]>([]);
  const [stepIdx, setStepIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => { stepsRef.current = getSteps(title, arr); }, [title, arr]);

  const totalSteps = stepsRef.current.length;
  const currentStep = stepIdx >= 0 ? stepsRef.current[stepIdx] : null;

  const reset = useCallback(() => { setStepIdx(-1); setIsPlaying(false); }, []);
  const stepForward = useCallback(() => {
    if (stepIdx < totalSteps - 1) setStepIdx(p => p + 1);
    else setIsPlaying(false);
  }, [stepIdx, totalSteps]);
  const stepBack = useCallback(() => { if (stepIdx > 0) setStepIdx(p => p - 1); }, [stepIdx]);

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => {
      setStepIdx(p => { if (p < stepsRef.current.length - 1) return p + 1; setIsPlaying(false); return p; });
    }, 1000);
    return () => clearInterval(t);
  }, [isPlaying]);

  const displayArr = currentStep ? currentStep.arr : arr;

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Linked List Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <div className="flex items-center gap-0 min-w-max justify-center mb-2">
          {displayArr.map((val, i) => {
            const ptrEntry = currentStep ? Object.entries(currentStep.pointers).find(([, v]) => v === i) : null;
            const ptrKey = ptrEntry?.[0];
            const isHL = currentStep?.highlightIdx.includes(i);
            const color = ptrKey ? getPointerColor(ptrKey) : currentStep?.highlightColor || '#7C6CF6';
            return (
              <div key={i} className="flex items-center">
                <motion.div layout initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: ptrKey ? 1.15 : 1, opacity: 1, borderColor: ptrKey ? color : isHL ? color : 'rgba(255,255,255,0.1)', backgroundColor: ptrKey ? `${color}22` : isHL ? `${color}15` : 'rgba(255,255,255,0.03)' }} transition={{ duration: 0.2 }} className="relative">
                  <div className="w-14 h-10 rounded-lg flex items-center justify-center border border-r-0">
                    <span className="text-sm font-mono font-bold" style={{ color: ptrKey ? color : isHL ? color : '#cbd5e1' }}>{val}</span>
                  </div>
                  {ptrKey && <motion.span initial={{ y: -4, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold" style={{ color }}>{ptrKey}</motion.span>}
                </motion.div>
                {i < displayArr.length - 1 && <div className="flex items-center"><div className="w-6 h-px bg-white/20" /><div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-white/20" /></div>}
              </div>
            );
          })}
          <div className="flex items-center ml-1"><div className="w-6 h-px bg-white/20" /><div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-white/20" /><span className="text-[10px] text-slate-500 font-mono ml-1">null</span></div>
        </div>
        {currentStep && Object.keys(currentStep.pointers).length > 1 && (
          <div className="flex flex-wrap gap-3 justify-center mb-2">
            {Object.entries(currentStep.pointers).map(([k, v]) => (
              <span key={k} className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color: getPointerColor(k), backgroundColor: `${getPointerColor(k)}15` }}>{k}={v}</span>
            ))}
          </div>
        )}
        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
          <p className="text-[11px] text-slate-400">{currentStep?.message || 'Click play to start'}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1">
          <button onClick={reset} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><RotateCcw className="w-3 h-3" /></button>
          <button onClick={stepBack} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><SkipBack className="w-3 h-3" /></button>
          <button onClick={() => { if (stepIdx < 0) setStepIdx(0); setIsPlaying(!isPlaying); }} className="p-1.5 rounded-md bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors">
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button onClick={stepForward} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors"><SkipForward className="w-3 h-3" /></button>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">{stepIdx >= 0 ? `${stepIdx + 1}/${totalSteps}` : `0/${totalSteps}`}</span>
      </div>
    </div>
  );
}
