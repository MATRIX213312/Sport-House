import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { sampleProducts, categories } from '../data/products';

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
      <section className="border-b border-green-500/20 bg-gradient-to-br from-green-950/40 via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-[0.25em]">Sport House</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-black tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="mt-5 max-w-xl text-zinc-400 text-lg">
            {t('heroDesc')}
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
            >
              {t('login')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🚚', title: t('freeShipping'), desc: t('courierDesc') },
            { icon: '↩️', title: t('return14'), desc: '' },
            { icon: '🛡️', title: t('qualityGuarantee'), desc: '' },
          ].map((feature) => (
            <div key={feature.title} className="text-center p-8 bg-zinc-900 rounded-xl border border-zinc-800">
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="mt-4 text-white font-bold text-lg">{feature.title}</h3>
              {feature.desc && <p className="mt-2 text-zinc-400 text-sm">{feature.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section className="max-w-7xl mx-auto px-4 py-16">
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
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all"
            >
              <Link to={`/product/${product.id}`} className="block relative h-48 bg-zinc-800 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
