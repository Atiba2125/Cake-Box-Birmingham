import React, { useMemo } from 'react';
import { prefersReducedMotion } from '../hooks/useMotion.js';

const COLORS = ['#f4a7c3', '#a9d6e5', '#f9c9a8', '#f6d86b', '#b9a2d6', '#ffffff'];

/** Pastel confetti drifting down, like party sprinkles. */
export function Confetti() {
  const bits = useMemo(() => {
    if (prefersReducedMotion()) return [];
    const n = window.innerWidth < 700 ? 10 : 20;
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      kind: ['dot', 'rod', 'tri'][i % 3],
      style: {
        left: `${Math.random() * 100}%`,
        '--l': `${10 + Math.random() * 12}px`,
        '--d': `${15 + Math.random() * 16}s`,
        '--delay': `${-Math.random() * 24}s`,
        '--x': `${Math.random() * 140 - 70}px`,
        '--r': `${Math.floor(Math.random() * 360)}deg`,
        '--c': COLORS[Math.floor(Math.random() * COLORS.length)],
      },
    }));
  }, []);
  return (
    <div className="confetti" aria-hidden="true">
      {bits.map((b) => <i key={b.id} className={b.kind} style={b.style} />)}
    </div>
  );
}

/** Soft wavy divider between sections. `color` is the fill of the next section. */
export function Wave({ color = '#59275e', flip = false }) {
  return (
    <div className={`wave${flip ? ' wave--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill={color} d="M0,40 C120,80 240,0 360,30 C480,60 600,80 720,45 C840,10 960,0 1080,35 C1200,70 1320,60 1440,30 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

/** Circular rotating text badge. */
export function SpinBadge({ text = 'EGG FREE • HANDMADE • FRESH • ', children }) {
  return (
    <div className="spin">
      <svg viewBox="0 0 200 200" className="spin__ring" aria-hidden="true">
        <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
        <text><textPath href="#circ" startOffset="0">{text}</textPath></text>
      </svg>
      <div className="spin__core">{children}</div>
    </div>
  );
}
