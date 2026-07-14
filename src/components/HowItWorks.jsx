import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl } from '../constants';
import {
  SectionHeader,
  BrushDivider,
  IconChat,
  IconMapPin,
  IconPhoneZen,
  WhatsGlyph,
  GOLD,
  WASHI,
  EASE_INK,
} from './motifs';

const STEPS = [
  {
    label: 'PASSO 01 · MENSAGEM',
    icon: IconChat,
    title: 'Chame no WhatsApp',
    description: 'Conte o que aconteceu com o aparelho. A gente responde e já adianta o orçamento.',
    micro: 'resposta em minutos',
  },
  {
    label: 'PASSO 02 · COLETA',
    icon: IconMapPin,
    title: 'Buscamos onde você estiver',
    description: 'Combinamos a retirada no endereço mais conveniente — casa, trabalho, onde for.',
    micro: 'qualquer bairro de Goiânia',
  },
  {
    label: 'PASSO 03 · DEVOLUÇÃO',
    icon: IconPhoneZen,
    title: 'Devolvido, testado, em paz',
    description: 'Reparo feito com peças de qualidade, testado por completo e devolvido em mãos.',
    micro: 'diagnóstico sem custo',
  },
];

/* A trilha que vira pincelada: do passo 1 ao 2 ela é circuito
   (ouro, dobras de 45°); do 2 ao 3 vira caligrafia (tinta). */
function TrailDesktop({ progress }) {
  const reduced = useReducedMotion();
  const goldLength = useTransform(progress, [0.05, 0.5], [0, 1]);
  const inkLength = useTransform(progress, [0.5, 0.95], [0, 1]);
  const brushLength = useTransform(progress, [0.72, 0.95], [0, 1]);
  const pad1 = useTransform(progress, [0.04, 0.08], [0, 1]);
  const pad2 = useTransform(progress, [0.48, 0.54], [0, 1]);
  const enso = useTransform(progress, [0.93, 1], [0, 1]);
  // prefers-reduced-motion: a trilha renderiza completa, estática
  const s = (value) => (reduced ? undefined : value);
  return (
    <svg viewBox="0 0 1200 64" className="w-full h-16" fill="none" aria-hidden="true">
      {/* Circuito: ouro, exato */}
      <motion.path
        d="M200 32 L 380 32 L 400 12 L 500 12 L 520 32 L 600 32"
        stroke={GOLD}
        strokeWidth="1.5"
        style={{ pathLength: s(goldLength) }}
      />
      {/* Caligrafia: tinta, orgânica… */}
      <motion.path
        d="M600 32 C 690 30, 740 44, 810 40 C 880 36, 930 24, 1000 30"
        stroke="#1A7A82"
        strokeWidth="4.5"
        strokeLinecap="round"
        style={{ pathLength: s(inkLength) }}
      />
      {/* …que engrossa como pincel de verdade no trecho final */}
      <motion.path
        d="M810 40 C 880 36, 930 24, 1000 30"
        stroke="#1A7A82"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.9"
        style={{ pathLength: s(brushLength) }}
      />
      {/* Pads que acendem na passagem do scroll */}
      <motion.g style={{ opacity: s(pad1) }}>
        <circle cx="200" cy="32" r="5" fill={GOLD} />
        <circle cx="200" cy="32" r="2.2" fill="#E6CE79" />
      </motion.g>
      <motion.g style={{ opacity: s(pad2) }}>
        <circle cx="600" cy="32" r="5" fill={GOLD} />
        <circle cx="600" cy="32" r="2.2" fill="#E6CE79" />
      </motion.g>
      {/* O mini-ensō que fecha: o ciclo do reparo concluído */}
      <motion.path
        d="M1014 22 A 13 13 0 1 0 1019 26 A 13.5 13.5 0 0 0 1014.5 22.2"
        stroke="#1A7A82"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ pathLength: s(enso) }}
      />
    </svg>
  );
}

function TrailMobile({ progress }) {
  const reduced = useReducedMotion();
  const goldScale = useTransform(progress, [0.05, 0.5], [0, 1]);
  const inkScale = useTransform(progress, [0.5, 0.95], [0, 1]);
  return (
    <div className="absolute left-[13px] top-[9px] bottom-0 w-4 sm:hidden" aria-hidden="true">
      <motion.span
        className="absolute left-[7.25px] top-0 h-[36%] w-[1.5px] origin-top"
        style={{ backgroundColor: GOLD, scaleY: reduced ? 1 : goldScale }}
      />
      <motion.span
        className="absolute left-[6px] top-[36%] h-[35%] w-[4px] origin-top rounded-full"
        style={{ backgroundColor: '#1A7A82', scaleY: reduced ? 1 : inkScale }}
      />
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  // Scrub dirigido pelo scroll — movimento controlado pelo usuário,
  // aceitável também sob prefers-reduced-motion.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.55'],
  });

  return (
    <section id="como-funciona" className="relative bg-washi-200 py-24 md:py-32">
      <BrushDivider className="absolute top-0 left-0 w-full h-6 -translate-y-1/2" opacity={0.25} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kanjiNum="二"
          num="02"
          kicker="Simples e rápido"
          title="Três traços. Um reparo."
          sub="Você não sai de casa: a gente busca, conserta e devolve."
        />

        {/* Trilha desktop */}
        <div className="hidden sm:block mt-16 -mb-4">
          <TrailDesktop progress={scrollYProgress} />
        </div>

        <div className="relative mt-10 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          <TrailMobile progress={scrollYProgress} />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                className="relative pl-12 sm:pl-0 sm:pt-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: EASE_INK }}
              >
                {/* Pad na linha (mobile) — centrado na trilha vertical */}
                <span
                  className="absolute left-[21px] top-1 sm:hidden w-[10px] h-[10px] rounded-full -translate-x-1/2"
                  style={{ backgroundColor: GOLD, boxShadow: `inset 0 0 0 2.5px ${GOLD}, inset 0 0 0 5px ${WASHI}` }}
                  aria-hidden="true"
                />

                <Icon size={44} className="mb-5" />
                <p className="mono-label text-ouro-700 mb-3">{step.label}</p>
                <h3
                  className="font-display font-bold text-tinta-900 mb-3"
                  style={{ fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)', lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-tinta-900/80 text-[0.9375rem] leading-relaxed mb-3 max-w-[36ch]">
                  {step.description}
                </p>
                <p className="font-mono text-[0.75rem] text-tinta-600">— {step.micro}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 flex flex-col sm:flex-row sm:items-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE_INK }}
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink text-base px-7 h-[52px] self-start"
          >
            <WhatsGlyph size={18} color="#E6CE79" />
            Começar agora
          </a>
          <p className="font-mono text-[0.75rem] text-tinta-600 leading-relaxed">
            SEG–SÁB · 08H–18H
            <br />
            RESPOSTA EM MINUTOS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
