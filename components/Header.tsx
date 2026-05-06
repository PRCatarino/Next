'use client';

import { useCart } from '@/context/CartContext';
import { IconSearch, IconCart, IconWhatsApp } from './icons';

const WA_NUMBER = '5521970051099';

export default function Header() {
  const { state, dispatch } = useCart();
  const count = state.items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-green-500">
      <div className="flex items-center justify-between h-[68px] px-6 gap-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
            <rect x="2" y="2" width="34" height="34" rx="3" stroke="#22C55E" strokeWidth="2.5" />
            <rect x="10" y="2" width="18" height="34" rx="1" stroke="#22C55E" strokeWidth="2.5" fill="none" />
            <circle cx="25" cy="19" r="2.2" fill="#22C55E" />
          </svg>
          <div className="leading-none">
            <div className="text-[1.3rem] font-black tracking-tight">
              Next
            </div>
            <div className="text-[0.48rem] tracking-[2px] uppercase text-gray-400 mt-0.5">
              Portas e Janelas
            </div>
          </div>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-xl relative mx-auto">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full h-10 pl-4 pr-11 border border-gray-200 rounded-lg text-sm outline-none focus:border-green-500 bg-white placeholder:text-gray-400 transition-colors"
          />
          <button className="absolute right-0 top-0 h-10 px-3 text-gray-400 hover:text-gray-600">
            <IconSearch />
          </button>
        </div>

        <div className="flex items-center justify-between gap-6 flex-shrink-0">
          {/* Cart */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE' })}
            className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-green-600 transition-colors flex-shrink-0"
          >
            <div className="relative">
              <IconCart />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {count}
                </span>
              )}
            </div>
            <span className="text-[11px] font-medium">Carrinho</span>
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
              <IconWhatsApp size={20} />
            </div>
            <div className="leading-none">
              <div className="text-sm font-bold text-gray-900">(21) 97005-1099</div>
              <div className="text-[11px] text-gray-400 mt-0.5">Fale conosco no WhatsApp</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
