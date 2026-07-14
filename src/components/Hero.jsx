import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';
import { BrushUnderline, Enso, Hanko, WhatsGlyph, EASE_INK, GOLD, WASHI } from './motifs';

const BRANDS = ['Samsung', 'Motorola', 'Xiaomi', 'Realme', 'LG', 'Asus', 'OnePlus'];

/* Smartphone em desenho técnico: contorno a traço, rachadura
   kintsugi que deságua em trilhas de circuito, linhas de cota. */
function PhoneDrawing() {
  const reduced = useReducedMotion();
  const ink = { fill: 'none', stroke: '#1A7A82', strokeWidth: 1.5 };
  const gold = { fill: 'none', stroke: GOLD, strokeWidth: 1.25, strokeLinejoin: 'miter' };
  return (
    <svg viewBox="0 0 300 500" className="w-full h-full" aria-hidden="true">
      {/* Cota vertical (JIS): linha + terminações oblíquas de 45° */}
      <g stroke="#7A6014" strokeWidth="0.75" opacity="0.8">
        <line x1="20" y1="24" x2="20" y2="464" />
        <line x1="16" y1="28" x2="24" y2="20" />
        <line x1="16" y1="468" x2="24" y2="460" />
        <line x1="20" y1="24" x2="40" y2="24" strokeDasharray="2 3" />
        <line x1="20" y1="464" x2="40" y2="464" strokeDasharray="2 3" />
      </g>
      <text
        x="12"
        y="244"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="9"
        fill="#7A6014"
        transform="rotate(-90 12 244)"
        textAnchor="middle"
        letterSpacing="1"
      >
        158.2 mm
      </text>

      {/* Corpo do aparelho */}
      <motion.rect
        x="44"
        y="24"
        width="196"
        height="440"
        rx="22"
        {...ink}
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.15, ease: EASE_INK }}
      />
      {/* Tela */}
      <rect x="56" y="58" width="172" height="372" rx="6" {...ink} strokeWidth="0.9" opacity="0.55" />
      {/* Alto-falante + câmera */}
      <line x1="122" y1="41" x2="152" y2="41" {...ink} strokeWidth="1.2" />
      <circle cx="166" cy="41" r="2.2" {...ink} strokeWidth="1.2" />

      {/* Rachadura kintsugi: a fenda selada a ouro… */}
      <motion.polyline
        points="118,128 136,178 126,222 148,278"
        {...gold}
        strokeWidth="1.5"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.0, ease: EASE_INK }}
      />
      <motion.polyline
        points="136,178 158,196"
        {...gold}
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.3, delay: 1.5, ease: EASE_INK }}
      />

      {/* …que se disciplina em trilhas de circuito */}
      <motion.g
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        {/* Trilha 1: sai pela direita */}
        <polyline points="148,278 186,278 202,294 262,294" {...gold} />
        <circle cx="266" cy="294" r="4" fill={GOLD} />
        <circle cx="266" cy="294" r="1.8" fill={WASHI} />
        {/* Trilha 2: do galho, sobe e sai pela direita */}
        <polyline points="158,196 190,196 206,180 262,180" {...gold} />
        <circle cx="266" cy="180" r="4" fill={GOLD} />
        <circle cx="266" cy="180" r="1.8" fill={WASHI} />
        {/* Trilha 3: desce e mergulha na base */}
        <polyline points="126,222 112,236 112,330 134,352 134,478" {...gold} />
        <circle cx="134" cy="482" r="4" fill={GOLD} />
        <circle cx="134" cy="482" r="1.8" fill={WASHI} />
      </motion.g>
    </svg>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const fadeUp = (delay) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: EASE_INK },
  });

  return (
    <section id="inicio" className="relative flex flex-col bg-washi-50 overflow-hidden">
      <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 lg:pt-36 pb-14">
        {/* Marginália vertical na borda direita */}
        <div
          className="hidden xl:flex absolute right-2 top-40 flex-col items-center gap-3 select-none"
          aria-hidden="true"
        >
          <span
            className="vertical-rl font-display"
            style={{ color: '#7A6014', fontSize: '0.8125rem', letterSpacing: '0.5em', whiteSpace: 'nowrap' }}
          >
            安心
          </span>
          <span className="w-px h-10 bg-ouro-700/35" />
          <span
            className="vertical-rl font-mono"
            style={{ color: 'rgba(122,96,20,0.75)', fontSize: '0.5625rem', letterSpacing: '0.2em', whiteSpace: 'nowrap' }}
          >
            an-shin · tranquilidade
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          {/* Texto — colunas 1–6 */}
          <div className="lg:col-span-6">
            <motion.p className="mono-label text-ouro-700 mb-6" {...fadeUp(0.1)}>
              Goiânia · GO — Assistência Android
            </motion.p>

            <motion.h1
              className="font-display font-bold text-tinta-900 mb-7"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
              }}
              {...fadeUp(0.22)}
            >
              A{' '}
              <span className="relative inline-block">
                arte
                <BrushUnderline
                  className="absolute left-[-4%] right-[-4%] bottom-[-0.12em] w-[108%] h-[0.22em]"
                  delay={0.9}
                />
              </span>{' '}
              de consertar o seu Android.
            </motion.h1>

            <motion.p
              className="font-sans text-tinta-900/80 mb-4 max-w-[46ch]"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
              {...fadeUp(0.38)}
            >
              Quebrou? A gente busca, conserta e devolve. Diagnóstico gratuito, coleta em
              qualquer bairro de Goiânia e a calma de quem trata cada reparo como ofício.
            </motion.p>

            <motion.p className="font-mono text-[0.75rem] text-tinta-600 mb-10" {...fadeUp(0.46)}>
              — Seu celular, nossa missão.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row sm:items-center gap-4" {...fadeUp(0.54)}>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink text-base px-7 h-[52px]"
              >
                <WhatsGlyph size={18} color="#E6CE79" />
                Pedir orçamento no WhatsApp
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 font-sans font-medium text-tinta-700 hover:text-tinta-600 px-2 py-3 transition-colors duration-200"
              >
                <span className="relative">
                  Ver serviços
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[240ms] ease-ink"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 240 20" className="w-full h-full" preserveAspectRatio="none">
                      <path
                        fill="#1A7A82"
                        d="M4 8 C 60 4, 140 3, 236 7 C 237 7.4, 237 8.6, 235 9 C 150 13, 60 13, 5 11 C 3 10.6, 3 8.6, 4 8 Z"
                      />
                    </svg>
                  </span>
                </span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Arte — colunas 7–12: ensō + smartphone a traço + hanko */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end lg:pr-8">
            <div className="relative w-[17rem] sm:w-[19rem] lg:w-[21rem]">
              {/* Ensō que se desenha ao redor */}
              <Enso
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square"
                draw
                duration={1.4}
                delay={0.3}
                strokeWidth={5.5}
                opacity={0.9}
              />
              <div className="relative aspect-[300/500]">
                <PhoneDrawing />
              </div>
              {/* O selo que carimba quando o traço termina */}
              <div className="absolute -bottom-3 -right-2">
                {/* Respingo radial do carimbo */}
                {!reduced && (
                  <motion.svg
                    viewBox="0 0 80 80"
                    className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.6, 1.15, 1.25] }}
                    transition={{ duration: 0.24, delay: 1.93, times: [0, 0.4, 1] }}
                    aria-hidden="true"
                  >
                    {[15, 60, 105, 150, 195, 240, 285, 330].map((deg) => (
                      <circle
                        key={deg}
                        cx={40 + 34 * Math.cos((deg * Math.PI) / 180)}
                        cy={40 + 34 * Math.sin((deg * Math.PI) / 180)}
                        r={deg % 90 === 15 ? 1.6 : 1.1}
                        fill="#B23A2A"
                      />
                    ))}
                  </motion.svg>
                )}
                <Hanko variant="square" char="禅" size={46} stamp delay={1.75} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marcas atendidas — linha tipográfica estática */}
      <motion.div
        className="relative hairline-t py-5"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="mono-label text-tinta-600 mr-2">Marcas que atendemos</span>
          {BRANDS.map((brand, i) => (
            <span key={brand} className="flex items-center gap-4">
              <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-tinta-600">
                {brand}
              </span>
              {i < BRANDS.length - 1 && (
                <span className="inline-block w-[3px] h-[3px] rounded-full bg-ouro-500" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
