import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'uz', label: 'UZ', flag: '🇺🇿' },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { favorites } = useFavorites();
  const { user, logout, isAuthenticated } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const currentLang = languages.find((l) => l.code === language);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/favorites', label: t('favorites') },
    { to: '/cart', label: t('cart') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-black border-b border-green-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">S</span>
          </div>
          <span className="text-green-500 font-bold text-xl tracking-tight">
            SPORT<span className="text-white">HOUSE</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'text-green-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {link.to === '/cart' && getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-4 bg-green-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
              {link.to === '/favorites' && favorites.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-green-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right side: Language + Auth */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 hover:border-green-500 transition-colors text-sm"
            >
              <span>{currentLang.flag}</span>
              <span className="text-white font-medium">{currentLang.label}</span>
              <svg
                className={`w-3 h-3 text-gray-400 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden min-w-[120px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                      language === lang.code
                        ? 'bg-green-500/10 text-green-500'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                    {language === lang.code && (
                      <svg className="w-4 h-4 ml-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link
                to="/profile"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover border-2 border-green-500"
                  />
                ) : (
                  <div className="w-full h-full bg-green-500 flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </Link>
              <button
                onClick={() => { logout(); navigate('/'); }}
                title={t('logout')}
                className="hidden md:flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden lg:inline">{t('logout')}</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/login')
                  ? 'bg-green-500 text-black'
                  : 'bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-black'
              }`}
            >
              {t('login')}
            </Link>
          )}
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex justify-around border-t border-green-500/20 py-2">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative flex flex-col items-center text-xs ${
              isActive(link.to) ? 'text-green-500' : 'text-gray-500'
            }`}
          >
            <span>{link.label}</span>
            {link.to === '/cart' && getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-500 text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
