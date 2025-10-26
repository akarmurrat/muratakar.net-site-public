// Mock data for Murat Akar's personal website

export const personalInfo = {
  name: "Murat Akar",
  title: "Software Developer & Creative Professional",
  email: "info@muratakar.net",
  bio: "Modern teknolojiler ve yaratıcı çözümler üzerinde çalışan bir profesyonelim. Projelerimde kullanıcı deneyimini ön planda tutarak, estetik ve fonksiyonelliği harmanlıyorum.",
  social: {
    github: "https://github.com/muratakar",
    linkedin: "https://linkedin.com/in/muratakar",
    twitter: "https://twitter.com/muratakar",
    instagram: "https://instagram.com/muratakar"
  },
  heroImage: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0",
  profileImage: "https://images.unsplash.com/photo-1722159475082-0a2331580de3"
};

export const timelineEvents = [
  {
    id: 1,
    year: "2024",
    title: "Kişisel Web Sitesi Lansmanı",
    description: "Muratakar.net adresinde modern kişisel web sitemi yayınladım.",
    type: "achievement"
  },
  {
    id: 2,
    year: "2023",
    title: "Büyük Proje Tamamlandı",
    description: "Kapsamlı bir web uygulaması projesini başarıyla tamamladım.",
    type: "project"
  },
  {
    id: 3,
    year: "2022",
    title: "Yeni Teknolojiler",
    description: "React ve modern JavaScript frameworklerinde uzmanlaştım.",
    type: "learning"
  },
  {
    id: 4,
    year: "2021",
    title: "Profesyonel Başlangıç",
    description: "Yazılım geliştirme kariyerime profesyonel olarak başladım.",
    type: "career"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu bir e-ticaret web uygulaması. React ve Node.js ile geliştirildi.",
    image: "https://images.unsplash.com/photo-1755541516450-644adb257ad0",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    link: "#",
    date: "2024-01"
  },
  {
    id: 2,
    title: "Portföy Yönetim Sistemi",
    description: "Kullanıcıların projelerini ve portfolyolarını yönetebileceği kapsamlı bir platform.",
    image: "https://images.unsplash.com/photo-1606211105533-0439bfecce21",
    technologies: ["React", "FastAPI", "PostgreSQL"],
    category: "Full Stack",
    link: "#",
    date: "2023-11"
  },
  {
    id: 3,
    title: "Mobil Uygulama Projesi",
    description: "Cross-platform mobil uygulama geliştirme projesi. iOS ve Android destekli.",
    image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    link: "#",
    date: "2023-08"
  },
  {
    id: 4,
    title: "AI Destekli Asistan",
    description: "Yapay zeka destekli kişisel asistan uygulaması. Doğal dil işleme kullanıyor.",
    image: "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0",
    technologies: ["Python", "TensorFlow", "React"],
    category: "AI/ML",
    link: "#",
    date: "2023-06"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Modern Web Geliştirme Trendleri 2024",
    excerpt: "2024 yılında web geliştirme dünyasında öne çıkan teknolojiler ve trendler hakkında detaylı bir inceleme.",
    content: "Web geliştirme dünyası sürekli değişiyor ve gelişiyor. Bu yazıda 2024 yılında öne çıkan trendleri inceleyeceğiz...",
    category: "Teknoloji",
    date: "2024-02-15",
    readTime: "5 dakika",
    image: "https://images.unsplash.com/photo-1755541516450-644adb257ad0"
  },
  {
    id: 2,
    title: "React Performance Optimizasyonu",
    excerpt: "React uygulamalarında performans sorunlarını tespit etme ve çözme yöntemleri.",
    content: "React uygulamalarınızın daha hızlı çalışması için uygulayabileceğiniz optimizasyon teknikleri...",
    category: "Programlama",
    date: "2024-02-10",
    readTime: "8 dakika",
    image: "https://images.unsplash.com/photo-1606211105533-0439bfecce21"
  },
  {
    id: 3,
    title: "Kişisel Gelişim ve Verimlilik",
    excerpt: "Yazılım geliştiriciler için kişisel gelişim ve verimlilik artırma stratejileri.",
    content: "Verimli bir yazılımcı olmanın yolları ve kişisel gelişim için ipuçları...",
    category: "Kişisel Gelişim",
    date: "2024-02-05",
    readTime: "6 dakika",
    image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5"
  }
];

export const calendarEvents = [
  {
    id: 1,
    title: "Proje Toplantısı",
    description: "Yeni proje için ekip toplantısı",
    date: "2024-03-20",
    time: "14:00",
    type: "meeting"
  },
  {
    id: 2,
    title: "Kod İncelemesi",
    description: "Sprint sonrası kod review",
    date: "2024-03-22",
    time: "10:00",
    type: "work"
  },
  {
    id: 3,
    title: "Yeni Özellik Geliştirme",
    description: "Dashboard yeni özellik implementasyonu",
    date: "2024-03-25",
    time: "09:00",
    type: "task"
  }
];

export const cvData = {
  education: [
    {
      id: 1,
      degree: "Bilgisayar Mühendisliği",
      institution: "Üniversite Adı",
      year: "2017 - 2021",
      description: "Yazılım geliştirme, algoritmalar ve veri yapıları üzerine yoğunlaştım."
    }
  ],
  experience: [
    {
      id: 1,
      position: "Senior Software Developer",
      company: "Teknoloji Şirketi",
      year: "2022 - Günümüz",
      description: "Full-stack web uygulamaları geliştirme, takım liderliği ve proje yönetimi."
    },
    {
      id: 2,
      position: "Software Developer",
      company: "Yazılım Firması",
      year: "2021 - 2022",
      description: "React ve Node.js kullanarak web uygulamaları geliştirme."
    }
  ],
  skills: [
    { name: "React", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "UI/UX Design", level: 65 }
  ]
};
