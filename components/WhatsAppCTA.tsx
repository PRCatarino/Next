import { IconWhatsApp } from './icons';

const WA_NUMBER = '5521979861621';

export default function WhatsAppCTA() {
  return (
    <section className="mx-8 mb-6 mt-0 bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-center gap-4">
      <div className="w-[52px] h-[52px] bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
        <IconWhatsApp size={26} />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[0.95rem] font-bold text-gray-900 mb-0.5">
          Fale conosco no WhatsApp
        </h3>
        <p className="text-[0.8rem] text-gray-500">
          Tire suas dúvidas, peça seu orçamento ou solicite atendimento.
        </p>
      </div>

      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3 border border-green-500 text-green-600 rounded-xl font-bold text-sm hover:bg-green-50 transition-colors flex-shrink-0"
      >
        <IconWhatsApp size={18} />
        Chamar agora
      </a>
    </section>
  );
}
