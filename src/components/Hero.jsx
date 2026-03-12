import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Shield, Zap, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

const BRANDS = ['Samsung', 'Motorola', 'Xiaomi', 'LG', 'Realme', 'OnePlus', 'Nokia', 'Asus'];

function MarqueeBrands() {
  // 4× so the loop is always filled on any screen size
  const items = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];
  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}>
      <div className="flex gap-5 animate-marquee whitespace-nowrap w-max">
        {items.map((brand, i) => (
          <span
            key={i}
            className="font-outfit font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full flex-shrink-0"
            style={{ color: '#2a4a52', border: '1px solid rgba(26,122,130,0.15)' }}
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#050d14' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-subtle" />

      {/* Large teal circle behind logo */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,122,130,0.12) 0%, rgba(26,122,130,0.04) 40%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 60%, rgba(26,122,130,0.04) 100%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Gold accent line top-right */}
      <div
        className="absolute top-0 right-[15%] w-px h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #c9a22700, #c9a227, #c9a22700)' }}
      />

      {/* Main content — split layout */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-16">

          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="section-tag">Goiânia — GO</span>
            </motion.div>

            {/* Headline — enormous, bold */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-outfit font-black leading-[0.95] text-white mb-6"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
            >
              Seu celular
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a7a82 0%, #2dc4d0 60%, #c9a227 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                merece
              </span>
              <br />
              o melhor.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-inter text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: '#6a7e92' }}
            >
              Assistência técnica premium para celulares Android. Qualidade de alto padrão
              com preço acessível — direto no seu WhatsApp.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp font-outfit text-lg px-8 py-4 rounded-2xl"
              >
                <MessageCircle size={21} />
                Orçamento Grátis
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 font-outfit font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 group"
                style={{ color: '#6a7e92', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(26,122,130,0.4)'; e.currentTarget.style.backgroundColor = 'rgba(26,122,130,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#6a7e92'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Ver Serviços
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-5"
            >
              {[
                { icon: Shield, label: 'Qualidade Premium' },
                { icon: Zap, label: 'Atendimento Rápido' },
                { icon: Star, label: 'Clientes Satisfeitos' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(26,122,130,0.15)', border: '1px solid rgba(26,122,130,0.25)' }}
                  >
                    <Icon size={13} style={{ color: '#1A7A82' }} />
                  </div>
                  <span className="font-inter text-sm" style={{ color: '#4a5e6e' }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Logo + floating elements */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative">
            {/* Spinning outer ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96"
            >
              {/* Outer dashed ring — spinning */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  border: '1px dashed rgba(26,122,130,0.25)',
                }}
              />

              {/* Mid ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '16px',
                  border: '1px solid rgba(26,122,130,0.12)',
                }}
              />

              {/* Glow bg */}
              <div
                className="absolute rounded-full animate-glow-pulse"
                style={{
                  inset: '32px',
                  background: 'radial-gradient(circle, rgba(26,122,130,0.2) 0%, transparent 70%)',
                }}
              />

              {/* Logo */}
              <motion.img
                src="/assets/logo_transparent.png"
                alt="CellZen"
                className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 animate-float"
                style={{ filter: 'drop-shadow(0 0 40px rgba(26,122,130,0.5)) drop-shadow(0 0 80px rgba(26,122,130,0.2))' }}
              />

              {/* Floating chip — top-right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9, type: 'spring' }}
                className="absolute -top-2 -right-4 px-3 py-2 rounded-xl font-outfit font-bold text-xs text-white hidden sm:flex items-center gap-1.5"
                style={{ background: 'linear-gradient(135deg, #1a7a82, #0e5e66)', boxShadow: '0 4px 20px rgba(26,122,130,0.4)' }}
              >
                <Zap size={11} />
                Especialistas
              </motion.div>

              {/* Floating chip — bottom-left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1, type: 'spring' }}
                className="absolute -bottom-2 -left-6 px-3 py-2 rounded-xl font-outfit font-bold text-xs hidden sm:flex items-center gap-1.5"
                style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)', color: '#c9a227', boxShadow: '0 4px 20px rgba(201,162,39,0.15)' }}
              >
                <Star size={11} fill="#c9a227" />
                Android
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Brands marquee bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 py-6"
        style={{ borderTop: '1px solid rgba(26,122,130,0.1)' }}
      >
        <p className="font-inter text-xs text-center uppercase tracking-widest mb-4" style={{ color: '#2a3a4a' }}>
          Marcas que atendemos
        </p>
        <MarqueeBrands />
      </motion.div>
    </section>
  );
}
