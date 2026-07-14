import { motion, useReducedMotion } from 'framer-motion';
import {
  SectionHeader,
  Marginalia,
  IconShield,
  IconTag,
  IconMapPin,
  IconAndroid,
  EASE_INK,
  EASE_STAMP,
  GOLD,
  WASHI,
} from './motifs';

const FEATURES = [
  {
    kanji: '一',
    icon: IconShield,
    title: 'Qualidade sem atalhos',
    description: 'Peças selecionadas e reparos feitos com atenção a cada detalhe. Testamos tudo antes de devolver.',
  },
  {
    kanji: '二',
    icon: IconTag,
    title: 'Preço justo, orçamento transparente',
    description: 'Você sabe o valor antes de qualquer serviço. Sem surpresas, sem letra miúda.',
  },
  {
    kanji: '三',
    icon: IconMapPin,
    title: 'Coleta em qualquer bairro de Goiânia',
    description: 'Agendamos a retirada e a devolução no local mais conveniente para você.',
  },
  {
    kanji: '四',
    icon: IconAndroid,
    title: '100% Android, do sistema à placa',
    description: 'Foco total em uma coisa só. Dominamos cada marca e modelo para um reparo mais preciso.',
  },
];

const STATS = [
  { value: '100%', label: 'ANDROID', note: '*', ring: '#1A7A82', valueColor: '#0F3A40' },
  { value: '5', label: 'AVALIAÇÃO', note: '**', ring: '#C9A227', valueColor: '#0F3A40', pads: 5 },
  { value: 'Grátis', label: 'DIAGNÓSTICO', note: '***', ring: '#B23A2A', valueColor: '#B23A2A' },
];

const FOOTNOTES = [
  '* só Android. de verdade.',
  '** média das avaliações dos clientes.',
  '*** você só paga se consertar.',
];

/* Selo circular desenhado como hanko */
function StampStat({ stat, index }) {
  const reduced = useReducedMotion();
  const finalRotate = index === 1 ? 1.5 : -2;
  // prefers-reduced-motion: o carimbo aparece por opacity, sem scale/rotate
  const stampAnim = reduced
    ? {
        initial: { opacity: 0, rotate: finalRotate },
        whileInView: { opacity: 1 },
        transition: { duration: 0.15, delay: 0.1 + index * 0.08 },
      }
    : {
        initial: { scale: 1.2, opacity: 0, rotate: -6 },
        whileInView: { scale: 1, opacity: 1, rotate: finalRotate },
        transition: { duration: 0.18, delay: 0.15 + index * 0.12, ease: EASE_STAMP },
      };
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      viewport={{ once: true, margin: '-60px' }}
      {...stampAnim}
    >
      <div
        className="relative flex flex-col items-center justify-center w-28 h-28 rounded-full"
        style={{ border: `2.5px solid ${stat.ring}` }}
      >
        {/* Segundo anel irregular do carimbo */}
        <span
          className="absolute inset-[5px] rounded-full"
          style={{ border: `1px solid ${stat.ring}`, opacity: 0.45 }}
          aria-hidden="true"
        />
        <span
          className="font-display font-bold"
          style={{ fontSize: stat.value.length > 4 ? '1.375rem' : '1.75rem', color: stat.valueColor }}
        >
          {stat.value}
        </span>
        {/* Avaliação em pads de circuito, não em estrelas */}
        {stat.pads && (
          <span className="flex gap-1 mt-1.5" aria-hidden="true">
            {Array.from({ length: stat.pads }).map((_, i) => (
              <span key={i} className="relative inline-block w-[6px] h-[6px] rounded-full" style={{ backgroundColor: GOLD }}>
                <span className="absolute inset-[1.5px] rounded-full" style={{ backgroundColor: WASHI }} />
              </span>
            ))}
          </span>
        )}
      </div>
      <span className="mono-label text-tinta-600">
        {stat.label}
        <span className="text-ouro-700 ml-0.5">{stat.note}</span>
      </span>
    </motion.div>
  );
}

export default function WhyCellZen() {
  return (
    <section id="diferenciais" className="relative bg-washi-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
          {/* Título sticky à esquerda */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 flex gap-8">
              <div className="flex-1">
                <SectionHeader
                  kanjiNum="三"
                  num="03"
                  kicker="Por que a CellZen"
                  title="O reparo como ofício."
                  sub="Mais do que consertar celulares — entregamos a tranquilidade de quem confia o aparelho a quem trata isso como arte."
                />
                {/* Traço vertical de pincel */}
                <svg viewBox="0 0 10 160" className="w-2.5 h-36 mt-10 hidden lg:block" aria-hidden="true">
                  <path
                    fill="#1A7A82"
                    opacity="0.8"
                    d="M4.5 2 C 6.5 30, 7 60, 6 90 C 5.4 118, 4.4 140, 3.6 156 C 3.3 158, 5.8 158.4, 6.2 156.4 C 7.6 138, 8.6 114, 8.8 88 C 9 58, 8 28, 6.6 3 C 6.4 0.8, 4.6 0.4, 4.5 2 Z"
                  />
                </svg>
              </div>
              <Marginalia kanji="丁寧" romaji="teinei · esmero" className="pt-4" />
            </div>
          </div>

          {/* Lista editorial — explicitamente NÃO são cards */}
          <div className="lg:col-span-7">
            <ul>
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.li
                    key={feature.title}
                    className="group flex gap-5 sm:gap-7 items-start py-7 hairline-b first:hairline-t px-3 -mx-3 transition-colors duration-300 hover:bg-washi-200/70"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_INK }}
                  >
                    <span className="relative flex-shrink-0 pt-0.5" aria-hidden="true">
                      <span className="absolute inset-[-4px] rounded-full bg-aguada opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span
                        className="relative font-display font-bold text-ouro-700"
                        style={{ fontSize: '1.75rem', lineHeight: 1 }}
                      >
                        {feature.kanji}
                      </span>
                    </span>
                    <span className="flex-1">
                      <h3 className="font-display font-bold text-tinta-900 mb-1.5" style={{ fontSize: '1.25rem' }}>
                        {feature.title}
                      </h3>
                      <p className="font-sans text-tinta-900/75 text-[0.9375rem] leading-relaxed max-w-[52ch]">
                        {feature.description}
                      </p>
                    </span>
                    <span className="hidden md:block flex-shrink-0 pt-1">
                      <Icon size={38} />
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            {/* Stats como carimbos */}
            <div className="mt-14 flex flex-wrap items-start justify-center sm:justify-start gap-10 sm:gap-14">
              {STATS.map((stat, i) => (
                <StampStat key={stat.label} stat={stat} index={i} />
              ))}
            </div>

            <motion.div
              className="mt-8 space-y-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {FOOTNOTES.map((note) => (
                <p key={note} className="font-mono text-[0.6875rem] text-tinta-600/85 tracking-[0.06em]">
                  {note}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
