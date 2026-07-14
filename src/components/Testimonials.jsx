import { motion } from 'framer-motion';
import { SectionHeader, Marginalia, Hanko, EASE_INK, GOLD, WASHI } from './motifs';

const TESTIMONIALS = [
  {
    name: 'João Vítor',
    device: 'Galaxy A54 · troca de tela',
    text: 'Quebrei a tela do meu Samsung e me ajudaram super rápido. A qualidade ficou incrível — parece que saiu de fábrica.',
    initial: 'J',
    offset: 'lg:mt-0',
  },
  {
    name: 'Ana Luíza',
    device: 'Edge 30 · reparo de câmera',
    text: 'Melhor custo-benefício que encontrei em Goiânia. Câmera com defeito, resolveram rápido. Atendimento nota dez.',
    initial: 'A',
    offset: 'lg:mt-10',
  },
  {
    name: 'Pedro Henrique',
    device: 'Redmi Note 12 · troca de bateria',
    text: 'Minha bateria durava duas horas. Depois da troca, passa o dia todo. Preço justo, serviço de qualidade. Já indiquei pra todo mundo.',
    initial: 'P',
    offset: 'lg:mt-5',
  },
];

/* Pergaminho kakejiku: painel vertical com barras de tinta */
function Scroll({ t, index }) {
  return (
    <motion.figure
      className={`relative flex flex-col ${t.offset}`}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: EASE_INK }}
    >
      {/* Barra superior — pontas levemente salientes */}
      <span className="relative -mx-1.5 h-[6px] bg-tinta-900" aria-hidden="true" />

      <div className="flex-1 flex flex-col bg-washi-100 border-x border-washi-300 px-7 pt-6 pb-7 shadow-paper-sm">
        <span
          className="font-display select-none"
          style={{ fontSize: '3rem', lineHeight: 1, color: 'rgba(26,122,130,0.16)' }}
          aria-hidden="true"
        >
          「
        </span>
        <blockquote
          className="font-display text-tinta-900 flex-1 mt-1 mb-6"
          style={{ fontSize: '1.0625rem', lineHeight: 1.9 }}
        >
          {t.text}
        </blockquote>

        <figcaption className="pt-5 hairline-t flex items-center gap-3">
          <Hanko variant="round" char={t.initial} size={38} />
          <span className="flex-1">
            <span className="block font-sans font-medium text-tinta-900 text-sm">{t.name}</span>
            <span className="block font-mono text-[0.6875rem] text-tinta-600 tracking-[0.06em] mt-0.5">
              {t.device}
            </span>
          </span>
          {/* 5 pads dourados no lugar de estrelas */}
          <span className="flex gap-1.5" role="img" aria-label="Avaliação: 5 de 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="relative inline-block w-[7px] h-[7px] rounded-full" style={{ backgroundColor: GOLD }}>
                <span
                  className="absolute inset-[2px] rounded-full"
                  style={{ backgroundColor: WASHI }}
                />
              </span>
            ))}
          </span>
        </figcaption>
      </div>

      {/* Barra inferior */}
      <span className="relative -mx-1.5 h-[6px] bg-tinta-900" aria-hidden="true" />
    </motion.figure>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-washi-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 mb-14">
          <div className="flex-1">
            <SectionHeader
              kanjiNum="五"
              num="05"
              kicker="Depoimentos"
              title="Quem já passou por aqui."
            />
          </div>
          <Marginalia kanji="声" romaji="koe · vozes" className="pt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <Scroll key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
