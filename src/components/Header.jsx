import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';
import { WhatsGlyph, EASE_INK } from './motifs';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Drawer: Esc fecha; foco entra no painel ao abrir e volta ao botão ao fechar
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    drawerRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-washi-50 transition-shadow duration-300"
      style={{
        borderBottom: scrolled ? '1px solid #DCCFB0' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 2px rgba(63,52,24,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <img src="/assets/logo_transparent.png" alt="" className="w-9 h-9" />
            <span className="font-display font-bold text-xl text-tinta-900 tracking-tight">
              Cell<span className="text-tinta-700">Zen</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="relative group py-2">
                <span className="mono-label text-tinta-900/80 group-hover:text-tinta-900 transition-colors duration-200">
                  {link.label}
                </span>
                <span
                  className="absolute left-0 right-0 -bottom-0.5 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[240ms] ease-ink"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 240 20" className="w-full h-full" preserveAspectRatio="none">
                    <path
                      fill="#1A7A82"
                      d="M4 8 C 60 4, 140 3, 236 7 C 237 7.4, 237 8.6, 235 9 C 150 13, 60 13, 5 11 C 3 10.6, 3 8.6, 4 8 Z"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </nav>

          {/* CTA + hambúrguer */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-ink text-sm px-5 h-10"
            >
              <WhatsGlyph size={15} color="#E6CE79" />
              Orçamento grátis
            </a>

            <button
              ref={toggleRef}
              className="lg:hidden p-2 text-tinta-900"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer mobile — porta shoji */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 top-16 bg-tinta-900/30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              ref={drawerRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              className="fixed right-0 top-16 bottom-0 w-[82vw] max-w-xs bg-washi-100 lg:hidden overflow-y-auto outline-none"
              style={{ borderLeft: '1px solid #DCCFB0' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: EASE_INK }}
            >
              <div className="relative h-full px-7 py-10 flex flex-col gap-1">
                {/* Divisórias verticais da porta shoji */}
                <span className="absolute top-0 bottom-0 left-1/3 w-px bg-washi-300/70 pointer-events-none" aria-hidden="true" />
                <span className="absolute top-0 bottom-0 left-2/3 w-px bg-washi-300/70 pointer-events-none" aria-hidden="true" />
                {/* Marginália */}
                <span
                  className="absolute top-8 right-5 vertical-rl font-display select-none pointer-events-none"
                  style={{ color: '#7A6014', fontSize: '0.8125rem', letterSpacing: '0.5em' }}
                  aria-hidden="true"
                >
                  禅
                </span>

                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative font-display text-2xl text-tinta-900 py-3.5"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.08 + i * 0.05, ease: EASE_INK }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-mono text-[0.625rem] text-ouro-700 align-top mr-2">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink text-base px-6 py-3.5 mt-8"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <WhatsGlyph size={17} color="#E6CE79" />
                  Falar no WhatsApp
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
