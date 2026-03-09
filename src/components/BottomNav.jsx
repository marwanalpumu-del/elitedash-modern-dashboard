import React from 'react';
import { LayoutDashboard, ShieldCheck, Bell } from 'lucide-react';

/**
 * @component BottomNav
 * @description Mobile-optimized bottom navigation bar.
 */
export default function BottomNav({ activeTab, setActiveTab, lang }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-2xl border-t border-white/5 p-4 flex justify-around items-center shadow-2xl z-50">
      <NavButton 
        active={activeTab === 'orders'} 
        icon={LayoutDashboard} 
        label={lang === 'ar' ? 'الأصول' : 'Orders'} 
        onClick={() => setActiveTab('orders')} 
      />
      <NavButton 
        active={activeTab === 'security'} 
        icon={ShieldCheck} 
        label={lang === 'ar' ? 'الأمان' : 'Security'} 
        onClick={() => setActiveTab('security')} 
      />
      <NavButton 
        active={activeTab === 'alerts'} 
        icon={Bell} 
        label={lang === 'ar' ? 'التنبيهات' : 'Alerts'} 
        onClick={() => setActiveTab('alerts')} 
      />
    </nav>
  );
}

/**
 * @component NavButton
 * @description Helper component for BottomNav buttons.
 */
function NavButton({ active, icon: Icon, label, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${active ? 'text-indigo-400 scale-110' : 'text-slate-600'}`}
    >
      <Icon size={22} strokeWidth={active ? 2.5 : 2} />
      <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
      {active && <span className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse"></span>}
    </button>
  );
}
