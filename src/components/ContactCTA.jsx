import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { getWhatsAppUrl, isBusinessOpen, BUSINESS, WHATSAPP_NUMBER } from '../constants';
import { Enso, WhatsGlyph, EASE_INK, GOLD } from './motifs';

export default function ContactCTA() {
  const [online, setOnline] = useState(isBusinessOpen);

  // Reavalia o status em abas deixadas abertas
  useEffect(() => {
    const timer = setInterval(() => setOnline(isBusinessOpen()), 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contato" className="relative bg-washi-50 overflow-hidden">
      {/* Ensō enorme, cortado pela borda direita — o maior respiro do site */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-[-22vmin] w-[90vmin] h-[90vmin] pointer-events-none"
        aria-hidden="true"
      >
        <Enso className="w-full h-full" strokeWidth={6} opacity={0.07} />
      </div>

      <div className="relative min-h-[70vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 flex flex-col items-center justify-center text-center">
        {/* Noren: o indicador de porta aberta */}
        <motion.div
          className="inline-flex items-center gap-3 border rounded-[2px] px-4 py-2.5 mb-10"
          style={{ borderColor: online ? '#1A7A82' : '#DCCFB0' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE_INK }}
        >
          <span
            className={`relative inline-block w-2.5 h-2.5 rounded-full ${online ? 'animate-breathe' : ''}`}
            style={{
              backgroundColor: online ? '#1A7A82' : '#B23A2A',
              boxShadow: online ? `0 0 0 2px #F8F4E9, 0 0 0 3px ${GOLD}` : 'none',
            }}
            aria-hidden="true"
          />
          <span className="mono-label" style={{ color: online ? '#166069' : '#7A6014' }}>
            {online ? 'Aberto agora · respondemos em minutos' : 'Fechado · abrimos seg–sáb às 8h'}
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-bold text-tinta-900 mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE_INK }}
        >
          Devolva a paz
          <br />
          ao seu bolso.
        </motion.h2>

        <motion.p
          className="font-sans text-tinta-900/75 max-w-md mb-12"
          style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.16, ease: EASE_INK }}
        >
          Diagnóstico gratuito. Coleta em Goiânia. Fale com a gente agora.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.24, ease: EASE_INK }}
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink text-lg px-10 h-14"
          >
            <WhatsGlyph size={20} color="#E6CE79" />
            Falar no WhatsApp
          </a>

          <p className="font-mono text-[0.75rem] text-tinta-600 tracking-[0.08em] flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-tinta-900 transition-colors duration-200">
              {BUSINESS.phone}
            </a>
            <span className="inline-block w-[3px] h-[3px] rounded-full bg-ouro-500" aria-hidden="true" />
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-tinta-900 transition-colors duration-200"
            >
              <Instagram size={12} />
              {BUSINESS.instagramHandle}
            </a>
          </p>
        </motion.div>
      </div>

      {/* A trilha dourada que mergulha no footer — transição de material */}
      <svg
        className="relative block mx-auto w-4 h-16"
        viewBox="0 0 16 64"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8" cy="6" r="4" fill={GOLD} />
        <circle cx="8" cy="6" r="1.8" fill="#F8F4E9" />
        <line x1="8" y1="10" x2="8" y2="64" stroke={GOLD} strokeWidth="1.25" />
      </svg>
    </section>
  );
}
