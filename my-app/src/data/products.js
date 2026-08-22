export const categoriesData = [
  { id: 'all', nameKey: 'allCategories', icon: '⚡', highlight: 'Вся экипировка' },
  { id: 'football', nameKey: 'football', icon: '⚽', highlight: 'Формы, Бутсы, Мячи' },
  { id: 'basketball', nameKey: 'basketball', icon: '🏀', highlight: 'NBA, Кроссовки, Мячи' },
  { id: 'running', nameKey: 'running', icon: '🏃', highlight: 'Шиповки, Карбон, Трейл' },
  { id: 'boxing', nameKey: 'boxing', icon: '🥊', highlight: 'Перчатки, Боксерки, Лапы' },
  { id: 'tennis', nameKey: 'tennis', icon: '🎾', highlight: 'Wilson, Babolat, Head' },
  { id: 'fitness', nameKey: 'fitness', icon: '🏋️', highlight: 'Гантели, Грифы, Пояса' },
  { id: 'cycling', nameKey: 'cycling', icon: '🚴', highlight: 'Шлемы MIPS, Очки' },
  { id: 'swimming', nameKey: 'swimming', icon: '🏊', highlight: 'Speedo, Arena, Ласты' },
];

export const heroSlidesData = [
  {
    id: 1,
    tag: 'UEFA CHAMPIONS LEAGUE 2024/25',
    title: 'ФУТБОЛЬНАЯ ЭКИПИРОВКА ЧЕМПИОНОВ',
    subtitle: 'Официальные формы Real Madrid, Barcelona, Man City, бутсы Nike Mercurial и мячи FIFA Quality Pro со скидкой до -40%',
    bgGradient: 'from-emerald-950/80 via-slate-900/90 to-slate-950',
    badgeText: '⚡ СКИДКА ДО 40%',
    category: 'football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 2,
    tag: 'CARBON MARATHON & TRACK LAB',
    title: 'РЕКОРДНАЯ СКОРОСТЬ НА ДИСТАНЦИИ',
    subtitle: 'Легкоатлетические шиповки Nike Dragonfly и марафонки Alphafly 3 с карбоновой пластиной Flyplate для новых побед',
    bgGradient: 'from-lime-950/80 via-slate-900/90 to-slate-950',
    badgeText: '🔥 НОВОЕ ПОСТУПЛЕНИЕ',
    category: 'running',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 3,
    tag: 'NBA SIGNATURE BASKETBALL COLLECTION',
    title: 'ИМЕННЫЕ КРОССОВКИ СУПЕРЗВЕЗД',
    subtitle: 'Air Jordan 38, LeBron 21, Luka 2, Kobe 8 Protro и официальные мячи Wilson NBA Game Ball с гарантией 100% оригинала',
    bgGradient: 'from-green-950/80 via-slate-900/90 to-slate-950',
    badgeText: '👑 100% ОРИГИНАЛ',
    category: 'basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=80'
  }
];

export const storyHighlights = [
  { id: 'st-1', name: 'Хиты 2025', icon: '🔥', category: 'all', ring: 'from-emerald-400 to-lime-500' },
  { id: 'st-2', name: 'Бутсы Elite', icon: '⚽', category: 'football', ring: 'from-green-400 to-emerald-600' },
  { id: 'st-3', name: 'NBA Jordan', icon: '🏀', category: 'basketball', ring: 'from-lime-400 to-emerald-500' },
  { id: 'st-4', name: 'Шиповки', icon: '🏃', category: 'running', ring: 'from-teal-400 to-green-500' },
  { id: 'st-5', name: 'Бокс & MMA', icon: '🥊', category: 'boxing', ring: 'from-emerald-500 to-green-700' },
  { id: 'st-6', name: 'Теннис ATP', icon: '🎾', category: 'tennis', ring: 'from-lime-500 to-teal-400' },
  { id: 'st-7', name: 'CrossFit Зал', icon: '🏋️', category: 'fitness', ring: 'from-emerald-400 to-cyan-500' },
  { id: 'st-8', name: 'Скидки -50%', icon: '🏷️', category: 'all', ring: 'from-lime-300 to-emerald-500' },
];

export const brandsList = [
  'Nike', 'Adidas', 'Puma', 'Jordan', 'Wilson', 'Venum', 'Asics', 'Babolat',
  'Molten', 'Joma', 'Salomon', 'Everlast', 'Under Armour', 'Speedo', 'Arena',
  'Fairtex', 'Specialized', 'Garmin', 'Head'
];

export const sizesList = [
  'S', 'M', 'L', 'XL', 'XXL',
  '38', '39', '40', '41', '42', '43', '44', '45', '46',
  '5 (FIFA)', 'Размер 7 (NBA)', 'L3 (4 3/8")', '10 oz', '12 oz', '14 oz', '16 oz',
  'Универсальный', '20 кг'
];

export const colorOptions = [
  { name: 'Черный', hex: '#111827' },
  { name: 'Белый', hex: '#F9FAFB' },
  { name: 'Красный', hex: '#EF4444' },
  { name: 'Синий', hex: '#3B82F6' },
  { name: 'Неоновый зеленый', hex: '#22C55E' },
  { name: 'Золотой / Желтый', hex: '#EAB308' },
  { name: 'Фиолетовый', hex: '#8B5CF6' },
  { name: 'Оранжевый', hex: '#F97316' },
];

export const productsData = [
  // ==========================================
  // 1. FOOTBALL
  // ==========================================
  {
    id: 1,
    category: 'football',
    brand: 'Adidas',
    price: 8990,
    oldPrice: 11990,
    discount: 25,
    rating: 5.0,
    reviewsCount: 94,
    inStock: true,
    stockLeft: 4,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
    extraImages: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Белый', 'Золотой / Желтый'],
    name: {
      ru: 'Футбольная форма Real Madrid Home Kit 2024/25',
      en: 'Real Madrid Official Home Kit Jersey 2024/25',
      uz: 'Real Madrid 2024/25 Asosiy Futbol Formasi',
      kz: 'Real Madrid 2024/25 Ресми Футбол Жейдесі'
    },
    description: {
      ru: 'Официальный комплект домашней формы "Реал Мадрид" сезона 2024/25 с технологией HEAT.RDY.',
      en: 'Official Real Madrid home jersey featuring breathable HEAT.RDY athletic fabric and embroidered crest.',
      uz: 'Real Madrid klubining 2024/25 mavsumdagi rasmiy uy formasi. HEAT.RDY nafas oluvchi mato.',
      kz: 'Real Madrid клубының 2024/25 маусымдағы ресми үй жейдесі. HEAT.RDY матасы.'
    },
    specs: {
      ru: { 'Тип': 'Комплект формы', 'Клуб': 'Real Madrid', 'Материал': '100% Recycled Polyester', 'Технология': 'HEAT.RDY' },
      en: { 'Type': 'Official Kit', 'Club': 'Real Madrid', 'Material': '100% Recycled Polyester', 'Tech': 'HEAT.RDY' },
      uz: { 'Turi': 'Rasmiy forma', 'Klub': 'Real Madrid', 'Mato': '100% Poliester', 'Texnologiya': 'HEAT.RDY' },
      kz: { 'Түрі': 'Ресми киім', 'Клуб': 'Real Madrid', 'Матасы': '100% Полиэстер', 'Технология': 'HEAT.RDY' }
    }
  },
  {
    id: 2,
    category: 'football',
    brand: 'Nike',
    price: 8490,
    oldPrice: 10990,
    discount: 22,
    rating: 4.9,
    reviewsCount: 78,
    inStock: true,
    stockLeft: 6,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Синий', 'Красный'],
    name: {
      ru: 'Футбольная форма FC Barcelona 125th Anniversary Kit',
      en: 'FC Barcelona 125th Anniversary Home Jersey',
      uz: 'FC Barcelona 125 Yillik Yubiley Futbol Formasi',
      kz: 'FC Barcelona 125 жылдық мерейтойлық жейдесі'
    },
    description: {
      ru: 'Юбилейная сине-гранатовая форма ФК Барселона с технологией Dri-FIT ADV.',
      en: 'Special edition 125-year commemorative Barcelona jersey engineered with Nike Dri-FIT ADV.',
      uz: 'Barselona klubining 125 yilligiga bagʻishlangan rasmiy formasi. Dri-FIT ADV matosi.',
      kz: 'Барселона клубының 125 жылдығына арналған мерейтойлық жейдесі.'
    },
    specs: {
      ru: { 'Клуб': 'FC Barcelona', 'Технология': 'Dri-FIT ADV', 'Посадка': 'Slim Fit', 'Сезон': '2024/25' },
      en: { 'Club': 'FC Barcelona', 'Tech': 'Dri-FIT ADV', 'Fit': 'Slim Fit', 'Season': '2024/25' },
      uz: { 'Klub': 'FC Barcelona', 'Texnologiya': 'Dri-FIT ADV', 'Bichimi': 'Slim Fit', 'Mavsum': '2024/25' },
      kz: { 'Клуб': 'FC Barcelona', 'Технология': 'Dri-FIT ADV', 'Пішімі': 'Slim Fit', 'Маусым': '2024/25' }
    }
  },
  {
    id: 3,
    category: 'football',
    brand: 'Nike',
    price: 21990,
    oldPrice: 26990,
    discount: 18,
    rating: 5.0,
    reviewsCount: 142,
    inStock: true,
    stockLeft: 3,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Красный', 'Черный'],
    name: {
      ru: 'Бутсы Nike Zoom Mercurial Superfly 9 Elite FG',
      en: 'Nike Zoom Mercurial Superfly 9 Elite FG Cleats',
      uz: 'Nike Zoom Mercurial Superfly 9 Elite FG Butsasi',
      kz: 'Nike Zoom Mercurial Superfly 9 Elite FG Бутсылары'
    },
    description: {
      ru: 'Флагманские бутсы с воздушной подушкой 3/4 Zoom Air и верхом Vaporposite+ для максимальной скорости.',
      en: 'Elite tier football boots featuring 3/4 Zoom Air unit and Vaporposite+ upper for explosive speed.',
      uz: 'Hujumchilar uchun eng tezkor professional futbol butsasi. 3/4 Zoom Air yostiqchasi.',
      kz: '3/4 Zoom Air жастықшасы бар кәсіби футбол бутсылары.'
    },
    specs: {
      ru: { 'Покрытие': 'Натуральный газон (FG)', 'Амортизация': 'Zoom Air 3/4', 'Вес': '195 г', 'Уровень': 'Professional Elite' },
      en: { 'Ground': 'Firm Ground (FG)', 'Cushioning': 'Zoom Air 3/4', 'Weight': '195 g', 'Level': 'Professional Elite' },
      uz: { 'Maydon': 'Tabiiy maysa (FG)', 'Yostiqcha': 'Zoom Air 3/4', 'Vazni': '195 g', 'Darajasi': 'Professional' },
      kz: { 'Қаптамасы': 'Табиғи көгал (FG)', 'Амортизация': 'Zoom Air 3/4', 'Салмағы': '195 г', 'Деңгейі': 'Кәсіби' }
    }
  },
  {
    id: 4,
    category: 'football',
    brand: 'Adidas',
    price: 20990,
    oldPrice: 24990,
    discount: 16,
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    stockLeft: 5,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Черный', 'Красный', 'Белый'],
    name: {
      ru: 'Футбольные бутсы Adidas Predator Elite FT FG',
      en: 'Adidas Predator Elite Fold-Over Tongue FG Cleats',
      uz: 'Adidas Predator Elite FT FG Professional Butsa',
      kz: 'Adidas Predator Elite FT FG Кәсіби Бутсылары'
    },
    description: {
      ru: 'Легендарные бутсы с откидным язычком и резиновыми ребрами Strikeskin для безупречного крученого удара.',
      en: 'Iconic fold-over tongue cleats engineered with Strikeskin rubber fins for lethal ball swerve.',
      uz: 'Burama zarbalar va toʻp nazorati uchun maxsus qanotchali afsonaviy Predator butsasi.',
      kz: 'Тілшесі бар аты аңызға айналған кәсіби Predator бутсылары.'
    },
    specs: {
      ru: { 'Покрытие': 'FG Газон', 'Особенность': 'Откидной язычок', 'Элементы': 'Strikeskin fins' },
      en: { 'Ground': 'Firm Ground', 'Feature': 'Fold-over tongue', 'Elements': 'Strikeskin fins' },
      uz: { 'Maydon': 'FG Maysa', 'Xususiyati': 'Qatlama tilcha', 'Boshqaruv': 'Strikeskin rezina' },
      kz: { 'Қаптамасы': 'FG Көгал', 'Ерекшелігі': 'Қайырмалы тіл', 'Элементтер': 'Strikeskin' }
    }
  },
  {
    id: 5,
    category: 'football',
    brand: 'Joma',
    price: 7990,
    oldPrice: 9490,
    discount: 15,
    rating: 4.9,
    reviewsCount: 156,
    inStock: true,
    isHit: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Красный', 'Черный', 'Белый'],
    name: {
      ru: 'Сороконожки Joma Top Flex TF Leather',
      en: 'Joma Top Flex TF Calfskin Leather Turf Shoes',
      uz: 'Joma Top Flex TF Teri Sorokonojka',
      kz: 'Joma Top Flex TF Былғары Сороконожкасы'
    },
    description: {
      ru: 'Мягкая натуральная кожа теленка, усиленный носок и амортизация Phylon для мини-футбола.',
      en: 'High grade natural leather turf shoes featuring reinforced toe cap and flexible Phylon midsole.',
      uz: 'Haqiqiy buzoq terisidan ishlangan, oʻta pishiq va qulay futzal hamda sunʼiy maydon poyabzali.',
      kz: 'Табиғи былғарыдан жасалған, шағын футболға арналған ыңғайлы аяқ киім.'
    },
    specs: {
      ru: { 'Материал': 'Натуральная кожа', 'Покрытие': 'Искусственная трава (TF)', 'Подошва': 'Durability Rubber' },
      en: { 'Material': 'Natural Leather', 'Surface': 'Turf (TF)', 'Sole': 'Durability Rubber' },
      uz: { 'Material': 'Tabiiy charm', 'Qoplama': 'Sunʼiy maydon (TF)', 'Taglik': 'Phylon + Rubber' },
      kz: { 'Материал': 'Табиғи былғары', 'Қаптамасы': 'Жасанды шөп (TF)', 'Табаны': 'Durability Rubber' }
    }
  },
  {
    id: 6,
    category: 'football',
    brand: 'Nike',
    price: 8990,
    oldPrice: 10500,
    discount: 14,
    rating: 4.8,
    reviewsCount: 64,
    inStock: true,
    isHit: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Белый', 'Синий'],
    name: {
      ru: 'Сороконожки Nike Tiempo Legend 10 Academy TF',
      en: 'Nike Tiempo Legend 10 Academy TF Turf Boots',
      uz: 'Nike Tiempo Legend 10 Academy TF Sorokonojka',
      kz: 'Nike Tiempo Legend 10 Academy TF Сороконожкасы'
    },
    description: {
      ru: 'Инновационный синтетический материал FlyTouch Lite делает обувь легкой и мягкой.',
      en: 'Engineered FlyTouch Lite synthetic leather adapts to foot shape without overstretching.',
      uz: 'FlyTouch Lite sintetik terisi tufayli suv oʻtkazmaydi va toʻpni aʼlo darajada his qiladi.',
      kz: 'FlyTouch Lite материалынан жасалған жеңіл әрі жұмсақ сороконожка.'
    },
    specs: {
      ru: { 'Верх': 'FlyTouch Lite', 'Покрытие': 'TF Сороконожки', 'Колодка': 'Анатомическая' },
      en: { 'Upper': 'FlyTouch Lite', 'Surface': 'TF Turf', 'Fit': 'Anatomical' },
      uz: { 'Ustki qism': 'FlyTouch Lite', 'Maydon': 'TF Sunʼiy maysa', 'Moslashuv': 'Anatomik' },
      kz: { 'Үсті': 'FlyTouch Lite', 'Қаптамасы': 'TF Сороконожка', 'Қалып': 'Анатомиялық' }
    }
  },
  {
    id: 7,
    category: 'football',
    brand: 'Nike',
    price: 13990,
    oldPrice: 16500,
    discount: 15,
    rating: 5.0,
    reviewsCount: 68,
    inStock: true,
    stockLeft: 5,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    sizes: ['5 (FIFA)'],
    colors: ['Белый', 'Неоновый зеленый', 'Оранжевый'],
    name: {
      ru: 'Футбольный мяч Nike Flight Premier League Match Ball',
      en: 'Nike Flight Premier League Official Match Ball',
      uz: 'Nike Flight Angliya Premyer Ligasi Rasmiy Toʻpi',
      kz: 'Nike Flight АПЛ Ресми Ойын Добы'
    },
    description: {
      ru: 'Официальный мяч английской Премьер-Лиги с технологией аэродинамических канавок Aerowsculpt.',
      en: 'Official match ball of the English Premier League with molded Aerowsculpt grooves for true flight.',
      uz: 'Angliya Premyer-ligasining rasmiy toʻpi. Aerowsculpt texnologiyasi aniq parvozni taʼminlaydi.',
      kz: 'Ағылшын Премьер-Лигасының ресми матчтық добы. Aerowsculpt канавкалары.'
    },
    specs: {
      ru: { 'Сертификат': 'FIFA Quality Pro', 'Канавки': 'Nike Aerowsculpt', 'Сборка': 'Термосклейка 4 панели' },
      en: { 'Cert': 'FIFA Quality Pro', 'Grooves': 'Nike Aerowsculpt', 'Construction': 'Thermal bonded 4-panel' },
      uz: { 'Sertifikat': 'FIFA Quality Pro', 'Tuzilishi': 'Termo yopishtirilgan 4 panel', 'Oʻlcham': '5 (Rasmiy)' },
      kz: { 'Сертификат': 'FIFA Quality Pro', 'Құрылымы': 'Терможапсырма 4 панель', 'Өлшемі': '5 (Ресми)' }
    }
  },
  {
    id: 8,
    category: 'football',
    brand: 'Adidas',
    price: 12490,
    oldPrice: 14990,
    discount: 16,
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    isHit: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=800&q=80',
    sizes: ['5 (FIFA)'],
    colors: ['Белый', 'Синий', 'Золотой / Желтый'],
    name: {
      ru: 'Футбольный мяч Adidas UCL Pro Champions League',
      en: 'Adidas UEFA Champions League Pro Official Match Ball',
      uz: 'Adidas Chempionlar Ligasi Rasmiy UCL Pro Toʻpi',
      kz: 'Adidas Чемпиондар Лигасы Ресми UCL Pro Добы'
    },
    description: {
      ru: 'Официальный бесшовный мяч Лиги Чемпионов УЕФА с культовой звездной текстурой.',
      en: 'Official match ball of the UEFA Champions League with seamless thermally bonded star panels.',
      uz: 'UEFA Chempionlar Ligasining rasmiy yulduzli toʻpi. Choksiz termo yopishtirilgan.',
      kz: 'УЕФА Чемпиондар лигасының жұлдызды ресми матчы добы.'
    },
    specs: {
      ru: { 'Турнир': 'UEFA Champions League', 'Сертификат': 'FIFA Quality Pro', 'Камера': 'Бутиловая премиум' },
      en: { 'Tournament': 'UEFA Champions League', 'Cert': 'FIFA Quality Pro', 'Bladder': 'High-grade Butyl' },
      uz: { 'Musobaqa': 'UEFA Chempionlar Ligasi', 'Sertifikat': 'FIFA Quality Pro', 'Kamera': 'Butil' },
      kz: { 'Турнир': 'УЕФА Чемпиондар лигасы', 'Сертификат': 'FIFA Quality Pro', 'Камера': 'Бутил' }
    }
  },
  {
    id: 9,
    category: 'football',
    brand: 'Puma',
    price: 9990,
    oldPrice: 12490,
    discount: 20,
    rating: 4.9,
    reviewsCount: 46,
    inStock: true,
    stockLeft: 2,
    isHit: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    sizes: ['8', '9', '10', '11'],
    colors: ['Неоновый зеленый', 'Черный'],
    name: {
      ru: 'Вратарские перчатки Puma Future Ultimate NC Pro',
      en: 'Puma Future Ultimate NC Pro Goalkeeper Gloves',
      uz: 'Puma Future Ultimate NC Pro Darvozabon Qoʻlqopi',
      kz: 'Puma Future Ultimate NC Pro Қақпашы Қолғабы'
    },
    description: {
      ru: 'Латекс 4mm ELITE+ Dual Grip обеспечивает непревзойденное сцепление в дождь и сухую погоду.',
      en: '4mm ELITE+ Dual Grip latex provides elite shot stopping grip in all weather conditions.',
      uz: 'Professional darvozabonlar uchun 4 mm ELITE+ lateks qoplamali, sirpanmaydigan qoʻlqop.',
      kz: 'Барлық ауа райында керемет ұстайтын 4 мм латексті кәсіби қақпашы қолғабы.'
    },
    specs: {
      ru: { 'Ладонь': '4mm ELITE+ Latex', 'Крой': 'Negative Cut (NC)', 'Тыльная сторона': '3D Knitted backhand' },
      en: { 'Palm': '4mm ELITE+ Latex', 'Cut': 'Negative Cut (NC)', 'Backhand': '3D Knitted backhand' },
      uz: { 'Kaft qismi': '4mm ELITE+ Lateks', 'Bichimi': 'Negative Cut', 'Orqa qism': '3D Trikotaj' },
      kz: { 'Алақан': '4mm ELITE+ Латекс', 'Пішім': 'Negative Cut', 'Арқасы': '3D Тоқылған' }
    }
  },

  // ==========================================
  // 2. BASKETBALL
  // ==========================================
  {
    id: 11,
    category: 'basketball',
    brand: 'Jordan',
    price: 19990,
    oldPrice: 23990,
    discount: 17,
    rating: 5.0,
    reviewsCount: 118,
    inStock: true,
    stockLeft: 3,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80',
    sizes: ['41', '42', '43', '44', '45', '46'],
    colors: ['Черный', 'Белый', 'Красный'],
    name: {
      ru: 'Баскетбольные кроссовки Air Jordan 38 Fundamentals',
      en: 'Air Jordan 38 Fundamentals Pro Basketball Shoes',
      uz: 'Air Jordan 38 Fundamentals Basketbol Krossovkasi',
      kz: 'Air Jordan 38 Fundamentals Баскетбол Кроссовкасы'
    },
    description: {
      ru: 'Флагманские кроссовки Jordan с пластиной X-Plate для стабильности при резких сменах направления.',
      en: 'Flagship Jordan game shoes equipped with X-Plate technology and Zoom Strobel for unrivaled court feel.',
      uz: 'Jordan brendining eng soʻnggi flagman modeli. X-Plate va Zoom Strobel yostiqchalari.',
      kz: 'Jordan флагмандық моделі. X-Plate тұрақтылық пластинасы мен Zoom Strobel.'
    },
    specs: {
      ru: { 'Амортизация': 'Zoom Strobel + Cushlon 3.0', 'Каркас': 'X-Plate carbon', 'Покрытие': 'Паркет / Indoor' },
      en: { 'Cushioning': 'Zoom Strobel + Cushlon 3.0', 'Chassis': 'X-Plate carbon', 'Court': 'Indoor Wood' },
      uz: { 'Yostiqcha': 'Zoom Strobel + Cushlon 3.0', 'Karkas': 'X-Plate', 'Maydon': 'Zal parketi' },
      kz: { 'Амортизация': 'Zoom Strobel + Cushlon 3.0', 'Каркас': 'X-Plate', 'Алаң': 'Зал / Паркет' }
    }
  },
  {
    id: 12,
    category: 'basketball',
    brand: 'Nike',
    price: 21990,
    oldPrice: 25990,
    discount: 15,
    rating: 4.9,
    reviewsCount: 92,
    inStock: true,
    stockLeft: 4,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80',
    sizes: ['42', '43', '44', '45', '46'],
    colors: ['Белый', 'Золотой / Желтый'],
    name: {
      ru: 'Кроссовки Nike LeBron 21 Akoya Edition',
      en: 'Nike LeBron 21 Akoya Edition Basketball Shoes',
      uz: 'Nike LeBron 21 Akoya Edition Basketbol Krossovkasi',
      kz: 'Nike LeBron 21 Akoya Edition Баскетбол Аяқ Киімі'
    },
    description: {
      ru: 'Именная модель Леброна Джеймса с двухкамерным блоком Zoom Turbo в носке и Zoom Air в пятке.',
      en: 'LeBron James signature shoe featuring Zoom Turbo forefoot unit and 13mm heel Zoom Air.',
      uz: 'LeBron Jamesning eng yangi modeli. Sakrash va toʻxtashlarda maksimal himoya.',
      kz: 'Леброн Джеймстің қолтаңбалы үлгісі. Қос Zoom Air блоктары.'
    },
    specs: {
      ru: { 'Игрок': 'LeBron James', 'Амортизация': 'Zoom Turbo + Zoom Air 13mm', 'Материал': 'Akoya Shell' },
      en: { 'Athlete': 'LeBron James', 'Cushion': 'Zoom Turbo + Zoom Air 13mm', 'Upper': 'Akoya Shell' },
      uz: { 'Yulduz': 'LeBron James', 'Yostiqcha': 'Zoom Turbo + Zoom Air 13mm', 'Ustki qism': 'Akoya' },
      kz: { 'Ойыншы': 'Леброн Джеймс', 'Амортизация': 'Zoom Turbo + Zoom Air 13mm', 'Материал': 'Akoya' }
    }
  },
  {
    id: 13,
    category: 'basketball',
    brand: 'Nike',
    price: 15990,
    oldPrice: 18500,
    discount: 13,
    rating: 4.9,
    reviewsCount: 71,
    inStock: true,
    isHit: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    sizes: ['41', '42', '43', '44', '45'],
    colors: ['Синий', 'Белый'],
    name: {
      ru: 'Баскетбольные кроссовки Jordan Luka 2 Space Hunter',
      en: 'Jordan Luka 2 Space Hunter Basketball Shoes',
      uz: 'Jordan Luka 2 Space Hunter Basketbol Poyabzali',
      kz: 'Jordan Luka 2 Space Hunter Баскетбол Кроссовкасы'
    },
    description: {
      ru: 'Именная модель Луки Дончича создана для молниеносных степ-бэков и боковой поддержки.',
      en: 'Luka Doncic signature silhouette designed with Formula 23 foam and IsoPlate for lethal step-backs.',
      uz: 'Luka Donchichning maxsus modeli. Formula 23 koʻpigi va IsoPlate yon himoyasi.',
      kz: 'Лука Дончичтің степ-бэк қимылдарына арналған қолтаңбалы кроссовкасы.'
    },
    specs: {
      ru: { 'Игрок': 'Luka Dončić', 'Пена': 'Formula 23 foam', 'Фиксация': 'IsoPlate 360' },
      en: { 'Player': 'Luka Dončić', 'Foam': 'Formula 23 foam', 'Support': 'IsoPlate 360' },
      uz: { 'Oʻyinchi': 'Luka Dončić', 'Koʻpik': 'Formula 23', 'Ushlagich': 'IsoPlate 360' },
      kz: { 'Ойыншы': 'Лука Дончич', 'Көбік': 'Formula 23', 'Қолдау': 'IsoPlate 360' }
    }
  },
  {
    id: 14,
    category: 'basketball',
    brand: 'Nike',
    price: 18990,
    oldPrice: 22500,
    discount: 15,
    rating: 5.0,
    reviewsCount: 135,
    inStock: true,
    stockLeft: 2,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    sizes: ['41', '42', '43', '44', '45', '46'],
    colors: ['Черный', 'Золотой / Желтый', 'Белый'],
    name: {
      ru: 'Кроссовки Nike Kobe 8 Protro Halo Mamba',
      en: 'Nike Kobe 8 Protro Halo Mamba Court Edition',
      uz: 'Nike Kobe 8 Protro Halo Mamba Basketbol Krossovkasi',
      kz: 'Nike Kobe 8 Protro Halo Mamba Баскетбол Аяқ Киімі'
    },
    description: {
      ru: 'Легендарные легкие низкие кроссовки Коби Брайанта с обновленной пеной Nike React.',
      en: 'Kobe Bryant iconic low-cut silhouette rebuilt with full-length Nike React foam drop-in midsole.',
      uz: 'Kobe Bryantning afsonaviy past profilli, yengil va qulay basketbol krossovkasi. Nike React koʻpigi.',
      kz: 'Коби Брайанттың аты аңызға айналған Nike React көбігі бар жеңіл кроссовкасы.'
    },
    specs: {
      ru: { 'Линия': 'Kobe Bryant Mamba', 'Профиль': 'Low Cut', 'Стелька': 'Nike React drop-in' },
      en: { 'Line': 'Kobe Bryant Mamba', 'Profile': 'Low Cut', 'Midsole': 'Nike React drop-in' },
      uz: { 'Seriya': 'Kobe Mamba', 'Profil': 'Pastki (Low)', 'Taglik': 'Nike React' },
      kz: { 'Серия': 'Kobe Mamba', 'Пішін': 'Төмен (Low)', 'Ұлтарақ': 'Nike React' }
    }
  },
  {
    id: 18,
    category: 'basketball',
    brand: 'Wilson',
    price: 12990,
    oldPrice: 15500,
    discount: 16,
    rating: 5.0,
    reviewsCount: 182,
    inStock: true,
    isHit: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    sizes: ['Размер 7 (NBA)'],
    colors: ['Оранжевый'],
    name: {
      ru: 'Баскетбольный мяч Wilson NBA Official Game Ball',
      en: 'Wilson NBA Official Game Basketball Ball',
      uz: 'Wilson NBA Rasmiy Oʻyin Basketbol Toʻpi',
      kz: 'Wilson NBA Ресми Ойын Баскетбол Добы'
    },
    description: {
      ru: 'Официальный игровой мяч лиги NBA. Премиальная композитная кожа и идеальный отскок.',
      en: 'The genuine official game ball of the NBA made with premium composite Horween leather.',
      uz: 'NBA ligasining rasmiy oʻyin toʻpi. Haqiqiy kompozit charm va mukammal sakrash kuchi.',
      kz: 'NBA лигасының ресми ойын добы. Премиум былғары және мінсіз секіру.'
    },
    specs: {
      ru: { 'Лига': 'NBA Official Game', 'Материал': 'Премиум композит кожа', 'Размер': 'Size 7 (Мужской)' },
      en: { 'League': 'NBA Official Game', 'Material': 'Premium Composite Leather', 'Size': 'Size 7 (Official)' },
      uz: { 'Liga': 'NBA Official Game', 'Material': 'Kompozit charm', 'Oʻlcham': '7-razmer' },
      kz: { 'Лига': 'NBA Official Game', 'Материал': 'Композит былғары', 'Өлшем': '7-өлшем' }
    }
  },

  // ==========================================
  // 3. RUNNING & TRACK
  // ==========================================
  {
    id: 20,
    category: 'running',
    brand: 'Nike',
    price: 18990,
    oldPrice: 22990,
    discount: 17,
    rating: 5.0,
    reviewsCount: 84,
    inStock: true,
    stockLeft: 4,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['Белый', 'Неоновый зеленый'],
    name: {
      ru: 'Шиповки легкоатлетические Nike ZoomX Dragonfly',
      en: 'Nike ZoomX Dragonfly Track & Field Distance Spikes',
      uz: 'Nike ZoomX Dragonfly Yengil Atletika Shipovkasi',
      kz: 'Nike ZoomX Dragonfly Жеңіл Атлетика Шиповкасы'
    },
    description: {
      ru: 'Рекордные легкоатлетические шиповки с пеной ZoomX и полноразмерной пластиной Pebax.',
      en: 'Record-shattering distance track spikes loaded with responsive ZoomX foam and full-length Pebax plate.',
      uz: 'Stadionda oʻrta va uzoq masofalarga yugurish uchun ZoomX koʻpikli chempionlar shipovkasi.',
      kz: 'ZoomX көбігі мен Pebax пластинасы бар рекордтық жеңіл атлетика шиповкасы.'
    },
    specs: {
      ru: { 'Дистанции': '1500м – 10000м', 'Пена': 'Nike ZoomX', 'Шипы': '6 съемных шипов', 'Вес': '125 г' },
      en: { 'Distances': '1,500m – 10,000m', 'Foam': 'Nike ZoomX', 'Spikes': '6 removable pins', 'Weight': '125 g' },
      uz: { 'Masofa': '1500m – 10000m', 'Koʻpik': 'Nike ZoomX', 'Mixlar': '6 ta olinadigan', 'Vazni': '125 g' },
      kz: { 'Қашықтық': '1500м – 10000м', 'Көбік': 'Nike ZoomX', 'Шиптер': '6 алмалы шип', 'Салмағы': '125 г' }
    }
  },
  {
    id: 21,
    category: 'running',
    brand: 'Nike',
    price: 27990,
    oldPrice: 32990,
    discount: 15,
    rating: 5.0,
    reviewsCount: 125,
    inStock: true,
    stockLeft: 3,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Белый', 'Оранжевый'],
    name: {
      ru: 'Марафонки Nike Air Zoom Alphafly 3 Flyknit',
      en: 'Nike Air Zoom Alphafly 3 Flyknit Marathon Super-Shoe',
      uz: 'Nike Air Zoom Alphafly 3 Marafon Yugurish Krossovkasi',
      kz: 'Nike Air Zoom Alphafly 3 Марафондық Супер-Кроссовкасы'
    },
    description: {
      ru: 'Мировой рекордсмен в марафоне: сплошная пена ZoomX, 2 подушки Air Zoom и карбоновая пластина Flyplate.',
      en: 'The world marathon record-breaking super shoe with dual Air Zoom pods, continuous ZoomX foam, and carbon Flyplate.',
      uz: 'Marafonlar uchun dunyodagi eng tezkor poyabzal. Ikkita Air Zoom yostiqchasi va uglerod Flyplate.',
      kz: 'Марафондар үшін әлем рекордын орнатқан қос Air Zoom және көміртекті Flyplate бар супер-кроссовка.'
    },
    specs: {
      ru: { 'Пластина': 'Full-length Carbon Flyplate', 'Амортизация': 'Dual Air Zoom + ZoomX', 'Дроп': '8 мм' },
      en: { 'Plate': 'Full-length Carbon Flyplate', 'Cushion': 'Dual Air Zoom + ZoomX', 'Drop': '8 mm' },
      uz: { 'Plastina': 'Toʻliq karbon Flyplate', 'Yostiqcha': 'Qoʻshaloq Air Zoom + ZoomX', 'Drop': '8 mm' },
      kz: { 'Пластина': 'Толық көміртекті Flyplate', 'Амортизация': 'Қос Air Zoom + ZoomX', 'Дроп': '8 мм' }
    }
  },
  {
    id: 24,
    category: 'running',
    brand: 'Garmin',
    price: 34990,
    oldPrice: 39990,
    discount: 13,
    rating: 5.0,
    reviewsCount: 91,
    inStock: true,
    stockLeft: 2,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    sizes: ['Универсальный'],
    colors: ['Черный'],
    name: {
      ru: 'Спортивные часы Garmin Forerunner 265 Music GPS',
      en: 'Garmin Forerunner 265 AMOLED GPS Running Smartwatch',
      uz: 'Garmin Forerunner 265 GPS Yugurish Aqlli Soati',
      kz: 'Garmin Forerunner 265 GPS Жүгіруге Арналған Смарт Сағаты'
    },
    description: {
      ru: 'Беговые смарт-часы с ярким AMOLED-дисплеем, многополосным GPS и анализом готовности к тренировке.',
      en: 'Premium running smartwatch featuring vibrant AMOLED touchscreen, multi-band GPS, and Training Readiness.',
      uz: 'Yorqin AMOLED ekran, aniq koʻp polosali GPS va trenirovka tayyorgarligi tahlili bilan sport soati.',
      kz: 'Жарқын AMOLED экраны және дәл көпжолақты GPS бар кәсіби спорттық сағат.'
    },
    specs: {
      ru: { 'Экран': '1.3" AMOLED Touch', 'Батарея': 'До 13 дней', 'Датчики': 'Multi-band GPS + PulseOx + VO2 Max' },
      en: { 'Screen': '1.3" AMOLED Touch', 'Battery': 'Up to 13 days', 'Sensors': 'Multi-band GPS + PulseOx + VO2 Max' },
      uz: { 'Ekran': '1.3" AMOLED Touch', 'Batareya': '13 kungacha', 'Datchiklar': 'GPS + PulseOx + VO2 Max' },
      kz: { 'Экран': '1.3" AMOLED', 'Батарея': '13 күнге дейін', 'Датчиктер': 'GPS + PulseOx + VO2 Max' }
    }
  },

  // ==========================================
  // 4. BOXING & MMA
  // ==========================================
  {
    id: 28,
    category: 'boxing',
    brand: 'Venum',
    price: 7490,
    oldPrice: 8990,
    discount: 16,
    rating: 4.9,
    reviewsCount: 114,
    inStock: true,
    stockLeft: 4,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    sizes: ['10 oz', '12 oz', '14 oz', '16 oz'],
    colors: ['Черный', 'Золотой / Желтый'],
    name: {
      ru: 'Боксерские перчатки Venum Challenger 3.0 Gold',
      en: 'Venum Challenger 3.0 Gold Boxing & Sparring Gloves',
      uz: 'Venum Challenger 3.0 Oltin Boks Qoʻlqoplari',
      kz: 'Venum Challenger 3.0 Алтын Бокс Қолғаптары'
    },
    description: {
      ru: 'Премиальная экокожа Skintex и трехслойная пена для максимальной защиты кисти и мощного удара.',
      en: 'Constructed with premium Skintex leather and triple-density foam for unmatched knuckle protection.',
      uz: 'Skintex mustahkam charmi va 3 qatlamli koʻpik bilan bilakni jarohatdan himoya qiluvchi boks qoʻlqopi.',
      kz: 'Қолды толық қорғайтын сапалы Skintex былғарысы және үш қабатты көбігі бар бокс қолғабы.'
    },
    specs: {
      ru: { 'Материал': 'Кожа Skintex', 'Наполнитель': '3-слойная пена высокой плотности', 'Манжета': 'Широкая липучка' },
      en: { 'Material': 'Skintex Leather', 'Padding': 'Triple density foam', 'Closure': 'Wide velcro' },
      uz: { 'Material': 'Skintex charm', 'Toʻldiruvchi': '3 qatlamli zich koʻpik', 'Qulf': 'Keng yopishqoq' },
      kz: { 'Материал': 'Skintex былғары', 'Толтырғыш': '3 қабатты көбік', 'Манжета': 'Кең жабысқақ' }
    }
  },
  {
    id: 29,
    category: 'boxing',
    brand: 'Fairtex',
    price: 11990,
    oldPrice: 13990,
    discount: 14,
    rating: 5.0,
    reviewsCount: 89,
    inStock: true,
    stockLeft: 3,
    isHit: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    sizes: ['12 oz', '14 oz', '16 oz'],
    colors: ['Черный', 'Красный', 'Белый'],
    name: {
      ru: 'Перчатки для бокса и тайского бокса Fairtex BGV1',
      en: 'Fairtex BGV1 Genuine Leather Muay Thai / Boxing Gloves',
      uz: 'Fairtex BGV1 Haqiqiy Teri Muay-Tay va Boks Qoʻlqoplari',
      kz: 'Fairtex BGV1 Табиғи Былғары Муай-Тай және Бокс Қолғабы'
    },
    description: {
      ru: 'Ручная работа из Таиланда: натуральная воловья кожа премиум класса и эргономичный плотный хват.',
      en: 'Handmade in Thailand from genuine top-grain cowhide leather with compact all-purpose fit.',
      uz: 'Tailandda qoʻlda tikilgan, 100% tabiiy charmdan ishlangan professional boks va muay-tay qoʻlqopi.',
      kz: 'Тайландта табиғи сиыр терісінен қолмен тігілген кәсіби бокс қолғабы.'
    },
    specs: {
      ru: { 'Производство': 'Таиланд (Handmade)', 'Материал': '100% Натуральная кожа', 'Тип': 'Универсальные (Kick/Boxing)' },
      en: { 'Origin': 'Thailand (Handmade)', 'Material': '100% Genuine Leather', 'Type': 'All-purpose' },
      uz: { 'Ishlab chiqarilgan': 'Tailand (Qoʻlda)', 'Material': '100% Tabiiy charm', 'Turi': 'Universal' },
      kz: { 'Өндіріс': 'Тайланд (Қолдан)', 'Материал': '100% Табиғи былғары', 'Түрі': 'Әмбебап' }
    }
  },

  // ==========================================
  // 5. TENNIS & PADEL
  // ==========================================
  {
    id: 34,
    category: 'tennis',
    brand: 'Wilson',
    price: 26990,
    oldPrice: 31990,
    discount: 15,
    rating: 5.0,
    reviewsCount: 81,
    inStock: true,
    stockLeft: 3,
    isHit: true,
    isNew: true,
    image: '/images/nike_running.jpg',
    hoverImage: '/images/running_shoes_nike_1787046662634.jpg',
    sizes: ['L3 (4 3/8")', 'L2 (4 1/4")'],
    colors: ['Неоновый зеленый', 'Черный'],
    name: {
      ru: 'Теннисная ракетка Wilson Blade 98 V8 16x19',
      en: 'Wilson Blade 98 V8 16x19 Pro Performance Tennis Racket',
      uz: 'Wilson Blade 98 V8 16x19 Katta Tennis Raketkasi',
      kz: 'Wilson Blade 98 V8 16x19 Үлкен Теннис Ракеткасы'
    },
    description: {
      ru: 'Флагманская ракетка профессионального тура ATP/WTA с непревзойденным контролем и гибкостью FORTYFIVE°.',
      en: 'Top choice among ATP/WTA tour pros offering unmatched precision and flexible FORTYFIVE° carbon layup.',
      uz: 'ATP/WTA professional turlaridagi eng mashhur raketka. FORTYFIVE° uglerod texnologiyasi.',
      kz: 'Кәсіби ATP/WTA турларындағы ең танымал басқарылатын теннис ракеткасы.'
    },
    specs: {
      ru: { 'Площадь головы': '98 кв. дюймов (632 см²)', 'Вес': '305 г', 'Струнная формула': '16x19' },
      en: { 'Head Size': '98 sq in (632 cm²)', 'Weight': '305 g', 'String Pattern': '16x19' },
      uz: { 'Bosh maydoni': '98 kv. dyuym', 'Vazni': '305 g', 'Tor formulasi': '16x19' },
      kz: { 'Бас көлемі': '98 кв. дюйм', 'Салмағы': '305 г', 'Ішек формуласы': '16x19' }
    }
  },
  {
    id: 35,
    category: 'tennis',
    brand: 'Babolat',
    price: 25990,
    oldPrice: 29990,
    discount: 13,
    rating: 4.9,
    reviewsCount: 74,
    inStock: true,
    isHit: true,
    isNew: true,
    image: '/images/running_shoes_nike_1787046662634.jpg',
    hoverImage: '/images/nike_running.jpg',
    sizes: ['L3 (4 3/8")', 'L2 (4 1/4")'],
    colors: ['Синий', 'Черный'],
    name: {
      ru: 'Теннисная ракетка Babolat Pure Drive 2024',
      en: 'Babolat Pure Drive 2024 Explosive Power Tennis Racket',
      uz: 'Babolat Pure Drive 2024 Tennis Raketkasi',
      kz: 'Babolat Pure Drive 2024 Теннис Ракеткасы'
    },
    description: {
      ru: 'Легендарная взрывная мощность и вращение с технологией HTR System и виброгашением SWX Pure Feel.',
      en: 'Iconic power racquet providing explosive ball speed and dampening with SWX Pure Feel vibration tech.',
      uz: 'Kuchli zarbalar va toʻpni aylantirish uchun dunyoga mashhur Babolat Pure Drive modeli.',
      kz: 'Жойқын күш пен айналдыру беретін әлемге әйгілі Babolat теннис ракеткасы.'
    },
    specs: {
      ru: { 'Площадь головы': '100 кв. дюймов (645 см²)', 'Вес': '300 г', 'Баланс': '320 мм' },
      en: { 'Head Size': '100 sq in (645 cm²)', 'Weight': '300 g', 'Balance': '320 mm' },
      uz: { 'Bosh maydoni': '100 kv. dyuym', 'Vazni': '300 g', 'Balans': '320 mm' },
      kz: { 'Бас көлемі': '100 кв. дюйм', 'Салмағы': '300 г', 'Баланс': '320 мм' }
    }
  },

  // ==========================================
  // 6. FITNESS & GYM
  // ==========================================
  {
    id: 39,
    category: 'fitness',
    brand: 'Under Armour',
    price: 9990,
    oldPrice: 12500,
    discount: 20,
    rating: 5.0,
    reviewsCount: 112,
    inStock: true,
    stockLeft: 6,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    sizes: ['20 кг'],
    colors: ['Черный'],
    name: {
      ru: 'Набор гексагональных гантелей Hex Rubber Dumbbells 2x10kg',
      en: 'Hex Rubber Encased Professional Dumbbells Set (2x 10kg)',
      uz: 'Rezinalangan Geksagonal Gantellar Toʻplami (2x 10kg)',
      kz: 'Резеңкеленген Гексагоналды Гантельдер Жиынтығы (2х 10кг)'
    },
    description: {
      ru: 'Профессиональные шестигранные гантели с толстым слоем резины, не портящим напольное покрытие.',
      en: 'Commercial grade hex rubber dumbbells with ergonomic knurled chrome handles that won’t roll away.',
      uz: 'Polni tirnamaydigan va dumalab ketmaydigan rezina qoplamali professional gantellar.',
      kz: 'Еденді сырмайтын және домалап кетпейтін резеңкелі кәсіби гантельдер.'
    },
    specs: {
      ru: { 'Вес пары': '20 кг (2x 10 кг)', 'Форма': 'Шестигранная Anti-Roll', 'Рукоять': 'Хромированная с насечкой' },
      en: { 'Total Weight': '20 kg (2x 10 kg)', 'Shape': 'Anti-Roll Hexagonal', 'Grip': 'Ergonomic Chrome Knurled' },
      uz: { 'Umumiy vazn': '20 kg (2x 10 kg)', 'Shakli': 'Olti qirrali', 'Tutqich': 'Xromlangan' },
      kz: { 'Жалпы салмақ': '20 кг (2х 10 кг)', 'Пішіні': 'Алты қырлы', 'Тұтқасы': 'Хромдалған' }
    }
  },
  {
    id: 40,
    category: 'fitness',
    brand: 'Under Armour',
    price: 18990,
    oldPrice: 22990,
    discount: 17,
    rating: 5.0,
    reviewsCount: 68,
    inStock: true,
    stockLeft: 3,
    isHit: false,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=800&q=80',
    sizes: ['20 кг'],
    colors: ['Черный', 'Белый'],
    name: {
      ru: 'Олимпийский гриф для кроссфита и пауэрлифтинга 20kg Hard Chrome',
      en: 'Olympic Hard Chrome Barbell 20kg (CrossFit / Powerlifting 1500 lbs)',
      uz: 'Olimpiya Ogʻir Atletika Grifi 20kg Hard Chrome',
      kz: 'Олимпиадалық Ауыр Атлетика Грифі 20кг Hard Chrome'
    },
    description: {
      ru: 'Высокопрочная легированная сталь с нагрузкой до 700 кг, 8 игольчатых подшипников для плавного вращения.',
      en: 'Precision engineered alloy steel bar rated for 1500 lbs with 8 needle bearings for smooth spin.',
      uz: '700 kg gacha yuklamaga chidamli, 8 ta podshipnikli professional olimpiya shtanga grifi.',
      kz: '700 кг дейінгі жүктемеге төзімді, 8 подшипнигі бар кәсіби олимпиадалық гриф.'
    },
    specs: {
      ru: { 'Вес': '20 кг', 'Длина': '220 см (50 мм втулки)', 'Макс. нагрузка': '700 кг (1500 lbs)', 'Подшипники': '8 игольчатых' },
      en: { 'Weight': '20 kg', 'Length': '220 cm (50 mm sleeves)', 'Max Load': '700 kg (1,500 lbs)', 'Bearings': '8 Needle Bearings' },
      uz: { 'Vazni': '20 kg', 'Uzunligi': '220 sm', 'Yuklama': '700 kg gacha', 'Podshipnik': '8 ta ignali' },
      kz: { 'Салмағы': '20 кг', 'Ұзындығы': '220 см', 'Жүктеме': '700 кг дейін', 'Подшипниктер': '8 инелі' }
    }
  },

  // ==========================================
  // 7. CYCLING & OUTDOOR
  // ==========================================
  {
    id: 43,
    category: 'cycling',
    brand: 'Specialized',
    price: 19990,
    oldPrice: 23990,
    discount: 17,
    rating: 5.0,
    reviewsCount: 56,
    inStock: true,
    stockLeft: 4,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80',
    sizes: ['M (55-59cm)', 'L (59-63cm)'],
    colors: ['Белый', 'Черный'],
    name: {
      ru: 'Велосипедный шлем Specialized S-Works Prevail 3 MIPS',
      en: 'Specialized S-Works Prevail 3 MIPS Pro Road Cycling Helmet',
      uz: 'Specialized S-Works Prevail 3 MIPS Professional Veloshlem',
      kz: 'Specialized S-Works Prevail 3 MIPS Велосипед Шлемі'
    },
    description: {
      ru: 'Самый вентилируемый профессиональный шоссейный шлем в мире с карбоновым каркасом AirCage и защитой MIPS Node.',
      en: 'The ultimate ventilated performance road helmet engineered with carbon fiber AirCage and MIPS Node Air.',
      uz: 'Eng yengil va xavfsiz Specialized veloshlemi. AirCage uglerod karkasi va MIPS xavfsizlik tizimi.',
      kz: 'AirCage көміртекті каркасы және MIPS қорғанысы бар ең жеңіл кәсіби велошлем.'
    },
    specs: {
      ru: { 'Безопасность': 'MIPS Node Air (5 звезд Virginia Tech)', 'Каркас': 'Carbon AirCage', 'Вес': '280 г' },
      en: { 'Safety': 'MIPS Node Air (5-star Virginia Tech)', 'Chassis': 'Carbon AirCage', 'Weight': '280 g' },
      uz: { 'Xavfsizlik': 'MIPS Node Air (5 yulduz)', 'Karkas': 'Karbon AirCage', 'Vazni': '280 g' },
      kz: { 'Қауіпсіздік': 'MIPS Node Air', 'Каркас': 'Carbon AirCage', 'Салмағы': '280 г' }
    }
  },
  {
    id: 44,
    category: 'cycling',
    brand: 'Specialized',
    price: 14990,
    oldPrice: 17990,
    discount: 16,
    rating: 4.9,
    reviewsCount: 72,
    inStock: true,
    isHit: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&w=800&q=80',
    sizes: ['Универсальный'],
    colors: ['Черный', 'Красный'],
    name: {
      ru: 'Спортивные поляризационные очки Oakley Sutro Prizm Road',
      en: 'Oakley Sutro Prizm Road Shield Cycling Sunglasses',
      uz: 'Oakley Sutro Prizm Road Velosiped va Yugurish Koʻzoynagi',
      kz: 'Oakley Sutro Prizm Road Велоспорт және Спорттық Көзілдірігі'
    },
    description: {
      ru: 'Легендарные спортивные очки с монолинзой Prizm™ Road, повышающей контрастность дорожного покрытия.',
      en: 'Bold high-wrap shield sunglasses loaded with Prizm™ Road lenses to enhance color and detail on tarmac.',
      uz: 'Keng koʻrish burchagi va kontrastni kuchaytiruvchi Prizm Road linzalariga ega sport koʻzoynagi.',
      kz: 'Жолдағы көріністі айқындайтын Prizm Road линзалары бар әйгілі спорттық көзілдірік.'
    },
    specs: {
      ru: { 'Линза': 'Prizm™ Road (Светопропускание 20%)', 'Оправа': 'O Matter™ прочная и легкая', 'Носоупор': 'Unobtainium®' },
      en: { 'Lens': 'Prizm™ Road (20% VLT)', 'Frame': 'O Matter™ durable lightweight', 'Nosepads': 'Unobtainium®' },
      uz: { 'Linza': 'Prizm Road', 'Ramka': 'O Matter yengil', 'Burunlik': 'Unobtainium' },
      kz: { 'Линза': 'Prizm Road', 'Жиек': 'O Matter жеңіл', 'Мұрындық': 'Unobtainium' }
    }
  },

  // ==========================================
  // 8. SWIMMING & WATERSPORTS
  // ==========================================
  {
    id: 45,
    category: 'swimming',
    brand: 'Speedo',
    price: 7990,
    oldPrice: 9490,
    discount: 15,
    rating: 5.0,
    reviewsCount: 88,
    inStock: true,
    stockLeft: 4,
    isHit: true,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80',
    sizes: ['Универсальный'],
    colors: ['Синий', 'Золотой / Желтый', 'Черный'],
    name: {
      ru: 'Очки для плавания Speedo Fastskin Hyper Elite Mirror',
      en: 'Speedo Fastskin Hyper Elite Mirror FINA Approved Racing Goggles',
      uz: 'Speedo Fastskin Hyper Elite Koʻzguli Suzish Koʻzoynagi',
      kz: 'Speedo Fastskin Hyper Elite Айналы Жүзу Көзілдірігі'
    },
    description: {
      ru: 'Стартовые гидродинамические очки олимпийских чемпионов с технологией IQfit™ и зеркальными линзами.',
      en: 'Olympic championship winning racing goggles equipped with hydrodynamic profile and leak-free IQfit™ 3D seal.',
      uz: 'Olimpiada suzuvchilarining tanlovi. IQfit 3D germetik qistirma va suv qarshiligini kamaytiruvchi profil.',
      kz: 'Олимпиада чемпиондарының таңдауы. IQfit 3D тығыздағышы бар гидродинамикалық жүзу көзілдірігі.'
    },
    specs: {
      ru: { 'Сертификат': 'FINA Approved (World Aquatics)', 'Технология': 'IQfit™ 3D Seal', 'Линзы': 'Поликарбонат зеркальные с Anti-Fog' },
      en: { 'Approval': 'FINA Approved (World Aquatics)', 'Tech': 'IQfit™ 3D Seal', 'Lenses': 'Mirror Polycarbonate with Anti-Fog' },
      uz: { 'Sertifikat': 'FINA Approved', 'Texnologiya': 'IQfit 3D', 'Linzalar': 'Koʻzguli Anti-Fog' },
      kz: { 'Сертификат': 'FINA Approved', 'Технология': 'IQfit 3D', 'Линзалар': 'Айналы Anti-Fog' }
    }
  },
  {
    id: 46,
    category: 'swimming',
    brand: 'Arena',
    price: 8490,
    oldPrice: 9990,
    discount: 15,
    rating: 4.9,
    reviewsCount: 65,
    inStock: true,
    isHit: true,
    isNew: false,
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    sizes: ['Универсальный'],
    colors: ['Черный', 'Красный', 'Синий'],
    name: {
      ru: 'Стартовые очки Arena Cobra Ultra Swipe Mirror',
      en: 'Arena Cobra Ultra Swipe Mirror Racing Goggles',
      uz: 'Arena Cobra Ultra Swipe Koʻzguli Start Suzish Koʻzoynagi',
      kz: 'Arena Cobra Ultra Swipe Айналы Жарыс Жүзу Көзілдірігі'
    },
    description: {
      ru: 'Инновационная технология Swipe Anti-Fog восстанавливает защиту от запотевания одним движением пальца под водой.',
      en: 'Revolutionary Swipe Anti-Fog technology reactivates antifog coating with a simple finger swipe under water.',
      uz: 'Swipe texnologiyasi: linzani suv ostida barmoq bilan silash orqali tumanlashishga qarshi himoya tiklanadi.',
      kz: 'Swipe Anti-Fog технологиясы: су астында саусақпен сүрту арқылы булануға қарсы қабат жаңарады.'
    },
    specs: {
      ru: { 'Антифог': 'Swipe 10x Longer Anti-Fog', 'Одобрено': 'World Aquatics (FINA)', 'Носовые дужки': '5 сменных в комплекте' },
      en: { 'Anti-Fog': 'Swipe 10x Longer Anti-Fog', 'Approved': 'World Aquatics (FINA)', 'Nose bridges': '5 interchangeable included' },
      uz: { 'Anti-Fog': 'Swipe 10x uzoqroq', 'Sertifikat': 'FINA', 'Burunlik': '5 ta almashtiriladigan' },
      kz: { 'Антифог': 'Swipe 10x ұзағырақ', 'Бекітілген': 'FINA', 'Мұрындық': '5 алмалы қондырма' }
    }
  }
];
