'use client';

import { categories } from '@/data/products';
import {
  IconGrid, IconDoorAl, IconDoorWood, IconWindow,
  IconVenetian, IconGate, IconGlass, IconTools,
} from './icons';

const iconMap: Record<string, React.ReactNode> = {
  all:              <IconGrid />,
  'portas-aluminio': <IconDoorAl />,
  'portas-madeira':  <IconDoorWood />,
  'janelas-aluminio':<IconWindow />,
  venezianas:       <IconVenetian />,
  portoes:          <IconGate />,
  vidros:           <IconGlass />,
  acessorios:       <IconTools />,
};

interface SidebarProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ activeCategory, onSelect }: SidebarProps) {
  return (
    <aside className="w-[210px] flex-shrink-0 border-r border-gray-100">
      <div className="bg-[#1C2B3A] text-white px-4 py-3 text-[11px] font-bold tracking-[2px] uppercase">
        Categorias
      </div>
      <ul>
        {categories.map(cat => {
          const active = cat.id === activeCategory;
          return (
            <li key={cat.id}>
              <button
                onClick={() => onSelect(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-[11px] text-sm border-b border-gray-100 transition-colors text-left
                  ${active
                    ? 'bg-green-50 text-green-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <span className={active ? 'text-green-500' : 'text-gray-400'}>
                  {iconMap[cat.id]}
                </span>
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
