'use client';

import { useState } from 'react';

const cssFallback: Record<number, React.ReactNode> = {
  1: (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 via-gray-600 to-gray-500">
      <div className="relative w-[55%] h-[88%] bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm shadow-xl border-l-4 border-gray-900">
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full" />
        <div className="absolute inset-3 right-5 border border-white/10 rounded-sm" />
      </div>
    </div>
  ),
  2: (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-200 via-amber-600 to-amber-400">
      <div
        className="relative w-[55%] h-[88%] rounded-sm shadow-xl border-l-4 border-amber-900"
        style={{ background: 'linear-gradient(175deg,#c8915a,#9b6d35,#b88040)' }}
      >
        <div className="absolute inset-0 rounded-sm"
          style={{ background: 'repeating-linear-gradient(2deg,transparent,transparent 12px,rgba(0,0,0,0.06) 12px,rgba(0,0,0,0.06) 13px)' }} />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-gray-200 to-gray-400 rounded-full" />
      </div>
    </div>
  ),
  3: (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
      <div className="relative w-[84%] h-[72%] border-[3px] border-slate-500 rounded-sm bg-sky-100/40">
        <div className="absolute left-0 top-0 w-1/2 h-full border-r-[3px] border-slate-500 bg-sky-100/20" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-1 h-9 bg-slate-400 rounded" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-1 h-9 bg-slate-400 rounded" />
      </div>
    </div>
  ),
  4: (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-[84%] h-[84%] border-[3px] border-gray-900 rounded-sm overflow-hidden">
        <div className="w-full h-full"
          style={{ background: 'repeating-linear-gradient(0deg,#1a1a1a 0px,#1a1a1a 9px,#333 9px,#333 13px)' }} />
      </div>
    </div>
  ),
};

interface Props {
  id: number;
  name: string;
  imageUrl?: string;
}

export default function ProductImage({ id, name, imageUrl }: Props) {
  const [error, setError] = useState(false);

  if (!imageUrl || error) return <>{cssFallback[id]}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover"
      onError={() => setError(true)}
    />
  );
}
