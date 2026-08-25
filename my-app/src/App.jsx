import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Checkout from './pages/Checkout';
import LoginRegister from './pages/LoginRegister';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './AboutPage';

const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <div className="min-h-screen bg-black text-white flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<LoginRegister />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </FavoritesProvider>
      </CartProvider>
      </LanguageProvider>
    </AuthProvider>
  );
};



export default App;
