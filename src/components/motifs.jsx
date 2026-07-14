import { motion, useReducedMotion } from 'framer-motion';

/* ════════════════════════════════════════════════════════════
   Biblioteca de motivos — as três matérias do sistema:
   tinta (teal, gesto humano) · ouro (geometria de máquina) ·
   shu (o carimbo, o compromisso).
   ════════════════════════════════════════════════════════════ */

export const INK = '#1A7A82';
export const INK_DARK = '#0F3A40';
export const GOLD = '#C9A227';
export const GOLD_LIGHT = '#E6CE79';
export const SHU = '#B23A2A';
export const WASHI = '#F8F4E9';

export const EASE_INK = [0.65, 0, 0.35, 1];
export const EASE_STAMP = [0.34, 1.4, 0.64, 1];

/* ── Pincelada-sublinhado: swash com espessura variável ────── */
export function BrushUnderline({ className = '', color = INK, delay = 0.4 }) {
  const reduced = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 240 20"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      initial={reduced ? false : { clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: EASE_INK }}
    >
      <path
        fill={color}
        d="M4 12.5 C 34 7.5, 76 5, 120 5.8 C 162 6.5, 202 8.8, 236 11.8 C 237.2 12, 237 12.9, 235.6 13 C 198 15.4, 152 16.4, 108 16 C 68 15.6, 32 15.2, 5.6 14.6 C 3.4 14.4, 2.8 13, 4 12.5 Z"
      />
      <path
        fill={color}
        opacity="0.55"
        d="M62 17.6 C 112 18.4, 172 18, 212 16.6 L 211.6 17.4 C 172 18.8, 114 19.2, 63 18.4 Z"
      />
    </motion.svg>
  );
}

/* ── Pincelada-divisor: traço longo com falhas de tinta ────── */
export function BrushDivider({ className = '', color = INK, opacity = 0.85 }) {
  return (
    <svg
      viewBox="0 0 900 24"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill={color} opacity={opacity}>
        <path d="M8 12.5 C 110 8.5, 280 6.8, 430 8 C 470 8.3, 510 8.9, 548 9.6 L 547 13.8 C 508 14.6, 466 15, 424 14.9 C 282 14.6, 124 14.4, 10 14.2 C 7.4 14.1, 6.8 13, 8 12.5 Z" />
        <path d="M566 9.9 C 680 11.2, 800 12.2, 890 12.1 C 892 12.1, 892.4 12.9, 890.4 13 C 800 14.8, 682 14.7, 567 13.9 Z" />
        <path
          opacity="0.5"
          d="M700 17.5 C 760 17 822 16.2 868 15.4 L 867.6 16.2 C 822 17.4 762 18.2 701 18.4 Z"
        />
      </g>
    </svg>
  );
}

/* ── Ensō: círculo zen que termina aberto ───────────────────
   Dois arcos sobrepostos simulam a pressão variável do pincel. */
export function Enso({
  className = '',
  color = INK,
  strokeWidth = 7,
  draw = false,
  duration = 1.4,
  delay = 0.3,
  onDrawn,
  opacity = 1,
}) {
  const reduced = useReducedMotion();
  const animate = draw && !reduced;
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <motion.path
        d="M130.8 15.4 A 90 90 0 1 0 177.9 55"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        opacity={opacity}
        initial={animate ? { pathLength: 0 } : false}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: EASE_INK }}
        onAnimationComplete={onDrawn}
      />
      <motion.path
        d="M43.5 36.5 A 90 90 0 0 0 60 175.5"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth * 1.3}
        strokeLinecap="round"
        opacity={opacity * 0.85}
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={{ pathLength: 1, opacity: opacity * 0.85 }}
        viewport={{ once: true }}
        transition={{ duration: duration * 0.6, delay: delay + duration * 0.22, ease: EASE_INK }}
      />
    </svg>
  );
}

/* ── Mini-ensō fechado: o ciclo do reparo concluído ─────────── */
export function EnsoClosed({ className = '', color = INK, strokeWidth = 8, draw = false }) {
  const reduced = useReducedMotion();
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <motion.path
        d="M27 5.5 A 19 19 0 1 0 33 9.2 A 19.5 19.5 0 0 0 27.5 5.6"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth / 2.4}
        strokeLinecap="round"
        initial={draw && !reduced ? { pathLength: 0 } : false}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: EASE_INK }}
      />
    </svg>
  );
}

/* ── Hanko: carimbo japonês em shu ──────────────────────────
   variant: 'square' (kanji), 'round' (inicial), 'rect' (texto)  */
export function Hanko({
  variant = 'square',
  char = '禅',
  text = '',
  className = '',
  size = 44,
  stamp = false,
  delay = 0,
}) {
  const reduced = useReducedMotion();
  const stampAnim =
    stamp && !reduced
      ? {
          initial: { scale: 1.35, rotate: -8, opacity: 0 },
          whileInView: { scale: 1, rotate: -2.5, opacity: 1 },
          viewport: { once: true, margin: '-40px' },
          transition: { duration: 0.18, delay, ease: EASE_STAMP },
        }
      : {
          initial: { rotate: -2.5, opacity: stamp ? 0 : 1 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.15, delay },
        };

  if (variant === 'round') {
    return (
      <motion.div
        {...stampAnim}
        className={`flex items-center justify-center rounded-full select-none ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: SHU,
          color: WASHI,
          fontFamily: "'Zen Old Mincho', Georgia, serif",
          fontWeight: 700,
          fontSize: size * 0.44,
        }}
        aria-hidden="true"
      >
        {char}
      </motion.div>
    );
  }

  if (variant === 'rect') {
    return (
      <motion.div
        {...stampAnim}
        className={`inline-flex items-center justify-center select-none px-3 py-1.5 ${className}`}
        style={{
          border: `2.5px solid ${SHU}`,
          color: SHU,
          borderRadius: 2,
          fontFamily: "'Zen Old Mincho', Georgia, serif",
          fontWeight: 700,
          fontSize: '0.9375rem',
          letterSpacing: '0.06em',
          whiteSpace: 'nowrap',
        }}
        aria-hidden="true"
      >
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      {...stampAnim}
      className={`flex items-center justify-center select-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: SHU,
        color: WASHI,
        borderRadius: 2,
        fontFamily: "'Zen Old Mincho', Georgia, serif",
        fontWeight: 700,
        fontSize: size * 0.55,
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      {char}
    </motion.div>
  );
}

/* ── Pad de circuito: círculo dourado com furo washi ────────── */
export function Pad({ cx, cy, r = 4, active = false }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={GOLD} />
      <circle cx={cx} cy={cy} r={r * 0.45} fill={active ? GOLD_LIGHT : WASHI} />
    </g>
  );
}

/* ── Marginália vertical: kanji + romanização ───────────────── */
export function Marginalia({ kanji, romaji, className = '' }) {
  return (
    <div
      className={`hidden min-[380px]:flex flex-col items-center gap-3 select-none ${className}`}
      aria-hidden="true"
    >
      <span
        className="vertical-rl font-display"
        style={{ color: '#7A6014', fontSize: '0.8125rem', letterSpacing: '0.5em', whiteSpace: 'nowrap' }}
      >
        {kanji}
      </span>
      <span className="w-px h-10" style={{ backgroundColor: 'rgba(122,96,20,0.35)' }} />
      <span
        className="vertical-rl font-mono"
        style={{ color: 'rgba(122,96,20,0.75)', fontSize: '0.5625rem', letterSpacing: '0.2em', whiteSpace: 'nowrap' }}
      >
        {romaji}
      </span>
    </div>
  );
}

/* ── Cabeçalho de seção: numeração dupla + kicker + H2 ─────── */
export function SectionHeader({ kanjiNum, num, kicker, title, sub, align = 'left' }) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${alignCls}`}>
      <motion.div
        className="flex items-baseline gap-3 mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: EASE_INK }}
      >
        <span className="relative inline-flex items-center justify-center" aria-hidden="true">
          <span className="absolute inset-[-6px] rounded-full bg-aguada" />
          <span
            className="relative font-display font-bold"
            style={{ color: '#7A6014', fontSize: '1.75rem', lineHeight: 1 }}
          >
            {kanjiNum}
          </span>
        </span>
        <span className="mono-label" style={{ color: '#7A6014' }}>
          / {num} — {kicker}
        </span>
      </motion.div>
      <motion.h2
        className="font-display font-bold text-tinta-900"
        style={{ fontSize: 'clamp(1.9rem, 5vw, 3.1rem)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.08, ease: EASE_INK }}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          className="font-sans text-tinta-900/75 mt-4 max-w-xl"
          style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.16, ease: EASE_INK }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/* ── Glifo do WhatsApp (Simple Icons, CC0) ──────────────────── */
export function WhatsGlyph({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <path
        fill={color}
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   Ícones autorais a traço — stroke 1.5, cantos vivos,
   um detalhe dourado cada.
   ════════════════════════════════════════════════════════════ */

const iconProps = {
  fill: 'none',
  stroke: INK,
  strokeWidth: 1.5,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
};

/* Tela com rachadura kintsugi */
export function IconScreen({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <rect x="7" y="2.5" width="14" height="23" rx="2" {...iconProps} />
      <line x1="11.5" y1="5" x2="16.5" y2="5" {...iconProps} strokeWidth="1.2" />
      <polyline
        points="10,9 13,13 12,16 15.5,19.5"
        fill="none"
        stroke={GOLD}
        strokeWidth="1.3"
        strokeLinecap="square"
      />
      <circle cx="15.5" cy="19.5" r="1.6" fill={GOLD} />
      <circle cx="15.5" cy="19.5" r="0.65" fill={WASHI} />
    </svg>
  );
}

/* Bateria */
export function IconBattery({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <rect x="3.5" y="9" width="19" height="10" {...iconProps} />
      <rect x="22.5" y="12" width="2.5" height="4" fill={INK} />
      <line x1="7" y1="12" x2="7" y2="16" stroke={GOLD} strokeWidth="2" />
      <line x1="11" y1="12" x2="11" y2="16" stroke={GOLD} strokeWidth="2" />
      <circle cx="17.5" cy="14" r="1.4" fill={GOLD} />
      <circle cx="17.5" cy="14" r="0.55" fill={WASHI} />
    </svg>
  );
}

/* Lente-ensō */
export function IconCamera({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <path d="M18.5 5.2 A 10 10 0 1 0 22.3 8.4" {...iconProps} strokeLinecap="round" />
      <circle cx="14" cy="14" r="4.5" {...iconProps} />
      <circle cx="14" cy="14" r="1.5" fill={GOLD} />
      <circle cx="14" cy="14" r="0.6" fill={WASHI} />
    </svg>
  );
}

/* Chip com trilhas */
export function IconBoard({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" {...iconProps} />
      <rect x="11.5" y="11.5" width="5" height="5" {...iconProps} strokeWidth="1.2" />
      <polyline points="20,11 24,11 24,7" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="square" />
      <circle cx="24" cy="7" r="1.5" fill={GOLD} />
      <circle cx="24" cy="7" r="0.6" fill={WASHI} />
      <line x1="4" y1="12" x2="8" y2="12" {...iconProps} strokeWidth="1.2" />
      <line x1="4" y1="16" x2="8" y2="16" {...iconProps} strokeWidth="1.2" />
      <line x1="12" y1="4" x2="12" y2="8" {...iconProps} strokeWidth="1.2" />
      <line x1="16" y1="20" x2="16" y2="24" {...iconProps} strokeWidth="1.2" />
    </svg>
  );
}

/* Conector USB-C */
export function IconConnector({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <rect x="6" y="11" width="16" height="6" rx="3" {...iconProps} />
      <line x1="10" y1="14" x2="18" y2="14" {...iconProps} strokeWidth="1.2" />
      <line x1="14" y1="4" x2="14" y2="8" stroke={GOLD} strokeWidth="1.3" />
      <circle cx="14" cy="8.8" r="1.4" fill={GOLD} />
      <circle cx="14" cy="8.8" r="0.55" fill={WASHI} />
      <line x1="14" y1="20" x2="14" y2="24" {...iconProps} strokeWidth="1.2" />
    </svg>
  );
}

/* Lupa sobre placa */
export function IconDiag({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7" {...iconProps} />
      <line x1="17.2" y1="17.2" x2="23" y2="23" {...iconProps} strokeWidth="2" />
      <polyline points="9,12 11,12 12,10 13.5,14 15,12" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
}

/* Balão de conversa */
export function IconChat({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <path d="M4.5 6.5 H 23.5 V 19.5 H 12 L 6.5 24 V 19.5 H 4.5 Z" {...iconProps} />
      <circle cx="10.5" cy="13" r="1" fill={INK} />
      <circle cx="14.5" cy="13" r="1" fill={INK} />
      <circle cx="18.5" cy="13" r="1" fill={GOLD} />
    </svg>
  );
}

/* Pin de coleta sobre mapa */
export function IconMapPin({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <path d="M4 8 L 11 5.5 L 17 8 L 24 5.5 V 20 L 17 22.5 L 11 20 L 4 22.5 Z" {...iconProps} strokeWidth="1.2" />
      <path d="M14 8.5 c -2.6 0 -4.2 1.9 -4.2 4 0 2.8 4.2 7 4.2 7 s 4.2 -4.2 4.2 -7 c 0 -2.1 -1.6 -4 -4.2 -4 Z" fill={WASHI} {...iconProps} />
      <circle cx="14" cy="12.6" r="1.5" fill={GOLD} />
      <circle cx="14" cy="12.6" r="0.6" fill={WASHI} />
    </svg>
  );
}

/* Telefone em paz — mini-ensō */
export function IconPhoneZen({ size = 28, className = '' }) {
  return (
    <svg viewBox="0 0 28 28" width={size} height={size} className={className} aria-hidden="true">
      <rect x="8.5" y="3" width="11" height="19" rx="1.5" {...iconProps} />
      <path d="M16.2 25 A 3.4 3.4 0 1 0 17.6 25.6" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="12" y1="5.5" x2="16" y2="5.5" {...iconProps} strokeWidth="1.1" />
    </svg>
  );
}

/* Escudo a traço */
export function IconShield({ size = 24, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 2.5 L 20 5.5 V 11 C 20 16.5 16.5 20 12 21.8 C 7.5 20 4 16.5 4 11 V 5.5 Z" {...iconProps} />
      <polyline points="8.5,11.5 11,14 15.5,9" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

/* Etiqueta de preço */
export function IconTag({ size = 24, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <path d="M3 3 H 11 L 21 13 L 13 21 L 3 11 Z" {...iconProps} />
      <circle cx="8" cy="8" r="1.6" fill={GOLD} />
      <circle cx="8" cy="8" r="0.65" fill={WASHI} />
    </svg>
  );
}

/* Robô Android geométrico a traço */
export function IconAndroid({ size = 24, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <path d="M5 15.5 a 7 7 0 0 1 14 0 Z" {...iconProps} />
      <line x1="8" y1="9.5" x2="6.5" y2="6.5" {...iconProps} strokeWidth="1.2" />
      <line x1="16" y1="9.5" x2="17.5" y2="6.5" {...iconProps} strokeWidth="1.2" />
      <circle cx="9.5" cy="13" r="0.9" fill={GOLD} />
      <circle cx="14.5" cy="13" r="0.9" fill={GOLD} />
      <line x1="7" y1="18.5" x2="17" y2="18.5" {...iconProps} strokeWidth="1.2" />
    </svg>
  );
}

/* ── Frase-haiku nos respiros de ma ─────────────────────────── */
export function Haiku({ children }) {
  return (
    <div className="py-20 md:py-28 flex justify-center px-6">
      <motion.p
        className="font-display text-tinta-900 text-center"
        style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.75rem)', lineHeight: 1.7 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: EASE_INK }}
      >
        {children}
      </motion.p>
    </div>
  );
}
