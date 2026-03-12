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
