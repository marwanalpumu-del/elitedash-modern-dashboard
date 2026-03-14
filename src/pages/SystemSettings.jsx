/**
 * @file SystemSettings.jsx
 * @version 1.3.0
 * @author Marwan & EliteDash UI
 * @description Master Control Engine for platform-wide configurations.
 */

import React, { useState } from 'react';
import { Save, Globe, Volume2, Shield, Layout, Image as ImageIcon, Activity, Cpu } from 'lucide-react';

export default function SystemSettings({ lang = 'ar' }) {
  const isAr = lang === 'ar';
  
  const [localSettings, setLocalSettings] = useState({
    siteName: 'ELITEDASH',
    audioProtocol: true,
    maintenanceMode: false,
    publicRegistration: true,
    securityLevel: 'Enterprise'
  });

  const syncConfiguration = () => {
    // Logic for API persistence
    console.log("Synchronizing System Protocols...", localSettings);
  };

  return (
    <div className="space-y-6 animate-reveal font-sans-ar pb-10">
      
      {/* 1. MASTER HEADER CONTROL */}
      <div className="flex flex-col md:flex-row justify-between items-center glass-panel p-6 md:p-8 rounded-[2.5rem] border-white/10 gap-6">
        <div className={isAr ? 'text-right' : 'text-left'}>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter text-glow">
            {isAr ? 'إعدادات النظام' : 'System Configuration'}
          </h2>
          <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mt-2 opacity-70">
            {isAr ? 'إدارة معلمات المحطة الجذرية' : 'Managing Terminal Root Parameters'}
          </p>
        </div>
        
        <button 
          onClick={syncConfiguration}
          className="group flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase transition-all shadow-xl shadow-primary/20 active:scale-95 relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Save size={18} className="group-hover:rotate-12 transition-transform" />
            {isAr ? 'تطبيق المزامنة' : 'Apply Sync'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* PANEL: Configuration Groups */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* GROUP: Branding & Identity */}
          <div className="glass-panel p-8 rounded-[3rem] card-interactive">
            <h3 className={`text-[10px] font-black text-slate-400 uppercase tracking-[4px] mb-8 flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <Globe size={16} className="text-primary" /> 
              {isAr ? 'الهوية والعلامة التجارية' : 'Branding & Identity'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className={`text-[10px] text-slate-500 font-black uppercase tracking-widest block ${isAr ? 'text-right' : 'text-left'}`}>
                  {isAr ? 'عنوان المنصة' : 'Platform Title'}
                </label>
                <input 
                  type="text" 
                  dir={isAr ? 'rtl' : 'ltr'}
                  value={localSettings.siteName}
                  onChange={(e) => setLocalSettings({...localSettings, siteName: e.target.value})}
                  className={`w-full bg-[#020617]/80 border border-white/5 rounded-2xl py-4 px-6 text-white text-xs outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all font-bold`}
                />
              </div>

              <div className="space-y-3">
                <label className={`text-[10px] text-slate-500 font-black uppercase tracking-widest block ${isAr ? 'text-right' : 'text-left'}`}>
                  {isAr ? 'أصول الشعار' : 'Logo Assets'}
                </label>
                <div className={`flex gap-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                    <ImageIcon size={24} />
                  </div>
                  <button className="flex-1 glass-panel border-dashed border-white/10 rounded-2xl text-[9px] font-black uppercase hover:bg-white/10 transition-all text-slate-400 hover:text-white">
                    {isAr ? 'تحديث أصل المتجهات' : 'Update Vector Asset'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* GROUP: Security Protocols */}
          <div className="glass-panel p-8 rounded-[3rem] card-interactive">
            <h3 className={`text-[10px] font-black text-slate-400 uppercase tracking-[4px] mb-8 flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
              <Shield size={16} className="text-emerald-500" /> 
              {isAr ? 'بروتوكولات الأمان' : 'Security Protocols'}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  id: 'audioProtocol', 
                  icon: Volume2, 
                  label: isAr ? 'نبض الصوت التفاعلي' : 'Audio Feedback Pulse', 
                  desc: isAr ? 'تبديل الإشارات الصوتية الرقمية' : 'Toggle digital audio cues', 
                  status: localSettings.audioProtocol 
                },
                { 
                  id: 'maintenanceMode', 
                  icon: Layout, 
                  label: isAr ? 'بروتوكول الصيانة' : 'Maintenance Protocol', 
                  desc: isAr ? 'تقييد الوصول أثناء التحديثات' : 'Restrict access during updates', 
                  status: localSettings.maintenanceMode 
                },
              ].map((item) => (
                <div key={item.id} className={`flex items-center justify-between p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 hover:border-white/10 transition-all ${isAr ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-5 ${isAr ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="p-4 bg-primary/5 rounded-2xl text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-tight">{item.label}</p>
                      <p className="text-[10px] text-slate-500 font-bold mt-1 opacity-60">{item.desc}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setLocalSettings(p => ({...p, [item.id]: !item.status}))}
                    className={`w-14 h-7 rounded-full transition-all relative p-1 ${item.status ? 'bg-primary shadow-[0_0_20px_hsla(var(--primary),0.4)]' : 'bg-slate-800'}`}
                  >
                    <div className={`w-5 h-5 rounded-full bg-white transition-all shadow-md ${item.status ? (isAr ? '-translate-x-7' : 'translate-x-7') : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR: System Integrity */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-[3rem] relative overflow-hidden group">
            <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-1000`}>
              <Cpu size={120} />
            </div>
            
            <h4 className={`text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 ${isAr ? 'text-right' : 'text-left'}`}>
              {isAr ? 'سلامة النظام' : 'System Integrity'}
            </h4>
            
            <div className="space-y-6 relative z-10">
              <div className={`flex justify-between items-end ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{isAr ? 'حالة البناء' : 'Build Status'}</span>
                <span className="text-[10px] text-emerald-400 font-black tracking-widest">STABLE v1.3</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden p-[1px]">
                <div className="bg-primary w-[92%] h-full rounded-full shadow-[0_0_10px_hsla(var(--primary),0.5)]" />
              </div>
              <p className={`text-[9px] text-slate-500 leading-relaxed font-bold uppercase tracking-tighter opacity-40 ${isAr ? 'text-right' : 'text-left'}`}>
                {isAr ? 'ملاحظة: يتطلب استمرار التكوين مزامنة العقدة الموزعة.' : 'Notice: Configuration persistence requires node sync.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
