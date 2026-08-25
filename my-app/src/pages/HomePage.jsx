import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { sampleProducts, categories } from '../data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredProducts =
    activeCategory === 'Все'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-green-500/20 bg-gradient-to-br from-green-950/40 via-zinc-950 to-black">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-green-400 text-sm font-semibold uppercase tracking-[0.25em]">Sport House</p>
            <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {t('heroTitle')}
            </h1>
            <p className="mt-5 max-w-xl text-zinc-400 text-lg">
              {t('heroDesc')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#catalog"
                className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
              >
                {t('catalog')}
              </a>
              <Link
                to="/login"
                className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:border-green-500 hover:text-green-400 transition-colors"
              >
                {t('login')}
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {[
                [`${sampleProducts.length}+`, t('items')],
                [`${categories.length - 1}`, t('category')],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl md:text-3xl font-black text-white">{value}</p>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🚚', title: t('freeShipping'), desc: t('courierDesc') },
            { icon: '↩️', title: t('return14'), desc: '' },
            { icon: '🛡️', title: t('qualityGuarantee'), desc: '' },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-green-500/40 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 text-3xl">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-white font-bold text-lg">{feature.title}</h3>
              {feature.desc && <p className="mt-2 text-zinc-400 text-sm">{feature.desc}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{t('catalog')}</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-green-500 text-black'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 transition-all"
            >
              <Link to={`/product/${product.id}`} className="block relative h-48 bg-zinc-800 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {i < 2 && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-green-500 text-black text-xs font-bold rounded-full">
                    {t('hitBadge')}
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(product);
                  }}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isFavorite(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-black/60 text-gray-300 hover:bg-green-500 hover:text-black'
                  }`}
                >
                  <svg className="w-4 h-4" fill={isFavorite(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-white font-semibold mb-1 truncate hover:text-green-500 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className={`w-3.5 h-3.5 ${s < 4 ? 'text-yellow-400' : 'text-zinc-700'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-green-500 font-bold">{product.price.toLocaleString()} ₽</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-3 py-1.5 bg-green-500 text-black text-sm font-semibold rounded-lg hover:bg-green-400 transition-colors"
                  >
                    {t('addToCart')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
