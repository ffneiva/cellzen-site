import { motion } from 'framer-motion';
import { ShieldCheck, Tag, MapPin, Smartphone } from 'lucide-react';

const STATS = [
  { value: '100%', label: 'Foco em Android', color: '#1A7A82' },
  { value: 'Grátis', label: 'Diagnóstico', color: '#C9A227' },
  { value: '5★', label: 'Avaliação média', color: '#1A7A82' },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Premium',
    description: 'Peças selecionadas e reparos feitos com atenção a cada detalhe — sem atalhos.',
    color: '#1A7A82',
  },
  {
    icon: Tag,
    title: 'Preço Justo',
    description: 'Orçamento transparente, sem surpresas. Premium não precisa custar caro.',
    color: '#C9A227',
  },
  {
    icon: MapPin,
    title: 'Buscamos em Goiânia',
    description: 'Agendamos a coleta no local mais conveniente para você, em qualquer bairro.',
    color: '#1A7A82',
  },
  {
    icon: Smartphone,
    title: 'Especialistas em Android',
    description: '100% de foco em Android. Dominamos cada marca e modelo para um serviço mais preciso.',
    color: '#C9A227',
  },
];

export default function WhyCellZen() {
  return (
    <section
      id="diferenciais"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#070e18' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26,122,130,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Diagonal divider at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,122,130,0.3), rgba(201,162,39,0.2), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mb-20 pt-2"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-outfit font-black leading-none mb-1"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="font-inter text-xs uppercase tracking-widest" style={{ color: '#3a5060' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-tag">Por que a CellZen?</span>
            <h2
              className="font-outfit font-black text-white leading-[0.92] mt-4 mb-6"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}
            >
              O que nos{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #c9a227, #d4b85a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                diferencia
              </span>
            </h2>
            <p className="font-inter text-base leading-relaxed max-w-sm" style={{ color: '#4a6070' }}>
              Mais do que consertar celulares — entregamos tranquilidade
              e confiança em cada reparo.
            </p>

            {/* Decorative vertical line + dot */}
            <div className="mt-10 flex items-center gap-4">
              <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, rgba(26,122,130,0.6), transparent)' }} />
              <span className="font-inter text-xs uppercase tracking-widest" style={{ color: '#2a4a52' }}>
                Qualidade garantida
              </span>
            </div>
          </motion.div>

          {/* Right: feature list */}
          <div className="flex flex-col gap-5">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group flex gap-5 p-6 rounded-2xl transition-all duration-300 cursor-default"
                  style={{
                    border: '1px solid rgba(255,255,255,0.05)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${feature.color}35`;
                    e.currentTarget.style.backgroundColor = `${feature.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}0a)`,
                      border: `1px solid ${feature.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-white text-base mb-1">{feature.title}</h3>
                    <p className="font-inter text-sm leading-relaxed" style={{ color: '#4a6070' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
