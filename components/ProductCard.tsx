'use client';

import { useState } from 'react';
import { Product, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { IconCartSmall } from './icons';
import ProductImage from './ProductImage';

export default function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { dispatch } = useCart();

  function handleAdd() {
    dispatch({ type: 'ADD_ITEM', product, qty });
    setQty(1);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <ProductImage id={product.id} name={product.name} imageUrl={product.imageUrl} />
      </div>

      {/* Info */}
      <div className="p-3.5">
        <h3 className="text-sm font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-2.5">{product.description}</p>
        <p className="text-base font-bold text-green-600 mb-3">{formatPrice(product.price)}</p>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Qty */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setQty(q => Math.max(1, q - 1))}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-base font-medium transition-colors"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-800">{qty}</span>
            <button
              onClick={() => setQty(q => q + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 text-base font-medium transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-1.5 h-8 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-colors"
          >
            <IconCartSmall />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
