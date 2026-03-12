import { Instagram, MessageCircle, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS } from '../constants';

const quickLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 border-t"
      style={{ backgroundColor: '#060c16', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo_transparent.png"
                alt="CellZen"
                className="w-9 h-9"
              />
              <span className="font-outfit font-bold text-xl text-white">
                Cell<span style={{ color: '#1A7A82' }}>Zen</span>
              </span>
            </a>
            <p
              className="font-inter text-sm leading-relaxed mb-5"
              style={{ color: '#5a6a7a' }}
            >
              {BUSINESS.description}
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(228,64,95,0.12)',
                  border: '1px solid rgba(228,64,95,0.24)',
                  color: '#E4405F',
                  boxShadow: '0 10px 24px rgba(228,64,95,0.12)',
                }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.2)',
                  color: '#25D366',
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-outfit font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ color: '#1A7A82' }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm transition-colors duration-200"
                    style={{ color: '#5a6a7a' }}
                    onMouseEnter={(e) => (e.target.style.color = '#c0ccd8')}
                    onMouseLeave={(e) => (e.target.style.color = '#5a6a7a')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-outfit font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ color: '#1A7A82' }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MessageCircle
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#25D366' }}
                />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm transition-colors duration-200"
                  style={{ color: '#5a6a7a' }}
                  onMouseEnter={(e) => (e.target.style.color = '#c0ccd8')}
                  onMouseLeave={(e) => (e.target.style.color = '#5a6a7a')}
                >
                  {BUSINESS.phone}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Instagram
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#E4405F' }}
                />
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm transition-colors duration-200"
                  style={{ color: '#5a6a7a' }}
                  onMouseEnter={(e) => (e.target.style.color = '#c0ccd8')}
                  onMouseLeave={(e) => (e.target.style.color = '#5a6a7a')}
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#C9A227' }}
                />
                <span
                  className="font-inter text-sm"
                  style={{ color: '#5a6a7a' }}
                >
                  {BUSINESS.hours}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#1A7A82' }}
                />
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm transition-colors duration-200"
                  style={{ color: '#5a6a7a' }}
                  onMouseEnter={(e) => (e.target.style.color = '#c0ccd8')}
                  onMouseLeave={(e) => (e.target.style.color = '#5a6a7a')}
                >
                  {BUSINESS.address}
                  <ExternalLink size={11} className="inline ml-1 opacity-50" />
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4
              className="font-outfit font-semibold text-sm uppercase tracking-wider mb-5"
              style={{ color: '#1A7A82' }}
            >
              Localização
            </h4>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <iframe
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atendimento CellZen em Goiânia e região"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p
            className="font-inter text-xs"
            style={{ color: '#3a4a5a' }}
          >
            © {year} CellZen · Todos os direitos reservados.
          </p>

          {/* Developer Credit */}
          <div className="flex items-center gap-1.5">
            <span className="font-inter text-xs" style={{ color: '#3a4a5a' }}>Desenvolvido com</span>
            <Heart size={12} fill="#ef4444" style={{ color: '#ef4444' }} />
            <span className="font-inter text-xs" style={{ color: '#3a4a5a' }}>por</span>
            <a
              href="https://linkedin.com/in/ffneiva"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs font-medium transition-colors duration-200"
              style={{ color: '#1A7A82' }}
              onMouseEnter={(e) => (e.target.style.color = '#22A0AA')}
              onMouseLeave={(e) => (e.target.style.color = '#1A7A82')}
            >
              Felipe Neiva
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
