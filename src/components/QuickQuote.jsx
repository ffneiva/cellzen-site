import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { getWhatsAppUrl, getOsNumber } from '../constants';
import { SectionHeader, Hanko, WhatsGlyph, GOLD, EASE_INK } from './motifs';

/* Borda superior com deckle — recorte irregular de papel artesanal */
const DECKLE =
  'polygon(0 7px, 4% 3px, 9% 8px, 15% 2px, 22% 6px, 29% 3px, 36% 8px, 44% 4px, 52% 7px, 60% 2px, 68% 6px, 76% 3px, 84% 7px, 92% 4px, 100% 8px, 100% 100%, 0 100%)';

/* Canto de circuito dourado para a carta */
function CircuitCorner({ className, flip = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute w-10 h-10 pointer-events-none ${className}`} style={{ transform: flip }} aria-hidden="true">
      <polyline points="2,26 2,10 10,2 26,2" fill="none" stroke={GOLD} strokeWidth="1.25" />
      <circle cx="2" cy="30" r="3" fill={GOLD} />
      <circle cx="2" cy="30" r="1.3" fill="#F1EADA" />
    </svg>
  );
}

function Field({ label, name, value, onChange, placeholder, textarea = false, inputProps = {} }) {
  const InputTag = textarea ? 'textarea' : 'input';
  return (
    <div>
      <label htmlFor={`quote-${name}`} className="mono-label text-tinta-600 block mb-1">
        {label}
      </label>
      <div className="relative">
        <InputTag
          id={`quote-${name}`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows={textarea ? 3 : undefined}
          className="input-letter peer text-[0.9375rem] resize-none"
          {...inputProps}
        />
        {/* A linha vira pincelada no foco… */}
        <span
          className="absolute left-0 right-0 bottom-0 h-[2px] bg-tinta-700 origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-[240ms] ease-ink pointer-events-none"
          aria-hidden="true"
        />
        {/* …e o pad dourado acende na ponta */}
        <span
          className="absolute -right-1 bottom-[-3px] w-2 h-2 rounded-full scale-0 peer-focus:scale-100 transition-transform duration-150 pointer-events-none"
          style={{ backgroundColor: GOLD, boxShadow: 'inset 0 0 0 2.5px #C9A227, inset 0 0 0 5px #E6CE79' }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* Trecho da carta: valor preenchido ou lacuna pontilhada */
function Blank({ value, hint }) {
  if (value.trim()) {
    return <span className="text-tinta-900 font-bold">{value.trim()}</span>;
  }
  return (
    <span className="text-tinta-900/60" style={{ borderBottom: '1.5px dashed #C9A227' }}>
      {hint}
    </span>
  );
}

function LetterText({ form }) {
  return (
    <>
      Olá! Meu nome é <Blank value={form.name} hint="seu nome" />. Tenho um{' '}
      <Blank value={form.device} hint="modelo do aparelho" /> com o seguinte problema:{' '}
      <Blank value={form.problem} hint="o que aconteceu" />. Gostaria de um orçamento.
    </>
  );
}

/* O espaço do selo: carimba quando a carta fica válida */
function SealSpot({ isValid }) {
  return (
    <div className="relative w-32 h-16 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isValid ? (
          <Hanko key="stamp" variant="rect" text="CellZen · 承認" stamp />
        ) : (
          <motion.span
            key="empty"
            className="mono-label text-tinta-600/75 w-full h-full flex items-center justify-center"
            style={{ border: '1.5px dashed #DCCFB0', borderRadius: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            selo
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function QuickQuote() {
  const [form, setForm] = useState({ name: '', device: '', problem: '' });
  const [pressed, setPressed] = useState(false);
  const [formFocused, setFormFocused] = useState(false);
  const [peekExpanded, setPeekExpanded] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  // A prévia fixa só existe enquanto a seção está na tela
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isValid = Boolean(form.name.trim() && form.device.trim() && form.problem.trim());
  const hasContent = Boolean(form.name || form.device || form.problem);

  const message = `Olá! Meu nome é ${form.name.trim()}. Tenho um ${form.device.trim()} com o seguinte problema: ${form.problem.trim()}. Gostaria de um orçamento.`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || pressed) return;
    // Abertura síncrona no gesto do usuário (popup blockers e WebViews);
    // a animação de "carta pressionada" roda em paralelo. Nota: passar
    // 'noopener' nas features faz window.open retornar null sempre —
    // por isso o opener é anulado manualmente.
    const url = getWhatsAppUrl(message);
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
    setPressed(true);
    resetTimer.current = setTimeout(() => setPressed(false), 400);
  };

  // A "via do cliente" espia na base da tela no mobile enquanto se escreve
  const showPeek = sectionInView && (formFocused || hasContent);

  return (
    <section id="orcamento" ref={sectionRef} className="relative bg-washi-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kanjiNum="四"
          num="04"
          kicker="Orçamento em 1 minuto · sem compromisso"
          title="Escreva sua carta. Nós respondemos no WhatsApp."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Formulário — folha de papel */}
          <motion.div
            className="lg:col-span-6"
            style={{
              filter:
                'drop-shadow(0 1px 2px rgba(63,52,24,0.12)) drop-shadow(0 8px 24px rgba(63,52,24,0.12))',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE_INK }}
          >
            <form
              onSubmit={handleSubmit}
              onFocus={() => setFormFocused(true)}
              onBlur={() => setFormFocused(false)}
              className="bg-washi-100 px-7 sm:px-9 pt-10 pb-9 space-y-7"
              style={{ clipPath: DECKLE, transform: 'rotate(-0.4deg)' }}
            >
              <Field
                label="Seu nome"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ex: Ana Souza"
                inputProps={{ autoComplete: 'name', autoCapitalize: 'words', enterKeyHint: 'next' }}
              />
              <Field
                label="Modelo do aparelho"
                name="device"
                value={form.device}
                onChange={handleChange}
                placeholder="Ex: Samsung Galaxy A54, Moto G84…"
                inputProps={{ autoComplete: 'off', enterKeyHint: 'next' }}
              />
              <Field
                label="O que aconteceu"
                name="problem"
                value={form.problem}
                onChange={handleChange}
                placeholder="Ex: a tela trincou no canto e apareceram manchas…"
                textarea
                inputProps={{ autoCapitalize: 'sentences' }}
              />

              <motion.button
                type="submit"
                className="btn-ink w-full h-[52px] text-base"
                style={
                  !isValid
                    ? { backgroundColor: '#EAE1CC', color: 'rgba(15,58,64,0.55)' }
                    : undefined
                }
                animate={pressed ? { y: 2, scale: 0.995 } : { y: 0, scale: 1 }}
                transition={{ duration: 0.15 }}
              >
                <WhatsGlyph size={18} color={isValid ? '#E6CE79' : 'rgba(15,58,64,0.45)'} />
                Enviar pelo WhatsApp
              </motion.button>

              <p className="font-mono text-[0.6875rem] text-tinta-600 tracking-[0.06em] !mt-4">
                Você será redirecionado ao WhatsApp com a carta pronta.
              </p>
            </form>
          </motion.div>

          {/* A carta ao vivo — folha fixa no desktop */}
          <motion.div
            className="hidden lg:block lg:col-span-6 relative bg-washi-100 border border-washi-300 rounded-[2px] px-10 py-9 shadow-paper-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE_INK }}
          >
            <CircuitCorner className="top-0 left-0" />
            <CircuitCorner className="top-0 right-0" flip="scaleX(-1)" />
            <CircuitCorner className="bottom-0 right-0" flip="scale(-1)" />
            <CircuitCorner className="bottom-0 left-0" flip="scaleY(-1)" />

            <div className="flex items-center justify-between mb-7">
              <span className="mono-label text-ouro-700">{getOsNumber()}</span>
              <span className="mono-label text-tinta-600">Prévia da mensagem</span>
            </div>

            <p className="font-display text-tinta-900" style={{ fontSize: '1.125rem', lineHeight: 1.9 }}>
              <LetterText form={form} />
            </p>

            <div className="mt-9 flex justify-end">
              <SealSpot isValid={isValid} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: a carta espia na base da tela enquanto o usuário escreve */}
      <AnimatePresence>
        {showPeek && (
          <motion.div
            className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-washi-100 shadow-paper"
            style={{ borderTop: `1.5px solid ${GOLD}` }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.32, ease: EASE_INK }}
          >
            <button
              type="button"
              className="w-full flex items-center justify-between px-5 pt-3 pb-2"
              onClick={() => setPeekExpanded((v) => !v)}
              aria-expanded={peekExpanded}
            >
              <span className="mono-label text-ouro-700">{getOsNumber()} · Prévia</span>
              <span className="flex items-center gap-3">
                {/* Selo compacto quando a carta fica válida */}
                {isValid && !peekExpanded && (
                  <span
                    className="font-display font-bold text-[0.6875rem] px-1.5 py-0.5 select-none"
                    style={{ border: '1.5px solid #B23A2A', color: '#B23A2A', borderRadius: 2, transform: 'rotate(-2deg)' }}
                    aria-hidden="true"
                  >
                    承認
                  </span>
                )}
                <ChevronUp
                  size={16}
                  className={`text-tinta-600 transition-transform duration-[240ms] ${peekExpanded ? 'rotate-180' : ''}`}
                />
              </span>
            </button>
            <div
              className="px-5 overflow-hidden transition-[max-height] duration-[320ms] ease-ink"
              style={{ maxHeight: peekExpanded ? '50vh' : '3.4rem' }}
            >
              <p
                className="font-display text-tinta-900 pb-3"
                style={{ fontSize: '0.9375rem', lineHeight: 1.8 }}
              >
                <LetterText form={form} />
              </p>
              {peekExpanded && (
                <div className="flex justify-end pb-4">
                  <SealSpot isValid={isValid} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
