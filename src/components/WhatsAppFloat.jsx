import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '../constants';
import { WhatsGlyph, GOLD } from './motifs';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Entra depois de 400px de scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Some quando o footer (que já tem contato) ou o formulário de
  // orçamento (que tem CTA próprio e a carta-prévia) estão em vista
  useEffect(() => {
    const targets = ['footer', 'orcamento']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (targets.length === 0) return;
    const inView = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        }
        setFooterInView(inView.size > 0);
      },
      { threshold: 0.05 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Some quando o teclado virtual está aberto (não cobrir o campo em foco)
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setKeyboardOpen(vv.height < window.innerHeight * 0.75);
    vv.addEventListener('resize', onResize);
    return () => vv.removeEventListener('resize', onResize);
  }, []);

  const show = visible && !footerInView && !keyboardOpen;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.span
                className="mono-label bg-washi-50 text-tinta-900 border border-washi-300 rounded-[2px] px-3 py-2 shadow-paper-sm whitespace-nowrap"
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.18 }}
              >
                Fale com a gente
              </motion.span>
            )}
          </AnimatePresence>

          <span className="relative inline-block">
            {/* Gota na água: um único anel a cada 8s */}
            <span
              className="absolute inset-0 rounded-full animate-drop-ring pointer-events-none"
              style={{ border: '1.5px solid #128C7E' }}
              aria-hidden="true"
            />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-zap-700 hover:bg-tinta-700 transition-colors duration-200"
              style={{ boxShadow: `0 0 0 2px #F8F4E9, 0 0 0 3px ${GOLD}40, 0 8px 24px rgba(63,52,24,0.25)` }}
              aria-label="Conversar no WhatsApp"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <WhatsGlyph size={26} color="#F8F4E9" />
            </a>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
