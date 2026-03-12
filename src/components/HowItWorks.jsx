import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

const STEPS = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Mande uma mensagem',
    description: 'Fale com a gente pelo WhatsApp descrevendo o problema do seu celular. Resposta rápida garantida.',
    accent: '#1A7A82',
    label: 'WhatsApp',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Combinamos a coleta',
    description: 'Agendamos a retirada no local mais conveniente para você, em qualquer bairro de Goiânia.',
    accent: '#C9A227',
    label: 'Logística grátis',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Celular como novo',
    description: 'Após o reparo com peças de qualidade, devolvemos o seu Android funcionando perfeitamente.',
    accent: '#1A7A82',
    label: 'Qualidade premium',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#060c15' }}
    >
      {/* Gold accent vertical line far left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,162,39,0.15), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-tag">Simples e rápido</span>
          <h2
            className="font-outfit font-black text-white leading-[0.92] mt-4"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}
          >
            Como{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1a7a82, #2dc4d0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              funciona
            </span>
            ?
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical connecting line — centered on the 64px-wide node */}
          <div
            className="absolute left-8 top-16 bottom-16 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #1a7a8240, #c9a22730, #1a7a8240)' }}
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex gap-8 items-start ${!isLast ? 'pb-14' : ''}`}
              >
                {/* Step node — large numbered square */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center gap-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${step.accent}20, ${step.accent}08)`,
                      border: `1px solid ${step.accent}50`,
                      boxShadow: `0 0 28px ${step.accent}20`,
                    }}
                  >
                    <span
                      className="font-outfit font-black leading-none"
                      style={{ fontSize: '1.5rem', color: step.accent }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={13} style={{ color: `${step.accent}80` }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  {/* Label pill */}
                  <span
                    className="inline-block font-inter text-xs uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                    style={{
                      color: step.accent,
                      backgroundColor: `${step.accent}12`,
                      border: `1px solid ${step.accent}25`,
                    }}
                  >
                    {step.label}
                  </span>

                  <h3
                    className="font-outfit font-black text-white mb-3"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-inter text-base leading-relaxed max-w-lg" style={{ color: '#4a6070' }}>
                    {step.description}
                  </p>

                  {/* Arrow connector (not on last) */}
                  {!isLast && (
                    <div className="mt-6 flex items-center gap-2" style={{ color: '#2a3a4a' }}>
                      <div className="h-px w-8" style={{ background: `${step.accent}40` }} />
                      <ArrowRight size={14} style={{ color: step.accent, opacity: 0.4 }} />
                    </div>
                  )}
                </div>

                {/* Big step number — far right decorative */}
                <div
                  className="hidden lg:block absolute right-0 top-0 font-outfit font-black select-none pointer-events-none leading-none"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    background: `linear-gradient(135deg, ${step.accent}28, ${step.accent}08)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex items-center gap-6"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp font-outfit text-base px-7 py-4"
          >
            <MessageCircle size={19} />
            Começar agora
          </a>
          <p className="font-inter text-sm" style={{ color: '#3a5060' }}>
            Atendimento em minutos,<br />resposta garantida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
