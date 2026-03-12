import { motion } from 'framer-motion';
import { MessageCircle, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS } from '../constants';

/** Returns true if the current time is within business hours in Brasília (Mon–Sat 08:00–18:00 BRT) */
function isBusinessOpen() {
  try {
    const brt = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const hour = brt.getHours();
    const day = brt.getDay(); // 0=Sun, 1=Mon … 6=Sat
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
  } catch {
    return false;
  }
}

export default function ContactCTA() {
  const online = isBusinessOpen();
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: '#050d14' }}
    >
      {/* Large teal radial behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(26,122,130,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Gold horizontal accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Giant text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Vamos resolver juntos</span>
            <h2
              className="font-outfit font-black text-white leading-[0.9] mt-4 mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              Seu celular
              <br />
              com{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a7a82, #2dc4d0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                problema
              </span>
              ?
            </h2>
            <p className="font-inter text-lg leading-relaxed max-w-md mb-10" style={{ color: '#4a6070' }}>
              Mande uma mensagem e receba seu orçamento gratuito em minutos.
              Sem burocracia, sem enrolação.
            </p>

            {/* Info pills stacked */}
            <div className="flex flex-col gap-3">
              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl w-fit"
                style={{
                  backgroundColor: 'rgba(26,122,130,0.08)',
                  border: '1px solid rgba(26,122,130,0.2)',
                }}
              >
                <Clock size={16} style={{ color: '#1A7A82' }} />
                <span className="font-inter text-sm" style={{ color: '#6a8090' }}>
                  {BUSINESS.hours}
                </span>
              </div>
              <div
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl w-fit"
                style={{
                  backgroundColor: 'rgba(201,162,39,0.06)',
                  border: '1px solid rgba(201,162,39,0.15)',
                }}
              >
                <MapPin size={16} style={{ color: '#C9A227' }} />
                <span className="font-inter text-sm" style={{ color: '#6a8090' }}>
                  {BUSINESS.addressShort}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-start lg:items-center gap-8 p-10 rounded-3xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(26,122,130,0.1) 0%, rgba(26,122,130,0.03) 100%)',
              border: '1px solid rgba(26,122,130,0.25)',
            }}
          >
            {/* Corner glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top right, rgba(26,122,130,0.2) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 text-center">
              <p className="font-outfit font-black text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                Orçamento 100%{' '}
                <span style={{ color: '#1a7a82' }}>gratuito</span>
              </p>
              <p className="font-inter text-sm" style={{ color: '#4a6070' }}>
                Resposta em minutos pelo WhatsApp
              </p>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 btn-whatsapp font-outfit text-xl px-10 py-5 w-full justify-center"
            >
              <MessageCircle size={26} />
              Falar no WhatsApp
              <ArrowUpRight size={18} className="ml-auto" />
            </a>

            <div className="relative z-10 flex items-center gap-2 self-center">
              <div
                className={`w-2 h-2 rounded-full ${online ? 'animate-pulse' : ''}`}
                style={{ backgroundColor: online ? '#25d366' : '#4a5e6e' }}
              />
              <span className="font-inter text-xs" style={{ color: online ? '#4a8060' : '#3a5060' }}>
                {online ? 'Online agora' : 'Respondemos em breve'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
