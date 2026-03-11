/**
 * @component Navbar
 * @version 1.3.0
 * @author Marwan
 * @description Superior navigation controller with embedded Digital Signal Processing (DSP).
 * Integrates dynamic theme switching and conditional audio feedback logic.
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
   * @description Generates a synthesized 800Hz sine wave pulse.
   * Safety Guard: Aborts execution if 'audioEnabled' state is false.
   */
  const playCyberClick = () => {
    if (!audioEnabled) return;

    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, context.currentTime); 
      
      gainNode.gain.setValueAtTime(0.04, context.currentTime); // Optimized for subtle feedback
      gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.start();
      oscillator.stop(context.currentTime + 0.1);
    } catch (error) {
      console.warn("Telemetry: Audio Context interaction suppressed by environment.");
    }
  };

  /** * @constant THEME_PROTOCOLS
   * @description Defines the visual identity nodes available for system-wide injection.
   */
  const protocols = [
    { id: 'purple',  color: 'bg-indigo-500',  shadow: 'shadow-indigo-500/40' },
    { id: 'ocean',   color: 'bg-sky-500',     shadow: 'shadow-sky-500/40' },
    { id: 'emerald', color: 'bg-emerald-500', shadow: 'shadow-emerald-500/40' },
    { id: 'rose',    color: 'bg-rose-500',    shadow: 'shadow-rose-500/40' } // Integrated for Lockdown sync
  ];

  return (
    <nav className="sticky top-0 z-[60] bg-[#020617]/80 backdrop-blur-3xl border-b border-white/5 px-6 py-4 flex justify-between items-center transition-all duration-500">
      
      {/* BRANDING NODE */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h1 className="text-xl lg:text-2xl font-black italic text-white uppercase tracking-tighter">
            ELITE<span style={{ color: 'rgb(var(--primary))' }}>DASH</span>
          </h1>
          
          {userRole === 'admin' && (
            <div className="flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full animate-pulse">
              <ShieldCheck size={10} className="text-rose-500" />
              <span className="text-[8px] text-rose-500 font-black uppercase tracking-[0.2em]">Root Access</span>
            </div>
          )}
        </div>
      </div>

      {/* SYSTEM CONTROLS */}
      <div className="flex items-center gap-4 lg:gap-8">
        
        {/* PROTOCOL SELECTOR: HIDDEN ON SMALL SCREENS FOR CLARITY */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
          <Palette size={14} className="text-slate-500" />
          {protocols.map((p) => (
            <button
              key={p.id}
              title={`Switch to ${p.id} protocol`}
              onClick={() => {
                setTheme(p.id);
                playCyberClick();
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform ${p.color} ${
                currentTheme === p.id 
                ? `scale-150 ring-4 ring-white/10 ${p.shadow}` 
                : 'opacity-30 hover:opacity-100 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* LOCALIZATION TOGGLE */}
        <button 
          onClick={() => {
            toggleLanguage();
            playCyberClick();
          }}
          className="group flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-indigo-400 bg-white/5 hover:border-indigo-500/40 hover:bg-white/10 transition-all active:scale-95"
        >
          <Globe size={14} className="group-hover:rotate-180 transition-transform duration-700" />
          <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
        </button>
      </div>
    </nav>
  );
}
