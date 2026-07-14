// ============================================================
// Configurações públicas do site
// ============================================================

/** Número do WhatsApp (apenas dígitos: DDI + DDD + número) */
export const WHATSAPP_NUMBER = '5562993713730';

/** Mensagem padrão ao abrir o WhatsApp */
export const WHATSAPP_MESSAGE_DEFAULT =
  'Olá! Gostaria de um orçamento para o conserto do meu celular.';

/** Gera a URL do WhatsApp com mensagem opcional */
export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE_DEFAULT) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Dados do negócio */
export const BUSINESS = {
  name: 'CellZen',
  tagline: 'Seu celular, nossa missão.',
  description:
    'Assistência técnica especializada em celulares Android em Goiânia e região. Qualidade premium com preço acessível.',
  city: 'Goiânia',
  state: 'GO',
  address: 'Atendimento em Goiânia e região',
  addressShort: 'Goiânia e região',
  hours: 'Seg. a Sáb., das 8h às 18h',
  phone: '(62) 99371-3730',
  instagram: 'https://instagram.com/cellzen.tech',
  instagramHandle: '@cellzen.tech',
  url: 'https://cellzen.fhio.com.br',
  mapsEmbed:
    'https://maps.google.com/maps?q=-16.708432,-49.291837&output=embed&hl=pt-BR&z=16',
  mapsLink: 'https://maps.app.goo.gl/WTNGoExKV4eUAt5e7',
};

/** Número de OS do dia — artefato documental da carta-orçamento */
export const getOsNumber = () => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `OS Nº ${d.getFullYear()}-${mm}${dd}-GYN`;
};

/** Aberto agora? Seg–Sáb, 08h–18h, horário de Brasília */
export const isBusinessOpen = () => {
  try {
    const brt = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
    );
    const hour = brt.getHours();
    const day = brt.getDay(); // 0=Dom, 1=Seg … 6=Sáb
    return day >= 1 && day <= 6 && hour >= 8 && hour < 18;
  } catch {
    return false;
  }
};
