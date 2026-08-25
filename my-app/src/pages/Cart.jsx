import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { formatPrice } from '../utils/currency';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { t, language } = useLanguage();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{t('cartEmpty')}</h2>
        <p className="text-gray-400 mb-6">{t('cartEmptyDesc')}</p>
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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">{t('cartTitle')}</h1>
        <button
          onClick={clearCart}
          className="text-sm text-gray-400 hover:text-red-400 transition-colors"
        >
          {t('clearCart')}
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 border border-green-500/20 rounded-xl p-4 flex items-center gap-4"
          >
            {/* Image */}
            <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-green-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold truncate">{item.name}</h3>
              <p className="text-green-500 font-bold">{formatPrice(item.price, language)}</p>
              {item.size && <p className="text-gray-400 text-sm">{t('size')}: {item.size}</p>}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-lg bg-gray-800 text-white flex items-center justify-center hover:bg-green-500 hover:text-black transition-colors"
              >
                −
              </button>
              <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-lg bg-gray-800 text-white flex items-center justify-center hover:bg-green-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>

            {/* Total & Remove */}
            <div className="text-right">
              <p className="text-white font-bold mb-1">
                {formatPrice(item.price * item.quantity, language)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                {t('remove')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gray-900 border border-green-500/20 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">{t('items')}: {cartItems.reduce((s, i) => s + i.quantity, 0)}</span>
          <span className="text-gray-400">{t('delivery')}: <span className="text-green-500">{t('free')}</span></span>
        </div>
        <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-800">
          <span className="text-xl font-bold text-white">{t('total')}</span>
          <span className="text-2xl font-bold text-green-500">{formatPrice(getTotalPrice(), language)}</span>
        </div>
        <Link
          to="/checkout"
          className="block w-full py-3 bg-green-500 text-black font-bold text-center rounded-lg hover:bg-green-400 transition-colors"
        >
          {t('checkout')}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
