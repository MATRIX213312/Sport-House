import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/products';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">S</span>
            </div>
            <span className="text-green-500 font-bold text-lg tracking-tight">
              SPORT<span className="text-white">HOUSE</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-500 max-w-xs">{t('heroDesc')}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('home')}</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><Link to="/" className="hover:text-green-500 transition-colors">{t('home')}</Link></li>
            <li><Link to="/about" className="hover:text-green-500 transition-colors">{t('about')}</Link></li>
            <li><Link to="/favorites" className="hover:text-green-500 transition-colors">{t('favorites')}</Link></li>
            <li><Link to="/cart" className="hover:text-green-500 transition-colors">{t('cart')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('catalog')}</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            {categories.filter((c) => c !== 'Все').map((cat) => (
              <li key={cat}>
                <Link to="/#catalog" className="hover:text-green-500 transition-colors">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('delivery')}</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>{t('freeShipping')}</li>
            <li>{t('return14')}</li>
            <li>{t('qualityGuarantee')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-6">
        <p className="text-center text-xs text-zinc-600">
          © {year} Sport House
        </p>
      </div>
    </footer>
  );
};

export default Footer;
