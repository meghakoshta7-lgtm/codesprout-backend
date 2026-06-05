import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, RotateCcw } from 'lucide-react';

interface GraphVisualizerProps {
  input: string;
  title: string;
}

function parseGraphInput(input: string): number[][] {
  try {
    const match = input.match(/\[([^\]]*)\]/g);
    if (!match) return [];
    return match.map(m => {
      const inner = m.match(/\[([^\]]*)\]/);
      if (!inner) return [];
      return inner[1].split(',').map(v => Number(v.trim())).filter(n => !isNaN(n));
    }).filter(arr => arr.length > 0);
  } catch {
    return [];
  }
}

export default function GraphVisualizer({ input, title }: GraphVisualizerProps) {
  const edges = parseGraphInput(input);
  const [visitedNodes, setVisitedNodes] = useState<Set<number>>(new Set());
  const [currentEdge, setCurrentEdge] = useState<[number, number] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('Click play to start DFS/BFS');
  const [edgeIdx, setEdgeIdx] = useState(-1);

  // Build node list from edges
  const nodeSet = new Set<number>();
  edges.forEach(([u, v]) => { nodeSet.add(u); nodeSet.add(v); });
  const nodes = Array.from(nodeSet).sort((a, b) => a - b);

  // Position nodes in a circle
  const nodePositions: Record<number, { x: number; y: number }> = {};
  const cx = 150, cy = 90, r = 70;
  nodes.forEach((n, i) => {
    const angle = (2 * Math.PI * i) / nodes.length - Math.PI / 2;
    nodePositions[n] = { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });

  const reset = useCallback(() => {
    setVisitedNodes(new Set());
    setCurrentEdge(null);
    setIsPlaying(false);
    setMessage('Click play to start DFS/BFS');
    setEdgeIdx(-1);
  }, []);

  const step = useCallback(() => {
    if (edgeIdx < edges.length - 1) {
      const next = edgeIdx + 1;
      setEdgeIdx(next);
      const [u, v] = edges[next];
      setCurrentEdge([u, v]);
      setVisitedNodes(prev => {
        const next = new Set(prev);
        next.add(u);
        next.add(v);
        return next;
      });
      setMessage(`Visit edge: ${u} → ${v}`);
    } else {
      setIsPlaying(false);
      setMessage('Traversal complete!');
    }
  }, [edgeIdx, edges]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(step, 1500);
    return () => clearInterval(timer);
  }, [isPlaying, step]);

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#0B1020' }}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs font-medium text-white">Graph Visualization</span>
        <span className="text-[10px] text-slate-500">{title}</span>
      </div>

      <div className="p-4">
        <svg viewBox="0 0 300 180" className="w-full h-auto mb-3">
          {/* Edges */}
          {edges.map(([u, v], i) => {
            const p1 = nodePositions[u];
            const p2 = nodePositions[v];
            if (!p1 || !p2) return null;
            const isActive = currentEdge && currentEdge[0] === u && currentEdge[1] === v;
            return (
              <line
                key={i}
                x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                stroke={isActive ? '#7C6CF6' : 'rgba(255,255,255,0.12)'}
                strokeWidth={isActive ? 2.5 : 1.5}
                strokeDasharray={isActive ? '4 2' : undefined}
              />
            );
          })}
          {/* Nodes */}
          {nodes.map(n => {
            const pos = nodePositions[n];
            const isVisited = visitedNodes.has(n);
            return (
              <g key={n}>
                <motion.circle
                  cx={pos.x} cy={pos.y} r={16}
                  fill={isVisited ? 'rgba(124,108,246,0.2)' : 'rgba(255,255,255,0.05)'}
                  stroke={isVisited ? '#7C6CF6' : 'rgba(255,255,255,0.15)'}
                  strokeWidth={2}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: n * 0.05 }}
                />
                <text x={pos.x} y={pos.y + 4} textAnchor="middle" fill={isVisited ? '#c4b5fd' : '#94a3b8'} fontSize={12} fontFamily="monospace" fontWeight="bold">
                  {n}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 mb-3">
          <p className="text-[11px] text-slate-400">{message}</p>
        </div>

        {visitedNodes.size > 0 && (
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[10px] text-slate-500 mr-1">Visited:</span>
            {Array.from(visitedNodes).sort((a, b) => a - b).map(n => (
              <span key={n} className="w-6 h-6 rounded bg-primary-500/10 text-primary-300 text-[10px] font-mono flex items-center justify-center">
                {n}
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
          <button onClick={() => setEdgeIdx(Math.max(0, edgeIdx - 1))} className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
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
          {edgeIdx >= 0 ? `${edgeIdx + 1}/${edges.length}` : `0/${edges.length}`}
        </span>
      </div>
    </div>
  );
}
