/**
 * @component GlassCard
 * @version 1.1.0
 * @author Marwan
 * @description Superior reusable glassmorphism container. 
 * Linked to global 'glass-panel' and 'card-interactive' definitions.
 */
import React from 'react';

export default function GlassCard({ children, className = "", interactive = true }) {
  return (
    <div className={`
      glass-panel 
      p-6 
      rounded-[2.5rem] 
      ${interactive ? 'card-interactive' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
}
