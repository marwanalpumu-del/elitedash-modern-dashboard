import React from 'react';
import { Bell, ShieldAlert, Zap, Radio, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function NotificationCenter({ lang = 'ar' }) {
  const alerts = [
    { id: 1, type: 'security', title: 'New Login', desc: 'Access from Taizz, YE', time: '2m ago', priority: 'high' },
    { id: 2, type: 'system', title: 'System Sync', desc: 'Assets updated', time: '15m ago', priority: 'low' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-4xl font-black italic text-white uppercase">{lang === 'ar' ? 'مركز التنبيهات' : 'Signal Matrix'}</h2>
        <Radio size={20} className="text-indigo-500 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {alerts.map((note) => (
          <div key={note.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex gap-6 hover:bg-white/[0.08] transition-all">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${note.priority === 'high' ? 'bg-rose-500/10 text-rose-400' : 'bg-indigo-500/10 text-indigo-400'}`}>
              {note.type === 'security' ? <ShieldAlert size={24} /> : <Zap size={24} />}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="text-white font-black text-sm uppercase tracking-tight">{note.title}</h4>
                <span className="text-[10px] font-bold text-slate-600 italic uppercase">{note.time}</span>
              </div>
              <p className="text-slate-400 text-xs mt-1">{note.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
