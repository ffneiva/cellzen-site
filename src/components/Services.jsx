import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BatteryCharging, Camera, Cpu, Zap, Wrench } from 'lucide-react';

const SERVICES = [
  {
    icon: Smartphone,
    number: '01',
    title: 'Troca de Tela',
    description: 'Tela quebrada, manchada ou sem toque? Peças de alta qualidade para qualquer modelo Android.',
    color: '#1A7A82',
    span: 'lg:col-span-2',
  },
  {
    icon: BatteryCharging,
    number: '02',
    title: 'Troca de Bateria',
    description: 'Autonomia de volta. Baterias premium que duram o dia todo.',
    color: '#22A0AA',
    span: '',
  },
  {
    icon: Camera,
    number: '03',
    title: 'Reparo de Câmera',
    description: 'Câmera preta ou desfocada? Troca do módulo com precisão cirúrgica.',
    color: '#1A7A82',
    span: '',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Conserto de Placa',
    description: 'Desligamentos ou falhas profundas? Nossa equipe vai direto à raiz do problema.',
    color: '#C9A227',
    span: 'lg:col-span-2',
  },
  {
    icon: Zap,
    number: '05',
    title: 'Troca de Conector',
    description: 'Carga lenta ou conector frouxo? Resolvemos rápido.',
    color: '#22A0AA',
    span: '',
  },
  {
    icon: Wrench,
    number: '06',
    title: 'Diagnóstico Gratuito',
    description: 'Não sabe o que está errado? Fazemos uma análise completa sem custo.',
    color: '#C9A227',
    span: '',
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl p-7 cursor-default flex flex-col justify-between min-h-[180px] transition-all duration-300 ${service.span}`}
      style={{
        backgroundColor: hovered ? `${service.color}0f` : 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? service.color + '40' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 0 40px ${service.color}18, inset 0 0 40px ${service.color}06` : 'none',
      }}
    >
      {/* Big number watermark */}
      <span
        className="absolute top-4 right-5 font-outfit font-black select-none pointer-events-none transition-all duration-300"
        style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          color: hovered ? `${service.color}20` : 'rgba(255,255,255,0.03)',
          lineHeight: 1,
        }}
      >
        {service.number}
      </span>

      {/* Top row */}
      <div>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
          style={{
            backgroundColor: `${service.color}18`,
            border: `1px solid ${service.color}30`,
            boxShadow: hovered ? `0 0 20px ${service.color}30` : 'none',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Icon size={20} style={{ color: service.color }} />
        </div>

        <h3 className="font-outfit font-bold text-white text-lg mb-2">{service.title}</h3>
        <p className="font-inter text-sm leading-relaxed" style={{ color: '#5a7080' }}>
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className="mt-5 h-px transition-all duration-500"
        style={{
          width: hovered ? '40%' : '0%',
          background: `linear-gradient(90deg, ${service.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#050d14' }}
    >
      {/* Faint bg grid */}
      <div className="absolute inset-0 bg-grid-subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned for variety */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">O que fazemos</span>
            <h2
              className="font-outfit font-black text-white leading-[0.95] mt-3"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Serviços para o{' '}
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a7a82, #2dc4d0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                seu Android
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-inter text-base max-w-sm lg:text-right"
            style={{ color: '#4a6070' }}
          >
            Samsung, Motorola, Xiaomi, LG e muito mais.
            Cada peça escolhida com critério.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-inter text-sm" style={{ color: '#3a4e5e' }}>
            Não encontrou seu problema?{' '}
            <a
              href="#orcamento"
              className="font-semibold transition-colors duration-200"
              style={{ color: '#1A7A82' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#2dc4d0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1A7A82')}
            >
              Fale com a gente →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
