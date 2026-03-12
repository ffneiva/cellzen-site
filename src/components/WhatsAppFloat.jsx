import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Dismissible bubble (shows once) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-inter font-medium text-white shadow-xl"
            style={{
              backgroundColor: '#1a2a3a',
              border: '1px solid rgba(26,122,130,0.3)',
              maxWidth: '220px',
            }}
          >
            Fale com a gente! 👋
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDismissed(true);
              }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#3a4a5a', color: '#c0ccd8' }}
              aria-label="Fechar"
            >
              <X size={10} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 2, type: 'spring', stiffness: 200 }}
        className="relative"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: 'rgba(37,211,102,0.3)' }}
        />

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{
            backgroundColor: '#25D366',
            boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
          }}
          aria-label="Falar no WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle size={28} color="#ffffff" fill="rgba(255,255,255,0.15)" />
        </a>
      </motion.div>
    </div>
  );
}
