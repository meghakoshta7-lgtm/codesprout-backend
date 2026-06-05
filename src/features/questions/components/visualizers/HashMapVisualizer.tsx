import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface HashMapVisualizerProps {
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

interface StepState {
  map: Record<string, string | number>;
  currentIndex: number;
  message: string;
  highlightIdx: number[];
  lookupResult?: string | number | null;
  lookupKey?: string | number;
  phase?: string;
}

function getTwoSumSteps(arr: (string | number)[], target: number): StepState[] {
  const steps: StepState[] = [];
  const map: Record<string, string | number> = {};
  steps.push({ map: {}, currentIndex: -1, message: `Find two numbers that add to ${target}`, highlightIdx: [], phase: 'start' });
  for (let i = 0; i < arr.length; i++) {
    const complement = target - Number(arr[i]);
    steps.push({ map: { ...map }, currentIndex: i, message: `i=${i}: arr[i]=${arr[i]}. Complement = ${target} - ${arr[i]} = ${complement}`, highlightIdx: [i], phase: 'check' });
    if (String(complement) in map) {
      const foundIdx = Number(map[complement]);
      steps.push({ map: { ...map }, currentIndex: i, message: `Found! arr[${foundIdx}]=${arr[foundIdx]} + arr[${i}]=${arr[i]} = ${target}`, highlightIdx: [foundIdx, i], lookupKey: complement, lookupResult: map[complement], phase: 'found' });
      return steps;
    }
    map[String(arr[i])] = i;
    steps.push({ map: { ...map }, currentIndex: i, message: `Insert ${arr[i]} → index ${i}`, highlightIdx: [i], phase: 'insert' });
  }
  steps.push({ map: { ...map }, currentIndex: arr.length - 1, message: 'No pair found', highlightIdx: [], phase: 'done' });
  return steps;
}

function getContainsDuplicateSteps(arr: (string | number)[]): StepState[] {
  const steps: StepState[] = [];
  const map: Record<string, string | number> = {};
  steps.push({ map: {}, currentIndex: -1, message: 'Check for duplicates using HashMap', highlightIdx: [], phase: 'start' });
  for (let i = 0; i < arr.length; i++) {
    steps.push({ map: { ...map }, currentIndex: i, message: `Check if ${arr[i]} exists in map`, highlightIdx: [i], phase: 'check' });
    if (String(arr[i]) in map) {
      steps.push({ map: { ...map }, currentIndex: i, message: `Duplicate found! ${arr[i]} at index ${map[arr[i]]} and ${i}`, highlightIdx: [Number(map[arr[i]]), i], lookupKey: arr[i], lookupResult: map[arr[i]], phase: 'found' });
      return steps;
    }
    map[String(arr[i])] = i;
    steps.push({ map: { ...map }, currentIndex: i, message: `Insert ${arr[i]} → index ${i}`, highlightIdx: [i], phase: 'insert' });
  }
  steps.push({ map: { ...map }, currentIndex: arr.length - 1, message: 'No duplicates found!', highlightIdx: arr.map((_, i) => i), phase: 'done' });
  return steps;
}

function getGroupAnagramsSteps(arr: (string | number)[]): StepState[] {
  const steps: StepState[] = [];
  const map: Record<string, string> = {};
  const strs = arr.map(String);
  steps.push({ map: {}, currentIndex: -1, message: 'Group anagrams by sorted-key', highlightIdx: [], phase: 'start' });
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('');
    steps.push({ map: { ...map }, currentIndex: i, message: `"${strs[i]}" → sort → "${sorted}"`, highlightIdx: [i], phase: 'check' });
    map[sorted] = (map[sorted] || '') ? map[sorted] + ',' + strs[i] : strs[i];
    steps.push({ map: { ...map }, currentIndex: i, message: `Group "${sorted}": [${map[sorted]}]`, highlightIdx: [i], phase: 'insert' });
  }
  steps.push({ map: { ...map }, currentIndex: strs.length - 1, message: `Grouped into ${Object.keys(map).length} groups`, highlightIdx: strs.map((_, i) => i), phase: 'done' });
  return steps;
}

function getGenericHashSteps(arr: (string | number)[]): StepState[] {
  const steps: StepState[] = [];
  const map: Record<string, string | number> = {};
  steps.push({ map: {}, currentIndex: -1, message: 'Build HashMap from array', highlightIdx: [], phase: 'start' });
  for (let i = 0; i < arr.length; i++) {
    map[String(arr[i])] = i;
    steps.push({ map: { ...map }, currentIndex: i, message: `Insert ${arr[i]} → index ${i}`, highlightIdx: [i], phase: 'insert' });
  }
  steps.push({ map: { ...map }, currentIndex: arr.length - 1, message: `Map built with ${Object.keys(map).length} entries`, highlightIdx: arr.map((_, i) => i), phase: 'done' });
  return steps;
}

function getSteps(title: string, arr: (string | number)[], input: string): StepState[] {
  const t = title.toLowerCase();
  if (t.includes('two sum')) {
    const tm = input.match(/target\s*=\s*(\d+)/);
    return getTwoSumSteps(arr, tm ? Number(tm[1]) : 9);
  }
  if (t.includes('contains duplicate')) return getContainsDuplicateSteps(arr);
  if (t.includes('group anagram')) return getGroupAnagramsSteps(arr);
  return getGenericHashSteps(arr);
}

export default function HashMapVisualizer({ input, title }: HashMapVisualizerProps) {
  const arr = parseArrayInput(input);
  const stepsRef = useRef<StepState[]>([]);
  const [stepIdx, setStepIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => { stepsRef.current = getSteps(title, arr, input); }, [title, arr, input]);

  const totalSteps = stepsRef.current.length;
  const currentStep = stepIdx >= 0 ? stepsRef.current[stepIdx] : null;
  const mapEntries = currentStep ? Object.entries(currentStep.map) : [];

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

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">HashMap Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>
      <div className="p-4">
        <div className="mb-3">
          <span className="text-[10px] text-slate-500 block mb-2">Input:</span>
          <div className="flex flex-wrap gap-1.5">
            {(currentStep ? arr : arr).map((val, i) => {
              const isActive = currentStep?.currentIndex === i;
              const isHL = currentStep?.highlightIdx.includes(i);
              const found = currentStep?.phase === 'found' && currentStep?.highlightIdx.includes(i);
              return (
                <motion.div key={i} layout initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: isActive ? 1.15 : 1, opacity: 1, borderColor: found ? '#ef4444' : isHL ? '#7C6CF6' : 'rgba(255,255,255,0.1)', backgroundColor: found ? 'rgba(239,68,68,0.15)' : isHL ? 'rgba(124,108,246,0.15)' : 'rgba(255,255,255,0.03)' }} transition={{ duration: 0.2 }} className="w-10 h-10 rounded-lg flex items-center justify-center border text-xs font-mono font-bold text-slate-300">
                  {val}
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="mb-3">
          <span className="text-[10px] text-slate-500 block mb-2">HashMap:</span>
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="flex bg-white/[0.03] px-2 py-1 border-b border-white/5"><span className="text-[10px] text-slate-500 flex-1">Key</span><span className="text-[10px] text-slate-500 flex-1">Value</span></div>
            {mapEntries.length === 0 ? <div className="px-2 py-3 text-[10px] text-slate-600 italic">Empty</div> : mapEntries.map(([k, v], i) => {
              const isLookup = currentStep?.lookupKey !== undefined && String(currentStep.lookupKey) === k;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`flex px-2 py-1.5 border-b border-white/5 ${isLookup ? 'bg-primary-500/10' : ''}`}>
                  <span className="text-[11px] text-primary-300 font-mono flex-1 font-bold">{k}</span>
                  <span className="text-[11px] text-slate-400 font-mono flex-1">{String(v)}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
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
