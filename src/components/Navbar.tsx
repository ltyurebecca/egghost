import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-brand-bg/80 backdrop-blur-sm border-b border-brand-milk-tea/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-serif text-brand-wood font-bold">疍宅 Egghost</div>
        <div className="space-x-8 font-medium text-brand-coffee">
          {['關於我們', '最新菜單', '聯絡我們'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-brand-accent transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
