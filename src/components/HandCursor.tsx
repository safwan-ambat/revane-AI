import { Hand } from 'lucide-react';
import { motion } from 'framer-motion';

export function HandCursor({ className }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hand Placeholder using Lucide Icon heavily styled */}
      <div className="relative">
        <Hand className="w-24 h-24 text-gray-400 rotate-[-30deg] fill-gray-800" strokeWidth={1} />
        {/* Glow behind hand to simulate interaction */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl -z-10 animate-pulse"></div>
      </div>
    </motion.div>
  );
}
