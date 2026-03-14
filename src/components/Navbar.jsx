/**
 * @component Navbar
 * @version 1.4.0
 * @author Marwan
 * @description Advanced Digital Signal Processing (DSP) enabled Controller.
 * Manages Dynamic Theming (HSL), Language Localization, and Root Telemetry.
 */

import React from 'react';
import { ShieldCheck, Palette, Globe } from 'lucide-react';

export default function Navbar({ 
  lang, 
  toggleLanguage, 
  userRole, 
  currentTheme, 
  setTheme, 
  audioEnabled 
}) {
  
  /**
   * @function playCyberClick
   * @description Synthesizes a minimalist 800Hz pulse for haptic-style audio feedback.
   */
  const playCyberClick = () => {
    if (!audioEnabled) return;
    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, context.currentTime); 
      gainNode.gain.setValueAtTime(0.04, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.start();
      oscillator.stop(context.currentTime + 0.1);
    } catch (e) {
      console.debug("Audio: Environment restriction detected.");
    }
  };

  const protocols = [
    { id: 'purple',  color: 'bg-indigo-500',  shadow: 'shadow-indigo-500/40' },
    { id: 'ocean',   color: 'bg-sky-500',     shadow: 'shadow-sky-500/40' },
    { id: 'emerald', color: 'bg-emerald-500', shadow: 'shadow-emerald-500/40' },
    { id: 'rose',    color: 'bg-rose-500',    shadow: 'shadow-rose-500/40' }
  ];

  return (
    <nav className="sticky top-0 z-[60] glass-panel border-b border-white/5 px-4 md:px-8 py-4 flex justify-between items-center transition-all duration-500">
      
      {/* BRANDING NODE */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h1 className="text-xl lg:text-2xl font-black italic text-white uppercase tracking-tighter select-none">
            ELITE<span className="text-primary text-glow">DASH</span>
          </h1>
          
          {userRole === 'admin' && (
            <div className="hidden sm:flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.1)]">
              <ShieldCheck size={10} className="text-rose-500" />
              <span className="text-[8px] text-rose-500 font-black uppercase tracking-[0.2em]">Root Access</span>
            </div>
          )}
        </div>
      </div>

      {/* SYSTEM CONTROLS */}
      <div className="flex items-center gap-3 lg:gap-8">
        
        {/* PROTOCOL SELECTOR */}
        <div className="flex items-center gap-3 bg-white/[0.03] px-3 md:px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
          <Palette size={14} className="text-slate-500 hidden sm:block" />
          <div className="flex gap-2.5">
            {protocols.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setTheme(p.id);
                  playCyberClick();
                }}
                className={`w-4 h-4 rounded-full transition-all duration-500 relative ${p.color} ${
                  currentTheme === p.id 
                  ? `scale-125 ring-4 ring-white/10 ${p.shadow} shadow-lg` 
                  : 'opacity-20 hover:opacity-100 hover:scale-110'
                }`}
              >
                {currentTheme === p.id && (
                   <span className="absolute inset-0 rounded-full animate-ping bg-inherit opacity-20"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* LOCALIZATION TOGGLE */}
        <button 
          onClick={() => {
            toggleLanguage();
            playCyberClick();
          }}
          className="group flex items-center gap-2 px-4 md:px-5 py-2.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-primary bg-white/5 hover:border-primary/40 hover:bg-white/10 transition-all active:scale-90"
        >
          <Globe size={14} className="group-hover:rotate-180 transition-transform duration-1000" />
          <span className="font-sans-ar leading-none">{lang === 'ar' ? 'English' : 'العربية'}</span>
        </button>
      </div>
    </nav>
  );
}
