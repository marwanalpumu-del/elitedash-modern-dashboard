/**
 * EliteDash - Core Application Script
 * الميزات: نظام الترجمة العالمي + نظام الثيم الذكي + حفظ البيانات المحلية
 */

const i18n = {
    en: {
        dir: 'ltr',
        font: "'Inter', sans-serif",
        dash: "Dashboard",
        users: "User Directory",
        orders: "Orders Management",
        settings: "Settings",
        invoice: "Tax Invoice",
        welcome: "Welcome back,",
        status: "System Operational",
        revenue: "Total Revenue",
        sales: "Total Sales",
        growth: "Growth Rate",
        search: "Search here...",
        add: "Add New",
        save: "Save Changes",
        logout: "Logout",
        themeToggle: "Light / Dark",
        langToggle: "English / العربية"
    },
    ar: {
        dir: 'rtl',
        font: "'Cairo', sans-serif",
        dash: "لوحة التحكم",
        users: "دليل المستخدمين",
        orders: "إدارة الطلبات",
        settings: "الإعدادات",
        invoice: "فاتورة ضريبية",
        welcome: "أهلاً بك مجدداً،",
        status: "النظام يعمل بكفاءة",
        revenue: "إجمالي الإيرادات",
        sales: "إجمالي المبيعات",
        growth: "نسبة النمو",
        search: "ابحث هنا...",
        add: "إضافة جديد",
        save: "حفظ التغييرات",
        logout: "تسجيل الخروج",
        themeToggle: "فاتح / داكن",
        langToggle: "English / العربية"
    }
};

// --- 1. وظائف النظام الأساسية ---

function initApp() {
    // استعادة اللغة المحفوظة أو تعيين الإنجليزية كافتراضي
    const lang = localStorage.getItem('appLang') || 'en';
    const t = i18n[lang];

    // تطبيق إعدادات اللغة والخط والاتجاه
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.body.style.fontFamily = t.font;

    // ترجمة جميع العناصر التي تحتوي على data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    });

    // استعادة وتطبيق الثيم (Dark / Light)
    const savedTheme = localStorage.getItem('appTheme') || 'dark';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // عرض اسم المستخدم المحفوظ في جميع الصفحات
    const userDisplay = document.getElementById('userNameDisplay');
    if (userDisplay) {
        userDisplay.innerText = localStorage.getItem('userName') || 'Admin';
    }

    // تحديث الأيقونات بعد تغيير المحتوى
    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- 2. وظائف التبديل (Toggles) ---

function switchLang() {
    const current = localStorage.getItem('appLang') || 'en';
    const newLang = current === 'en' ? 'ar' : 'en';
    localStorage.setItem('appLang', newLang);
    window.location.reload(); // إعادة تحميل لتحديث القاموس والخطوط
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('appTheme', newTheme);
    
    // اختياري: تحديث الأيقونات دون إعادة تحميل إذا لزم الأمر
    if (window.lucide) lucide.createIcons();
}

// --- 3. تشغيل النظام عند التحميل ---
document.addEventListener('DOMContentLoaded', initApp);
