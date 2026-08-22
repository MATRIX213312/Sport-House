import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, register, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) navigate('/profile');
  }, [isAuthenticated, navigate]);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!loginForm.email || !loginForm.password) {
      setError(t('fillAllFields'));
      return;
    }

    const success = login(loginForm.email, loginForm.password);
    if (success) {
      navigate('/profile');
    } else {
      setError(t('wrongCredentials'));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!registerForm.name || !registerForm.email || !registerForm.password) {
      setError(t('fillAllFields'));
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError(t('passwordsMismatch'));
      return;
    }

    if (registerForm.password.length < 6) {
      setError(t('passwordTooShort'));
      return;
    }

    const success = register(registerForm.name, registerForm.email, registerForm.password);
    if (success) {
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-3xl">S</span>
          </div>
          <h1 className="text-2xl font-bold text-white">SPORTHOUSE</h1>
          <p className="text-gray-400 text-sm mt-1">{t('loginSubtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-900 rounded-xl p-1 mb-6">
          <button
            onClick={() => { setActiveTab('login'); setError(''); }}
            className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'login'
                ? 'bg-green-500 text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {t('signInTab')}
          </button>
          <button
            onClick={() => { setActiveTab('register'); setError(''); }}
            className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'register'
                ? 'bg-green-500 text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {t('registerTab')}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Login Form */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('email')}</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('password')}</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm((p) => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? '🙈' : '👁'}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />
                <span className="text-sm text-gray-400">{t('rememberMe')}</span>
              </label>
              <button type="button" className="text-sm text-green-500 hover:text-green-400">
                {t('forgotPassword')}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              {t('signIn')}
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('fullName')}</label>
              <input
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm((p) => ({ ...p, name: e.target.value }))}
                placeholder={t('namePlaceholder')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('email')}</label>
              <input
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('password')}</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={registerForm.password}
                onChange={(e) => setRegisterForm((p) => ({ ...p, password: e.target.value }))}
                placeholder={t('minChars')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t('confirmPassword')}</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={registerForm.confirmPassword}
                onChange={(e) => setRegisterForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                placeholder={t('confirmPassword')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="flex items-start gap-2">
                <input type="checkbox" required className="mt-1 accent-green-500" />
                <span className="text-sm text-gray-400">
                  {t('agreeTerms')} <span className="text-green-500">{t('terms')}</span> {' '}
                  <span className="text-green-500">{t('privacy')}</span>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors"
            >
              {t('createAccount')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
