import { motion, AnimatePresence } from 'motion/react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { name: string; price: string; desc: string; image: string } | null;
}

export default function MenuModal({ isOpen, onClose, item }: MenuModalProps) {
  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-brand-bg p-8 rounded-3xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 bg-brand-milk-tea/30 rounded-2xl mb-6 flex items-center justify-center text-brand-coffee/50">
              {/* NOTE: Replace with actual image source */}
              <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-brand-coffee mb-2">{item.name}</h3>
            <p className="text-xl text-brand-wood font-medium mb-4">{item.price}</p>
            <p className="text-brand-coffee/80 leading-relaxed mb-6">{item.desc}</p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-brand-wood text-white rounded-full hover:bg-brand-coffee transition-colors"
            >
              關閉
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
