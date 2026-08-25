import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { formatPrice } from '../utils/currency';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const [form, setForm] = useState({
    firstName: user?.name || '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    comment: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderNumber(`SH${Math.floor(Math.random() * 90000 + 10000)}`);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{t('orderPlaced')}</h2>
        <p className="text-gray-400 mb-6">{t('orderNumber')} #{orderNumber}</p>
        <p className="text-gray-400 mb-6">{t('confirmationSent')} {form.email}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
        >
          {t('continueShopping')}
        </button>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-2">{t('cartEmpty')}</h2>
        <p className="text-gray-400">{t('addProductsFirst')}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">{t('checkoutTitle')}</h1>

      {/* Steps indicator */}
      <div className="flex items-center gap-4 mb-8">
        {[t('delivery'), t('payment'), t('confirm')].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step > i + 1
                  ? 'bg-green-500 text-black'
                  : step === i + 1
                  ? 'bg-green-500/20 text-green-500 border border-green-500'
                  : 'bg-gray-800 text-gray-500'
              }`}
            >
              {step > i + 1 ? '✓' : i + 1}
            </div>
            <span className={`text-sm ${step === i + 1 ? 'text-white' : 'text-gray-500'}`}>
              {label}
            </span>
            {i < 2 && <div className="w-8 h-px bg-gray-700" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Delivery */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{t('contactInfo')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">{t('firstName')}</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">{t('lastName')}</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">{t('email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">{t('phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery method */}
                <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{t('deliveryMethod')}</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'delivery', label: t('courier'), desc: t('courierDesc'), price: t('free') },
                      { id: 'pickup', label: t('pickup'), desc: t('pickupDesc'), price: t('free') },
                      { id: 'express', label: t('express'), desc: t('expressDesc'), price: formatPrice(500, language) },
                    ].map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                          deliveryMethod === option.id
                            ? 'border-green-500 bg-green-500/5'
                            : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              deliveryMethod === option.id ? 'border-green-500' : 'border-gray-600'
                            }`}
                          >
                            {deliveryMethod === option.id && (
                              <div className="w-3 h-3 bg-green-500 rounded-full" />
                            )}
                          </div>
                          <div>
                            <div className="text-white font-medium">{option.label}</div>
                            <div className="text-gray-400 text-sm">{option.desc}</div>
                          </div>
                        </div>
                        <span className="text-green-500 font-medium">{option.price}</span>
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={deliveryMethod === option.id}
                          onChange={(e) => setDeliveryMethod(e.target.value)}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Address */}
                {deliveryMethod !== 'pickup' && (
                  <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4">{t('deliveryAddress')}</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">{t('city')}</label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">{t('address')}</label>
                        <input
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          required
                          placeholder={t('streetPlaceholder')}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
                >
                  {t('next')}
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{t('paymentMethod')}</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'card', label: t('bankCard'), icon: '💳' },
                      { id: 'cash', label: t('cashOnDelivery'), icon: '💵' },
                      { id: 'sbp', label: t('sbp'), icon: '📱' },
                    ].map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                          paymentMethod === option.id
                            ? 'border-green-500 bg-green-500/5'
                            : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === option.id ? 'border-green-500' : 'border-gray-600'
                          }`}
                        >
                          {paymentMethod === option.id && (
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                          )}
                        </div>
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-white font-medium">{option.label}</span>
                        <input
                          type="radio"
                          name="payment"
                          value={option.id}
                          checked={paymentMethod === option.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {t('back')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
                  >
                    {t('next')}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{t('yourOrder')}</h3>

                  <div className="space-y-3 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">
                          {item.name} × {item.quantity}
                        </span>
                        <span className="text-white font-medium">
                          {formatPrice(item.price * item.quantity, language)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{t('delivery')}</span>
                      <span className="text-green-500">
                        {deliveryMethod === 'express' ? formatPrice(500, language) : t('free')}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{t('payment')}</span>
                      <span className="text-white">
                        {paymentMethod === 'card' && t('bankCard')}
                        {paymentMethod === 'cash' && t('cashOnDelivery')}
                        {paymentMethod === 'sbp' && t('sbp')}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{t('recipient')}</span>
                      <span className="text-white">{form.firstName} {form.lastName}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-2 mb-4">
                    <input type="checkbox" required className="mt-1 accent-green-500" />
                    <span className="text-sm text-gray-400">
                      {t('agreeTerms')} <span className="text-green-500">{t('offerTerms')}</span> {' '}
                      <span className="text-green-500">{t('privacy')}</span>
                    </span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {t('back')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
                  >
                    {t('confirmOrder')}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Sidebar summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6 sticky top-24">
            <h3 className="text-lg font-bold text-white mb-4">{t('total')}</h3>
            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : null}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm truncate">{item.name}</p>
                    <p className="text-gray-400 text-xs">× {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{t('items')}</span>
                <span className="text-white">{cartItems.reduce((s, i) => s + i.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t('delivery')}</span>
                <span className="text-green-500 text-sm">
                  {deliveryMethod === 'express' ? '500 ₽' : t('free')}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-700">
                <span className="text-lg font-bold text-white">{t('total')}</span>
                <span className="text-xl font-bold text-green-500">
                  {formatPrice(getTotalPrice() + (deliveryMethod === 'express' ? 500 : 0), language)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
