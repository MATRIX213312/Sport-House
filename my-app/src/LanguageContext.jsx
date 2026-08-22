import { createContext, useContext, useState, useCallback } from 'react'
import translations from './i18n'

const LanguageContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext)

const LANGUAGES = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
]

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('sportmarket-lang') || 'ru'
    } catch {
      return 'ru'
    }
  })

  const setLanguage = useCallback((newLang) => {
    setLang(newLang)
    try {
      localStorage.setItem('sportmarket-lang', newLang)
    } catch { /* ignore */ }
  }, [])

  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] || translations.ru[key] || key
    },
    [lang]
  )

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  return (
    <LanguageContext.Provider value={{ lang, t, setLanguage, currentLang, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

// ===== Language Switcher Dropdown =====
export const LanguageSwitcher = () => {
  const { lang, setLanguage, currentLang, LANGUAGES } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)

  const handleSelect = (code) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 bg-black/80 backdrop-blur-md rounded-full border border-green-500/30 shadow-lg hover:shadow-green-500/20 transition-all hover:border-green-400/50 px-4 py-2.5"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-bold text-green-400 tracking-wide">{currentLang.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-green-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full right-0 mt-2 z-50 bg-black/90 backdrop-blur-xl rounded-2xl border border-green-500/30 shadow-2xl shadow-green-500/10 overflow-hidden min-w-[160px]">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  lang === l.code
                    ? 'bg-green-500/20 text-green-300'
                    : 'text-slate-300 hover:bg-green-500/10 hover:text-green-200'
                }`}
              >
                <span className="text-lg">{l.flag}</span>
                <span className="text-sm font-semibold">{l.label}</span>
                {lang === l.code && (
                  <svg className="w-4 h-4 text-green-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
