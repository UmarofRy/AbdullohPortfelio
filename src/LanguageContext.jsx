import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const translations = {
  en: {
    // Global Navigation
    home: "Home",
    portfolio: "Portfolio",
    history: "History",
    blog: "Blog",
    contact: "Contact",
    about: "About",

    // Language Toggle
    languageSwitch: "ENG",
    switchToUzbek: "Switch to Uzbek",
    switchToEnglish: "Switch to English",

    // Profile Information
    name: "Abdulloh Umarov",
    fullName: "Abdulloh Umarov",
    role: "Frontend Developer",
    subtitle: "UI/UX Designer & Creative Developer",
    tagline: "Crafting Digital Experiences",
    location: "Tashkent, Uzbekistan",

    // Personal Info
    personalInfo: "Personal Info",
    residence: "Residence",
    city: "City",
    age: "Age",
    experience: "Experience",
    uzbekistan: "Uzbekistan",
    tashkent: "Tashkent",

    // Skills & Languages
    languages: "Languages",
    programmingSkills: "Programming Skills",
    extraSkills: "Extra Skills",
    technologies: "Technologies",
    frameworks: "Frameworks",
    tools: "Tools",
    uzbek: "Uzbek",
    english: "English",

    // Home Page
    hello: "Hello, I'm",
    welcome: "Welcome to my digital portfolio",
    heroTitle: "Creative Frontend Developer",
    heroSubtitle:
      "Building beautiful, responsive web applications with modern technologies",
    iCreate: "I create",
    creativeTypes: [
      "Beautiful Websites",
      "Mobile Applications",
      "User Interfaces",
      "Digital Experiences",
      "Interactive Solutions",
    ],
    heroDescription:
      "A passionate 19-year-old frontend developer from Uzbekistan, specializing in creating beautiful, responsive web applications with modern technologies like React, JavaScript, and TypeScript.",

    // Call to Actions
    getInTouch: "Get In Touch",
    viewPortfolio: "View Portfolio",
    downloadCV: "Download CV",
    learnMore: "Learn More",
    contactMe: "Contact Me",
    hireMe: "Hire Me",
    letsWork: "Let's Work Together",

    // Services
    whatIDo: "What I Do",
    myServices: "My Services",
    passionateAbout:
      "Passionate about creating digital experiences that matter",

    webDevelopment: "Web Development",
    webDevDesc:
      "Creating modern, responsive websites with clean code and optimal performance using latest technologies.",

    mobileFirstDesign: "Mobile First Design",
    mobileDesignDesc:
      "Designing beautiful interfaces that work perfectly on all devices, from mobile phones to desktop computers.",

    uiuxDesign: "UI/UX Design",
    uiuxDesc:
      "Crafting user-centered designs that provide intuitive and engaging experiences for your audience.",

    performanceOptimization: "Performance Optimization",
    performanceDesc:
      "Optimizing websites for speed, SEO, and performance to ensure the best user experience possible.",

    maintenanceSupport: "Maintenance & Support",
    maintenanceDesc:
      "Providing ongoing support and maintenance to keep your websites running smoothly and up-to-date.",

    seoOptimization: "SEO Optimization",
    seoDesc:
      "Implementing SEO best practices to improve your website's visibility and ranking in search engines.",

    // Statistics
    yearsExperience: "Years Experience",
    projectsCompleted: "Projects Completed",
    happyClients: "Happy Clients",
    codeLines: "Lines of Code",

    // History Page
    myJourney: "My Journey",
    timeline: "Timeline",
    journeySubtitle:
      "A timeline of growth, learning, and achievements in web development",
    achievementsStats: "Achievements & Stats",

    // Current Role
    currentRole: "Advanced Frontend Development",
    currentCompany: "Freelance & Personal Projects",
    currentDesc:
      "Mastering modern React patterns, TypeScript, and building full-stack applications with cutting-edge technologies.",

    // Timeline Items
    education: "Education",
    workExperience: "Work Experience",
    achievements: "Achievements",
    certifications: "Certifications",

    yearsOfLearning: "Years of Learning",
    projectsBuilt: "Projects Built",

    // What's Next
    whatsNext: "What's Next?",
    nextStepsDesc:
      "Continuously learning and growing, with focus on advanced React patterns, full-stack development, and building products that make a difference.",
    viewMyWork: "View My Work",

    // Blog Page
    myBlog: "My Blog",
    latestPosts: "Latest Posts",
    allPosts: "All Posts",
    featuredArticles: "Featured Articles",
    allArticles: "All Articles",
    blogSubtitle:
      "Thoughts, tutorials, and insights on web development and technology",

    // Blog Interactions
    searchArticles: "Search articles...",
    readMore: "Read More",
    readArticle: "Read Article",
    readFull: "Read Full Article",
    minRead: "min read",
    published: "Published",
    tags: "Tags",
    category: "Category",
    author: "Author",

    // Blog Categories
    react: "React",
    javascript: "JavaScript",
    css: "CSS",
    typescript: "TypeScript",
    nodejs: "Node.js",
    tutorial: "Tutorial",
    tips: "Tips",
    guide: "Guide",

    // Blog Fallback
    noArticlesFound: "No articles found",
    tryAdjusting: "Try adjusting your search or filter criteria",

    // Newsletter
    stayUpdated: "Stay Updated",
    newsletter: "Newsletter",
    newsletterDesc:
      "Get the latest articles and tutorials delivered to your inbox",
    enterEmail: "Enter your email address",
    subscribe: "Subscribe",
    subscribeNow: "Subscribe Now",

    // Contact & Footer
    letsConnect: "Let's Connect",
    getInTouchText: "Ready to start your next project?",
    contactDescription:
      "I'm always interested in new opportunities and interesting projects.",

    workTogether: "Work Together",
    readyToWork: "Ready to work together?",
    createTogether: "Let's create something amazing together.",

    email: "Email",
    phone: "Phone",
    address: "Address",
    social: "Social Media",

    // Skills Lists
    bootstrapTailwind: "Bootstrap, Tailwind CSS",
    sassLessStylus: "Sass, Less, Stylus",
    webpackViteGulp: "Webpack, Vite, Gulp",
    gitGithub: "Git & GitHub",
    figmaXd: "Figma, Adobe XD",
    responsiveDesign: "Responsive Design",

    // Loading States
    loading: "Loading...",
    loadingContent: "Loading content...",

    // Common Actions
    close: "Close",
    open: "Open",
    menu: "Menu",
    search: "Search",
    filter: "Filter",
    sort: "Sort",

    // Status
    available: "Available for work",
    busy: "Currently busy",
    online: "Online",
    offline: "Offline",
  },

  uz: {
    // Global Navigation
    home: "Bosh sahifa",
    portfolio: "Portfelio",
    history: "Tarix",
    blog: "Blog",
    contact: "Aloqa",
    about: "Haqida",

    // Language Toggle
    languageSwitch: "UZ",
    switchToUzbek: "O'zbek tiliga o'tish",
    switchToEnglish: "Ingliz tiliga o'tish",

    // Profile Information
    name: "Abdulloh Umarov",
    fullName: "Abdulloh Umarov",
    role: "Frontend Dasturchi",
    subtitle: "UI/UX Dizayner va Ijodiy Dasturchi",
    tagline: "Raqamli Tajribalarni Yaratish",
    location: "Toshkent, O'zbekiston",

    // Personal Info
    personalInfo: "Shaxsiy Ma'lumotlar",
    residence: "Yashash joyi",
    city: "Shahar",
    age: "Yosh",
    experience: "Tajriba",
    uzbekistan: "O'zbekiston",
    tashkent: "Toshkent",

    // Skills & Languages
    languages: "Tillar",
    programmingSkills: "Dasturlash Ko'nikmalari",
    extraSkills: "Qo'shimcha Ko'nikmalar",
    technologies: "Texnologiyalar",
    frameworks: "Freymvorklar",
    tools: "Vositalar",
    uzbek: "O'zbek",
    english: "Ingliz",

    // Home Page
    hello: "Salom, men",
    welcome: "Mening raqamli portfelimga xush kelibsiz",
    heroTitle: "Ijodiy Frontend Dasturchi",
    heroSubtitle:
      "Zamonaviy texnologiyalar bilan chiroyli, moslashuvchan veb-ilovalar yaratish",
    iCreate: "Men yarataman",
    creativeTypes: [
      "Chiroyli Veb-saytlar",
      "Mobil Ilovalar",
      "Foydalanuvchi Interfeyslari",
      "Raqamli Tajribalar",
      "Interaktiv Yechimlar",
    ],
    heroDescription:
      "O'zbekistondan kelgan 19 yoshli ishtiyoqli frontend dasturchi, React, JavaScript va TypeScript kabi zamonaviy texnologiyalar yordamida chiroyli, moslashuvchan veb-ilovalar yaratishga ixtisoslashgan.",

    // Call to Actions
    getInTouch: "Bog'lanish",
    viewPortfolio: "Portfelioni Ko'rish",
    downloadCV: "CV Yuklab Olish",
    learnMore: "Batafsil",
    contactMe: "Men bilan bog'laning",
    hireMe: "Ishga oling",
    letsWork: "Keling birga ishlaylik",

    // Services
    whatIDo: "Men Nima Qilaman",
    myServices: "Mening Xizmatlarim",
    passionateAbout: "Muhim bo'lgan raqamli tajribalarni yaratishga ishtiyoqli",

    webDevelopment: "Veb Dasturlash",
    webDevDesc:
      "Eng so'nggi texnologiyalar yordamida toza kod va optimal ishlash bilan zamonaviy, moslashuvchan veb-saytlar yaratish.",

    mobileFirstDesign: "Mobil Birinchi Dizayn",
    mobileDesignDesc:
      "Mobil telefonlardan tortib kompyutergacha barcha qurilmalarda mukammal ishlaydigan chiroyli interfeyslar dizayn qilish.",

    uiuxDesign: "UI/UX Dizayn",
    uiuxDesc:
      "Foydalanuvchilar uchun intuitiv va qiziqarli tajribalarni ta'minlaydigan foydalanuvchi-markazli dizaynlar yaratish.",

    performanceOptimization: "Ishlashni Optimallashtirish",
    performanceDesc:
      "Eng yaxshi foydalanuvchi tajribasini ta'minlash uchun veb-saytlarni tezlik, SEO va ishlash uchun optimallashtirish.",

    maintenanceSupport: "Texnik Xizmat va Qo'llab-quvvatlash",
    maintenanceDesc:
      "Veb-saytlaringizni muammosiz va zamonaviy holatda ushlab turish uchun doimiy qo'llab-quvvatlash va texnik xizmat ko'rsatish.",

    seoOptimization: "SEO Optimallashtirish",
    seoDesc:
      "Veb-saytingizning qidiruv tizimlaridagi ko'rinishi va reytingini yaxshilash uchun SEO eng yaxshi amaliyotlarini joriy etish.",

    // Statistics
    yearsExperience: "Yillik Tajriba",
    projectsCompleted: "Yakunlangan Loyihalar",
    happyClients: "Mamnun Mijozlar",
    codeLines: "Kod Qatorlari",

    // History Page
    myJourney: "Mening Yo'lim",
    timeline: "Vaqt Jadvali",
    journeySubtitle:
      "Veb-dasturlashda o'sish, o'rganish va yutuqlar vaqt jadvali",
    achievementsStats: "Yutuqlar va Statistika",

    // Current Role
    currentRole: "Ilg'or Frontend Dasturlash",
    currentCompany: "Frilanser va Shaxsiy Loyihalar",
    currentDesc:
      "Zamonaviy React naqshlarini, TypeScript-ni o'zlashtirish va ilg'or texnologiyalar bilan to'liq stek ilovalarni yaratish.",

    // Timeline Items
    education: "Ta'lim",
    workExperience: "Ish Tajribasi",
    achievements: "Yutuqlar",
    certifications: "Sertifikatlar",

    yearsOfLearning: "Yillik O'rganish",
    projectsBuilt: "Qurilgan Loyihalar",

    // What's Next
    whatsNext: "Navbatda Nima?",
    nextStepsDesc:
      "Doimiy ravishda o'rganish va o'sish, ilg'or React naqshlariga, to'liq stek dasturlashga va o'zgarish yaratadigan mahsulotlar yaratishga e'tibor qaratish.",
    viewMyWork: "Ishlarimni Ko'rish",

    // Blog Page
    myBlog: "Mening Blogim",
    latestPosts: "So'nggi Maqolalar",
    allPosts: "Barcha Maqolalar",
    featuredArticles: "Tanlangan Maqolalar",
    allArticles: "Barcha Maqolalar",
    blogSubtitle:
      "Veb-dasturlash va texnologiya bo'yicha fikrlar, darsliklar va tushunchalar",

    // Blog Interactions
    searchArticles: "Maqolalarni qidirish...",
    readMore: "Batafsil",
    readArticle: "Maqolani O'qish",
    readFull: "To'liq Maqolani O'qish",
    minRead: "daq o'qish",
    published: "E'lon qilingan",
    tags: "Teglar",
    category: "Kategoriya",
    author: "Muallif",

    // Blog Categories
    react: "React",
    javascript: "JavaScript",
    css: "CSS",
    typescript: "TypeScript",
    nodejs: "Node.js",
    tutorial: "Darslik",
    tips: "Maslahatlar",
    guide: "Qo'llanma",

    // Blog Fallback
    noArticlesFound: "Hech qanday maqola topilmadi",
    tryAdjusting:
      "Qidiruv yoki filtr mezonlarini o'zgartirishga harakat qiling",

    // Newsletter
    stayUpdated: "Yangilanib Turing",
    newsletter: "Axborot byulleteni",
    newsletterDesc:
      "Eng so'nggi maqolalar va darsliklarni pochta qutingizga oling",
    enterEmail: "Email manzilingizni kiriting",
    subscribe: "Obuna Bo'lish",
    subscribeNow: "Hoziroq Obuna Bo'ling",

    // Contact & Footer
    letsConnect: "Keling Bog'lanaylik",
    getInTouchText: "Keyingi loyihangizni boshlashga tayyormisiz?",
    contactDescription:
      "Men har doim yangi imkoniyatlar va qiziqarli loyihalarga qiziqaman.",

    workTogether: "Birgalikda Ishlash",
    readyToWork: "Birgalikda ishlashga tayyormisiz?",
    createTogether: "Keling, birgalikda ajoyib narsa yarataylik.",

    email: "Email",
    phone: "Telefon",
    address: "Manzil",
    social: "Ijtimoiy Tarmoqlar",

    // Skills Lists
    bootstrapTailwind: "Bootstrap, Tailwind CSS",
    sassLessStylus: "Sass, Less, Stylus",
    webpackViteGulp: "Webpack, Vite, Gulp",
    gitGithub: "Git va GitHub",
    figmaXd: "Figma, Adobe XD",
    responsiveDesign: "Moslashuvchan Dizayn",

    // Loading States
    loading: "Yuklanmoqda...",
    loadingContent: "Kontent yuklanmoqda...",

    // Common Actions
    close: "Yopish",
    open: "Ochish",
    menu: "Menyu",
    search: "Qidirish",
    filter: "Filtr",
    sort: "Saralash",

    // Status
    available: "Ish uchun mavjud",
    busy: "Hozirda band",
    online: "Onlayn",
    offline: "Oflayn",
  },
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("preferredLanguage") || "en";
  });

  useEffect(() => {
    localStorage.setItem("preferredLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "uz" : "en";
    changeLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    t,
    isUzbek: currentLanguage === "uz",
    isEnglish: currentLanguage === "en",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
