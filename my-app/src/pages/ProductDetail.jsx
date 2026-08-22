import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useLanguage } from '../contexts/LanguageContext';
import { sampleProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  const product = sampleProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-2">{t('productNotFound')}</h2>
        <p className="text-gray-400 mb-6">{t('productNotFoundDesc')}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
        >
          {t('goToHome')}
        </button>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const relatedProducts = sampleProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({ ...product, size: selectedSize });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const reviews = [
    { id: 1, author: 'Алексей', rating: 5, date: '12.08.2026', text: 'Отличный товар! Качество на высоте, размер соответствует. Доставка быстрая.' },
    { id: 2, author: 'Мария', rating: 4, date: '08.08.2026', text: 'Хорошее качество, но чуть тесноват. В целом доволена покупкой.' },
    { id: 3, author: 'Дмитрий', rating: 5, date: '01.08.2026', text: 'Лучшие в своей категории. Рекомендую!' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-green-500 transition-colors">{t('home')}</Link>
        <span>/</span>
        <Link to="/" className="hover:text-green-500 transition-colors">{t('catalog')}</Link>
        <span>/</span>
        <span className="text-white">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div className="relative">
          <div className="bg-gray-900 border border-green-500/20 rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <button
            onClick={() => toggleFavorite(product)}
            className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isFavorite(product.id)
                ? 'bg-red-500 text-white'
                : 'bg-black/60 backdrop-blur text-gray-400 hover:bg-green-500 hover:text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill={isFavorite(product.id) ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <span className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-black text-sm font-bold rounded-full">
            {product.category}
          </span>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-400 text-sm">(12 {t('reviewsCount')})</span>
          </div>

          <p className="text-3xl font-bold text-green-500 mb-6">
            {product.price.toLocaleString()} ₽
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">{product.description}</p>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">{t('selectSize')}</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-green-500 text-black'
                      : 'bg-gray-900 border border-gray-700 text-gray-300 hover:border-green-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-3">{t('quantity')}</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-700 text-white flex items-center justify-center hover:border-green-500 transition-colors"
              >
                −
              </button>
              <span className="w-12 text-center text-white font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-700 text-white flex items-center justify-center hover:border-green-500 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
                addedToCart
                  ? 'bg-green-400 text-black'
                  : 'bg-green-500 text-black hover:bg-green-400'
              }`}
            >
              {addedToCart ? t('added') : t('addToCart')}
            </button>
            <button
              onClick={() => toggleFavorite(product)}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                isFavorite(product.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-900 border border-gray-700 text-gray-400 hover:border-green-500 hover:text-green-500'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill={isFavorite(product.id) ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: '🚚', label: t('freeShipping') },
              { icon: '↩️', label: t('return14') },
              { icon: '🛡️', label: t('qualityGuarantee') },
              { icon: '💳', label: t('safePayment') },
            ].map((feature) => (
              <div key={feature.label} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                <span className="text-xl">{feature.icon}</span>
                <span className="text-gray-300 text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-12">
        <div className="flex gap-4 border-b border-gray-800 mb-6">
          {[
            { id: 'description', label: t('description') },
            { id: 'reviews', label: `${t('reviews')} (${reviews.length})` },
            { id: 'delivery', label: t('delivery') },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-500'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'description' && (
          <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">{product.description}</p>
            <ul className="space-y-2 text-gray-400">
              <li>• {t('category')}: {product.category}</li>
              <li>• {t('brand')}: Sport House</li>
              <li>• {t('season')}: Всесезонный</li>
              <li>• {t('country')}: Китай</li>
              <li>• {t('article')}: SH-{product.id}00{product.id}</li>
            </ul>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold">{review.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{review.author}</h4>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{review.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'delivery' && (
          <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { icon: '🚚', title: t('courier'), desc: t('courierDesc'), price: t('free') },
                { icon: '📦', title: t('pickup'), desc: t('pickupDesc'), price: t('free') },
                { icon: '⚡', title: t('express'), desc: t('expressDesc'), price: '500 ₽' },
              ].map((option) => (
                <div key={option.title} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <h4 className="text-white font-medium">{option.title}</h4>
                      <p className="text-gray-400 text-sm">{option.desc}</p>
                    </div>
                  </div>
                  <span className="text-green-500 font-medium">{option.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">{t('relatedProducts')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="bg-gray-900 border border-green-500/20 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all"
              >
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-1 truncate">{p.name}</h3>
                  <span className="text-green-500 font-bold">{p.price.toLocaleString()} ₽</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
