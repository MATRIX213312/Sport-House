import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

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
    </div>
  );
};

export default HomePage;
