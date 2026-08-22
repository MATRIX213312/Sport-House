import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const { t } = useLanguage();

  if (favorites.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{t('noFavorites')}</h2>
        <p className="text-gray-400 mb-6">{t('noFavoritesDesc')}</p>
        <Link
          to="/"
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
        >
          {t('home')}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">{t('favoritesTitle')}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="block bg-gray-900 border border-green-500/20 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all"
          >
            {/* Image */}
            <div className="relative h-48 bg-gray-800 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(item); }}
                className="absolute top-3 right-3 w-9 h-9 bg-black/60 backdrop-blur rounded-full flex items-center justify-center transition-colors hover:bg-red-500 z-10"
              >
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1 truncate">{item.name}</h3>
              <p className="text-green-500 font-bold text-lg mb-3">{item.price.toLocaleString()} ₽</p>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(item); }}
                className="w-full py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors z-10"
              >
                {t('addToCart')}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
