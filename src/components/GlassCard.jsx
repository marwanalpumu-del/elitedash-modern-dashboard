import React from 'react';

/**
 * @component GlassCard
 * @description A reusable glassmorphism container for consistent UI design.
 */
export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 ${className}`}>
      {children}
    </div>
  );
}
