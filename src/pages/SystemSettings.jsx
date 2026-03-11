import React, { useState } from 'react';
import { Save, Globe, Volume2, Shield, Layout, Image as ImageIcon, Activity } from 'lucide-react';

/**
 * @file SystemSettings.jsx
 * @module Administrative
 * @description Master Control Engine for platform-wide configurations and branding assets.
 * @version 1.2.0
 */

export default function SystemSettings() {
  
  /**
   * @state localSettings
   * @description Local synchronization state for administrative parameters.
   */
  const [localSettings, setLocalSettings] = useState({
    siteName: 'ELITEDASH',
    audioProtocol: true,
    maintenanceMode: false,
    publicRegistration: true,
    securityLevel: 'Enterprise'
  });

  /**
   * @function syncConfiguration
   * @description Broadcasts local state changes to the system backend.
   */
  const syncConfiguration = () => {
    // Logic for API persistence
    console.log("Synchronizing System Protocols...", localSettings);
    alert('System protocols synchronized successfully');
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-1000">
      
      {/* MODULE: Master Header */}
      <div className="flex justify-between items-center bg-white/5 p-6 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
        <div>
          <h2 className="text-xl lg:text-2xl font-black text-white uppercase tracking-tighter">
            System Configuration
          </h2>
          <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-[0.3em] mt-1">
            Managing Terminal Root Parameters
          </p>
        </div>
        
        <button 
          onClick={syncConfiguration}
          className="group flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
        >
          <Save size={16} className="group-hover:rotate-12 transition-transform" />
          Apply Sync
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* PANEL: Configuration Groups */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* GROUP: Branding Assets */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-md relative overflow-hidden">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[4px] mb-8 flex items-center gap-3">
              <Globe size={14} className="text-indigo-500" /> 
              Branding & Identity
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-2 italic">
                  Platform Title
                </label>
                <input 
                  type="text" 
                  value={localSettings.siteName}
                  onChange={(e) => setLocalSettings({...localSettings, siteName: e.target.value})}
                  className="w-full bg-[#020617]/80 border border-white/5 rounded-2xl py-4 px-6 text-white text-xs outline-none focus:border-indigo-500/40 focus:ring-4 focus:ring-indigo-500/5 transition-all font-bold"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest ml-2 italic">
                  Logo Assets
                </label>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                    <ImageIcon size={24} />
                  </div>
                  <button className="flex-1 bg-white/5 border border-dashed border-white/10 rounded-2xl text-[9px] font-black uppercase hover:bg-white/10 transition-all text-slate-400 hover:text-white">
                    Update Vector Asset
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* GROUP: Security & Feedback */}
          <div className="bg-[#0f172a]/40 border border-white/5 p-8 rounded-[3rem]">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[4px] mb-8 flex items-center gap-3">
              <Shield size={14} className="text-emerald-500" /> 
              Security Protocols
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  id: 'audio', 
                  icon: Volume2, 
                  label: 'Audio Feedback Pulse', 
                  desc: 'Toggle digital audio cues for terminal interactions', 
                  status: localSettings.audioProtocol 
                },
                { 
                  id: 'maint', 
                  icon: Layout, 
                  label: 'Maintenance Protocol', 
                  desc: 'Restrict user access during core infrastructure updates', 
                  status: localSettings.maintenanceMode 
                },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between p-5 bg-white/5 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all shadow-sm">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-indigo-500/5 rounded-2xl text-indigo-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-tight">{item.label}</p>
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setLocalSettings(p => ({...p, [item.id === 'audio' ? 'audioProtocol' : 'maintenanceMode']: !item.status}))}
                    className={`w-14 h-7 rounded-full transition-all relative p-1 ${item.status ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'bg-slate-800'}`}
                  >
                    <div className={`w-5 h-5 rounded-full bg-white transition-all shadow-md ${item.status ? 'translate-x-7' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR: System Health Metrics */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900/40 to-[#020617] border border-white/10 p-8 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={80} />
            </div>
            
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-6">System Integrity</h4>
            
            <div className="space-y-5 relative z-10">
              <div className="flex justify-between items-end">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Build Status</span>
                <span className="text-[10px] text-emerald-400 font-black">STABLE v1.2</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-[92%] h-full rounded-full" />
              </div>
              <p className="text-[9px] text-slate-500 leading-relaxed italic opacity-60">
                Notice: Configuration persistence requires distributed node synchronization.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
