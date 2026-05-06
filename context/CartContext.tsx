'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, formatPrice } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; qty: number }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'SET_QTY'; id: number; qty: number }
  | { type: 'TOGGLE' }
  | { type: 'CLOSE' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.product.id);
      const items = existing
        ? state.items.map(i =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + action.qty }
              : i
          )
        : [...state.items, { ...action.product, quantity: action.qty }];
      return { items, isOpen: true };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'SET_QTY':
      if (action.qty < 1)
        return { ...state, items: state.items.filter(i => i.id !== action.id) };
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id ? { ...i, quantity: action.qty } : i
        ),
      };
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function buildWhatsAppMessage(items: CartItem[], waNumber: string) {
  const lines = items.map(
    i => `• ${i.name} (x${i.quantity}) - ${formatPrice(i.price * i.quantity)}`
  );
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const msg = `Olá! Gostaria de fazer um pedido:\n\n${lines.join('\n')}\n\nTotal: ${formatPrice(total)}\n\nPoderia me ajudar a finalizar?`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
}
