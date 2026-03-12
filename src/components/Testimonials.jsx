import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'João Vítor',
    age: '19 anos',
    device: 'Samsung Galaxy A54',
    text: 'Quebrei a tela do meu Samsung e me ajudaram super rápido! A qualidade ficou incrível, parece que saiu de fábrica.',
    stars: 5,
    initial: 'J',
    color: '#1A7A82',
  },
  {
    name: 'Ana Luíza',
    age: '22 anos',
    device: 'Motorola Edge 30',
    text: 'Melhor custo-benefício que encontrei em Goiânia. Câmera com defeito, resolveram rápido. Atendimento nota 10!',
    stars: 5,
    initial: 'A',
    color: '#C9A227',
  },
  {
    name: 'Pedro Henrique',
    age: '17 anos',
    device: 'Xiaomi Redmi Note 12',
    text: 'Minha bateria durava só 2h. Depois da troca, passa o dia todo. Serviço de qualidade e preço justo. Já indiquei pra galera!',
    stars: 5,
    initial: 'P',
    color: '#1A7A82',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A227" style={{ color: '#C9A227' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#050d14' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag">Depoimentos</span>
          <h2
            className="font-outfit font-black text-white leading-[0.92] mt-4"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}
          >
            O que nossos{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1a7a82, #2dc4d0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              clientes
            </span>{' '}
            dizem
          </h2>
        </motion.div>

        {/* Testimonials — equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative flex flex-col p-7 rounded-2xl overflow-hidden h-full"
              style={{
                backgroundColor: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Giant quote mark */}
              <div
                className="absolute -top-2 -left-1 font-outfit font-black select-none pointer-events-none leading-none"
                style={{
                  fontSize: '8rem',
                  color: `${t.color}12`,
                  lineHeight: 1,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="relative z-10 mb-4">
                <StarRating count={t.stars} />
              </div>

              {/* Text */}
              <p
                className="relative z-10 font-inter text-base leading-relaxed flex-1 mb-6"
                style={{ color: '#b0c0cc' }}
              >
                {t.text}
              </p>

              {/* Author row */}
              <div className="relative z-10 flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-outfit font-black text-white text-sm flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-outfit font-bold text-white text-sm">{t.name}</p>
                  <p className="font-inter text-xs" style={{ color: '#3a5060' }}>
                    {t.age} · {t.device}
                  </p>
                </div>

                {/* Accent dot top-right */}
                <div
                  className="absolute top-0 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: t.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {['J', 'A', 'P'].map((l, i) => (
              <div
                key={l}
                className="w-8 h-8 rounded-full flex items-center justify-center font-outfit font-black text-white text-xs border-2"
                style={{
                  backgroundColor: i % 2 === 0 ? '#1A7A82' : '#C9A227',
                  borderColor: '#050d14',
                }}
              >
                {l}
              </div>
            ))}
          </div>
          <p className="font-inter text-sm" style={{ color: '#3a5060' }}>
            Clientes reais, resultados reais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
