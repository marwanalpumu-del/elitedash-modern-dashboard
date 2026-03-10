/**
 * @component ProfileSecurity
 * @description Advanced Profile & Security management with Glassmorphism UI.
 * Features: Image Preview, Live Editing, and Print-Ready Reports.
 */

import React, { useState, useCallback } from 'react';
import { 
  User, Mail, ShieldCheck, Camera, Save, 
  Fingerprint, Printer, Edit3, X, Check 
} from 'lucide-react';

export default function ProfileSecurity({ lang = 'ar' }) {
  // --- STATE MANAGEMENT ---
  const [profile, setProfile] = useState({
    fullName: 'Ahmad Ali',
    email: 'ahmad.ali@elitedash.io',
    role: 'Terminal Administrator',
    avatar: null
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile }); // لتخزين التعديلات المؤقتة
  const [saveStatus, setSaveStatus] = useState(null); // 'saved' | 'idle'

  // --- HANDLERS ---
  
  // رفع الصورة مع التأكد من نوع الملف
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // حفظ التعديلات
  const handleSave = useCallback(() => {
    setProfile({ ...tempProfile });
    setIsEditing(false);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus(null), 3000); // إخفاء التنبيه بعد 3 ثوانٍ
  }, [tempProfile]);

  // إلغاء التعديلات
  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
  };

  const handlePrint = () => window.print();

  // --- TRANSLATIONS ---
  const t = {
    ar: {
      protocols: 'بروتوكولات الأمان',
      contact: 'بيانات الاتصال',
      email: 'البريد الإلكتروني',
      bio: 'بصمة الإصبع',
      edit: 'تعديل الملف',
      save: 'حفظ التغييرات',
      cancel: 'إلغاء',
      print: 'طباعة التقرير',
      saved: 'تم الحفظ بنجاح'
    },
    en: {
      protocols: 'Security Protocols',
      contact: 'Contact Details',
      email: 'Email Address',
      bio: 'Biometric Access',
      edit: 'Edit Profile',
      save: 'Save Changes',
      cancel: 'Cancel',
      print: 'Print Report',
      saved: 'Saved Successfully'
    }
  }[lang === 'ar' ? 'ar' : 'en'];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-700 p-6">
      
      {/* 🔔 SUCCESS TOAST (Premium Touch) */}
      {saveStatus === 'saved' && (
        <div className="fixed top-10 right-10 bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-3 animate-bounce">
          <Check size={20} /> {t.saved}
        </div>
      )}

      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row items-center gap-8 bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-md">
        <div className="relative group">
          <div className="w-40 h-40 rounded-[3rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-indigo-500/20">
            <div className="w-full h-full rounded-[2.8rem] bg-[#020617] flex items-center justify-center overflow-hidden border border-white/10">
              {profile.avatar ? (
                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={80} className="text-indigo-400 opacity-30" />
              )}
            </div>
          </div>
          <label className="absolute -bottom-2 -right-2 p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl shadow-xl border-4 border-[#020617] cursor-pointer transition-all active:scale-90 no-print">
            <Camera size={20} />
            <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
          </label>
        </div>

        <div className="text-center md:text-left flex-1 space-y-4">
          <div>
            {isEditing ? (
              <input 
                autoFocus
                className="bg-white/5 border border-indigo-500/50 rounded-2xl px-5 py-2 text-3xl font-black text-white w-full focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all"
                value={tempProfile.fullName}
                onChange={(e) => setTempProfile({...tempProfile, fullName: e.target.value})}
              />
            ) : (
              <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-tight">{profile.fullName}</h2>
            )}
            <p className="text-indigo-400 font-bold tracking-[0.3em] text-[10px] mt-2 uppercase opacity-70">{profile.role}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start no-print">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs transition-all hover:bg-emerald-500 shadow-lg shadow-emerald-600/20">
                  <Save size={14} /> {t.save}
                </button>
                <button onClick={handleCancel} className="flex items-center gap-2 px-6 py-2 bg-white/5 text-gray-400 rounded-xl font-bold text-xs transition-all hover:bg-white/10 border border-white/10">
                  <X size={14} /> {t.cancel}
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-xs transition-all">
                  <Edit3 size={14} /> {t.edit}
                </button>
                <button onClick={handlePrint} className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs transition-all shadow-lg shadow-indigo-600/20">
                  <Printer size={14} /> {t.print}
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-2xl group transition-all hover:border-white/20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400"><Mail size={24} /></div>
            <h3 className="text-xl font-black italic text-white uppercase">{t.contact}</h3>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase px-2">{t.email}</label>
            <input 
              disabled={!isEditing}
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-white font-medium focus:outline-none focus:border-indigo-500/50 disabled:opacity-50 transition-all"
              value={isEditing ? tempProfile.email : profile.email}
              onChange={(e) => setTempProfile({...tempProfile, email: e.target.value})}
            />
          </div>
        </section>

        {/* Security Info */}
        <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400"><ShieldCheck size={24} /></div>
            <h3 className="text-xl font-black italic text-white uppercase">{t.protocols}</h3>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] flex justify-between items-center group cursor-pointer hover:bg-white/[0.05] transition-all">
            <div className="flex items-center gap-4">
              <Fingerprint className="text-emerald-400 group-hover:scale-110 transition-transform" size={24} />
              <div className="text-xs font-black text-white uppercase tracking-widest">{t.bio}</div>
            </div>
            <div className="w-12 h-6 bg-emerald-500/20 rounded-full relative p-1 shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
            </div>
          </div>
        </section>
      </div>

      {/* PRINT-ONLY FOOTER */}
      <footer className="hidden print:block text-center pt-10 border-t border-white/10">
        <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">EliteDash Secure Report - Terminal ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        <p className="text-gray-600 text-[10px] mt-2 italic">Generated on {new Date().toLocaleString()}</p>
      </footer>

      {/* CUSTOM CSS SCOPE */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #000 !important; }
          .backdrop-blur-3xl { backdrop-filter: none !important; background: rgba(255,255,255,0.05) !important; }
          * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
}
