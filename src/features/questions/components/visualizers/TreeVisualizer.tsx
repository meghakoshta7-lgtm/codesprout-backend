import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
}

interface TreeVisualizerProps {
  input: string;
  title: string;
}

function parseTreeInput(input: string): (number | null)[] {
  try {
    const cleaned = input.replace(/\s/g, '');
    const match = cleaned.match(/\[([^\]]*)\]/);
    if (!match) return [];
    return match[1].split(',').map(v => {
      if (v === 'null' || v === '') return null;
      return Number(v);
    });
  } catch {
    return [];
  }
}

function buildTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;
  const root: TreeNode = { val: values[0], left: null, right: null };
  const queue: TreeNode[] = [root];
  let i = 1;
  while (i < values.length) {
    const node = queue.shift()!;
    if (i < values.length && values[i] !== null) {
      node.left = { val: values[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;
    if (i < values.length && values[i] !== null) {
      node.right = { val: values[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function TreeSVG({ root, highlightVal }: { root: TreeNode | null; highlightVal: number | null }) {
  if (!root) return <div className="text-xs text-slate-500">Empty tree</div>;

  const nodes: { val: number; x: number; y: number; highlight: boolean }[] = [];
  const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];

  const traverse = (node: TreeNode | null, x: number, y: number, spread: number) => {
    if (!node || node.val === null) return;
    nodes.push({ val: node.val, x, y, highlight: node.val === highlightVal });
    if (node.left && node.left.val !== null) {
      edges.push({ x1: x, y1: y + 16, x2: x - spread, y2: y + 50 });
      traverse(node.left, x - spread, y + 50, spread / 2);
    }
    if (node.right && node.right.val !== null) {
      edges.push({ x1: x, y1: y + 16, x2: x + spread, y2: y + 50 });
      traverse(node.right, x + spread, y + 50, spread / 2);
    }
  };

  traverse(root, 150, 20, 80);

  return (
    <svg viewBox="0 0 300 220" className="w-full h-auto">
      {edges.map((e, i) => (
        <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="rgba(255,255,255,0.15)" strokeWidth={1.5} />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={16}
            fill={n.highlight ? 'rgba(124,108,246,0.3)' : 'rgba(255,255,255,0.05)'}
            stroke={n.highlight ? '#7C6CF6' : 'rgba(255,255,255,0.15)'}
            strokeWidth={2}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
          />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill={n.highlight ? '#c4b5fd' : '#94a3b8'} fontSize={12} fontFamily="monospace" fontWeight="bold">
            {n.val}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function TreeVisualizer({ input, title }: TreeVisualizerProps) {
  const values = parseTreeInput(input);
  const tree = buildTree(values);
  const [visitOrder, setVisitOrder] = useState<number[]>([]);
  const [currentIdx, setCurrentIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('Click play to start DFS/BFS traversal');
  const currentIdxRef = useRef(-1);
  const visitOrderRef = useRef<number[]>([]);

  const reset = useCallback(() => {
    setCurrentIdx(-1);
    currentIdxRef.current = -1;
    setIsPlaying(false);
    setMessage('Click play to start DFS/BFS traversal');
  }, []);

  // Generate visit order on mount
  useEffect(() => {
    const order: number[] = [];
    const traverse = (node: TreeNode | null) => {
      if (!node || node.val === null) return;
      order.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(tree);
    setVisitOrder(order);
    visitOrderRef.current = order;
  }, [tree]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      const idx = currentIdxRef.current;
      const order = visitOrderRef.current;
      if (idx < order.length - 1) {
        const next = idx + 1;
        currentIdxRef.current = next;
        setCurrentIdx(next);
        setMessage(`Visiting node: ${order[next]}`);
      } else {
        setIsPlaying(false);
        setMessage('Traversal complete!');
      }
    }, 1200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const step = useCallback(() => {
    const idx = currentIdxRef.current;
    const order = visitOrderRef.current;
    if (idx < order.length - 1) {
      const next = idx + 1;
      currentIdxRef.current = next;
      setCurrentIdx(next);
      setMessage(`Visiting node: ${order[next]}`);
    }
  }, []);

  const goPrev = useCallback(() => {
    const idx = currentIdxRef.current;
    if (idx > 0) {
      const prev = idx - 1;
      currentIdxRef.current = prev;
      setCurrentIdx(prev);
    }
  }, []);

  const highlightVal = currentIdx >= 0 ? visitOrder[currentIdx] : null;

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Tree Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>

      <div className="p-4">
        <div className="flex justify-center mb-2">
          <TreeSVG root={tree} highlightVal={highlightVal} />
        </div>

        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
          <p className="text-[11px] text-slate-400">{message}</p>
        </div>

        {visitOrder.length > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[10px] text-slate-500 mr-1">Visit order:</span>
            {visitOrder.map((v, i) => (
              <span
                key={i}
                className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono ${
                  i === currentIdx
                    ? 'bg-primary-500/20 text-primary-300 border border-primary-500/40'
                    : i < currentIdx
                    ? 'bg-white/5 text-slate-500'
                    : 'bg-white/[0.02] text-slate-600'
                }`}
              >
                {v}
              </span>
            ))}
          </div>
        )}
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
          {currentIdx >= 0 ? `${currentIdx + 1}/${visitOrder.length}` : `0/${visitOrder.length}`}
        </span>
      </div>
    </div>
  );
}
