import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5, 13, 20, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,122,130,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle, #1a7a82, transparent)' }}
              />
              <img
                src="/assets/logo_transparent.png"
                alt="CellZen"
                className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                style={{ filter: 'drop-shadow(0 0 8px rgba(26,122,130,0.6))' }}
              />
            </div>
            <span className="font-outfit font-black text-xl tracking-tight text-white">
              CELL<span style={{ color: '#1A7A82' }}>ZEN</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-inter font-medium rounded-lg transition-all duration-200"
                style={{ color: '#6a7e92' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.backgroundColor = 'rgba(26,122,130,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6a7e92'; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 font-outfit font-bold text-sm text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #25D366, #1db954)', boxShadow: '0 0 20px rgba(37,211,102,0.3)' }}
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: '#6a7e92' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'rgba(5,13,20,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(26,122,130,0.15)',
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center py-3.5 px-4 font-inter text-base font-medium rounded-xl transition-all duration-200"
                  style={{ color: '#c0ccd8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(26,122,130,0.1)'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c0ccd8'; }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 font-outfit font-bold text-base text-white px-4 py-4 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #25D366, #1db954)' }}
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
