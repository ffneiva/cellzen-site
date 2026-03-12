import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User, Smartphone, AlertCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export default function QuickQuote() {
  const [form, setForm] = useState({ name: '', device: '', problem: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de um orçamento.',
      '',
      `👤 *Nome:* ${form.name}`,
      `📱 *Modelo:* ${form.device}`,
      `🔧 *Problema:* ${form.problem}`,
    ];
    // Encode manualmente para evitar problemas com emojis e acentos no WhatsApp
    const encoded = lines
      .map((l) => encodeURIComponent(l))
      .join('%0A');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isValid = form.name.trim() && form.device.trim() && form.problem.trim();

  return (
    <section
      id="orcamento"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0a1322' }}
    >
      {/* Decorative orb */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at bottom left, rgba(201,162,39,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">100% gratuito</span>
          <h2 className="section-heading mb-4">
            Orçamento{' '}
            <span className="text-gradient-gold">Rápido</span>
          </h2>
          <p className="section-sub">
            Preencha abaixo e vamos enviar direto pelo WhatsApp. Sem compromisso.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glass p-8 space-y-5"
          style={{ borderColor: 'rgba(26,122,130,0.2)' }}
        >
          {/* Name */}
          <div>
            <label
              className="flex items-center gap-2 font-inter text-sm font-medium mb-2"
              style={{ color: '#8a9bb0' }}
            >
              <User size={14} style={{ color: '#1A7A82' }} />
              Seu nome
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ex: João Silva"
              required
              className="w-full rounded-xl px-4 py-3 font-inter text-white text-sm outline-none transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(26,122,130,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
          </div>

          {/* Device */}
          <div>
            <label
              className="flex items-center gap-2 font-inter text-sm font-medium mb-2"
              style={{ color: '#8a9bb0' }}
            >
              <Smartphone size={14} style={{ color: '#1A7A82' }} />
              Modelo do celular
            </label>
            <input
              type="text"
              name="device"
              value={form.device}
              onChange={handleChange}
              placeholder="Ex: Samsung Galaxy A54, Moto G84..."
              required
              className="w-full rounded-xl px-4 py-3 font-inter text-white text-sm outline-none transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(26,122,130,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
          </div>

          {/* Problem */}
          <div>
            <label
              className="flex items-center gap-2 font-inter text-sm font-medium mb-2"
              style={{ color: '#8a9bb0' }}
            >
              <AlertCircle size={14} style={{ color: '#C9A227' }} />
              Descreva o problema
            </label>
            <textarea
              name="problem"
              value={form.problem}
              onChange={handleChange}
              placeholder="Ex: A tela está quebrada no canto e tem manchas escuras..."
              required
              rows={4}
              className="w-full rounded-xl px-4 py-3 font-inter text-white text-sm outline-none resize-none transition-all duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(26,122,130,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid}
            className="w-full btn-whatsapp font-outfit text-base py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <MessageCircle size={20} />
            Enviar pelo WhatsApp
          </button>

          <p
            className="text-center font-inter text-xs"
            style={{ color: '#4a5a6a' }}
          >
            Ao clicar, você será redirecionado para o WhatsApp com as informações
            preenchidas.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
