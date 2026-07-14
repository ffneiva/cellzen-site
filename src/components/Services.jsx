import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';
import {
  SectionHeader,
  BrushDivider,
  IconScreen,
  IconBattery,
  IconCamera,
  IconBoard,
  IconConnector,
  IconDiag,
  EASE_INK,
} from './motifs';

const SERVICES = [
  {
    kanji: '一',
    code: 'SRV-01',
    icon: IconScreen,
    title: 'Troca de tela',
    description: 'Tela quebrada, manchada ou sem toque? Peças de alta qualidade para qualquer modelo Android.',
    micro: 'GARANTIA · 90 DIAS',
    message: 'Olá! Preciso trocar a tela do meu celular. Pode me passar um orçamento?',
  },
  {
    kanji: '二',
    code: 'SRV-02',
    icon: IconBattery,
    title: 'Troca de bateria',
    description: 'Autonomia de volta. Baterias premium que acompanham o seu dia inteiro.',
    micro: 'PRAZO · MESMO DIA*',
    message: 'Olá! A bateria do meu celular não dura mais. Pode me passar um orçamento?',
  },
  {
    kanji: '三',
    code: 'SRV-03',
    icon: IconCamera,
    title: 'Reparo de câmera',
    description: 'Câmera preta ou desfocada? Troca do módulo com precisão cirúrgica.',
    micro: 'GARANTIA · 90 DIAS',
    message: 'Olá! A câmera do meu celular está com problema. Pode me passar um orçamento?',
  },
  {
    kanji: '四',
    code: 'SRV-04',
    icon: IconBoard,
    title: 'Conserto de placa',
    description: 'Desligamentos ou falhas profundas? Vamos direto à raiz do problema.',
    micro: 'DIAGNÓSTICO INCLUSO',
    message: 'Olá! Meu celular está com problema na placa. Pode me passar um orçamento?',
  },
  {
    kanji: '五',
    code: 'SRV-05',
    icon: IconConnector,
    title: 'Troca de conector',
    description: 'Carga lenta ou conector frouxo? Resolvemos rápido, sem gambiarra.',
    micro: 'PRAZO · MESMO DIA*',
    message: 'Olá! O conector de carga do meu celular está com defeito. Pode me passar um orçamento?',
  },
];

const DIAG = {
  kanji: '六',
  code: 'SRV-06',
  title: 'Diagnóstico gratuito',
  description: 'Não sabe o que está errado? Fazemos a análise completa sem custo — você só paga se consertar.',
  message: 'Olá! Meu celular está com problema e eu gostaria de um diagnóstico gratuito.',
};

function ServiceCard({ service, index, offset }) {
  const Icon = service.icon;
  // O offset assimétrico vive num wrapper próprio: o Framer Motion
  // sobrescreve o transform do elemento que ele anima.
  return (
    <div className={offset}>
      <motion.a
        href={getWhatsAppUrl(service.message)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full bg-washi-100 border border-washi-300 rounded-[2px] p-7 transition-all duration-300 hover:bg-aguada hover:shadow-paper-sm"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.07, ease: EASE_INK }}
      >
      <div className="flex items-start justify-between mb-5">
        <span className="flex items-baseline gap-2">
          <span className="font-display font-bold text-ouro-700" style={{ fontSize: '1.125rem' }} aria-hidden="true">
            {service.kanji}
          </span>
          <span className="mono-label text-ouro-700">· {service.code}</span>
        </span>
        <Icon size={30} />
      </div>

      <h3 className="relative self-start font-display font-bold text-tinta-900 mb-2" style={{ fontSize: '1.3125rem' }}>
        {service.title}
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
      </h3>
      <p className="font-sans text-tinta-900/80 text-[0.9375rem] leading-relaxed flex-1">
        {service.description}
      </p>

      <div className="mt-6 pt-3 hairline-t flex items-center justify-between">
        <span className="mono-label text-tinta-600">{service.micro}</span>
        <ArrowRight
          size={14}
          className="text-tinta-700 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-[240ms]"
        />
      </div>
      </motion.a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative bg-washi-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
          <SectionHeader
            kanjiNum="一"
            num="01"
            kicker="O que fazemos"
            title="Seis ofícios, um padrão."
          />
          <motion.p
            className="font-sans text-tinta-900/70 text-[0.9375rem] leading-relaxed max-w-xs lg:text-right lg:pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cada card abre uma conversa no WhatsApp já com o seu problema descrito.
          </motion.p>
        </div>

        <BrushDivider className="w-full max-w-md h-5 mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.code} service={s} index={i} offset={i === 1 ? 'lg:translate-y-8' : ''} />
          ))}
          {SERVICES.slice(3).map((s, i) => (
            <ServiceCard key={s.code} service={s} index={i + 3} offset={i === 1 ? 'lg:translate-y-8' : ''} />
          ))}

          {/* Card invertido: o diagnóstico gratuito é a porta de entrada */}
          <motion.a
            href={getWhatsAppUrl(DIAG.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-tinta-900 rounded-[2px] p-7 overflow-hidden transition-colors duration-300 hover:bg-tinta-600"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE_INK }}
          >
            {/* Marca d'água 無料 (gratuito) */}
            <span
              className="absolute -right-3 -bottom-6 font-display font-bold select-none pointer-events-none vertical-rl"
              style={{ color: 'rgba(248,244,233,0.07)', fontSize: '5.5rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              無料
            </span>
            {/* Trilha dourada no canto */}
            <svg className="absolute top-0 right-0 w-24 h-24 pointer-events-none" viewBox="0 0 96 96" aria-hidden="true">
              <polyline points="96,20 60,20 44,36 44,72" fill="none" stroke="#C9A227" strokeWidth="1.25" />
              <circle cx="44" cy="76" r="4" fill="#C9A227" />
              <circle cx="44" cy="76" r="1.8" fill="#0F3A40" />
            </svg>

            <div className="flex items-start justify-between mb-5">
              <span className="flex items-baseline gap-2">
                <span className="font-display font-bold text-ouro-300" style={{ fontSize: '1.125rem' }} aria-hidden="true">
                  {DIAG.kanji}
                </span>
                <span className="mono-label text-ouro-300">· {DIAG.code}</span>
              </span>
              <IconDiag size={30} className="[&_circle]:!stroke-washi-50 [&_line]:!stroke-washi-50" />
            </div>

            <h3 className="font-display font-bold text-washi-50 mb-2" style={{ fontSize: '1.3125rem' }}>
              {DIAG.title}
            </h3>
            <p className="font-sans text-washi-50/85 text-[0.9375rem] leading-relaxed flex-1 relative z-10">
              {DIAG.description}
            </p>

            <div className="mt-6 pt-3 border-t border-washi-50/15 flex items-center justify-between relative z-10">
              <span className="mono-label text-ouro-300">Começar pelo diagnóstico</span>
              <ArrowRight size={14} className="text-ouro-300 transition-transform duration-[240ms] group-hover:translate-x-1" />
            </div>
          </motion.a>
        </div>

        <motion.p
          className="font-mono text-[0.6875rem] text-tinta-600 tracking-[0.08em] mt-10 lg:mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          * prazo típico para peças em estoque. Confirmamos tudo antes, pelo WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}
