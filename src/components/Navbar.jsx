import React from 'react';
import { ShieldCheck, Palette } from 'lucide-react';

/**
 * @component Navbar
 * @version 1.2.0
 * @description The high-end navigation controller with integrated Audio Feedback Logic.
 * Now synchronized with global system configuration for conditional sound execution.
 */
export default function Navbar({ lang, toggleLanguage, userRole, currentTheme, setTheme, audioEnabled }) {
  
  /**
   * @function playCyberClick
   * @description Generates a 800Hz digital pulse for tactile audio feedback.
   * Execution is conditional based on the global 'audioEnabled' state.
   */
  const playCyberClick = () => {
    // SECURITY GUARD: Only proceed if audio is enabled in Global Settings
    if (!audioEnabled) return;

    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(800, context.currentTime); 
      
      gainNode.gain.setValueAtTime(0.05, context.currentTime); // Very subtle volume
      gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.start();
      oscillator.stop(context.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio Context blocked or unsupported by terminal environment.");
    }
  };

  const protocols = [
    { id: 'purple', color: 'bg-indigo-500', shadow: 'shadow-indigo-500/40' },
    { id: 'ocean',  color: 'bg-sky-500',    shadow: 'shadow-sky-500/40' },
    { id: 'emerald', color: 'bg-emerald-500', shadow: 'shadow-emerald-500/40' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-3xl border-b border-white/5 px-6 py-4 flex justify-between items-center transition-all duration-500">
      
      {/* Brand Identity Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h1 className="text-xl lg:text-2xl font-black italic text-white uppercase tracking-tighter">
            ELITE<span className="text-indigo-500">DASH</span>
          </h1>
          {userRole === 'admin' && (
            <div className="flex items-center gap-1 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-full">
              <ShieldCheck size={10} className="text-rose-500" />
              <span className="text-[8px] text-rose-500 font-black uppercase tracking-widest">Root</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Color Protocol Selectors with Interactive Feedback */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5">
          <Palette size={14} className="text-slate-500 mr-1" />
          {protocols.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setTheme(p.id);
                playCyberClick(); // Feedback triggered via Audio Guard
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${p.color} ${currentTheme === p.id ? `scale-125 ring-4 ring-white/10 ${p.shadow}` : 'opacity-40 hover:opacity-100'}`}
            />
          ))}
        </div>

        {/* Global Language Controller */}
        <button 
          onClick={() => {
            toggleLanguage();
            playCyberClick(); // Feedback triggered via Audio Guard
          }}
          className="px-5 py-2.5 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-indigo-400 bg-[#020617] hover:border-indigo-500/30 transition-all active:scale-95"
        >
          {lang === 'ar' ? 'English Interface' : 'الواجهة العربية'}
        </button>
      </div>
    </nav>
  );
}
