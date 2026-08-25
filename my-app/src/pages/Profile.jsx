import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { formatPrice } from '../utils/currency';

const formatUzbekPhone = (value) => {
  const digits = value.replace(/\D/g, '').replace(/^998/, '').slice(0, 9);
  let formatted = '+998';

  if (digits.length > 0) formatted += ` (${digits.slice(0, 2)}`;
  if (digits.length >= 2) formatted += ')';
  if (digits.length > 2) formatted += ` ${digits.slice(2, 5)}`;
  if (digits.length > 5) formatted += `-${digits.slice(5, 7)}`;
  if (digits.length > 7) formatted += `-${digits.slice(7, 9)}`;

  return formatted;
};

const Profile = () => {
  const { user, updateProfile, logout, deleteAccount, isAuthenticated } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  const [editMode, setEditMode] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: formatUzbekPhone(user?.phone || ''),
    address: user?.address || '',
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{t('loginRequired')}</h2>
        <p className="text-gray-400 mb-6">{t('loginRequiredDesc')}</p>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
        >
          {t('login')}
        </button>
      </div>
    );
  }

  const handleSave = () => {
    updateProfile(form);
    setEditMode(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteAccount = () => {
    deleteAccount();
    navigate('/');
  };

  const menuItems = [
    { id: 'info', label: t('personalInfo'), icon: '👤' },
    { id: 'orders', label: t('orderHistory'), icon: '📦' },
    { id: 'settings', label: t('settings'), icon: '⚙️' },
  ];

  // Sample order history
  const orders = [
    {
      id: 'SH48291',
      date: '15.08.2026',
      status: t('delivered'),
      total: 12490,
      items: [
        { name: 'Кроссовки Nike Air Max', quantity: 1, price: 8990 },
        { name: 'Футболка Sport House', quantity: 1, price: 3500 },
      ],
    },
    {
      id: 'SH47832',
      date: '02.08.2026',
      status: t('inTransit'),
      total: 5990,
      items: [{ name: 'Шорты Adidas Performance', quantity: 1, price: 5990 }],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* User card */}
          <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6 mb-4">
            <div className="flex flex-col items-center text-center">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mb-3 border-2 border-green-500"
                />
              ) : (
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-black font-bold text-2xl">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <h2 className="text-white font-bold break-all">{user.name}</h2>
              <p className="text-gray-400 text-xs break-all mt-1">{user.email}</p>
            </div>
          </div>

          {/* Menu */}
          <div className="bg-gray-900 border border-green-500/20 rounded-xl p-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-green-500/10 text-green-500'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
            <div className="border-t border-gray-700 mt-2 pt-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <span>🚪</span>
                <span className="text-sm font-medium">{t('logout')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {/* Personal Info */}
          {activeTab === 'info' && (
            <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{t('personalInfo')}</h3>
                <button
                  onClick={() => (editMode ? handleSave() : setEditMode(true))}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    editMode
                      ? 'bg-green-500 text-black hover:bg-green-400'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {editMode ? t('save') : t('edit')}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t('name')}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    disabled={!editMode}
                    className={`w-full px-4 py-3 rounded-lg text-white transition-colors ${
                      editMode
                        ? 'bg-gray-800 border border-green-500 focus:outline-none'
                        : 'bg-gray-800/50 border border-gray-700'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t('email')}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    disabled={!editMode}
                    className={`w-full px-4 py-3 rounded-lg text-white transition-colors ${
                      editMode
                        ? 'bg-gray-800 border border-green-500 focus:outline-none'
                        : 'bg-gray-800/50 border border-gray-700'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t('phone')}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: formatUzbekPhone(e.target.value) }))}
                    disabled={!editMode}
                    onFocus={(e) => setForm((p) => ({ ...p, phone: formatUzbekPhone(e.target.value) }))}
                    placeholder={editMode ? '+998 (__) ___-__-__' : t('notSpecified')}
                    className={`w-full px-4 py-3 rounded-lg text-white transition-colors ${
                      editMode
                        ? 'bg-gray-800 border border-green-500 focus:outline-none'
                        : 'bg-gray-800/50 border border-gray-700'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t('address')}</label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                    disabled={!editMode}
                    placeholder={editMode ? t('addressPlaceholder') : t('notSpecified')}
                    className={`w-full px-4 py-3 rounded-lg text-white transition-colors ${
                      editMode
                        ? 'bg-gray-800 border border-green-500 focus:outline-none'
                        : 'bg-gray-800/50 border border-gray-700'
                    }`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Orders */}
          {activeTab === 'orders' && (
            <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">{t('orderHistory')}</h3>

              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400">{t('noOrders')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-gray-800 border border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-white font-bold">#{order.id}</span>
                          <span className="text-gray-400 text-sm ml-3">{order.date}</span>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === t('delivered')
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-1 mb-3">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-300">
                              {item.name} × {item.quantity}
                            </span>
                            <span className="text-white">{formatPrice(item.price, language)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                        <span className="text-gray-400 text-sm">{t('orderTotal')}</span>
                        <span className="text-green-500 font-bold">{formatPrice(order.total, language)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Settings */}
          {activeTab === 'settings' && (
            <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">{t('settings')}</h3>

              <div className="space-y-6">
                {/* Notifications */}
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">{t('notifications')}</h4>
                    <p className="text-gray-400 text-sm">{t('notificationsDesc')}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium">{t('mailing')}</h4>
                    <p className="text-gray-400 text-sm">{t('mailingDesc')}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                {/* Language */}
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h4 className="text-white font-medium mb-3">{t('language')}</h4>
                  <div className="flex gap-2">
                    {[
                      { code: 'ru', label: 'Русский', flag: '🇷🇺' },
                      { code: 'en', label: 'English', flag: '🇬🇧' },
                      { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          language === lang.code
                            ? 'bg-green-500 text-black'
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Danger zone */}
                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <h4 className="text-red-400 font-medium mb-2">{t('deleteAccount')}</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {t('deleteAccountDesc')}
                  </p>
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500/30 transition-colors"
                  >
                    {t('deleteAccountBtn')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 border border-red-500/30 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{t('deleteAccount')}</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{t('deleteAccountConfirm')}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                {t('cancel')}
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 py-2.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                {t('confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
