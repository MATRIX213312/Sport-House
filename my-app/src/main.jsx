import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider, LanguageSwitcher } from './LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <LanguageSwitcher />
      <App />
    </LanguageProvider>
  </StrictMode>,
)
