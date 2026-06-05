import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface ArrayVisualizerProps {
  input: string;
  title: string;
}

function parseArrayInput(input: string): (string | number | null)[] {
  try {
    const cleaned = input.replace(/\s/g, '');
    const match = cleaned.match(/\[([^\]]*)\]/);
    if (!match) return [];
    return match[1].split(',').map(v => {
      if (v === 'null' || v === '') return null;
      const num = Number(v);
      return isNaN(num) ? v.replace(/"/g, '') : num;
    });
  } catch {
    return [];
  }
}

interface StepState {
  arr: (string | number | null)[];
  pointers: Record<string, number>;
  message: string;
  highlightIndices: number[];
  highlightColor: string;
}

function getMoveZeroesSteps(inputArr: (string | number | null)[]): StepState[] {
  const arr = [...inputArr];
  const steps: StepState[] = [];
  let i = 0; // slow pointer: next position for non-zero

  steps.push({
    arr: [...arr],
    pointers: { i, j: 0 },
    message: 'Initialize i=0 (slow pointer for non-zero position), j=0 (fast scanner)',
    highlightIndices: [],
    highlightColor: '',
  });

  for (let j = 0; j < arr.length; j++) {
    // Show j scanning
    steps.push({
      arr: [...arr],
      pointers: { i, j },
      message: `j=${j} scans arr[j]=${arr[j]}  ${arr[j] !== 0 ? '→ non-zero found!' : '→ zero, skip'}`,
      highlightIndices: [j],
      highlightColor: arr[j] !== 0 ? '#22c55e' : '#ef4444',
    });

    if (arr[j] !== 0) {
      if (i !== j) {
        // Swap
        steps.push({
          arr: [...arr],
          pointers: { i, j },
          message: `Swap arr[i=${i}]=${arr[i]} ↔ arr[j=${j}]=${arr[j]}`,
          highlightIndices: [i, j],
          highlightColor: '#7C6CF6',
        });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push({
          arr: [...arr],
          pointers: { i: i + 1, j },
          message: `After swap: [${arr.join(', ')}]. Move i→${i + 1}`,
          highlightIndices: [i, j],
          highlightColor: '#22c55e',
        });
      }
      i++;
    }
  }

  steps.push({
    arr: [...arr],
    pointers: { i, j: arr.length - 1 },
    message: `Done! All non-zeros moved to front: [${arr.join(', ')}]`,
    highlightIndices: Array.from({ length: i }, (_, k) => k),
    highlightColor: '#22c55e',
  });

  return steps;
}

function getSortColorsSteps(inputArr: (string | number | null)[]): StepState[] {
  const arr = [...inputArr];
  const steps: StepState[] = [];
  let low = 0, mid = 0, high = arr.length - 1;

  steps.push({
    arr: [...arr],
    pointers: { low, mid, high },
    message: 'Initialize low=0, mid=0, high=n-1 (Dutch National Flag)',
    highlightIndices: [],
    highlightColor: '',
  });

  while (mid <= high) {
    steps.push({
      arr: [...arr],
      pointers: { low, mid, high },
      message: `mid=${mid} examines arr[mid]=${arr[mid]}`,
      highlightIndices: [mid],
      highlightColor: arr[mid] === 0 ? '#3b82f6' : arr[mid] === 1 ? '#eab308' : '#ef4444',
    });

    if (arr[mid] === 0) {
      if (low !== mid) {
        steps.push({
          arr: [...arr],
          pointers: { low, mid, high },
          message: `Swap arr[low=${low}]=${arr[low]} ↔ arr[mid=${mid}]=0`,
          highlightIndices: [low, mid],
          highlightColor: '#7C6CF6',
        });
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
      }
      low++;
      mid++;
      steps.push({
        arr: [...arr],
        pointers: { low, mid, high },
        message: `After swap: low→${low}, mid→${mid}`,
        highlightIndices: [low - 1],
        highlightColor: '#3b82f6',
      });
    } else if (arr[mid] === 1) {
      mid++;
      steps.push({
        arr: [...arr],
        pointers: { low, mid, high },
        message: `Value 1 is in correct zone. mid→${mid}`,
        highlightIndices: [mid - 1],
        highlightColor: '#eab308',
      });
    } else {
      steps.push({
        arr: [...arr],
        pointers: { low, mid, high },
        message: `Swap arr[mid=${mid}]=2 ↔ arr[high=${high}]=${arr[high]}`,
        highlightIndices: [mid, high],
        highlightColor: '#7C6CF6',
      });
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
      steps.push({
        arr: [...arr],
        pointers: { low, mid, high },
        message: `After swap: high→${high}. Don't move mid yet (need to check swapped element)`,
        highlightIndices: [mid],
        highlightColor: '#ef4444',
      });
    }
  }

  steps.push({
    arr: [...arr],
    pointers: { low, mid, high },
    message: `Done! Sorted: [${arr.join(', ')}]`,
    highlightIndices: arr.map((_, i) => i),
    highlightColor: '#22c55e',
  });

  return steps;
}

function getTraversalSteps(inputArr: (string | number | null)[]): StepState[] {
  const steps: StepState[] = [];
  for (let i = 0; i < inputArr.length; i++) {
    steps.push({
      arr: [...inputArr],
      pointers: { i },
      message: `Examining index ${i}: value = ${inputArr[i]}`,
      highlightIndices: [i],
      highlightColor: '#7C6CF6',
    });
  }
  steps.push({
    arr: [...inputArr],
    pointers: {},
    message: `Traversal complete! [${inputArr.join(', ')}]`,
    highlightIndices: inputArr.map((_, i) => i),
    highlightColor: '#22c55e',
  });
  return steps;
}

function getSteps(title: string, arr: (string | number | null)[]): StepState[] {
  const t = title.toLowerCase();
  if (t.includes('move zero')) return getMoveZeroesSteps(arr);
  if (t.includes('sort color')) return getSortColorsSteps(arr);
  return getTraversalSteps(arr);
}

function getPointerLabel(key: string): string {
  if (key === 'i') return 'i (slow)';
  if (key === 'j') return 'j (fast)';
  if (key === 'low') return 'low';
  if (key === 'mid') return 'mid';
  if (key === 'high') return 'high';
  return key;
}

export default function ArrayVisualizer({ input, title }: ArrayVisualizerProps) {
  const arr = parseArrayInput(input);
  const stepsRef = useRef<StepState[]>([]);
  const [stepIdx, setStepIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    stepsRef.current = getSteps(title, arr);
  }, [title, arr]);

  const totalSteps = stepsRef.current.length;
  const currentStep = stepIdx >= 0 ? stepsRef.current[stepIdx] : null;

  const reset = useCallback(() => {
    setStepIdx(-1);
    setIsPlaying(false);
  }, []);

  const stepForward = useCallback(() => {
    if (stepIdx < totalSteps - 1) {
      setStepIdx(prev => prev + 1);
    } else {
      setIsPlaying(false);
    }
  }, [stepIdx, totalSteps]);

  const stepBack = useCallback(() => {
    if (stepIdx > 0) setStepIdx(prev => prev - 1);
  }, [stepIdx]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const idx = stepsRef.current.length;
      setStepIdx(prev => {
        if (prev < idx - 1) return prev + 1;
        setIsPlaying(false);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Array Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>

      <div className="p-4">
        {/* Array Boxes */}
        <div className="flex flex-wrap gap-2 mb-2">
          {(currentStep ? currentStep.arr : arr).map((val, i) => {
            const isActive = currentStep ? currentStep.highlightIndices.includes(i) : false;
            const ptrEntry = currentStep ? Object.entries(currentStep.pointers).find(([, v]) => v === i) : null;
            const ptrKey = ptrEntry?.[0];
            const color = currentStep?.highlightColor || '#7C6CF6';

            return (
              <motion.div
                key={i}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: ptrKey ? 1.15 : 1,
                  opacity: 1,
                  borderColor: ptrKey ? color : isActive ? color : 'rgba(255,255,255,0.1)',
                  backgroundColor: ptrKey ? `${color}22` : isActive ? `${color}15` : 'rgba(255,255,255,0.03)',
                }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <div className="w-11 h-11 rounded-lg flex flex-col items-center justify-center border">
                  <span
                    className="text-sm font-mono font-bold"
                    style={{ color: ptrKey ? color : isActive ? color : '#cbd5e1' }}
                  >
                    {val === null ? '∅' : String(val)}
                  </span>
                </div>
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-slate-500">[{i}]</span>
                {ptrKey && (
                  <motion.span
                    initial={{ y: -4, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold"
                    style={{ color }}
                  >
                    ▲ {getPointerLabel(ptrKey)}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pointers Legend */}
        {currentStep && Object.keys(currentStep.pointers).length > 1 && (
          <div className="flex flex-wrap gap-3 mt-6 mb-3">
            {Object.entries(currentStep.pointers).map(([key, val]) => {
              const color =
                key === 'i' ? '#3b82f6' :
                key === 'j' ? '#22c55e' :
                key === 'low' ? '#3b82f6' :
                key === 'mid' ? '#eab308' :
                key === 'high' ? '#ef4444' : '#7C6CF6';
              return (
                <span key={key} className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ color, backgroundColor: `${color}15` }}>
                  {getPointerLabel(key)} = {val}
                </span>
              );
            })}
          </div>
        )}

        {/* Message */}
        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3 mt-4">
          <p className="text-[11px] text-slate-400">
            {currentStep?.message || 'Click play to start visualization'}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1">
          <button onClick={reset} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <RotateCcw className="w-3 h-3" />
          </button>
          <button onClick={stepBack} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <SkipBack className="w-3 h-3" />
          </button>
          <button onClick={() => { if (stepIdx < 0) setStepIdx(0); setIsPlaying(!isPlaying); }} className="p-1.5 rounded-md bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors">
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button onClick={stepForward} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <SkipForward className="w-3 h-3" />
          </button>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">
          {stepIdx >= 0 ? `${stepIdx + 1}/${totalSteps}` : `0/${totalSteps}`}
        </span>
      </div>
    </div>
  );
}
