import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Plus, Edit, Trash2, X, CheckCircle, Save, Send, FolderOpen, FileText, MessageSquare, Settings, LayoutDashboard, User, Globe, Clock, Rocket, Mail, Code, Layers, Sparkles, Palette, Github, Linkedin, Instagram, ArrowRight, ArrowUpRight, Heart, MapPin, Calendar, TrendingUp, Zap, Award, ExternalLink, ChevronRight, Star, Coffee, Eye } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// RENK PALETİ
// ═══════════════════════════════════════════════════════════════════════════════

const colors = {
  lime: '#CDFF00',
  limeGlow: 'rgba(205,255,0,0.15)',
  limeDark: '#9FCC00',
  dark: {
    bg: '#0a0a0a',
    card: '#141414',
    cardHover: '#1a1a1a',
    border: 'rgba(255,255,255,0.08)',
    borderHover: 'rgba(255,255,255,0.15)',
  },
  light: {
    bg: '#f0f2eb',
    card: '#ffffff',
    cardHover: '#f5f5f5',
    border: 'rgba(0,0,0,0.08)',
    borderHover: 'rgba(0,0,0,0.15)',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.7)',
    muted: 'rgba(255,255,255,0.5)',
  },
  status: { success: '#22C55E', warning: '#F59E0B', error: '#EF4444' }
};

export default function App() {
  // ═══════════════════════════════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════════════════════════════
  
  const [isDark, setIsDark] = useState(true);
  const [page, setPage] = useState('home');
  const [notif, setNotif] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const canvasRef = useRef(null);
  
  // Contact
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cSubject, setCSubject] = useState('');
  const [cMessage, setCMessage] = useState('');
  const [cSent, setCSent] = useState(false);
  
  // Settings - Profil
  const [sName, setSName] = useState('Oltan Seven');
  const [sEmail, setSEmail] = useState('hello@oltanseven.com');
  const [sTitle, setSTitle] = useState('Vibe Coder');
  const [sBio, setSBio] = useState('"Vibe Coding" metoduyla AI destekli modern web uygulamaları geliştiriyorum. Yaratıcılık ve teknolojinin kesişiminde yenilikçi çözümler üretiyorum.');
  const [sLocation, setSLocation] = useState('Türkiye');
  const [sAvatar, setSAvatar] = useState('👨‍💻');
  
  // Settings - Sosyal Medya
  const [sGithub, setSGithub] = useState('oltanseven');
  const [sLinkedin, setSLinkedin] = useState('oltanseven');
  const [sInstagram, setSInstagram] = useState('oltanseven');
  const [sWebsite, setSWebsite] = useState('https://oltanseven.com');
  
  // Settings - Email & Form
  const [contactEmail, setContactEmail] = useState('sevenoltan@gmail.com');
  const [web3FormsKey, setWeb3FormsKey] = useState('bce5df48-e1be-48a3-a6c3-287a43e06f6a');
  const [sendingMessage, setSendingMessage] = useState(false);
  
  // Settings - Hero Section
  const [heroTitle, setHeroTitle] = useState('Merhaba, Ben Oltan');
  const [heroTagline, setHeroTagline] = useState('Yapay zeka ile geleceği kodluyorum');
  const [heroHighlight, setHeroHighlight] = useState('geleceği');
  const [heroAvailable, setHeroAvailable] = useState(true);
  const [heroAvailableText, setHeroAvailableText] = useState('Yeni projelere açık');
  
  // Settings - Stats
  const [statProjects, setStatProjects] = useState('50+');
  const [statProjectsLabel, setStatProjectsLabel] = useState('Tamamlanan Proje');
  const [statExperience, setStatExperience] = useState('3+');
  const [statExperienceLabel, setStatExperienceLabel] = useState('Yıl Deneyim');
  const [statSatisfaction, setStatSatisfaction] = useState('100%');
  const [statSatisfactionLabel, setStatSatisfactionLabel] = useState('Müşteri Memnuniyeti');
  
  // Settings - Tech Stack
  const [techStack, setTechStack] = useState(['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Node.js', 'Git']);
  const [techInput, setTechInput] = useState('');
  
  // Settings - About Page
  const [aboutTitle, setAboutTitle] = useState('Yaratıcılık ve');
  const [aboutHighlight, setAboutHighlight] = useState('Teknoloji');
  const [aboutDescription, setAboutDescription] = useState('"Vibe Coding" metoduyla, AI araçlarını yaratıcı süreçlerime entegre ederek modern ve kullanıcı odaklı dijital deneyimler tasarlıyorum.');
  
  // Settings - Skills
  const [skills, setSkills] = useState([
    { id: '1', icon: 'Code', label: 'Frontend', desc: 'React, Next.js, TypeScript' },
    { id: '2', icon: 'Layers', label: 'Backend', desc: 'Node.js, Supabase, PostgreSQL' },
    { id: '3', icon: 'Palette', label: 'Design', desc: 'Figma, Tailwind, Framer Motion' },
    { id: '4', icon: 'Sparkles', label: 'AI Tools', desc: 'Claude, GPT-4, Cursor IDE' },
  ]);
  
  // Settings Tab
  const [settingsTab, setSettingsTab] = useState('profile');
  
  // Modal state - Proje
  const [modal, setModal] = useState(null);
  const [pTitle, setPTitle] = useState('');
  const [pDesc, setPDesc] = useState('');
  const [pTags, setPTags] = useState([]);
  const [pTagInput, setPTagInput] = useState('');
  const [pGithub, setPGithub] = useState('');
  const [pLive, setPLive] = useState('');
  const [pEmoji, setPEmoji] = useState('🚀');
  const [pImage, setPImage] = useState('');
  const [pPublished, setPPublished] = useState(false);
  const [pFeatured, setPFeatured] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  
  // Blog Modal
  const [bTitle, setBTitle] = useState('');
  const [bExcerpt, setBExcerpt] = useState('');
  const [bContent, setBContent] = useState('');
  const [bTags, setBTags] = useState([]);
  const [bTagInput, setBTagInput] = useState('');
  const [bReadTime, setBReadTime] = useState(5);
  const [bImage, setBImage] = useState('');
  const [bPublished, setBPublished] = useState(false);
  const [bFeatured, setBFeatured] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  
  // Blog detail view
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Message detail view
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  // Skill Modal
  const [skillModal, setSkillModal] = useState(false);
  const [skillLabel, setSkillLabel] = useState('');
  const [skillDesc, setSkillDesc] = useState('');
  const [skillIcon, setSkillIcon] = useState('Code');
  const [editingSkill, setEditingSkill] = useState(null);
  
  // Data
  const [projects, setProjects] = useState([
    { id: '1', title: 'oltanseven.com', desc: 'Kişisel portfolyo ve blog sitem. Next.js 14, Supabase ve Tailwind CSS ile geliştirildi.', tags: ['Next.js', 'Supabase', 'Tailwind'], published: true, featured: true, emoji: '🚀', github: 'https://github.com/oltanseven/portfolio', live: 'https://oltanseven.com', date: '2025-01-10' },
    { id: '2', title: 'Teklif Oluşturucu', desc: 'Freelancer\'lar için profesyonel teklif hazırlama uygulaması. PDF export ve şablon sistemi.', tags: ['React', 'Node.js', 'PDF'], published: true, featured: true, emoji: '📝', github: '', live: '', date: '2025-01-05' },
    { id: '3', title: 'AI Chat Interface', desc: 'Modern ve minimalist AI sohbet arayüzü. Real-time streaming ve markdown desteği.', tags: ['React', 'TypeScript', 'OpenAI'], published: true, featured: false, emoji: '🤖', github: '', live: '', date: '2024-12-20' },
  ]);
  
  const [posts, setPosts] = useState([
    { id: '1', title: 'Vibe Coding Nedir?', excerpt: 'AI destekli geliştirme yolculuğum ve deneyimlerim.', content: 'Vibe Coding, yapay zeka araçlarını kullanarak daha hızlı ve etkili kod yazmayı ifade eden bir metodoloji...', tags: ['Vibe Coding', 'AI'], date: '2025-01-10', readTime: 5, published: true, featured: true },
    { id: '2', title: 'Next.js 15 ile Modern Web', excerpt: 'Portfolyo sitesini nasıl geliştirdim ve öğrendiklerim.', content: 'Next.js 15 ile modern web uygulamaları geliştirmek artık çok daha kolay...', tags: ['Next.js', 'React'], date: '2025-01-08', readTime: 8, published: true, featured: false },
  ]);
  
  const [messages, setMessages] = useState([
    { id: '1', name: 'Ahmet Yılmaz', email: 'ahmet@example.com', subject: 'Proje Teklifi', message: 'Merhaba Oltan,\n\nWeb sitemiz için bir yenileme projesi planlıyoruz. Sizinle çalışmak isteriz. Müsait olduğunuzda görüşebilir miyiz?\n\nSaygılarımla,\nAhmet', date: '2025-01-12', time: '14:30', read: false },
    { id: '2', name: 'Elif Kaya', email: 'elif@startup.io', subject: 'İş Birliği Hakkında', message: 'Merhaba,\n\nStartup projemiz için bir landing page tasarımı yaptırmak istiyoruz. Fiyat ve süre hakkında bilgi alabilir miyim?\n\nTeşekkürler.', date: '2025-01-11', time: '10:15', read: true },
  ]);

  // Time update - sadece home sayfasında
  useEffect(() => {
    if (page === 'home') {
      const timer = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(timer);
    }
  }, [page]);

  // Space Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || page.startsWith('admin')) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];
    let shootingStars = [];
    let nebulae = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Initialize stars - light temada daha fazla ve belirgin
    const starCount = isDark ? 150 : 120;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (isDark ? 2 : 2.5) + 0.5,
        opacity: Math.random() * (isDark ? 0.8 : 0.6) + (isDark ? 0.2 : 0.3),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
    
    // Initialize nebulae - light temada daha görünür
    const nebulaColors = isDark 
      ? [colors.lime, '#00FFD1', '#A855F7']
      : ['#8FB339', '#10B981', '#8B5CF6'];
    
    for (let i = 0; i < 4; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 350 + 200,
        color: nebulaColors[i % 3],
        opacity: isDark ? 0.04 : 0.12,
        drift: Math.random() * 0.3 - 0.15,
      });
    }
    
    // Spawn shooting star
    const spawnShootingStar = () => {
      if (Math.random() < (isDark ? 0.008 : 0.006)) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() * 0.3 - 0.15),
          opacity: 1,
        });
      }
    };
    
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;
      
      // Draw nebulae
      nebulae.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `${nebula.color}${Math.floor(nebula.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${nebula.color}${Math.floor(nebula.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        nebula.x += nebula.drift;
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius;
      });
      
      // Draw stars with twinkling
      const starColor = isDark ? '255, 255, 255' : '75, 88, 66';
      const glowColor = isDark ? '205, 255, 0' : '143, 179, 57';
      
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, ${star.opacity * twinkle})`;
        ctx.fill();
        
        // Glow effect for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${glowColor}, ${star.opacity * twinkle * (isDark ? 0.2 : 0.25)})`;
          ctx.fill();
        }
      });
      
      // Spawn and draw shooting stars
      spawnShootingStar();
      const trailColor = isDark ? '205, 255, 0' : '143, 179, 57';
      
      shootingStars = shootingStars.filter(ss => {
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;
        
        if (ss.opacity <= 0) return false;
        
        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          ss.x, ss.y,
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        gradient.addColorStop(0, `rgba(${trailColor}, ${ss.opacity * (isDark ? 1 : 0.8)})`);
        gradient.addColorStop(0.3, `rgba(${starColor}, ${ss.opacity * 0.6})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - Math.cos(ss.angle) * ss.length,
          ss.y - Math.sin(ss.angle) * ss.length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = isDark ? 2 : 2.5;
        ctx.stroke();
        
        // Bright head
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, isDark ? 2 : 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${trailColor}, ${ss.opacity})`;
        ctx.fill();
        
        return ss.y < canvas.height + 100 && ss.x < canvas.width + 100;
      });
      
      // Grid lines (subtle futuristic effect) - light temada daha belirgin
      const gridColor = isDark ? 'rgba(205, 255, 0, 0.03)' : 'rgba(143, 179, 57, 0.08)';
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isDark, page]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // THEME
  // ═══════════════════════════════════════════════════════════════════════════════
  
  const theme = {
    bg: isDark ? colors.dark.bg : colors.light.bg,
    card: isDark ? colors.dark.card : colors.light.card,
    cardHover: isDark ? colors.dark.cardHover : colors.light.cardHover,
    border: isDark ? colors.dark.border : colors.light.border,
    text: isDark ? '#ffffff' : '#0a0a0a',
    textSecondary: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
    muted: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // STYLES
  // ═══════════════════════════════════════════════════════════════════════════════
  
  const inputStyle = {
    width: '100%', padding: '16px 20px', borderRadius: 16,
    border: `1px solid ${theme.border}`,
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
    color: theme.text, fontSize: 15, outline: 'none', fontFamily: 'inherit',
  };
  
  const cardStyle = {
    background: isDark ? theme.card : 'rgba(255, 255, 255, 0.85)',
    border: `1px solid ${theme.border}`,
    borderRadius: 24,
    padding: 28,
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(12px)',
  };
  
  const btnPrimary = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
    padding: '16px 32px', borderRadius: 100, border: 'none',
    background: isDark ? colors.lime : '#8FB339', color: isDark ? '#0a0a0a' : '#ffffff',
    fontSize: 15, fontWeight: 600, cursor: 'pointer',
    transition: 'all 0.2s ease',
  };
  
  const btnSecondary = {
    ...btnPrimary,
    background: 'transparent',
    border: `1.5px solid ${isDark ? theme.border : 'rgba(143,179,57,0.4)'}`,
    color: theme.text,
  };
  
  const labelStyle = { display: 'block', marginBottom: 10, fontSize: 14, fontWeight: 600, color: theme.text };
  
  const tagStyle = {
    padding: '8px 16px', borderRadius: 100,
    background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(75,88,66,0.1)',
    color: theme.text, fontSize: 13, fontWeight: 500,
    border: `1px solid ${theme.border}`,
  };

  const showNotif = (msg) => { setNotif(msg); setTimeout(() => setNotif(null), 3000); };

  // Contact Form Submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!cName || !cEmail || !cMessage) {
      showNotif('Lütfen tüm alanları doldurun!');
      return;
    }
    
    setSendingMessage(true);
    
    // Dashboard'a mesajı ekle
    const newMessage = {
      id: Date.now().toString(),
      name: cName,
      email: cEmail,
      subject: cSubject || 'Konu belirtilmedi',
      message: cMessage,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      read: false,
    };
    setMessages(prev => [newMessage, ...prev]);
    
    // Web3Forms ile e-posta gönder
    if (web3FormsKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `🚀 Yeni İletişim Mesajı: ${cSubject || 'Portfolyo'}`,
            from_name: cName,
            email: cEmail,
            message: cMessage,
            to: contactEmail,
          }),
        });
        
        if (response.ok) {
          showNotif('Mesajınız gönderildi! ✉️');
        } else {
          showNotif('Mesaj kaydedildi, e-posta gönderilemedi.');
        }
      } catch (error) {
        showNotif('Mesaj kaydedildi, e-posta gönderilemedi.');
      }
    } else {
      showNotif('Mesajınız kaydedildi! ✉️');
    }
    
    // Formu temizle
    setCName(''); setCEmail(''); setCSubject(''); setCMessage('');
    setCSent(true);
    setSendingMessage(false);
  };

  const openProjectModal = (project = null) => {
    if (project) {
      setPTitle(project.title);
      setPDesc(project.desc);
      setPTags(project.tags || []);
      setPGithub(project.github || '');
      setPLive(project.live || '');
      setPEmoji(project.emoji || '🚀');
      setPImage(project.image || '');
      setPPublished(project.published);
      setPFeatured(project.featured);
      setEditingProject(project);
    } else {
      setPTitle(''); setPDesc(''); setPTags([]); setPTagInput(''); setPGithub(''); setPLive(''); setPEmoji('🚀'); setPImage(''); setPPublished(false); setPFeatured(false); setEditingProject(null);
    }
    setModal('project');
  };
  
  const openBlogModal = (post = null) => {
    if (post) {
      setBTitle(post.title);
      setBExcerpt(post.excerpt);
      setBContent(post.content || '');
      setBTags(post.tags || []);
      setBReadTime(post.readTime || 5);
      setBImage(post.image || '');
      setBPublished(post.published);
      setBFeatured(post.featured || false);
      setEditingPost(post);
    } else {
      setBTitle(''); setBExcerpt(''); setBContent(''); setBTags([]); setBTagInput(''); setBReadTime(5); setBImage(''); setBPublished(false); setBFeatured(false); setEditingPost(null);
    }
    setModal('blog');
  };
  
  const saveProject = () => {
    if (pTitle) {
      if (editingProject) {
        setProjects(prev => prev.map(p => p.id === editingProject.id ? { ...p, title: pTitle, desc: pDesc, tags: pTags, github: pGithub, live: pLive, emoji: pEmoji, image: pImage, published: pPublished, featured: pFeatured } : p));
        showNotif('Proje güncellendi!');
      } else {
        setProjects(prev => [...prev, { id: Date.now().toString(), title: pTitle, desc: pDesc, tags: pTags, published: pPublished, featured: pFeatured, emoji: pEmoji, image: pImage, github: pGithub, live: pLive, date: new Date().toISOString().split('T')[0] }]);
        showNotif('Proje eklendi!');
      }
      setModal(null);
    }
  };
  
  const saveBlog = () => {
    if (bTitle) {
      if (editingPost) {
        setPosts(prev => prev.map(p => p.id === editingPost.id ? { ...p, title: bTitle, excerpt: bExcerpt, content: bContent, tags: bTags, readTime: bReadTime, image: bImage, published: bPublished, featured: bFeatured } : p));
        showNotif('Yazı güncellendi!');
      } else {
        setPosts(prev => [...prev, { id: Date.now().toString(), title: bTitle, excerpt: bExcerpt, content: bContent, tags: bTags, published: bPublished, featured: bFeatured, image: bImage, date: new Date().toISOString().split('T')[0], readTime: bReadTime }]);
        showNotif('Yazı eklendi!');
      }
      setModal(null);
    }
  };

  // Icon Map for Skills
  const iconMap = { Code, Layers, Palette, Sparkles, Globe, Zap, Award, Coffee, Star, TrendingUp };

  // ═══════════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════════

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh', fontFamily: '"Inter", -apple-system, sans-serif' }}>
      
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        input, textarea, select, button { font-family: inherit; }
        input:focus, textarea:focus { border-color: ${isDark ? colors.lime : '#8FB339'} !important; box-shadow: 0 0 0 4px ${isDark ? colors.lime : '#8FB339'}15 !important; }
        ::selection { background: ${isDark ? colors.lime : '#8FB339'}40; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${theme.border}; border-radius: 3px; }
        
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes glow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        
        .card-hover { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover { transform: translateY(-4px); border-color: ${isDark ? colors.lime : '#8FB339'}40 !important; box-shadow: 0 20px 40px ${isDark ? 'rgba(0,0,0,0.2)' : 'rgba(143,179,57,0.15)'}, 0 0 60px ${isDark ? colors.lime : '#8FB339'}10; }
        
        .btn-hover { transition: all 0.2s ease; }
        .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 24px ${isDark ? colors.lime : '#8FB339'}40; }
        
        .tag-hover { transition: all 0.2s ease; }
        .tag-hover:hover { background: ${isDark ? colors.lime : '#8FB339'}25 !important; border-color: ${isDark ? colors.lime : '#8FB339'}40 !important; }
        
        .nav-item { transition: all 0.2s ease; }
        .nav-item:hover { background: ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'} !important; }
        
        .social-btn { transition: all 0.2s ease; }
        .social-btn:hover { border-color: ${isDark ? colors.lime : '#8FB339'}50 !important; background: ${isDark ? colors.lime : '#8FB339'}10 !important; transform: translateY(-2px); }
        .social-btn:hover svg { color: ${isDark ? colors.lime : '#8FB339'} !important; }
        
        .icon-float { animation: float 3s ease-in-out infinite; }
      `}</style>
      
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* SPACE CANVAS BACKGROUND */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {!page.startsWith('admin') && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}
      
      {/* Vignette overlay for depth */}
      {!page.startsWith('admin') && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: isDark 
            ? 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.4) 100%)'
            : 'radial-gradient(ellipse at center, transparent 0%, rgba(250,250,250,0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* HEADER - Pill Navigation */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {!page.startsWith('admin') && (
        <header style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
          <nav style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 12px', borderRadius: 100,
            background: isDark ? 'rgba(20,20,20,0.9)' : 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${isDark ? theme.border : 'rgba(143, 179, 57, 0.2)'}`,
            boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.2)' : '0 4px 24px rgba(143, 179, 57, 0.15)',
          }}>
            {/* Logo */}
            <div style={{
              width: 40, height: 40, borderRadius: 100,
              background: isDark ? colors.lime : '#8FB339', color: isDark ? '#0a0a0a' : '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 16,
            }}>O</div>
            
            {/* Nav Items */}
            {['home', 'about', 'projects', 'blog', 'contact'].map(p => (
              <button key={p} onClick={() => { setPage(p); setSelectedPost(null); }} className="nav-item" style={{
                padding: '10px 20px', borderRadius: 100, border: 'none',
                background: page === p ? (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)') : 'transparent',
                color: page === p ? theme.text : theme.muted,
                fontSize: 14, fontWeight: 500, cursor: 'pointer',
              }}>
                {p === 'home' ? 'Ana Sayfa' : p === 'about' ? 'Hakkımda' : p === 'projects' ? 'Projeler' : p === 'blog' ? 'Blog' : 'İletişim'}
              </button>
            ))}
            
            {/* Admin Button */}
            <button onClick={() => setPage('admin-dashboard')} style={{
              padding: '10px 20px', borderRadius: 100,
              background: isDark ? colors.lime : '#8FB339', color: isDark ? '#0a0a0a' : '#ffffff',
              border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer',
              marginLeft: 8,
            }}>Giriş</button>
            
            {/* Theme Toggle */}
            <button onClick={() => setIsDark(!isDark)} style={{
              width: 40, height: 40, borderRadius: 100, border: 'none',
              background: 'transparent', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {isDark ? <Sun size={20} color={theme.muted} /> : <Moon size={20} color={theme.muted} />}
            </button>
          </nav>
        </header>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* HOME PAGE */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {page === 'home' && (
        <div style={{ position: 'relative', zIndex: 2, padding: '120px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: 60, paddingTop: 40 }}>
            {/* Availability Badge */}
            {heroAvailable && (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 20px', borderRadius: 100,
                background: isDark ? `${colors.lime}15` : 'rgba(143, 179, 57, 0.15)',
                border: `1px solid ${isDark ? colors.lime : '#8FB339'}30`,
                marginBottom: 40,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: isDark ? colors.lime : '#8FB339', animation: 'pulse 2s infinite' }} />
                <span style={{ color: isDark ? colors.lime : '#4B5842', fontSize: 14, fontWeight: 500 }}>{heroAvailableText}</span>
              </div>
            )}
            
            {/* Big Name */}
            <h1 style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 24,
              color: theme.text,
            }}>{heroTitle}</h1>
            
            {/* Tagline */}
            <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: theme.muted, marginBottom: 48 }}>
              {heroTagline.split(heroHighlight)[0]}<span style={{ color: isDark ? colors.lime : '#6B8E23', fontWeight: 600 }}>{heroHighlight}</span>{heroTagline.split(heroHighlight)[1] || ''}
            </p>
            
            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <button onClick={() => setPage('projects')} className="btn-hover" style={btnPrimary}>
                Projeleri Keşfet <ArrowRight size={18} />
              </button>
              <button onClick={() => setPage('contact')} className="btn-hover" style={btnSecondary}>
                İletişime Geç
              </button>
            </div>
          </section>
          
          {/* ══════════════════════════════════════════════════════════════════════════ */}
          {/* BENTO GRID */}
          {/* ══════════════════════════════════════════════════════════════════════════ */}
          
          <section style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 20,
          }}>
            
            {/* Status Card */}
            <div className="card-hover" onClick={() => setPage('contact')} style={{ ...cardStyle, gridColumn: 'span 3', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: isDark ? colors.lime : '#8FB339' }} />
                <span style={{ color: theme.muted, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Durum</span>
              </div>
              <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Müsait</h3>
              <p style={{ color: theme.muted, fontSize: 14 }}>{heroAvailableText}</p>
            </div>
            
            {/* Time Card */}
            <div className="card-hover" onClick={() => setPage('contact')} style={{ ...cardStyle, gridColumn: 'span 3', cursor: 'pointer' }}>
              <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Yerel Saat</p>
              <p style={{ fontSize: 48, fontWeight: 700, fontVariantNumeric: 'tabular-nums', marginBottom: 12 }}>
                {currentTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>🇹🇷</span>
                <span style={{ color: theme.muted, fontSize: 14 }}>{sLocation}</span>
              </div>
            </div>
            
            {/* Featured Project Card */}
            {projects.filter(p => p.featured && p.published).length > 0 && (
              <div className="card-hover" onClick={() => setPage('projects')} style={{ ...cardStyle, gridColumn: 'span 6', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Öne Çıkan Proje</p>
                      <ArrowUpRight size={16} color={theme.muted} />
                    </div>
                    <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>{projects.filter(p => p.featured && p.published)[0]?.title}</h3>
                    <p style={{ color: theme.muted, fontSize: 14, marginBottom: 20, maxWidth: 400 }}>{projects.filter(p => p.featured && p.published)[0]?.desc}</p>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {projects.filter(p => p.featured && p.published)[0]?.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 100,
                      background: isDark ? colors.lime : '#8FB339', color: isDark ? '#0a0a0a' : '#fff',
                      fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                    }}>
                      <Sparkles size={12} /> Featured
                    </span>
                    <span className="icon-float" style={{ fontSize: 64 }}>{projects.filter(p => p.featured && p.published)[0]?.emoji}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* About Card */}
            <div className="card-hover" onClick={() => setPage('about')} style={{ ...cardStyle, gridColumn: 'span 6', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Hakkımda</p>
                <ArrowUpRight size={18} color={theme.muted} />
              </div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 20,
                  background: isDark ? colors.lime : '#8FB339',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 40, flexShrink: 0,
                }}>{sAvatar}</div>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{sName}</h3>
                  <p style={{ color: theme.muted, fontSize: 14, lineHeight: 1.6 }}>{sBio.substring(0, 120)}...</p>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Card */}
            <div className="card-hover" onClick={() => setPage('about')} style={{ ...cardStyle, gridColumn: 'span 6', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Tech Stack</p>
                <ArrowUpRight size={18} color={theme.muted} />
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} className="tag-hover" style={tagStyle}>{tech}</span>
                ))}
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="card-hover" onClick={() => setPage('projects')} style={{ ...cardStyle, gridColumn: 'span 4', textAlign: 'center', cursor: 'pointer' }}>
              <p style={{ fontSize: 48, fontWeight: 800, color: isDark ? colors.lime : '#6B8E23', marginBottom: 8 }}>{statProjects}</p>
              <p style={{ color: theme.muted, fontSize: 14 }}>{statProjectsLabel}</p>
            </div>
            
            <div className="card-hover" onClick={() => setPage('about')} style={{ ...cardStyle, gridColumn: 'span 4', textAlign: 'center', cursor: 'pointer' }}>
              <p style={{ fontSize: 48, fontWeight: 800, color: isDark ? colors.lime : '#6B8E23', marginBottom: 8 }}>{statExperience}</p>
              <p style={{ color: theme.muted, fontSize: 14 }}>{statExperienceLabel}</p>
            </div>
            
            <div className="card-hover" onClick={() => setPage('contact')} style={{ ...cardStyle, gridColumn: 'span 4', textAlign: 'center', cursor: 'pointer' }}>
              <p style={{ fontSize: 48, fontWeight: 800, color: isDark ? colors.lime : '#6B8E23', marginBottom: 8 }}>{statSatisfaction}</p>
              <p style={{ color: theme.muted, fontSize: 14 }}>{statSatisfactionLabel}</p>
            </div>
            
            {/* Recent Blog Card */}
            <div className="card-hover" onClick={() => setPage('blog')} style={{ ...cardStyle, gridColumn: 'span 6', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Son Blog Yazısı</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: isDark ? colors.lime : '#4B5842', fontSize: 13 }}>
                  Tümü <ArrowRight size={14} />
                </div>
              </div>
              {posts.filter(p => p.published).length > 0 && (
                <>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{posts.filter(p => p.published)[0]?.title}</h3>
                  <p style={{ color: theme.muted, fontSize: 14, marginBottom: 16 }}>{posts.filter(p => p.published)[0]?.excerpt}</p>
                  <div style={{ display: 'flex', gap: 16, color: theme.muted, fontSize: 13 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={14} /> {posts.filter(p => p.published)[0]?.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={14} /> {posts.filter(p => p.published)[0]?.readTime} dk</span>
                  </div>
                </>
              )}
            </div>
            
            {/* Social Links Card */}
            <div className="card-hover" style={{ ...cardStyle, gridColumn: 'span 6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Sosyal Medya</p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { icon: Instagram, label: 'Instagram', url: `https://instagram.com/${sInstagram}` },
                  { icon: Linkedin, label: 'LinkedIn', url: `https://linkedin.com/in/${sLinkedin}` },
                  { icon: Github, label: 'GitHub', url: `https://github.com/${sGithub}` },
                  { icon: Mail, label: 'Email', url: `mailto:${contactEmail}` },
                ].map(social => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="social-btn" style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    border: `1px solid ${theme.border}`,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                  }}>
                    <social.icon size={24} color={theme.muted} />
                  </a>
                ))}
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer style={{ marginTop: 80, paddingTop: 40, borderTop: `1px solid ${theme.border}`, textAlign: 'center' }}>
            <p style={{ color: theme.muted, fontSize: 14 }}>
              © 2025 {sName} · Made with Vibe Coding
            </p>
          </footer>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* ABOUT PAGE */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {page === 'about' && (
        <div style={{ position: 'relative', zIndex: 2, padding: '160px 24px 80px', maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: isDark ? colors.lime : '#4B5842', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Hakkımda</p>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 32 }}>
            {aboutTitle}<br /><span style={{ color: isDark ? colors.lime : '#6B8E23' }}>{aboutHighlight}</span>
          </h1>
          <p style={{ fontSize: 18, color: theme.muted, lineHeight: 1.8, marginBottom: 48 }}>
            {aboutDescription}
          </p>
          
          {/* CTA */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 64 }}>
            <button onClick={() => setPage('projects')} className="btn-hover" style={btnPrimary}>
              Projelerimi Gör <ArrowRight size={18} />
            </button>
            <button onClick={() => setPage('contact')} className="btn-hover" style={btnSecondary}>
              İletişime Geç
            </button>
          </div>
          
          {/* Skills */}
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Yeteneklerim</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 48 }}>
            {skills.map(s => {
              const IconComponent = iconMap[s.icon] || Code;
              return (
                <div key={s.id} className="card-hover" style={cardStyle}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <IconComponent size={24} color={isDark ? colors.lime : '#6B8E23'} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.label}</h3>
                  <p style={{ color: theme.muted, fontSize: 14 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
          
          {/* Tech Stack */}
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Kullandığım Teknolojiler</h2>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {techStack.map(tech => (
              <span key={tech} style={tagStyle}>{tech}</span>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* PROJECTS PAGE */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {page === 'projects' && (
        <div style={{ position: 'relative', zIndex: 2, padding: '160px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ color: isDark ? colors.lime : '#4B5842', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Portfolyo</p>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, marginBottom: 24 }}>Projelerim</h1>
          <p style={{ fontSize: 18, color: theme.muted, marginBottom: 64, maxWidth: 600 }}>
            AI destekli modern web uygulamaları ve araçlar geliştiriyorum. İşte bazı çalışmalarım.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
            {projects.filter(p => p.published).map(p => (
              <div key={p.id} className="card-hover" style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
                {p.image ? (
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                  </div>
                ) : (
                  <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}>
                    <span style={{ fontSize: 64 }}>{p.emoji}</span>
                  </div>
                )}
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    {!p.image && <span style={{ fontSize: 32 }}>{p.emoji}</span>}
                    {p.featured && (
                      <span style={{ padding: '4px 10px', borderRadius: 100, background: isDark ? colors.lime : '#8FB339', color: isDark ? '#0a0a0a' : '#fff', fontSize: 11, fontWeight: 600, marginLeft: 'auto' }}>Featured</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ color: theme.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                    {p.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '10px 16px', borderRadius: 100,
                        border: `1px solid ${theme.border}`,
                        color: theme.text, fontSize: 13, fontWeight: 500,
                        textDecoration: 'none', transition: 'all 0.2s ease',
                      }}>
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '10px 16px', borderRadius: 100,
                        background: isDark ? colors.lime : '#8FB339',
                        color: isDark ? '#0a0a0a' : '#fff',
                        fontSize: 13, fontWeight: 500,
                        textDecoration: 'none', transition: 'all 0.2s ease',
                      }}>
                        <ExternalLink size={16} /> Canlı Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div style={{ marginTop: 80, textAlign: 'center', padding: '60px 40px', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', borderRadius: 24, border: `1px solid ${theme.border}` }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Bir projeniz mi var?</h2>
            <p style={{ color: theme.muted, fontSize: 16, marginBottom: 32 }}>Birlikte harika işler çıkarabiliriz!</p>
            <button onClick={() => setPage('contact')} className="btn-hover" style={btnPrimary}>
              İletişime Geç <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* BLOG PAGE */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {page === 'blog' && (
        <div style={{ position: 'relative', zIndex: 2, padding: '160px 24px 80px', maxWidth: 800, margin: '0 auto' }}>
          {selectedPost ? (
            // Blog Detay Görünümü
            <div>
              <button onClick={() => setSelectedPost(null)} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: theme.muted, fontSize: 14, cursor: 'pointer', marginBottom: 32 }}>
                <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Tüm Yazılar
              </button>
              
              {selectedPost.image && (
                <div style={{ marginBottom: 32, borderRadius: 20, overflow: 'hidden' }}>
                  <img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
                </div>
              )}
              
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                {selectedPost.tags?.map(t => <span key={t} style={{ ...tagStyle, background: isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)', color: isDark ? colors.lime : '#4B5842' }}>{t}</span>)}
              </div>
              
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, marginBottom: 20 }}>{selectedPost.title}</h1>
              
              <div style={{ display: 'flex', gap: 20, color: theme.muted, fontSize: 14, marginBottom: 40, paddingBottom: 40, borderBottom: `1px solid ${theme.border}` }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={16} /> {selectedPost.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={16} /> {selectedPost.readTime} dk okuma</span>
              </div>
              
              <div style={{ fontSize: 17, lineHeight: 1.8, color: theme.textSecondary }}>
                <p style={{ marginBottom: 24 }}>{selectedPost.excerpt}</p>
                <p style={{ whiteSpace: 'pre-wrap' }}>{selectedPost.content || 'İçerik henüz eklenmemiş.'}</p>
              </div>
            </div>
          ) : (
            // Blog Liste Görünümü
            <>
              <p style={{ color: isDark ? colors.lime : '#4B5842', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Blog</p>
              <h1 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, marginBottom: 64 }}>Yazılarım</h1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {posts.filter(p => p.published).map(p => (
                  <article key={p.id} className="card-hover" onClick={() => setSelectedPost(p)} style={{ ...cardStyle, cursor: 'pointer', padding: 0, overflow: 'hidden' }}>
                    {p.image && (
                      <div style={{ height: 200, overflow: 'hidden' }}>
                        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                      </div>
                    )}
                    <div style={{ padding: 24 }}>
                      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                        {p.tags.map(t => <span key={t} style={{ ...tagStyle, background: isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)', color: isDark ? colors.lime : '#4B5842' }}>{t}</span>)}
                      </div>
                      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{p.title}</h2>
                      <p style={{ color: theme.muted, fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>{p.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: 20, color: theme.muted, fontSize: 14 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={16} /> {p.date}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={16} /> {p.readTime} dk okuma</span>
                        </div>
                        <span style={{ color: isDark ? colors.lime : '#4B5842', fontSize: 14, display: 'flex', alignItems: 'center', gap: 4 }}>
                          Devamını Oku <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* CONTACT PAGE */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {page === 'contact' && (
        <div style={{ position: 'relative', zIndex: 2, padding: '160px 24px 80px', maxWidth: 600, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: isDark ? colors.lime : '#4B5842', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>İletişim</p>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 800, marginBottom: 16 }}>
              Birlikte <span style={{ color: isDark ? colors.lime : '#6B8E23' }}>çalışalım!</span>
            </h1>
            <p style={{ color: theme.muted, fontSize: 16, marginBottom: 32 }}>Yeni fırsatlar için her zaman açığım.</p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 48 }}>
              {[
                { icon: Instagram, label: 'Instagram', url: `https://instagram.com/${sInstagram}` },
                { icon: Linkedin, label: 'LinkedIn', url: `https://linkedin.com/in/${sLinkedin}` },
                { icon: Github, label: 'GitHub', url: `https://github.com/${sGithub}` },
                { icon: Mail, label: 'Email', url: `mailto:${contactEmail}` },
              ].map(social => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="social-btn" style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  border: `1px solid ${theme.border}`,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none',
                }}>
                  <social.icon size={22} color={theme.muted} />
                </a>
              ))}
            </div>
          </div>
          
          {cSent ? (
            <div style={{ ...cardStyle, textAlign: 'center', padding: 48 }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${colors.status.success}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle size={36} color={colors.status.success} />
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Mesajınız Gönderildi!</h2>
              <p style={{ color: theme.muted, marginBottom: 24 }}>En kısa sürede dönüş yapacağım.</p>
              <button onClick={() => setCSent(false)} style={btnSecondary}>Yeni Mesaj Gönder</button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} style={cardStyle}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Adınız *</label>
                  <input type="text" placeholder="Adınız" value={cName} onChange={(e) => setCName(e.target.value)} style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>E-posta *</label>
                  <input type="email" placeholder="E-posta adresiniz" value={cEmail} onChange={(e) => setCEmail(e.target.value)} style={inputStyle} required />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Konu</label>
                <input type="text" placeholder="Mesajınızın konusu" value={cSubject} onChange={(e) => setCSubject(e.target.value)} style={inputStyle} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Mesajınız *</label>
                <textarea placeholder="Mesajınızı buraya yazın..." value={cMessage} onChange={(e) => setCMessage(e.target.value)} rows={5} style={{ ...inputStyle, resize: 'vertical' }} required />
              </div>
              <button type="submit" disabled={sendingMessage} className="btn-hover" style={{ ...btnPrimary, width: '100%', opacity: sendingMessage ? 0.7 : 1 }}>
                {sendingMessage ? (
                  <>Gönderiliyor...</>
                ) : (
                  <><Send size={18} /> Mesaj Gönder</>
                )}
              </button>
            </form>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* ADMIN LAYOUT */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {page.startsWith('admin') && (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Sidebar */}
          <aside style={{ width: 260, background: theme.card, borderRight: `1px solid ${theme.border}`, padding: 20, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '12px 16px', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: isDark ? colors.lime : '#8FB339', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isDark ? '#0a0a0a' : '#ffffff', fontWeight: 800 }}>O</div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 15 }}>Admin Panel</p>
                  <p style={{ fontSize: 12, color: theme.muted }}>oltanseven.com</p>
                </div>
              </div>
            </div>
            
            <nav style={{ flex: 1 }}>
              {[
                { id: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard },
                { id: 'admin-projects', label: 'Projeler', icon: FolderOpen, count: projects.length },
                { id: 'admin-blog', label: 'Blog Yazıları', icon: FileText, count: posts.length },
                { id: 'admin-messages', label: 'Mesajlar', icon: MessageSquare, badge: messages.filter(m => !m.read).length },
                { id: 'admin-settings', label: 'Site Ayarları', icon: Settings },
              ].map(item => (
                <button key={item.id} onClick={() => setPage(item.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 12, width: '100%',
                  padding: '12px 16px', borderRadius: 12, border: 'none', marginBottom: 4,
                  background: page === item.id ? (isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)') : 'transparent',
                  color: page === item.id ? (isDark ? colors.lime : '#4B5842') : theme.muted,
                  fontSize: 14, fontWeight: 500, cursor: 'pointer', textAlign: 'left',
                }}>
                  <item.icon size={20} />
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge > 0 && <span style={{ padding: '2px 8px', borderRadius: 100, background: colors.status.error, color: '#fff', fontSize: 11 }}>{item.badge}</span>}
                  {item.count !== undefined && <span style={{ padding: '2px 8px', borderRadius: 100, background: theme.border, color: theme.muted, fontSize: 11 }}>{item.count}</span>}
                </button>
              ))}
            </nav>
            
            <div style={{ paddingTop: 16, borderTop: `1px solid ${theme.border}` }}>
              <button onClick={() => setIsDark(!isDark)} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: 'transparent', color: theme.muted, fontSize: 14, cursor: 'pointer', marginBottom: 4 }}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />} {isDark ? 'Açık Tema' : 'Koyu Tema'}
              </button>
              <button onClick={() => setPage('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none', background: 'transparent', color: theme.muted, fontSize: 14, cursor: 'pointer' }}>
                <Globe size={18} /> Siteyi Gör
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1, padding: 32, background: theme.bg, overflowY: 'auto' }}>
            
            {/* Dashboard */}
            {page === 'admin-dashboard' && (
              <div style={{ maxWidth: 1000 }}>
                <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }}>👋 Hoş geldin!</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
                  {[
                    { label: 'Projeler', value: projects.length, icon: FolderOpen },
                    { label: 'Blog', value: posts.length, icon: FileText },
                    { label: 'Mesajlar', value: messages.filter(m => !m.read).length, icon: MessageSquare },
                  ].map(s => (
                    <div key={s.label} style={cardStyle}>
                      <s.icon size={24} color={isDark ? colors.lime : '#6B8E23'} />
                      <p style={{ color: theme.muted, fontSize: 14, marginTop: 12 }}>{s.label}</p>
                      <p style={{ fontSize: 36, fontWeight: 700, marginTop: 4 }}>{s.value}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => openProjectModal()} style={btnPrimary}><Plus size={18} /> Yeni Proje</button>
                  <button onClick={() => openBlogModal()} style={btnSecondary}><Plus size={18} /> Yeni Yazı</button>
                </div>
              </div>
            )}

            {/* Projects */}
            {page === 'admin-projects' && (
              <div style={{ maxWidth: 1000 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <h1 style={{ fontSize: 28, fontWeight: 700 }}>Projeler</h1>
                  <button onClick={() => openProjectModal()} style={btnPrimary}><Plus size={18} /> Yeni Proje</button>
                </div>
                <div style={cardStyle}>
                  {projects.map((p, i) => (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, borderBottom: i < projects.length - 1 ? `1px solid ${theme.border}` : 'none' }}>
                      {p.image ? (
                        <div style={{ width: 56, height: 56, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                          <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ) : (
                        <span style={{ fontSize: 32, width: 56, textAlign: 'center' }}>{p.emoji}</span>
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <h3 style={{ fontWeight: 600 }}>{p.title}</h3>
                          {p.featured && <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 100, background: isDark ? `${colors.lime}20` : 'rgba(143,179,57,0.2)', color: isDark ? colors.lime : '#4B5842' }}>Featured</span>}
                        </div>
                        <p style={{ color: theme.muted, fontSize: 13 }}>{p.desc.substring(0, 80)}...</p>
                      </div>
                      <button onClick={() => setProjects(prev => prev.map(x => x.id === p.id ? { ...x, published: !x.published } : x))} style={{ padding: '6px 14px', borderRadius: 100, border: 'none', background: p.published ? `${colors.status.success}15` : theme.border, color: p.published ? colors.status.success : theme.muted, fontSize: 12, cursor: 'pointer' }}>{p.published ? '✓ Yayında' : 'Taslak'}</button>
                      <button onClick={() => openProjectModal(p)} style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${theme.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Edit size={16} color={theme.muted} /></button>
                      <button onClick={() => setProjects(prev => prev.filter(x => x.id !== p.id))} style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${theme.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={16} color={colors.status.error} /></button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Blog */}
            {page === 'admin-blog' && (
              <div style={{ maxWidth: 1000 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <h1 style={{ fontSize: 28, fontWeight: 700 }}>Blog Yazıları</h1>
                  <button onClick={() => openBlogModal()} style={btnPrimary}><Plus size={18} /> Yeni Yazı</button>
                </div>
                <div style={cardStyle}>
                  {posts.map((p, i) => (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, borderBottom: i < posts.length - 1 ? `1px solid ${theme.border}` : 'none' }}>
                      {p.image && (
                        <div style={{ width: 80, height: 56, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
                          <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <h3 style={{ fontWeight: 600 }}>{p.title}</h3>
                          {p.featured && <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 100, background: isDark ? `${colors.lime}20` : 'rgba(143,179,57,0.2)', color: isDark ? colors.lime : '#4B5842' }}>Featured</span>}
                        </div>
                        <p style={{ color: theme.muted, fontSize: 13 }}>{p.excerpt}</p>
                        <div style={{ display: 'flex', gap: 12, marginTop: 8, color: theme.muted, fontSize: 12 }}>
                          <span><Calendar size={12} style={{ marginRight: 4 }} />{p.date}</span>
                          <span><Clock size={12} style={{ marginRight: 4 }} />{p.readTime} dk</span>
                        </div>
                      </div>
                      <button onClick={() => setPosts(prev => prev.map(x => x.id === p.id ? { ...x, published: !x.published } : x))} style={{ padding: '6px 14px', borderRadius: 100, border: 'none', background: p.published ? `${colors.status.success}15` : theme.border, color: p.published ? colors.status.success : theme.muted, fontSize: 12, cursor: 'pointer' }}>{p.published ? '✓ Yayında' : 'Taslak'}</button>
                      <button onClick={() => openBlogModal(p)} style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${theme.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Edit size={16} color={theme.muted} /></button>
                      <button onClick={() => setPosts(prev => prev.filter(x => x.id !== p.id))} style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${theme.border}`, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={16} color={colors.status.error} /></button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {page === 'admin-messages' && (
              <div style={{ maxWidth: 1000 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                  <h1 style={{ fontSize: 28, fontWeight: 700 }}>Mesajlar</h1>
                  <span style={{ color: theme.muted, fontSize: 14 }}>{messages.filter(m => !m.read).length} okunmamış</span>
                </div>
                
                {selectedMessage ? (
                  // Mesaj Detay Görünümü
                  <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${theme.border}` }}>
                      <button onClick={() => setSelectedMessage(null)} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: theme.muted, fontSize: 14, cursor: 'pointer' }}>
                        <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Tüm Mesajlar
                      </button>
                      <button onClick={() => { setMessages(prev => prev.filter(m => m.id !== selectedMessage.id)); setSelectedMessage(null); showNotif('Mesaj silindi!'); }} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: `1px solid ${colors.status.error}30`, color: colors.status.error, padding: '8px 16px', borderRadius: 100, fontSize: 13, cursor: 'pointer' }}>
                        <Trash2 size={14} /> Sil
                      </button>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                      <div style={{ width: 56, height: 56, borderRadius: 16, background: isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={28} color={isDark ? colors.lime : '#6B8E23'} />
                      </div>
                      <div>
                        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{selectedMessage.name}</h2>
                        <a href={`mailto:${selectedMessage.email}`} style={{ color: isDark ? colors.lime : '#6B8E23', fontSize: 14, textDecoration: 'none' }}>{selectedMessage.email}</a>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: 24 }}>
                      <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Konu</p>
                      <h3 style={{ fontSize: 18, fontWeight: 600 }}>{selectedMessage.subject}</h3>
                    </div>
                    
                    <div style={{ marginBottom: 24 }}>
                      <p style={{ color: theme.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Mesaj</p>
                      <p style={{ fontSize: 15, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{selectedMessage.message}</p>
                    </div>
                    
                    <div style={{ display: 'flex', gap: 16, color: theme.muted, fontSize: 13, paddingTop: 24, borderTop: `1px solid ${theme.border}` }}>
                      <span><Calendar size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{selectedMessage.date}</span>
                      {selectedMessage.time && <span><Clock size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />{selectedMessage.time}</span>}
                    </div>
                    
                    <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`} className="btn-hover" style={{ ...btnPrimary, display: 'inline-flex', marginTop: 24, textDecoration: 'none' }}>
                      <Send size={16} /> Yanıtla
                    </a>
                  </div>
                ) : (
                  // Mesaj Listesi
                  <div style={cardStyle}>
                    {messages.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: 48, color: theme.muted }}>
                        <MessageSquare size={48} style={{ marginBottom: 16, opacity: 0.3 }} />
                        <p>Henüz mesaj yok</p>
                      </div>
                    ) : (
                      messages.map((m, i) => (
                        <div key={m.id} onClick={() => { setMessages(prev => prev.map(x => x.id === m.id ? { ...x, read: true } : x)); setSelectedMessage(m); }} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, cursor: 'pointer', borderBottom: i < messages.length - 1 ? `1px solid ${theme.border}` : 'none', background: !m.read ? (isDark ? `${colors.lime}08` : 'rgba(143,179,57,0.08)') : 'transparent', transition: 'background 0.2s ease' }}>
                          <div style={{ width: 44, height: 44, borderRadius: 12, background: isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={20} color={isDark ? colors.lime : '#6B8E23'} /></div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                              <h3 style={{ fontWeight: 600 }}>{m.name}</h3>
                              {!m.read && <span style={{ width: 8, height: 8, borderRadius: '50%', background: isDark ? colors.lime : '#8FB339' }} />}
                            </div>
                            <p style={{ fontWeight: 500, fontSize: 14, marginBottom: 4 }}>{m.subject}</p>
                            <p style={{ color: theme.muted, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.message}</p>
                          </div>
                          <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            <p style={{ color: theme.muted, fontSize: 12 }}>{m.date}</p>
                            {m.time && <p style={{ color: theme.muted, fontSize: 11 }}>{m.time}</p>}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Settings */}
            {page === 'admin-settings' && (
              <div style={{ maxWidth: 900 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                  <h1 style={{ fontSize: 28, fontWeight: 700 }}>Site Ayarları</h1>
                  <button onClick={() => showNotif('Tüm değişiklikler kaydedildi!')} style={btnPrimary}><Save size={18} /> Kaydet</button>
                </div>
                
                <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  {['profile', 'hero', 'stats', 'about', 'skills', 'tech', 'social', 'email'].map(tab => (
                    <button key={tab} onClick={() => setSettingsTab(tab)} style={{ padding: '10px 20px', borderRadius: 100, border: 'none', background: settingsTab === tab ? (isDark ? colors.lime : '#8FB339') : 'transparent', color: settingsTab === tab ? (isDark ? '#0a0a0a' : '#ffffff') : theme.muted, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
                      {tab === 'profile' ? '👤 Profil' : tab === 'hero' ? '🏠 Hero' : tab === 'stats' ? '📊 İstatistikler' : tab === 'about' ? '📄 Hakkımda' : tab === 'skills' ? '🛠️ Yetenekler' : tab === 'tech' ? '💻 Teknolojiler' : tab === 'social' ? '🌐 Sosyal' : '📧 E-posta'}
                    </button>
                  ))}
                </div>

                {/* Profile Tab */}
                {settingsTab === 'profile' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>👤 Profil Bilgileri</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div><label style={labelStyle}>Ad Soyad</label><input type="text" value={sName} onChange={(e) => setSName(e.target.value)} style={inputStyle} /></div>
                      <div><label style={labelStyle}>E-posta</label><input type="email" value={sEmail} onChange={(e) => setSEmail(e.target.value)} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Ünvan</label><input type="text" value={sTitle} onChange={(e) => setSTitle(e.target.value)} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Konum</label><input type="text" value={sLocation} onChange={(e) => setSLocation(e.target.value)} style={inputStyle} /></div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Avatar Emoji</label>
                      <input type="text" value={sAvatar} onChange={(e) => setSAvatar(e.target.value)} style={{ ...inputStyle, width: 100, textAlign: 'center', fontSize: 32 }} />
                    </div>
                    <div><label style={labelStyle}>Bio</label><textarea value={sBio} onChange={(e) => setSBio(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} /></div>
                  </div>
                )}

                {/* Hero Tab */}
                {settingsTab === 'hero' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>🏠 Hero Section</h3>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Ana Başlık</label>
                      <input type="text" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} placeholder="Merhaba, Ben Oltan" style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Tagline (Alt Slogan)</label>
                      <input type="text" value={heroTagline} onChange={(e) => setHeroTagline(e.target.value)} placeholder="Yapay zeka ile geleceği kodluyorum" style={inputStyle} />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Vurgulanan Kelime</label>
                      <input type="text" value={heroHighlight} onChange={(e) => setHeroHighlight(e.target.value)} placeholder="geleceği" style={inputStyle} />
                      <p style={{ color: theme.muted, fontSize: 12, marginTop: 8 }}>Bu kelime renkli gösterilecek</p>
                    </div>
                    <div style={{ marginBottom: 20, padding: 20, background: theme.surface, borderRadius: 16 }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                        <input type="checkbox" checked={heroAvailable} onChange={(e) => setHeroAvailable(e.target.checked)} style={{ width: 20, height: 20, accentColor: isDark ? colors.lime : '#8FB339' }} />
                        <span style={{ fontWeight: 500 }}>Müsaitlik durumunu göster</span>
                      </label>
                    </div>
                    {heroAvailable && (
                      <div>
                        <label style={labelStyle}>Müsaitlik Metni</label>
                        <input type="text" value={heroAvailableText} onChange={(e) => setHeroAvailableText(e.target.value)} placeholder="Yeni projelere açık" style={inputStyle} />
                      </div>
                    )}
                  </div>
                )}

                {/* Stats Tab */}
                {settingsTab === 'stats' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>📊 İstatistikler</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                      <div style={{ padding: 20, background: theme.surface, borderRadius: 16 }}>
                        <label style={labelStyle}>Değer</label>
                        <input type="text" value={statProjects} onChange={(e) => setStatProjects(e.target.value)} style={{ ...inputStyle, textAlign: 'center', fontSize: 24, fontWeight: 700 }} />
                        <label style={{ ...labelStyle, marginTop: 12 }}>Etiket</label>
                        <input type="text" value={statProjectsLabel} onChange={(e) => setStatProjectsLabel(e.target.value)} style={inputStyle} />
                      </div>
                      <div style={{ padding: 20, background: theme.surface, borderRadius: 16 }}>
                        <label style={labelStyle}>Değer</label>
                        <input type="text" value={statExperience} onChange={(e) => setStatExperience(e.target.value)} style={{ ...inputStyle, textAlign: 'center', fontSize: 24, fontWeight: 700 }} />
                        <label style={{ ...labelStyle, marginTop: 12 }}>Etiket</label>
                        <input type="text" value={statExperienceLabel} onChange={(e) => setStatExperienceLabel(e.target.value)} style={inputStyle} />
                      </div>
                      <div style={{ padding: 20, background: theme.surface, borderRadius: 16 }}>
                        <label style={labelStyle}>Değer</label>
                        <input type="text" value={statSatisfaction} onChange={(e) => setStatSatisfaction(e.target.value)} style={{ ...inputStyle, textAlign: 'center', fontSize: 24, fontWeight: 700 }} />
                        <label style={{ ...labelStyle, marginTop: 12 }}>Etiket</label>
                        <input type="text" value={statSatisfactionLabel} onChange={(e) => setStatSatisfactionLabel(e.target.value)} style={inputStyle} />
                      </div>
                    </div>
                  </div>
                )}

                {/* About Tab */}
                {settingsTab === 'about' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>📄 Hakkımda Sayfası</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label style={labelStyle}>Başlık</label>
                        <input type="text" value={aboutTitle} onChange={(e) => setAboutTitle(e.target.value)} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Vurgulanan Kelime</label>
                        <input type="text" value={aboutHighlight} onChange={(e) => setAboutHighlight(e.target.value)} style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Açıklama</label>
                      <textarea value={aboutDescription} onChange={(e) => setAboutDescription(e.target.value)} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {settingsTab === 'skills' && (
                  <div style={cardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10 }}>🛠️ Yetenekler</h3>
                      <button onClick={() => { setSkillLabel(''); setSkillDesc(''); setSkillIcon('Code'); setEditingSkill(null); setSkillModal(true); }} style={{ ...btnPrimary, padding: '10px 20px' }}><Plus size={16} /> Yeni</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {skills.map((s, i) => {
                        const IconComponent = iconMap[s.icon] || Code;
                        return (
                          <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: theme.surface, borderRadius: 12 }}>
                            <div style={{ width: 44, height: 44, borderRadius: 10, background: isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <IconComponent size={22} color={isDark ? colors.lime : '#6B8E23'} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ fontWeight: 600, marginBottom: 4 }}>{s.label}</h4>
                              <p style={{ color: theme.muted, fontSize: 13 }}>{s.desc}</p>
                            </div>
                            <button onClick={() => { setSkillLabel(s.label); setSkillDesc(s.desc); setSkillIcon(s.icon); setEditingSkill(s); setSkillModal(true); }} style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${theme.border}`, background: 'transparent', cursor: 'pointer' }}><Edit size={16} color={theme.muted} /></button>
                            <button onClick={() => setSkills(prev => prev.filter(x => x.id !== s.id))} style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${theme.border}`, background: 'transparent', cursor: 'pointer' }}><Trash2 size={16} color={colors.status.error} /></button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tech Tab */}
                {settingsTab === 'tech' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>💻 Teknoloji Stack</h3>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                      <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && techInput) { e.preventDefault(); setTechStack(prev => [...prev, techInput]); setTechInput(''); }}} placeholder="Teknoloji ekle..." style={{ ...inputStyle, flex: 1 }} />
                      <button onClick={() => { if (techInput) { setTechStack(prev => [...prev, techInput]); setTechInput(''); }}} style={{ ...btnPrimary, padding: '14px 20px' }}><Plus size={18} /></button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                      {techStack.map((tech, i) => (
                        <span key={i} onClick={() => setTechStack(prev => prev.filter((_, idx) => idx !== i))} style={{ ...tagStyle, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                          {tech} <X size={14} />
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Tab */}
                {settingsTab === 'social' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>🌐 Sosyal Medya</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                      <div><label style={labelStyle}><Instagram size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />Instagram Kullanıcı Adı</label><input type="text" value={sInstagram} onChange={(e) => setSInstagram(e.target.value)} style={inputStyle} /></div>
                      <div><label style={labelStyle}><Linkedin size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />LinkedIn Kullanıcı Adı</label><input type="text" value={sLinkedin} onChange={(e) => setSLinkedin(e.target.value)} style={inputStyle} /></div>
                      <div><label style={labelStyle}><Github size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />GitHub Kullanıcı Adı</label><input type="text" value={sGithub} onChange={(e) => setSGithub(e.target.value)} style={inputStyle} /></div>
                      <div><label style={labelStyle}><Globe size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />Website URL</label><input type="text" value={sWebsite} onChange={(e) => setSWebsite(e.target.value)} style={inputStyle} /></div>
                    </div>
                  </div>
                )}

                {/* Email Tab */}
                {settingsTab === 'email' && (
                  <div style={cardStyle}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>📧 E-posta Ayarları</h3>
                    
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>İletişim E-posta Adresi</label>
                      <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="sevenoltan@gmail.com" style={inputStyle} />
                      <p style={{ color: theme.muted, fontSize: 12, marginTop: 8 }}>İletişim formundan gelen mesajlar bu adrese gönderilecek</p>
                    </div>
                    
                    <div style={{ marginBottom: 24, padding: 20, background: isDark ? 'rgba(205,255,0,0.05)' : 'rgba(143,179,57,0.05)', borderRadius: 16, border: `1px solid ${isDark ? colors.lime : '#8FB339'}20` }}>
                      <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Mail size={18} color={isDark ? colors.lime : '#6B8E23'} /> Web3Forms Entegrasyonu
                      </h4>
                      <p style={{ color: theme.muted, fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
                        E-posta gönderimi için ücretsiz Web3Forms servisini kullanabilirsiniz. 
                        <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? colors.lime : '#6B8E23', marginLeft: 4 }}>web3forms.com</a> adresinden ücretsiz bir Access Key alın.
                      </p>
                      <div>
                        <label style={labelStyle}>Web3Forms Access Key</label>
                        <input type="text" value={web3FormsKey} onChange={(e) => setWeb3FormsKey(e.target.value)} placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" style={inputStyle} />
                      </div>
                    </div>
                    
                    <div style={{ padding: 16, background: theme.surface, borderRadius: 12 }}>
                      <p style={{ fontSize: 13, color: theme.muted }}>
                        <strong>Not:</strong> Web3Forms key girilmese bile mesajlar dashboard'unuzda görünecektir. Key girildiğinde ayrıca e-posta olarak da alırsınız.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* PROJECT MODAL */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {modal === 'project' && (
        <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ ...cardStyle, maxWidth: 600, width: '100%', maxHeight: '90vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700 }}>{editingProject ? 'Proje Düzenle' : 'Yeni Proje'}</h2>
              <button onClick={() => setModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} color={theme.muted} /></button>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Proje Emojisi</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['🚀', '📝', '🤖', '✅', '🎨', '💻', '📱', '🌐', '⚡', '🔥', '💡', '🎯'].map(emoji => (
                  <button key={emoji} onClick={() => setPEmoji(emoji)} style={{
                    width: 48, height: 48, borderRadius: 12, fontSize: 24,
                    border: pEmoji === emoji ? `2px solid ${isDark ? colors.lime : '#8FB339'}` : `1px solid ${theme.border}`,
                    background: pEmoji === emoji ? (isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)') : 'transparent',
                    cursor: 'pointer',
                  }}>{emoji}</button>
                ))}
              </div>
            </div>
            
            <div style={{ marginBottom: 20 }}><label style={labelStyle}>Proje Adı *</label><input type="text" placeholder="Proje adı" value={pTitle} onChange={(e) => setPTitle(e.target.value)} style={inputStyle} /></div>
            <div style={{ marginBottom: 20 }}><label style={labelStyle}>Açıklama *</label><textarea placeholder="Proje hakkında detaylı açıklama" value={pDesc} onChange={(e) => setPDesc(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} /></div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div><label style={labelStyle}>GitHub URL</label><input type="text" placeholder="https://github.com/..." value={pGithub} onChange={(e) => setPGithub(e.target.value)} style={inputStyle} /></div>
              <div><label style={labelStyle}>Live URL</label><input type="text" placeholder="https://..." value={pLive} onChange={(e) => setPLive(e.target.value)} style={inputStyle} /></div>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>📷 Kapak Fotoğrafı (URL)</label>
              <input type="text" placeholder="https://example.com/image.jpg" value={pImage} onChange={(e) => setPImage(e.target.value)} style={inputStyle} />
              {pImage && (
                <div style={{ marginTop: 12, borderRadius: 12, overflow: 'hidden', border: `1px solid ${theme.border}` }}>
                  <img src={pImage} alt="Önizleme" style={{ width: '100%', height: 150, objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
              )}
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Etiketler</label>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                <input placeholder="Etiket ekle" value={pTagInput} onChange={(e) => setPTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && pTagInput) { e.preventDefault(); setPTags(prev => [...prev, pTagInput]); setPTagInput(''); }}} style={{ ...inputStyle, flex: 1 }} />
                <button onClick={() => { if (pTagInput) { setPTags(prev => [...prev, pTagInput]); setPTagInput(''); }}} style={{ ...btnPrimary, padding: '14px 18px' }}><Plus size={18} /></button>
              </div>
              {pTags.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{pTags.map(t => <span key={t} onClick={() => setPTags(prev => prev.filter(x => x !== t))} style={{ ...tagStyle, cursor: 'pointer' }}>{t} ×</span>)}</div>}
            </div>
            
            <div style={{ display: 'flex', gap: 20, marginBottom: 24, padding: 16, background: theme.surface, borderRadius: 12 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}><input type="checkbox" checked={pPublished} onChange={(e) => setPPublished(e.target.checked)} style={{ width: 18, height: 18, accentColor: isDark ? colors.lime : '#8FB339' }} /> Yayınla</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}><input type="checkbox" checked={pFeatured} onChange={(e) => setPFeatured(e.target.checked)} style={{ width: 18, height: 18, accentColor: isDark ? colors.lime : '#8FB339' }} /> Öne Çıkar</label>
            </div>
            
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setModal(null)} style={{ ...btnSecondary, flex: 1 }}>İptal</button>
              <button onClick={saveProject} style={{ ...btnPrimary, flex: 1 }}>{editingProject ? 'Güncelle' : 'Kaydet'}</button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════ */}
      {/* BLOG MODAL */}
      {/* ══════════════════════════════════════════════════════════════════════════ */}
      
      {modal === 'blog' && (
        <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ ...cardStyle, maxWidth: 700, width: '100%', maxHeight: '90vh', overflow: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700 }}>{editingPost ? 'Yazı Düzenle' : 'Yeni Yazı'}</h2>
              <button onClick={() => setModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} color={theme.muted} /></button>
            </div>
            
            <div style={{ marginBottom: 20 }}><label style={labelStyle}>Başlık *</label><input type="text" placeholder="Yazı başlığı" value={bTitle} onChange={(e) => setBTitle(e.target.value)} style={inputStyle} /></div>
            <div style={{ marginBottom: 20 }}><label style={labelStyle}>Kısa Özet *</label><textarea placeholder="Yazının kısa özeti (liste görünümünde gösterilecek)" value={bExcerpt} onChange={(e) => setBExcerpt(e.target.value)} rows={2} style={{ ...inputStyle, resize: 'vertical' }} /></div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>📷 Kapak Fotoğrafı (URL)</label>
              <input type="text" placeholder="https://example.com/image.jpg" value={bImage} onChange={(e) => setBImage(e.target.value)} style={inputStyle} />
              {bImage && (
                <div style={{ marginTop: 12, borderRadius: 12, overflow: 'hidden', border: `1px solid ${theme.border}` }}>
                  <img src={bImage} alt="Önizleme" style={{ width: '100%', height: 150, objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
              )}
            </div>
            
            <div style={{ marginBottom: 20 }}><label style={labelStyle}>İçerik</label><textarea placeholder="Yazının tam içeriği..." value={bContent} onChange={(e) => setBContent(e.target.value)} rows={8} style={{ ...inputStyle, resize: 'vertical' }} /></div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Etiketler</label>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                <input placeholder="Etiket ekle" value={bTagInput} onChange={(e) => setBTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && bTagInput) { e.preventDefault(); setBTags(prev => [...prev, bTagInput]); setBTagInput(''); }}} style={{ ...inputStyle, flex: 1 }} />
                <button onClick={() => { if (bTagInput) { setBTags(prev => [...prev, bTagInput]); setBTagInput(''); }}} style={{ ...btnPrimary, padding: '14px 18px' }}><Plus size={18} /></button>
              </div>
              {bTags.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{bTags.map(t => <span key={t} onClick={() => setBTags(prev => prev.filter(x => x !== t))} style={{ ...tagStyle, cursor: 'pointer' }}>{t} ×</span>)}</div>}
            </div>
            
            <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 24, padding: 16, background: theme.surface, borderRadius: 12 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}><input type="checkbox" checked={bPublished} onChange={(e) => setBPublished(e.target.checked)} style={{ width: 18, height: 18, accentColor: isDark ? colors.lime : '#8FB339' }} /> Yayınla</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}><input type="checkbox" checked={bFeatured} onChange={(e) => setBFeatured(e.target.checked)} style={{ width: 18, height: 18, accentColor: isDark ? colors.lime : '#8FB339' }} /> Öne Çıkar</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
                <Clock size={16} color={theme.muted} />
                <input type="number" value={bReadTime} onChange={(e) => setBReadTime(parseInt(e.target.value) || 0)} style={{ ...inputStyle, width: 70, padding: '10px 14px', textAlign: 'center' }} />
                <span style={{ color: theme.muted, fontSize: 14 }}>dk okuma</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setModal(null)} style={{ ...btnSecondary, flex: 1 }}>İptal</button>
              <button onClick={saveBlog} style={{ ...btnPrimary, flex: 1 }}>{editingPost ? 'Güncelle' : 'Kaydet'}</button>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notif && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, padding: '16px 24px', borderRadius: 16, background: isDark ? colors.lime : '#8FB339', color: isDark ? '#0a0a0a' : '#ffffff', fontSize: 14, fontWeight: 600, zIndex: 2000, display: 'flex', alignItems: 'center', gap: 10, boxShadow: `0 8px 32px ${isDark ? colors.lime : '#8FB339'}40` }}>
          <CheckCircle size={20} /> {notif}
        </div>
      )}

      {/* Skill Modal */}
      {skillModal && (
        <div onClick={() => setSkillModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ ...cardStyle, maxWidth: 500, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700 }}>{editingSkill ? 'Yetenek Düzenle' : 'Yeni Yetenek'}</h2>
              <button onClick={() => setSkillModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} color={theme.muted} /></button>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>İkon</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {Object.keys(iconMap).map(icon => {
                  const IconComp = iconMap[icon];
                  return (
                    <button key={icon} onClick={() => setSkillIcon(icon)} style={{
                      width: 48, height: 48, borderRadius: 12,
                      border: skillIcon === icon ? `2px solid ${isDark ? colors.lime : '#8FB339'}` : `1px solid ${theme.border}`,
                      background: skillIcon === icon ? (isDark ? `${colors.lime}15` : 'rgba(143,179,57,0.15)') : 'transparent',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconComp size={22} color={skillIcon === icon ? (isDark ? colors.lime : '#6B8E23') : theme.muted} />
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div style={{ marginBottom: 20 }}><label style={labelStyle}>Başlık</label><input type="text" value={skillLabel} onChange={(e) => setSkillLabel(e.target.value)} placeholder="Frontend" style={inputStyle} /></div>
            <div style={{ marginBottom: 24 }}><label style={labelStyle}>Açıklama</label><input type="text" value={skillDesc} onChange={(e) => setSkillDesc(e.target.value)} placeholder="React, Next.js, TypeScript" style={inputStyle} /></div>
            
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setSkillModal(false)} style={{ ...btnSecondary, flex: 1 }}>İptal</button>
              <button onClick={() => {
                if (skillLabel) {
                  if (editingSkill) {
                    setSkills(prev => prev.map(s => s.id === editingSkill.id ? { ...s, label: skillLabel, desc: skillDesc, icon: skillIcon } : s));
                  } else {
                    setSkills(prev => [...prev, { id: Date.now().toString(), label: skillLabel, desc: skillDesc, icon: skillIcon }]);
                  }
                  setSkillModal(false);
                  showNotif(editingSkill ? 'Yetenek güncellendi!' : 'Yetenek eklendi!');
                }
              }} style={{ ...btnPrimary, flex: 1 }}>Kaydet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
