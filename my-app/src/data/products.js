// Real product images from Unsplash
export const sampleProducts = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    category: 'Кроссовки',
    price: 12990,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop',
    description: 'Легендарные кроссовки с воздушной подушкой Air Max для максимального комфорта.',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    category: 'Кроссовки',
    price: 14990,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=400&fit=crop',
    description: 'Беговые кроссовки с технологией Boost для энергичного возврата энергии.',
  },
  {
    id: 3,
    name: 'Футболка Sport House',
    category: 'Одежда',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
    description: 'Хлопковая футболка для спорта и повседневной носки.',
  },
  {
    id: 4,
    name: 'Шорты Nike Dri-FIT',
    category: 'Одежда',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=400&fit=crop',
    description: 'Спортивные шорты с технологией отвода влаги Dri-FIT.',
  },
  {
    id: 5,
    name: 'Рюкзак Puma',
    category: 'Аксессуары',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
    description: 'Вместительный спортивный рюкзак для тренировок и путешествий.',
  },
  {
    id: 6,
    name: 'Кепка Adidas Originals',
    category: 'Аксессуары',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=400&fit=crop',
    description: 'Классическая бейсболка из коллекции Adidas Originals.',
  },
  {
    id: 7,
    name: 'Hoodie Under Armour',
    category: 'Одежда',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=400&fit=crop',
    description: 'Утеплённый худи с начёсом для тренировок в холодную погоду.',
  },
  {
    id: 8,
    name: 'New Balance 574',
    category: 'Кроссовки',
    price: 11990,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=400&fit=crop',
    description: 'Классические кроссовки в ретро-стиле с технологией ENCAP.',
  },
  {
    id: 9,
    name: 'Куртка The North Face',
    category: 'Одежда',
    price: 19990,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop',
    description: 'Ветрозащитная куртка для активного отдыха на природе.',
  },
  {
    id: 10,
    name: 'Бутылка для воды Nike',
    category: 'Аксессуары',
    price: 1490,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop',
    description: 'Термобутылка из нержавеющей стали объёмом 750 мл.',
  },
  {
    id: 11,
    name: 'Брюки Adidas Track',
    category: 'Одежда',
    price: 6490,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop',
    description: 'Спортивные брюки с three stripes для тренировок и отдыха.',
  },
  {
    id: 12,
    name: 'Кроссовки Puma RS-X',
    category: 'Кроссовки',
    price: 10990,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=400&fit=crop',
    description: 'Яркие кроссовки в стиле ретро с амортизирующей подошвой.',
  },
];

export const categories = ['Все', 'Кроссовки', 'Одежда', 'Аксессуары'];

// Maps each category value (stored in Russian, matching product.category) to its translation key
export const categoryKeys = {
  Все: 'all',
  Кроссовки: 'sneakers',
  Одежда: 'clothing',
  Аксессуары: 'accessories',
};
