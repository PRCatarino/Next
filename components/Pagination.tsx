'use client';

import { IconChevronLeft, IconChevronRight } from './icons';

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({ current, total, onChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-6">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-green-500 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <IconChevronLeft />
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold border transition-colors
            ${page === current
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600'
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:border-green-500 hover:text-green-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <IconChevronRight />
      </button>
    </div>
  );
}
