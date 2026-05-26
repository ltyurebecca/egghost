import { motion } from 'motion/react';

const Logo = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6">
    {/* Body */}
    <ellipse cx="12" cy="14" rx="7" ry="8" fill="#FDFBF8" stroke="#8B7355" strokeWidth="1" />
    {/* Eyes */}
    <circle cx="9.5" cy="12" r="0.8" fill="#4A3728" />
    <circle cx="14.5" cy="12" r="0.8" fill="#4A3728" />
    {/* Blush (Shy) */}
    <circle cx="8" cy="14" r="1.5" fill="#EF4444" opacity="0.3" />
    <circle cx="16" cy="14" r="1.5" fill="#EF4444" opacity="0.3" />
    {/* Mouth */}
    <path d="M10 16c1 0.5 3 0.5 4 0" stroke="#4A3728" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-milk-tea/20" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <Logo />
        <h1 className="text-5xl md:text-7xl font-serif text-brand-coffee mb-6">
          一顆蛋，是甜點的靈魂；<br/>
          一個家，是人心的歸處。
        </h1>
        <div className="flex gap-4 justify-center">
          <a href="#最新菜單" className="px-8 py-3 bg-brand-accent text-white rounded-full hover:bg-brand-wood transition-colors">查看菜單</a>
          <a href="#聯絡我們" className="px-8 py-3 border border-brand-wood text-brand-wood rounded-full hover:bg-brand-wood hover:text-white transition-colors">立即聯絡</a>
        </div>
      </motion.div>
    </section>
  );
}
