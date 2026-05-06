'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartPanel from '@/components/CartPanel';
import Pagination from '@/components/Pagination';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { products } from '@/data/products';

const PAGE_SIZE = 4;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter(p => p.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategory(id: string) {
    setActiveCategory(id);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main content */}
      <main className="mx-8 my-5">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex">
          <Sidebar activeCategory={activeCategory} onSelect={handleCategory} />

          <div className="flex-1 p-7 min-w-0">
            {/* Header row */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-gray-900">Todos os produtos</h2>
              <span className="text-sm text-gray-400">Mostrando {PAGE_SIZE} de cada vez</span>
            </div>

            {/* Product grid */}
            {paged.length > 0 ? (
              <div className="grid grid-cols-4 gap-5">
                {paged.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm py-10 text-center">
                Nenhum produto encontrado nessa categoria.
              </p>
            )}

            <Pagination current={page} total={totalPages} onChange={setPage} />
          </div>
        </div>
      </main>

      <WhatsAppCTA />

      <footer className="border-t border-gray-200 bg-white py-4 text-center text-xs text-gray-400">
        © 2024 NextRV Portas e Janelas. Todos os direitos reservados.
      </footer>

      <CartPanel />
    </div>
  );
}
