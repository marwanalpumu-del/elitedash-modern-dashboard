/**
 * @component NotificationCenter
 * @description High-end alert system with glassmorphism design and micro-interactions.
 * Standards: Global Market Compliance (Clean Structure & Semantic UI).
 */

import React from 'react';
import { Bell, Check, Info, AlertTriangle, X, Zap } from 'lucide-react';

const ALERTS = [
  { 
    id: 1, 
    type: 'success', 
    titleAr: 'تم تحديث الأصول', titleEn: 'Assets Updated',
    descAr: 'تمت مزامنة بيانات المحفظة بنجاح.', descEn: 'Wallet data synchronized successfully.',
    time: '2m ago', icon: <Check size={16} /> 
  },
  { 
    id: 2, 
    type: 'warning', 
    titleAr: 'تنبيه أمان', titleEn: 'Security Alert',
    descAr: 'تم تسجيل دخول جديد من متصفح غير معروف.', descEn: 'New login detected from unknown browser.',
    time: '1h ago', icon: <AlertTriangle size={16} /> 
  },
  { 
    id: 3, 
    type: 'info', 
    titleAr: 'تحديث النظام', titleEn: 'System Update',
    descAr: 'النسخة v1.0.5 متاحة الآن للتثبيت.', descEn: 'Version v1.0.5 is now available.',
    time: '5h ago', icon: <Info size={16} /> 
  }
];

export default function NotificationCenter({ lang = 'ar' }) {
  
  const labels = {
    ar: { title: 'مركز التنبيهات', clear: 'مسح الكل', empty: 'لا توجد تنبيهات جديدة' },
    en: { title: 'Notification Center', clear: 'Clear All', empty: 'No new alerts' }
  }[lang === 'ar' ? 'ar' : 'en'];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-700">
      
      {/* 1. Header Section */}
      <div className="flex justify-between items-end px-4">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase flex items-center gap-3">
            <Zap className="text-amber-400 fill-amber-400/20" size={28} /> {labels.title}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-600 to-transparent mt-2 rounded-full"></div>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-colors">
          {labels.clear}
        </button>
      </div>

      {/* 2. Notifications List */}
      <div className="space-y-4 px-2">
        {ALERTS.map((alert) => (
          <div 
            key={alert.id} 
            className="group relative bg-[#0b0f1a]/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-6 hover:bg-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* Type Indicator Glow */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              alert.type === 'success' ? 'bg-emerald-500' : 
              alert.type === 'warning' ? 'bg-amber-500' : 'bg-indigo-500'
            } opacity-40 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(99,102,241,0.5)]`} />

            <div className="flex items-start gap-5 relative z-10">
              {/* Icon Sphere */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                alert.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 
                alert.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 
                'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
              }`}>
                {alert.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-white font-black text-sm uppercase italic tracking-tight group-hover:text-indigo-300 transition-colors">
                    {lang === 'ar' ? alert.titleAr : alert.titleEn}
                  </h4>
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{alert.time}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 font-medium leading-relaxed max-w-sm">
                  {lang === 'ar' ? alert.descAr : alert.descEn}
                </p>
              </div>

              {/* Action Button */}
              <button className="text-slate-700 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <X size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Empty State Suggestion (Optional) */}
      {ALERTS.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 opacity-30">
          <Bell size={48} className="text-slate-600 mb-4" />
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-500">{labels.empty}</p>
        </div>
      )}
    </div>
  );
}
