export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export const formatPrice = (n: number) =>
  `R$ ${n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Unsplash CDN — replace these with your own product photos if needed
// Drop files named p1.jpg … p4.jpg into /public/images/ to override
export const products: Product[] = [
  {
    id: 1,
    name: 'Porta de Alumínio Lambril',
    description: 'Modelo lambril com frisos horizontais. Moderna e resistente.',
    price: 1890,
    category: 'portas-aluminio',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Aluminium_Door_02.jpg?width=900',
  },
  {
    id: 2,
    name: 'Porta Pivotante de Madeira',
    description: 'Madeira maciça com design imponente e acabamento premium.',
    price: 2290,
    category: 'portas-madeira',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Wooden_Front_door.jpg?width=900',
  },
  {
    id: 3,
    name: 'Janela de Alumínio 2 Folhas',
    description: 'Janela de correr com 2 folhas. Praticidade e vedação.',
    price: 1250,
    category: 'janelas-aluminio',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Windows_in_Home_Improvement_Store_22.jpg?width=900',
  },
  {
    id: 4,
    name: 'Veneziana 6 Folhas',
    description: 'Excelente ventilação e iluminação. Mais conforto para o seu ambiente.',
    price: 1090,
    category: 'venezianas',
    imageUrl:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Window_louvers.jpg?width=900',
  },
];

export const categories = [
  { id: 'all',               label: 'Todos os produtos' },
  { id: 'portas-aluminio',   label: 'Portas de Alumínio' },
  { id: 'portas-madeira',    label: 'Portas de Madeira' },
  { id: 'janelas-aluminio',  label: 'Janelas de Alumínio' },
  { id: 'venezianas',        label: 'Venezianas' },
  { id: 'portoes',           label: 'Portões' },
  { id: 'vidros',            label: 'Vidros' },
  { id: 'acessorios',        label: 'Acessórios' },
];
