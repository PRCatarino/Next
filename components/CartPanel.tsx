'use client';

import { useCart, buildWhatsAppMessage } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { IconX, IconTrash, IconWhatsApp } from './icons';
import ProductImage from './ProductImage';

const WA_NUMBER = '5521979861621';

export default function CartPanel() {
  const { state, dispatch } = useCart();

  const subtotal = state.items.reduce((s, i) => s + i.price * i.quantity, 0);

  function handleFinalize() {
    const url = buildWhatsAppMessage(state.items, WA_NUMBER);
    window.open(url, '_blank');
  }

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={() => dispatch({ type: 'CLOSE' })}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-[340px] bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">Meu carrinho</h2>
          <button
            onClick={() => dispatch({ type: 'CLOSE' })}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <IconX />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
          {state.items.length === 0 && (
            <p className="text-sm text-gray-400 text-center mt-10">Seu carrinho está vazio.</p>
          )}

          {state.items.map(item => (
            <div key={item.id} className="flex gap-3">
              {/* Thumb */}
              <div className="w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <ProductImage id={item.id} name={item.name} imageUrl={item.imageUrl} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <p className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                    {item.name}
                  </p>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                    className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0 mt-0.5"
                  >
                    <IconTrash />
                  </button>
                </div>
                <p className="text-sm font-bold text-green-600 mt-1">
                  {formatPrice(item.price)}
                </p>

                {/* Qty controls */}
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-fit mt-2">
                  <button
                    onClick={() => dispatch({ type: 'SET_QTY', id: item.id, qty: item.quantity - 1 })}
                    className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-sm font-medium"
                  >
                    −
                  </button>
                  <span className="w-7 text-center text-sm font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch({ type: 'SET_QTY', id: item.id, qty: item.quantity + 1 })}
                    className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-sm font-medium"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-2.5">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Frete</span>
              <button className="text-green-600 font-semibold hover:underline">Calcular</button>
            </div>
            <div className="flex justify-between text-base font-bold text-gray-900 pt-1 border-t border-gray-100">
              <span>Total</span>
              <span className="text-green-600">{formatPrice(subtotal)}</span>
            </div>

            <button
              onClick={handleFinalize}
              className="w-full flex items-center justify-center gap-2 h-11 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-lg transition-colors mt-1"
            >
              <IconWhatsApp size={18} />
              Finalizar pedido via WhatsApp
            </button>

            <button className="w-full h-10 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Ver carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
