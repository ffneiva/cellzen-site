import { Instagram, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS } from '../constants';
import { WhatsGlyph, Hanko, GOLD } from './motifs';

const NAV = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-tinta-900 pt-16 pb-8">
      {/* Hairline dourada com pads — herda a trilha da seção anterior */}
      <svg
        className="absolute top-0 left-0 w-full h-4 -translate-y-1/2"
        viewBox="0 0 1200 16"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <line x1="0" y1="8" x2="1200" y2="8" stroke={GOLD} strokeWidth="1" />
      </svg>
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 flex justify-center gap-[28%]" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="relative inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: GOLD }}>
            <span className="absolute inset-[3px] rounded-full bg-tinta-900" />
          </span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Marca */}
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-5">
              <img
                src="/assets/logo_transparent.png"
                alt=""
                className="w-10 h-10"
                style={{ filter: 'brightness(1.4) saturate(1.1)' }}
              />
              <span className="font-display font-bold text-xl text-washi-50">
                Cell<span className="text-ouro-300">Zen</span>
              </span>
            </a>
            <p className="font-display text-washi-50/85 text-[0.9375rem] leading-relaxed mb-5">
              {BUSINESS.tagline}
            </p>
            <Hanko variant="square" char="禅" size={34} />
          </div>

          {/* Navegação */}
          <div>
            <p className="mono-label text-ouro-300 mb-5">Navegação</p>
            <ul className="space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-washi-50/70 hover:text-washi-50 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="mono-label text-ouro-300 mb-5">Contato</p>
            <ul className="space-y-3.5 font-mono text-[0.8125rem] tracking-[0.03em]">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-washi-50/70 hover:text-washi-50 transition-colors duration-200"
                >
                  <WhatsGlyph size={14} color="#E6CE79" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-washi-50/70 hover:text-washi-50 transition-colors duration-200"
                >
                  <Instagram size={14} style={{ color: '#E6CE79' }} />
                  {BUSINESS.instagramHandle}
                </a>
              </li>
              <li className="text-washi-50/70">Seg–Sáb · 08h–18h</li>
              <li>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-washi-50/70 hover:text-washi-50 transition-colors duration-200"
                >
                  {BUSINESS.addressShort}
                  <ExternalLink size={11} className="inline ml-1.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mapa como gravura */}
          <div>
            <p className="mono-label text-ouro-300 mb-5">Localização</p>
            <div className="relative p-1" style={{ border: '1px solid rgba(201,162,39,0.4)' }}>
              {/* Pads nos 4 cantos da moldura */}
              {['-top-1 -left-1', '-top-1 -right-1', '-bottom-1 -left-1', '-bottom-1 -right-1'].map(
                (pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} w-2 h-2 rounded-full`}
                    style={{ backgroundColor: GOLD }}
                    aria-hidden="true"
                  >
                    <span className="absolute inset-[2.5px] rounded-full bg-tinta-900" />
                  </span>
                )
              )}
              <iframe
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="150"
                style={{ border: 0, filter: 'grayscale(1) sepia(0.25) brightness(0.92)', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atendimento CellZen em Goiânia e região"
              />
            </div>
            <p className="font-mono text-[0.625rem] text-washi-50/70 tracking-[0.1em] mt-2.5">
              -16.7084, -49.2918 · GOIÂNIA
            </p>
          </div>
        </div>

        {/* Base */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(248,244,233,0.1)' }}
        >
          <p className="font-mono text-[0.6875rem] text-washi-50/70 tracking-[0.06em]">
            © {year} CellZen · Goiânia — feito com esmero · <span aria-hidden="true">丁寧</span>
          </p>
          <p className="font-mono text-[0.6875rem] text-washi-50/70 tracking-[0.04em] text-center sm:text-right">
            Composto em Zen Old Mincho &amp; Zen Kaku Gothic New ·{' '}
            <a
              href="https://linkedin.com/in/ffneiva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-washi-50/80 hover:text-washi-50 transition-colors duration-200"
            >
              Felipe Neiva
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
