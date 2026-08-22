import React, { useState, useMemo, useEffect } from 'react';
import {
  Search, ShoppingBag, Heart, SlidersHorizontal, Flame, Truck, Zap, Filter,
  RotateCcw, Check, ChevronDown, ChevronUp, Sparkles, LayoutGrid, Grid3X3, List,
  X, Star, Eye, ShoppingCart, ShieldCheck, Trash2, ArrowRight, Tag, PackageSearch,
  Globe, Clock, Award, PhoneCall, Mail, ChevronRight, ChevronLeft, HelpCircle, CheckCircle2,
  Percent, CreditCard, Send, Layers, ThumbsUp, Copy, CheckCheck
} from 'lucide-react';

import { translations, formatPrice } from '../data/translations';
import {
  categoriesData,
  heroSlidesData,
  storyHighlights,
  brandsList,
  sizesList,
  colorOptions,
  productsData
} from '../data/products';

// Available Languages
const languages = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺', short: 'RU' },
  { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿', short: 'UZ' },
  { code: 'kz', label: 'Қазақша', flag: '🇰🇿', short: 'KZ' }
];

export default function Diyor() {
  // 1. Language state
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('sporthouse_lang') || 'ru';
  });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = useMemo(() => {
    return translations[lang] || translations.ru;
  }, [lang]);

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('sporthouse_lang', newLang);
    setIsLangDropdownOpen(false);
  };

  // 2. Hero Slide index & Auto-play
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 3. Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 35000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyDiscount, setOnlyDiscount] = useState(false);
  const [quickTab, setQuickTab] = useState('all'); // 'all' | 'hits' | 'new' | 'discount' | 'topRated'

  // 4. Sorting & Layout
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid4'); // 'grid4' | 'grid3' | 'list'

  // 5. Interactive Cart & Wishlist (with LocalStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('sporthouse_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('sporthouse_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [copiedCoupon, setCopiedCoupon] = useState('');

  // 6. Accordions
  const [brandSearch, setBrandSearch] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);

  // 7. Promo & Checkout
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [lastOrderId, setLastOrderId] = useState('');

  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    payment: 'card'
  });

  // 8. Newsletter
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // 9. Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 38, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 8, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Save Cart and Wishlist
  useEffect(() => {
    localStorage.setItem('sporthouse_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('sporthouse_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Toast Notification Trigger
  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCopyCoupon = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCoupon(code);
    setPromoCode(code);
    showToast('cart', 'Промокод скопирован!', `Код ${code} добавлен для скидки.`);
    setTimeout(() => setCopiedCoupon(''), 2500);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange([0, 35000]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setOnlyInStock(false);
    setOnlyDiscount(false);
    setQuickTab('all');
  };

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (searchQuery.trim() !== '') count++;
    if (priceRange[0] > 0 || priceRange[1] < 35000) count++;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (selectedSizes.length > 0) count += selectedSizes.length;
    if (selectedColors.length > 0) count += selectedColors.length;
    if (onlyInStock) count++;
    if (onlyDiscount) count++;
    if (quickTab !== 'all') count++;
    return count;
  }, [
    selectedCategory, searchQuery, priceRange, selectedBrands,
    selectedSizes, selectedColors, onlyInStock, onlyDiscount, quickTab
  ]);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((item) => {
        // Quick Tabs
        if (quickTab === 'hits' && !item.isHit) return false;
        if (quickTab === 'new' && !item.isNew) return false;
        if (quickTab === 'discount' && (!item.discount || item.discount < 15)) return false;
        if (quickTab === 'topRated' && item.rating < 4.9) return false;

        // Category
        if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

        // Search Query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const nameRu = item.name.ru?.toLowerCase() || '';
          const nameEn = item.name.en?.toLowerCase() || '';
          const nameUz = item.name.uz?.toLowerCase() || '';
          const nameKz = item.name.kz?.toLowerCase() || '';
          const brand = item.brand.toLowerCase();
          const category = item.category.toLowerCase();

          const matches = nameRu.includes(q) || nameEn.includes(q) || nameUz.includes(q) || nameKz.includes(q) || brand.includes(q) || category.includes(q);
          if (!matches) return false;
        }

        // Price
        if (item.price < priceRange[0] || item.price > priceRange[1]) return false;

        // Brands
        if (selectedBrands.length > 0 && !selectedBrands.includes(item.brand)) return false;

        // Sizes
        if (selectedSizes.length > 0 && !item.sizes?.some((s) => selectedSizes.includes(s))) return false;

        // Colors
        if (selectedColors.length > 0 && !item.colors?.some((c) => selectedColors.includes(c))) return false;

        // Stock & Discount
        if (onlyInStock && !item.inStock) return false;
        if (onlyDiscount && (!item.discount || item.discount <= 0)) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'discount') return (b.discount || 0) - (a.discount || 0);
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return (b.isHit ? 1 : 0) - (a.isHit ? 1 : 0);
      });
  }, [
    selectedCategory, searchQuery, priceRange, selectedBrands,
    selectedSizes, selectedColors, onlyInStock, onlyDiscount, quickTab, sortBy
  ]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: productsData.length };
    productsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Cart calculations
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cartItems]);

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discountAmount;
  const freeShippingThreshold = 5000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Cart operations
  const handleAddToCart = (product, size = '', quantity = 1, color = '') => {
    const actualSize = size || product.sizes?.[0] || '';
    const actualColor = color || product.colors?.[0] || '';

    setCartItems((prev) => {
      const idx = prev.findIndex(
        (item) => item.product.id === product.id && item.size === actualSize && item.color === actualColor
      );

      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, size: actualSize, color: actualColor, quantity }];
      }
    });

    const productName = product.name[lang] || product.name.ru;
    showToast('cart', t.toastCartAdded, `${productName} (${actualSize})`);
  };

  const handleUpdateQuantity = (productId, size, color, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId, size, color);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId, size, color) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size && item.color === color))
    );
  };

  const handleToggleFavorite = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    const productName = product.name[lang] || product.name.ru;
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      showToast('wishlist', t.toastWishlistRemoved, productName);
    } else {
      setWishlist([...wishlist, product]);
      showToast('wishlist', t.toastWishlistAdded, productName);
    }
  };

  const handleMoveAllWishlistToCart = () => {
    wishlist.forEach((item) => {
      handleAddToCart(item, item.sizes?.[0] || '');
    });
    setWishlist([]);
    showToast('cart', t.addedToCart, `${wishlist.length} ${t.productsFound}`);
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'SPORT10' || code === 'START10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      setPromoError('');
    } else if (code === 'VIP20' || code === 'SUPER20') {
      setDiscountPercent(20);
      setPromoApplied(true);
      setPromoError('');
    } else if (code === 'CHAMPION30') {
      setDiscountPercent(30);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError(t.promoInvalid);
    }
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const genId = 'SP-' + Math.floor(100000 + Math.random() * 900000);
    setLastOrderId(genId);
    setOrderSuccess(true);
    setCartItems([]);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const filteredBrandsList = brandsList.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const getGridClass = () => {
    if (viewMode === 'list') return 'grid grid-cols-1 gap-4';
    if (viewMode === 'grid3') return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
    return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6';
  };

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-emerald-500 selection:text-black pb-20 lg:pb-0">
      
      {/* -------------------------------------------------------------
          1. TOP ANNOUNCEMENT BAR (GREEN & BLACK)
      ------------------------------------------------------------- */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-500 text-black text-xs font-black px-4 py-1.5 shadow-lg shadow-emerald-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 bg-black text-emerald-400 px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 animate-pulse" />
              HOT DEALS
            </span>
            <span className="tracking-wide text-black">{t.topPromo}</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] font-extrabold opacity-95 shrink-0 text-black">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" />
              {t.freeShippingNotice}
            </span>
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" />
              {t.phoneSupport}
            </span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. MAIN STICKY HEADER (PITCH BLACK & NEON EMERALD)
      ------------------------------------------------------------- */}
      <header className="bg-zinc-950/95 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div
            onClick={handleResetFilters}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-green-500 to-lime-400 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Flame className="w-6 h-6 text-black fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase italic">
                  SPORT<span className="text-emerald-400">HOUSE</span>
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-1.5 py-0.5 rounded-md border border-emerald-500/30">
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-medium tracking-wide uppercase hidden sm:block">
                {t.catalogSubtitle}
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl relative hidden md:block">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3.5 text-zinc-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-zinc-900/90 border border-zinc-800 text-slate-100 placeholder-zinc-500 text-xs sm:text-sm rounded-full pl-10 pr-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-zinc-400 hover:text-white bg-zinc-800 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action Icons & Language Selector */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer hover:border-emerald-500/50"
              >
                <span className="text-base leading-none">{currentLangObj.flag}</span>
                <span className="hidden sm:inline-block font-extrabold">{currentLangObj.short}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-1.5 z-50 animate-fadeIn">
                  <div className="text-[10px] font-bold text-zinc-400 px-3 py-1.5 uppercase tracking-wider border-b border-zinc-800 mb-1 flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    Язык / Language
                  </div>
                  {languages.map((item) => {
                    const isSelected = item.code === lang;
                    return (
                      <button
                        key={item.code}
                        onClick={() => handleLanguageChange(item.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                          isSelected
                            ? 'bg-emerald-500 text-black font-black'
                            : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{item.flag}</span>
                          <span>{item.label}</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 text-slate-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition flex items-center gap-2 group cursor-pointer hover:border-emerald-500/50"
              title={t.favorites}
            >
              <Heart className={`w-5 h-5 transition-colors ${wishlist.length > 0 ? 'fill-emerald-500 text-emerald-500' : 'group-hover:text-emerald-400'}`} />
              <span className="hidden sm:inline-block text-xs font-bold">{t.favorites}</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 group transform active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline-block text-xs font-black uppercase tracking-wider">{t.cart}</span>
              {totalCartCount > 0 && (
                <span className="bg-black text-emerald-400 text-xs font-black px-2 py-0.5 rounded-full shadow">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="px-4 pb-3 md:hidden">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-3.5 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-zinc-900 border border-zinc-800 text-slate-100 placeholder-zinc-500 text-xs rounded-xl pl-10 pr-8 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------
          3. STORIES / HIGHLIGHTS (GREEN GLOW RINGS)
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
          {storyHighlights.map((story) => (
            <button
              key={story.id}
              onClick={() => {
                if (story.category !== 'all') setSelectedCategory(story.category);
                else handleResetFilters();
              }}
              className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer"
            >
              <div className={`p-0.5 rounded-full bg-gradient-to-tr ${story.ring} group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/10`}>
                <div className="w-14 h-14 rounded-full bg-black border-2 border-zinc-950 flex items-center justify-center text-xl group-hover:bg-zinc-900 transition">
                  {story.icon}
                </div>
              </div>
              <span className="text-[11px] font-bold text-zinc-300 group-hover:text-emerald-400 transition truncate max-w-[70px]">
                {story.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------
          4. HERO SLIDER (GREEN-BLACK AESTHETIC)
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl min-h-[360px] sm:min-h-[420px] flex items-center">
          
          {heroSlidesData.map((slide, idx) => {
            const isActive = idx === currentHeroSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 flex items-center ${
                  isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl p-6 sm:p-12 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-black tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                    <span>{slide.tag}</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight leading-none drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="text-xs sm:text-sm text-zinc-200 max-w-xl leading-relaxed drop-shadow">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(slide.category);
                        window.scrollTo({ top: 500, behavior: 'smooth' });
                      }}
                      className="bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black text-xs px-6 py-3 rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center gap-2 cursor-pointer transition transform active:scale-95"
                    >
                      <span>{t.heroCta}</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>
                    <span className="bg-black/80 border border-emerald-500/40 text-emerald-400 text-xs font-black px-3.5 py-3 rounded-2xl">
                      {slide.badgeText}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Carousel Arrows */}
          <button
            onClick={() => setCurrentHeroSlide((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1))}
            className="absolute left-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-zinc-900 text-white border border-zinc-800 flex items-center justify-center transition cursor-pointer hover:border-emerald-500/60"
          >
            <ChevronLeft className="w-5 h-5 text-emerald-400" />
          </button>
          <button
            onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlidesData.length)}
            className="absolute right-4 z-20 w-10 h-10 rounded-full bg-black/80 hover:bg-zinc-900 text-white border border-zinc-800 flex items-center justify-center transition cursor-pointer hover:border-emerald-500/60"
          >
            <ChevronRight className="w-5 h-5 text-emerald-400" />
          </button>

          {/* Carousel Bullets */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {heroSlidesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeroSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentHeroSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-zinc-700'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          5. PROMO COUPONS BAR (GREEN-BLACK)
      ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-zinc-950 border border-emerald-500/30 rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs">
                -10%
              </div>
              <div>
                <div className="text-xs font-bold text-white">Скидка на 1-й заказ</div>
                <div className="text-[10px] text-zinc-400">Промокод: <b className="text-emerald-400">SPORT10</b></div>
              </div>
            </div>
            <button
              onClick={() => handleCopyCoupon('SPORT10')}
              className="bg-zinc-900 hover:bg-zinc-800 text-emerald-400 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-emerald-500/40 flex items-center gap-1 cursor-pointer"
            >
              {copiedCoupon === 'SPORT10' ? <CheckCheck className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCoupon === 'SPORT10' ? 'Скопирован' : 'Копировать'}</span>
            </button>
          </div>

          <div className="bg-zinc-950 border border-green-500/30 rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center font-black text-xs">
                -20%
              </div>
              <div>
                <div className="text-xs font-bold text-white">VIP скидка от 15 000 ₽</div>
                <div className="text-[10px] text-zinc-400">Промокод: <b className="text-green-400">VIP20</b></div>
              </div>
            </div>
            <button
              onClick={() => handleCopyCoupon('VIP20')}
              className="bg-zinc-900 hover:bg-zinc-800 text-green-400 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-green-500/40 flex items-center gap-1 cursor-pointer"
            >
              {copiedCoupon === 'VIP20' ? <CheckCheck className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCoupon === 'VIP20' ? 'Скопирован' : 'Копировать'}</span>
            </button>
          </div>

          <div className="bg-zinc-950 border border-lime-500/30 rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-lime-500/20 text-lime-400 flex items-center justify-center font-black text-xs">
                -30%
              </div>
              <div>
                <div className="text-xs font-bold text-white">Чемпионский купон</div>
                <div className="text-[10px] text-zinc-400">Промокод: <b className="text-lime-400">CHAMPION30</b></div>
              </div>
            </div>
            <button
              onClick={() => handleCopyCoupon('CHAMPION30')}
              className="bg-zinc-900 hover:bg-zinc-800 text-lime-400 px-2.5 py-1.5 rounded-xl text-xs font-bold border border-lime-500/40 flex items-center gap-1 cursor-pointer"
            >
              {copiedCoupon === 'CHAMPION30' ? <CheckCheck className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCoupon === 'CHAMPION30' ? 'Скопирован' : 'Копировать'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          6. CATEGORIES BAR (GREEN & BLACK)
      ------------------------------------------------------------- */}
      <div className="bg-zinc-950/90 border-y border-zinc-800 backdrop-blur-md sticky top-[69px] z-30 py-2.5 shadow-md mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {categoriesData.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              const label = t[cat.nameKey] || cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-lime-400 text-black shadow-lg shadow-emerald-500/25 scale-[1.02]'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                      isActive ? 'bg-black text-emerald-400' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          7. MAIN CATALOG SECTION
      ------------------------------------------------------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
          <button
            onClick={() => setQuickTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition cursor-pointer ${
              quickTab === 'all' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            ⚡ {t.allCategories}
          </button>
          <button
            onClick={() => setQuickTab('hits')}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition cursor-pointer ${
              quickTab === 'hits' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            🔥 Хиты продаж
          </button>
          <button
            onClick={() => setQuickTab('new')}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition cursor-pointer ${
              quickTab === 'new' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            ✨ Новинки сезона
          </button>
          <button
            onClick={() => setQuickTab('discount')}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition cursor-pointer ${
              quickTab === 'discount' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            🏷️ Скидки от 15%
          </button>
          <button
            onClick={() => setQuickTab('topRated')}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition cursor-pointer ${
              quickTab === 'topRated' ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            ⭐ Топ рейтинг 5.0
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* DESKTOP SIDEBAR FILTERS */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 text-slate-200 shadow-xl sticky top-36 space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-black text-lg text-white uppercase italic tracking-wider">
                    {t.filtersTitle}
                  </h3>
                  {activeFilterCount > 0 && (
                    <span className="bg-emerald-500 text-black text-[11px] font-black px-2 py-0.5 rounded-full">
                      {activeFilterCount}
                    </span>
                  )}
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-bold transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {t.resetFilters}
                  </button>
                )}
              </div>

              {/* Toggles */}
              <div className="space-y-2.5 bg-zinc-900/60 p-3.5 rounded-2xl border border-zinc-800">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-xs font-semibold text-zinc-300">{t.onlyInStock}</span>
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-zinc-800 border-zinc-700 cursor-pointer accent-emerald-500"
                  />
                </label>
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                    {t.onlyDiscount}
                  </span>
                  <input
                    type="checkbox"
                    checked={onlyDiscount}
                    onChange={(e) => setOnlyDiscount(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-zinc-800 border-zinc-700 cursor-pointer accent-emerald-500"
                  />
                </label>
              </div>

              {/* Price Filter */}
              <div className="border-b border-zinc-800 pb-4">
                <button
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                  className="flex items-center justify-between w-full text-left font-bold text-xs text-white uppercase tracking-wider mb-2.5 hover:text-emerald-400 transition cursor-pointer"
                >
                  <span>{t.priceRange}</span>
                  {isPriceOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </button>
                {isPriceOpen && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-1/2 bg-zinc-900 border border-zinc-800 text-slate-200 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
                        placeholder={t.from}
                      />
                      <span className="text-zinc-600 text-xs">—</span>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="35000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-1/2 bg-zinc-900 border border-zinc-800 text-slate-200 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
                        placeholder={t.to}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="35000"
                      step="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full accent-emerald-500 bg-zinc-800 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] font-bold text-zinc-400">
                      <span>{formatPrice(0, lang)}</span>
                      <span>{formatPrice(35000, lang)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Brands Filter */}
              <div className="border-b border-zinc-800 pb-4">
                <button
                  onClick={() => setIsBrandOpen(!isBrandOpen)}
                  className="flex items-center justify-between w-full text-left font-bold text-xs text-white uppercase tracking-wider mb-2.5 hover:text-emerald-400 transition cursor-pointer"
                >
                  <span>{t.brands}</span>
                  {isBrandOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </button>
                {isBrandOpen && (
                  <div className="space-y-2">
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-zinc-500" />
                      <input
                        type="text"
                        placeholder={t.searchBrand}
                        value={brandSearch}
                        onChange={(e) => setBrandSearch(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-xs rounded-xl pl-8 pr-2 py-1.5 text-slate-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
                      {filteredBrandsList.map((brand) => {
                        const isChecked = selectedBrands.includes(brand);
                        return (
                          <label
                            key={brand}
                            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer select-none py-1 px-1 rounded-lg hover:bg-zinc-900"
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {
                                if (isChecked) setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                                else setSelectedBrands([...selectedBrands, brand]);
                              }}
                              className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-500 bg-zinc-800 border-zinc-700 cursor-pointer accent-emerald-500"
                            />
                            <span>{brand}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sizes Filter */}
              <div className="border-b border-zinc-800 pb-4">
                <div className="flex items-center justify-between mb-2.5">
                  <button
                    onClick={() => setIsSizeOpen(!isSizeOpen)}
                    className="font-bold text-xs text-white uppercase tracking-wider hover:text-emerald-400 transition cursor-pointer"
                  >
                    {t.sizes}
                  </button>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[10px] text-emerald-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <HelpCircle className="w-3 h-3" />
                    Таблица
                  </button>
                </div>
                {isSizeOpen && (
                  <div className="grid grid-cols-3 gap-1.5">
                    {sizesList.slice(0, 15).map((sz) => {
                      const isSelected = selectedSizes.includes(sz);
                      return (
                        <button
                          key={sz}
                          onClick={() => {
                            if (isSelected) setSelectedSizes(selectedSizes.filter((s) => s !== sz));
                            else setSelectedSizes([...selectedSizes, sz]);
                          }}
                          className={`py-1.5 text-[11px] font-black rounded-xl border transition cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500 text-black border-emerald-500 shadow-md shadow-emerald-500/25'
                              : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white'
                          }`}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Colors Filter */}
              <div>
                <button
                  onClick={() => setIsColorOpen(!isColorOpen)}
                  className="flex items-center justify-between w-full text-left font-bold text-xs text-white uppercase tracking-wider mb-2.5 hover:text-emerald-400 transition cursor-pointer"
                >
                  <span>{t.colors}</span>
                  {isColorOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </button>
                {isColorOpen && (
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((c) => {
                      const isSelected = selectedColors.includes(c.name);
                      return (
                        <button
                          key={c.name}
                          onClick={() => {
                            if (isSelected) setSelectedColors(selectedColors.filter((col) => col !== c.name));
                            else setSelectedColors([...selectedColors, c.name]);
                          }}
                          title={c.name}
                          className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-200 cursor-pointer ${
                            isSelected ? 'border-emerald-400 scale-110 shadow-lg shadow-emerald-500/30' : 'border-zinc-800 hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                        >
                          {isSelected && (
                            <Check className={`w-3.5 h-3.5 ${c.hex === '#F9FAFB' ? 'text-black' : 'text-white'}`} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          </aside>

          {/* MAIN PRODUCT FEED */}
          <section className="flex-1 min-w-0">
            
            {/* Catalog Control Bar */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-4 sm:p-5 mb-6 shadow-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                {/* Title */}
                <div className="flex items-center gap-3">
                  <h2 className="text-xl sm:text-2xl font-black text-white italic uppercase tracking-wide">
                    {t[categoriesData.find((c) => c.id === selectedCategory)?.nameKey] || t.allCategories}
                  </h2>
                  <span className="bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-black px-3 py-1 rounded-full shadow-inner">
                    {filteredProducts.length} {t.productsFound}
                  </span>
                </div>

                {/* Sort & Views */}
                <div className="flex items-center gap-3 ml-auto">
                  <button
                    onClick={() => setIsMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black px-3 py-2 rounded-xl transition shadow-md"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>{t.filtersTitle}</span>
                    {activeFilterCount > 0 && (
                      <span className="bg-black text-emerald-400 px-1.5 py-0.2 rounded-full text-[10px] font-black">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400 font-semibold hidden sm:inline-block">
                      {t.sortBy}
                    </span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-zinc-900 border border-zinc-800 text-slate-200 text-xs sm:text-sm font-bold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    >
                      <option value="popular">{t.sortPopular}</option>
                      <option value="price-asc">{t.sortPriceAsc}</option>
                      <option value="price-desc">{t.sortPriceDesc}</option>
                      <option value="rating">{t.sortRating}</option>
                      <option value="discount">{t.sortDiscount}</option>
                      <option value="newest">{t.sortNewest}</option>
                    </select>
                  </div>

                  <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1 gap-1">
                    <button
                      onClick={() => setViewMode('grid4')}
                      className={`p-1.5 rounded-lg transition cursor-pointer ${viewMode === 'grid4' ? 'bg-emerald-500 text-black' : 'text-zinc-400 hover:text-white'}`}
                      title="4 Grid"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid3')}
                      className={`p-1.5 rounded-lg transition cursor-pointer ${viewMode === 'grid3' ? 'bg-emerald-500 text-black' : 'text-zinc-400 hover:text-white'}`}
                      title="3 Grid"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-lg transition cursor-pointer ${viewMode === 'list' ? 'bg-emerald-500 text-black' : 'text-zinc-400 hover:text-white'}`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filter Badges */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800 text-xs">
                  <span className="text-zinc-400 font-bold">{t.activeFilters}</span>
                  
                  {searchQuery && (
                    <span className="bg-zinc-900 border border-zinc-800 text-emerald-400 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                      {t.searchFilter}: "{searchQuery}"
                      <button onClick={() => setSearchQuery('')}><X className="w-3 h-3 hover:text-white" /></button>
                    </span>
                  )}

                  {selectedCategory !== 'all' && (
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                      {t[categoriesData.find((c) => c.id === selectedCategory)?.nameKey]}
                      <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3 hover:text-white" /></button>
                    </span>
                  )}

                  {selectedBrands.map((b) => (
                    <span key={b} className="bg-zinc-900 border border-zinc-800 text-slate-200 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                      {b}
                      <button onClick={() => setSelectedBrands(selectedBrands.filter((item) => item !== b))}><X className="w-3 h-3 hover:text-emerald-400" /></button>
                    </span>
                  ))}

                  {selectedSizes.map((s) => (
                    <span key={s} className="bg-zinc-900 border border-zinc-800 text-slate-200 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                      {s}
                      <button onClick={() => setSelectedSizes(selectedSizes.filter((item) => item !== s))}><X className="w-3 h-3 hover:text-emerald-400" /></button>
                    </span>
                  ))}

                  <button
                    onClick={handleResetFilters}
                    className="text-zinc-400 hover:text-emerald-400 underline ml-auto font-bold cursor-pointer"
                  >
                    {t.resetAll}
                  </button>
                </div>
              )}
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className={getGridClass()}>
                {filteredProducts.map((product) => {
                  const isFavorite = wishlist.some((item) => item.id === product.id);
                  const isList = viewMode === 'list';

                  return (
                    <ProductCardItem
                      key={product.id}
                      product={product}
                      lang={lang}
                      t={t}
                      isList={isList}
                      isFavorite={isFavorite}
                      onToggleFavorite={handleToggleFavorite}
                      onAddToCart={handleAddToCart}
                      onQuickView={(p) => setQuickViewProduct(p)}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-12 text-center my-8 shadow-2xl">
                <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-inner">
                  <PackageSearch className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 uppercase">
                  {t.notFoundTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
                  {t.notFoundSubtitle}
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black text-xs px-6 py-3 rounded-2xl shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2 transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.resetFilters}</span>
                </button>
              </div>
            )}

          </section>
        </div>
      </main>

      {/* -------------------------------------------------------------
          8. REVIEWS & FOOTER (GREEN & BLACK)
      ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>SPORTHOUSE VERIFIED ATHLETES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic">
                Отзывы профессиональных спортсменов
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-2xl border border-zinc-800">
              <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
              <span className="text-lg font-black text-white">4.95</span>
              <span className="text-xs text-zinc-400 font-semibold">/ 5.0 (2,400+ отзывов)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-emerald-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 italic leading-relaxed">
                  «Заказывал бутсы Nike Mercurial Superfly 9 FG. 100% оригинал, доставка за 1 день. В игре сидят идеально, сцепление на натуральном газоне космическое!»
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-500 flex items-center justify-center font-black text-black text-xs">
                  АН
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Александр Новиков</h5>
                  <span className="text-[10px] text-emerald-400 font-semibold">✓ Проверенный покупатель • Футбол</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-emerald-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 italic leading-relaxed">
                  «Ракетка Wilson Blade 98 V8 пришла с заводской натяжкой. Контроль мяча в туре ATP просто невероятный. Лучший спортивный магазин экипировки!»
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-teal-500 flex items-center justify-center font-black text-black text-xs">
                  ДУ
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Диёр Усманов</h5>
                  <span className="text-[10px] text-emerald-400 font-semibold">✓ Проверенный покупатель • Теннис</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-emerald-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-xs text-zinc-300 italic leading-relaxed">
                  «Боксерские перчатки Venum Challenger 3.0 Gold и бинты Kontact — качество на высшем уровне. Кисть зафиксирована намертво, кожа плотная.»
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lime-500 to-emerald-500 flex items-center justify-center font-black text-black text-xs">
                  МК
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">Мурат Касымов</h5>
                  <span className="text-[10px] text-emerald-400 font-semibold">✓ Проверенный покупатель • Бокс & MMA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
        
        {/* Newsletter */}
        <div className="border-b border-zinc-800 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-black p-6 sm:p-8 rounded-3xl border border-emerald-500/30">
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-lg sm:text-xl font-black text-white uppercase italic">
                  {t.subscribeTitle}
                </h4>
                <p className="text-xs text-zinc-300">
                  {t.subscribeSubtitle}
                </p>
              </div>
              <div className="md:col-span-6">
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Ваш E-mail / Your email..."
                    className="flex-1 bg-black border border-zinc-800 text-xs rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black text-xs px-6 py-3 rounded-xl shadow-lg whitespace-nowrap cursor-pointer"
                  >
                    {t.subscribeBtn}
                  </button>
                </form>
                {newsletterSuccess && (
                  <p className="text-[11px] text-emerald-400 font-bold mt-2">
                    {t.subscribedSuccess} Промокод: <b>SPORT10</b>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-lime-500 flex items-center justify-center text-black">
                  <Flame className="w-5 h-5 fill-black text-black" />
                </div>
                <span className="text-xl font-black tracking-tight text-white uppercase italic">
                  SPORT<span className="text-emerald-400">HOUSE</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                {t.footerAbout}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[11px] font-bold text-zinc-300">Способы оплаты:</span>
                <span className="bg-zinc-900 text-emerald-400 px-2 py-1 rounded text-[10px] font-black border border-zinc-800">VISA</span>
                <span className="bg-zinc-900 text-emerald-400 px-2 py-1 rounded text-[10px] font-black border border-zinc-800">MasterCard</span>
                <span className="bg-zinc-900 text-emerald-400 px-2 py-1 rounded text-[10px] font-black border border-zinc-800">МИР</span>
                <span className="bg-zinc-900 text-emerald-400 px-2 py-1 rounded text-[10px] font-black border border-zinc-800">UZCARD</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                {t.footerNavCategories}
              </h4>
              <ul className="space-y-2 text-xs">
                {categoriesData.slice(1).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="hover:text-emerald-400 transition cursor-pointer"
                    >
                      {t[cat.nameKey]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                {t.footerNavCustomer}
              </h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setIsSizeGuideOpen(true)} className="hover:text-emerald-400 transition cursor-pointer">{t.sizeGuide}</button></li>
                <li><span className="hover:text-emerald-400 transition cursor-pointer">{t.deliveryPayment}</span></li>
                <li><span className="hover:text-emerald-400 transition cursor-pointer">{t.returnsExchanges}</span></li>
                <li><span className="hover:text-emerald-400 transition cursor-pointer">{t.warranty}</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
                {t.contacts}
              </h4>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2 text-zinc-300 font-bold">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  {t.phoneSupport}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {t.emailText}
                </p>
                <p className="text-zinc-400 pt-1">
                  {t.addressText}
                </p>
              </div>
            </div>

          </div>

          <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <span>{t.copyright}</span>
            <div className="flex items-center gap-4">
              <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-zinc-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* -------------------------------------------------------------
          9. MOBILE FILTERS OVERLAY
      ------------------------------------------------------------- */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/90 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-lg text-white uppercase italic">{t.filtersTitle}</h3>
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="p-2 bg-zinc-900 text-zinc-300 hover:text-white rounded-xl text-xs font-bold"
            >
              ✕
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 space-y-6">
            <button
              onClick={() => {
                handleResetFilters();
                setIsMobileFiltersOpen(false);
              }}
              className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black rounded-xl cursor-pointer"
            >
              {t.resetAll}
            </button>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-xs text-white uppercase mb-2">{t.category}</h4>
              <div className="grid grid-cols-2 gap-2">
                {categoriesData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsMobileFiltersOpen(false);
                    }}
                    className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                      selectedCategory === cat.id ? 'bg-emerald-500 text-black font-black' : 'bg-zinc-900 text-zinc-300'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span className="truncate">{t[cat.nameKey]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          10. QUICK VIEW MODAL (GREEN & BLACK)
      ------------------------------------------------------------- */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          lang={lang}
          t={t}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          isFavorite={wishlist.some((item) => item.id === quickViewProduct.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* -------------------------------------------------------------
          11. SHOPPING CART DRAWER (GREEN & BLACK)
      ------------------------------------------------------------- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-slate-100 shadow-2xl flex flex-col justify-between">
              
              <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white italic uppercase">{t.cartTitle}</h2>
                    <p className="text-xs text-zinc-400">{cartItems.length} {t.itemsCount}</p>
                  </div>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-zinc-400 hover:text-white cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cartItems.length > 0 && (
                <div className="px-6 py-3 bg-zinc-900/60 border-b border-zinc-800 text-xs">
                  <div className="flex items-center justify-between mb-1.5 font-semibold">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Truck className="w-4 h-4 text-emerald-400" />
                      {isFreeShipping
                        ? t.freeShippingEarned
                        : t.untilFreeShipping.replace('{amount}', formatPrice(remainingForFreeShipping, lang))}
                    </span>
                    <span className="text-emerald-400 font-bold">{Math.round(progressToFreeShipping)}%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 transition-all duration-300" style={{ width: `${progressToFreeShipping}%` }} />
                  </div>
                </div>
              )}

              <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-zinc-900 text-zinc-500 rounded-3xl flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-8 h-8 text-emerald-500/40" />
                    </div>
                    <h3 className="text-base font-bold text-white">{t.cartEmptyTitle}</h3>
                    <p className="text-xs text-zinc-400 max-w-xs mx-auto">{t.cartEmptySubtitle}</p>
                  </div>
                ) : (
                  cartItems.map((item) => {
                    const itemName = item.product.name[lang] || item.product.name.ru;
                    return (
                      <div key={`${item.product.id}-${item.size}-${item.color}`} className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-3 flex gap-3 items-center">
                        <img src={item.product.image} alt="" className="w-16 h-16 object-cover rounded-xl bg-black shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">{itemName}</h4>
                          <div className="text-[11px] text-zinc-400">
                            {item.size && `${t.selectSize} ${item.size}`}
                          </div>
                          <div className="text-xs font-black text-emerald-400 mt-1">
                            {formatPrice(item.product.price, lang)}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => handleRemoveFromCart(item.product.id, item.size, item.color)}
                            className="text-zinc-500 hover:text-red-400 transition cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <div className="flex items-center bg-black border border-zinc-800 rounded-lg p-0.5">
                            <button
                              onClick={() => handleUpdateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                              className="w-5 h-5 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer"
                            >
                              -
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-white">{item.quantity}</span>
                            <button
                              onClick={() => handleUpdateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                              className="w-5 h-5 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-zinc-800 bg-zinc-950 space-y-4">
                  <form onSubmit={handleApplyPromo} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-4 h-4 absolute left-3 top-2.5 text-zinc-500" />
                        <input
                          type="text"
                          placeholder={t.promoCodeLabel}
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 text-xs rounded-xl pl-9 pr-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-black text-emerald-400 px-4 py-2 rounded-xl cursor-pointer"
                      >
                        {t.applyPromo}
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-[11px] text-emerald-400 font-semibold">
                        {t.promoAppliedSuccess.replace('{percent}', discountPercent)}
                      </p>
                    )}
                    {promoError && (
                      <p className="text-[11px] text-red-400 font-semibold">{promoError}</p>
                    )}
                  </form>

                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <div className="flex justify-between">
                      <span>{t.subtotal}</span>
                      <span className="font-semibold text-white">{formatPrice(subtotal, lang)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>{t.discount.replace('{percent}', discountPercent)}</span>
                        <span>-{formatPrice(discountAmount, lang)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>{t.shipping}</span>
                      <span className="font-semibold text-white">{isFreeShipping ? t.free : formatPrice(490, lang)}</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2 border-t border-zinc-800 text-base font-black text-white">
                      <span>{t.total}</span>
                      <span className="text-xl text-emerald-400 font-black">
                        {formatPrice(total + (isFreeShipping ? 0 : 490), lang)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleOpenCheckout}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition transform active:scale-95"
                  >
                    <span>{t.checkoutButton}</span>
                    <ArrowRight className="w-5 h-5 text-black" />
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          12. WISHLIST DRAWER
      ------------------------------------------------------------- */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-slate-100 shadow-2xl flex flex-col justify-between">
              
              <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Heart className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white italic uppercase">{t.wishlistTitle}</h2>
                    <p className="text-xs text-zinc-400">{wishlist.length} {t.wishlistItemsCount}</p>
                  </div>
                </div>
                <button onClick={() => setIsWishlistOpen(false)} className="p-2 text-zinc-400 hover:text-white cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                {wishlist.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-zinc-900 text-zinc-500 rounded-3xl flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-emerald-500/30" />
                    </div>
                    <h3 className="text-base font-bold text-white">{t.wishlistEmptyTitle}</h3>
                    <p className="text-xs text-zinc-400 max-w-xs mx-auto">{t.wishlistEmptySubtitle}</p>
                  </div>
                ) : (
                  wishlist.map((product) => {
                    const pName = product.name[lang] || product.name.ru;
                    return (
                      <div key={product.id} className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-3 flex gap-3 items-center">
                        <img src={product.image} alt="" className="w-16 h-16 object-cover rounded-xl bg-black shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-black text-emerald-400 uppercase">{product.brand}</span>
                          <h4 className="text-xs font-bold text-white truncate">{pName}</h4>
                          <div className="text-xs font-black text-emerald-400 mt-1">{formatPrice(product.price, lang)}</div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => setWishlist(wishlist.filter((w) => w.id !== product.id))}
                            className="text-zinc-500 hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              handleAddToCart(product, product.sizes?.[0] || '');
                              setWishlist(wishlist.filter((w) => w.id !== product.id));
                            }}
                            className="bg-emerald-500 hover:bg-emerald-400 text-black p-2 rounded-xl text-xs font-bold shadow cursor-pointer"
                            title={t.addToCart}
                          >
                            <ShoppingBag className="w-3.5 h-3.5 text-black" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {wishlist.length > 0 && (
                <div className="p-6 border-t border-zinc-800 bg-zinc-950">
                  <button
                    onClick={handleMoveAllWishlistToCart}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-black" />
                    <span>{t.addAllToCart}</span>
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          13. CHECKOUT MODAL
      ------------------------------------------------------------- */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100 my-8">
            <button
              onClick={() => {
                setIsCheckoutModalOpen(false);
                setOrderSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">
                  {t.orderSuccessTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                  {t.orderSuccessSubtitle.replace('{orderId}', lastOrderId)}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsCheckoutModalOpen(false);
                      setOrderSuccess(false);
                    }}
                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs px-8 py-3 rounded-2xl shadow-lg cursor-pointer"
                  >
                    Вернуться к покупкам
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConfirmOrder} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-black text-white uppercase italic">{t.checkoutModalTitle}</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">{t.fullName}</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов / John Doe"
                      value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-slate-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 font-semibold mb-1">{t.phone}</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={checkoutForm.phone}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 text-slate-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 font-semibold mb-1">{t.city}</label>
                      <input
                        type="text"
                        required
                        placeholder="Москва / Ташкент / Алматы"
                        value={checkoutForm.city}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 text-slate-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1">{t.address}</label>
                    <input
                      type="text"
                      required
                      placeholder="Улица, дом, квартира"
                      value={checkoutForm.address}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 text-slate-100 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-semibold mb-1.5">{t.paymentMethod}</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl border border-zinc-800 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={checkoutForm.payment === 'card'}
                          onChange={() => setCheckoutForm({ ...checkoutForm, payment: 'card' })}
                          className="accent-emerald-500"
                        />
                        <span className="font-semibold text-zinc-200">{t.payCard}</span>
                      </label>
                      <label className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl border border-zinc-800 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={checkoutForm.payment === 'cash'}
                          onChange={() => setCheckoutForm({ ...checkoutForm, payment: 'cash' })}
                          className="accent-emerald-500"
                        />
                        <span className="font-semibold text-zinc-200">{t.payCash}</span>
                      </label>
                      <label className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl border border-zinc-800 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={checkoutForm.payment === 'installment'}
                          onChange={() => setCheckoutForm({ ...checkoutForm, payment: 'installment' })}
                          className="accent-emerald-500"
                        />
                        <span className="font-semibold text-zinc-200">{t.payInstallment}</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400">{t.total}</span>
                    <span className="block text-xl font-black text-emerald-400">
                      {formatPrice(total + (isFreeShipping ? 0 : 490), lang)}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-6 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black font-black text-xs rounded-2xl shadow-xl flex items-center gap-2 cursor-pointer"
                  >
                    <Check className="w-4 h-4 text-black" />
                    <span>{t.confirmOrder}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          14. SIZE GUIDE MODAL
      ------------------------------------------------------------- */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100 my-8">
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-white uppercase italic mb-4">
              Таблица размеров обуви и одежды (Size Guide)
            </h3>

            <div className="space-y-6 text-xs">
              <div>
                <h4 className="font-black text-emerald-400 uppercase tracking-wider mb-2">Обувь (Бутсы, Кроссовки, Шиповки)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-zinc-900 text-zinc-300">
                        <th className="p-2 border border-zinc-800">EU</th>
                        <th className="p-2 border border-zinc-800">US Men</th>
                        <th className="p-2 border border-zinc-800">UK</th>
                        <th className="p-2 border border-zinc-800">Длина стопы (см)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2 border border-zinc-900 font-bold">39</td><td className="p-2 border border-zinc-900">6.5</td><td className="p-2 border border-zinc-900">6.0</td><td className="p-2 border border-zinc-900">24.5 см</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">40</td><td className="p-2 border border-zinc-900">7.5</td><td className="p-2 border border-zinc-900">7.0</td><td className="p-2 border border-zinc-900">25.0 см</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">41</td><td className="p-2 border border-zinc-900">8.0</td><td className="p-2 border border-zinc-900">7.5</td><td className="p-2 border border-zinc-900">26.0 см</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">42</td><td className="p-2 border border-zinc-900">8.5</td><td className="p-2 border border-zinc-900">8.0</td><td className="p-2 border border-zinc-900">26.5 см</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">43</td><td className="p-2 border border-zinc-900">9.5</td><td className="p-2 border border-zinc-900">9.0</td><td className="p-2 border border-zinc-900">27.5 см</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">44</td><td className="p-2 border border-zinc-900">10.0</td><td className="p-2 border border-zinc-900">9.5</td><td className="p-2 border border-zinc-900">28.0 см</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">45</td><td className="p-2 border border-zinc-900">11.0</td><td className="p-2 border border-zinc-900">10.5</td><td className="p-2 border border-zinc-900">29.0 см</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-black text-emerald-400 uppercase tracking-wider mb-2">Одежда (Формы, Джерси, Ветровки)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-collapse">
                    <thead>
                      <tr className="bg-zinc-900 text-zinc-300">
                        <th className="p-2 border border-zinc-800">Размер</th>
                        <th className="p-2 border border-zinc-800">Обхват груди (см)</th>
                        <th className="p-2 border border-zinc-800">Обхват талии (см)</th>
                        <th className="p-2 border border-zinc-800">Рост (см)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-2 border border-zinc-900 font-bold">S</td><td className="p-2 border border-zinc-900">88-96</td><td className="p-2 border border-zinc-900">73-81</td><td className="p-2 border border-zinc-900">165-172</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">M</td><td className="p-2 border border-zinc-900">96-104</td><td className="p-2 border border-zinc-900">81-89</td><td className="p-2 border border-zinc-900">172-178</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">L</td><td className="p-2 border border-zinc-900">104-112</td><td className="p-2 border border-zinc-900">89-97</td><td className="p-2 border border-zinc-900">178-185</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">XL</td><td className="p-2 border border-zinc-900">112-124</td><td className="p-2 border border-zinc-900">97-109</td><td className="p-2 border border-zinc-900">185-192</td></tr>
                      <tr><td className="p-2 border border-zinc-900 font-bold">XXL</td><td className="p-2 border border-zinc-900">124-136</td><td className="p-2 border border-zinc-900">109-121</td><td className="p-2 border border-zinc-900">192-200</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          15. TOAST NOTIFICATION
      ------------------------------------------------------------- */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
          <div className="bg-zinc-900 border border-emerald-500/50 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm">
            <div className={`p-2 rounded-xl ${toast.type === 'cart' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
              {toast.type === 'cart' ? <ShoppingBag className="w-5 h-5" /> : <Heart className="w-5 h-5 fill-emerald-500" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">{toast.title}</h4>
              <p className="text-xs text-zinc-400 truncate">{toast.message}</p>
            </div>
            <button onClick={() => setToast(null)} className="text-zinc-500 hover:text-white p-1 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          16. MOBILE BOTTOM NAVIGATION
      ------------------------------------------------------------- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 py-2 px-6 flex items-center justify-around text-zinc-400 shadow-2xl">
        <button
          onClick={handleResetFilters}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold ${selectedCategory === 'all' && !searchQuery ? 'text-emerald-400' : 'hover:text-white'}`}
        >
          <Layers className="w-5 h-5" />
          <span>Каталог</span>
        </button>

        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex flex-col items-center gap-1 text-[10px] font-bold hover:text-white relative"
        >
          <Filter className="w-5 h-5" />
          <span>{t.filtersTitle}</span>
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 right-2 bg-emerald-500 text-black text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center gap-1 text-[10px] font-bold hover:text-white relative"
        >
          <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-emerald-400 fill-emerald-400' : ''}`} />
          <span>{t.favorites}</span>
          {wishlist.length > 0 && (
            <span className="absolute -top-1 right-2 bg-emerald-500 text-black text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {wishlist.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 text-[10px] font-bold hover:text-white relative"
        >
          <ShoppingBag className={`w-5 h-5 ${totalCartCount > 0 ? 'text-emerald-400' : ''}`} />
          <span>{t.cart}</span>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-emerald-500 text-black text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

    </div>
  );
}

// ==========================================
// SUB-COMPONENT: PRODUCT CARD ITEM (GREEN & BLACK)
// ==========================================
function ProductCardItem({
  product,
  lang,
  t,
  isList,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  onQuickView
}) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [added, setAdded] = useState(false);

  const images = [product.image, product.hoverImage, ...(product.extraImages || [])].filter(
    (item, index, self) => item && self.indexOf(item) === index
  );

  const currentDisplayImage = images[activeImageIdx] || product.image;
  const productName = product.name[lang] || product.name.ru;

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => {
        if (images.length > 1 && activeImageIdx === 0) setActiveImageIdx(1);
      }}
      onMouseLeave={() => setActiveImageIdx(0)}
      className={`group bg-zinc-950 border border-zinc-800/90 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/15 hover:border-emerald-500/50 transition-all duration-300 flex ${
        isList ? 'flex-col sm:flex-row items-center p-4 gap-6' : 'flex-col'
      }`}
    >
      {/* Product Image Area */}
      <div className={`relative overflow-hidden bg-black ${isList ? 'w-full sm:w-60 h-60 rounded-2xl shrink-0' : 'w-full h-64'}`}>
        <img
          src={currentDisplayImage}
          alt={productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.discount > 0 && (
            <span className="bg-gradient-to-r from-emerald-500 to-lime-500 text-black font-black text-[11px] px-2.5 py-1 rounded-xl shadow-md uppercase tracking-wider">
              -{product.discount}%
            </span>
          )}
          {product.isHit && (
            <span className="bg-lime-400 text-black font-black text-[10px] px-2.5 py-0.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-black" /> {t.hitBadge}
            </span>
          )}
          {product.isNew && (
            <span className="bg-emerald-500 text-black font-black text-[10px] px-2.5 py-0.5 rounded-lg shadow-md uppercase tracking-wider">
              {t.newBadge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-2xl backdrop-blur-md transition-all duration-200 z-10 cursor-pointer ${
            isFavorite
              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/40 scale-110'
              : 'bg-black/60 text-zinc-300 hover:text-emerald-400 hover:bg-black'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-black' : ''}`} />
        </button>

        {/* Multi-angle switcher dots on card */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/70 backdrop-blur-md px-2 py-1 rounded-full border border-zinc-800">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIdx(idx);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeImageIdx ? 'w-4 bg-emerald-400' : 'w-1.5 bg-zinc-600'
                }`}
              />
            ))}
          </div>
        )}

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={() => onQuickView(product)}
            className="bg-white/95 hover:bg-white text-black font-black text-xs px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all pointer-events-auto cursor-pointer"
          >
            <Eye className="w-4 h-4 text-emerald-600" />
            {t.quickView}
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className={`p-4 sm:p-5 flex-1 flex flex-col justify-between ${isList ? 'w-full' : ''}`}>
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-1">
            <span className="text-emerald-400 uppercase tracking-widest font-black">
              {product.brand}
            </span>
            <span className="text-zinc-500 capitalize">{product.category}</span>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="text-white font-bold text-sm sm:text-base leading-snug mb-2 hover:text-emerald-400 cursor-pointer line-clamp-2 transition-colors"
          >
            {productName}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-emerald-400">
              <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span className="text-xs font-bold ml-1 text-slate-200">{product.rating}</span>
            </div>
            <span className="text-[11px] text-zinc-500">({product.reviewsCount} {t.reviews})</span>
          </div>

          {/* Size Selector Chips */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <span className="text-[11px] font-semibold text-zinc-400 block mb-1">
                {t.sizes}:
              </span>
              <div className="flex flex-wrap gap-1">
                {product.sizes.slice(0, 5).map((sz) => (
                  <button
                    key={sz}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(sz);
                    }}
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-lg border transition cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-emerald-500 text-black border-emerald-500 shadow'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-slate-200'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="pt-3 border-t border-zinc-800/80 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-lg sm:text-xl font-black text-white">
                  {formatPrice(product.price, lang)}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-zinc-500 line-through font-semibold">
                    {formatPrice(product.oldPrice, lang)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">
                {product.stockLeft ? `⚡ Осталось ${product.stockLeft} шт!` : `✓ ${t.inStockText}`}
              </span>
            </div>

            {product.discount > 0 && (
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                -{product.discount}%
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            disabled={added}
            className={`w-full py-2.5 px-4 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer ${
              added
                ? 'bg-emerald-500 text-black scale-[1.01]'
                : 'bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black shadow-emerald-500/20 active:scale-95'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 animate-bounce text-black" />
                <span>{t.addedToCart}</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-black" />
                <span>{t.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: QUICK VIEW MODAL
// ==========================================
function QuickViewModal({
  product,
  lang,
  t,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleFavorite
}) {
  const gallery = [product.image, product.hoverImage, ...(product.extraImages || [])].filter(
    (item, index, self) => item && self.indexOf(item) === index
  );

  const [activeImage, setActiveImage] = useState(gallery[0] || product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const productName = product.name[lang] || product.name.ru;
  const productDesc = product.description[lang] || product.description.ru;
  const productSpecs = product.specs[lang] || product.specs.ru;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8 text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-black border border-zinc-800">
              <img src={activeImage} alt="" className="w-full h-full object-cover" />
              {product.discount > 0 && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-black font-black text-xs px-3 py-1 rounded-xl shadow-lg">
                  -{product.discount}% {t.saleBadge}
                </span>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="flex items-center gap-3">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                      activeImage === img ? 'border-emerald-400 scale-105 shadow-md shadow-emerald-500/20' : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">
                <span>{product.brand}</span>
                <span className="text-zinc-400 font-medium capitalize">{product.category}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                {productName}
              </h2>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-emerald-400 text-sm">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400 mr-1" />
                  <span className="font-bold text-slate-100">{product.rating}</span>
                  <span className="text-zinc-400 text-xs ml-1">({product.reviewsCount} {t.reviews})</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  ✓ {t.inStockText}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4 bg-zinc-900/60 p-3.5 rounded-2xl border border-zinc-800">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                  {formatPrice(product.price, lang)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-zinc-500 line-through font-semibold">
                    {formatPrice(product.oldPrice, lang)}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {productDesc}
              </p>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <span className="text-xs font-bold text-zinc-300 block mb-2">{t.selectSize}</span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          selectedSize === sz
                            ? 'bg-emerald-500 text-black border-emerald-500 scale-105 font-black shadow-md shadow-emerald-500/20'
                            : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs */}
              {productSpecs && (
                <div className="mb-4 bg-zinc-900/40 rounded-2xl p-3 border border-zinc-800 text-xs space-y-1">
                  <span className="font-bold text-zinc-400 text-[11px] uppercase tracking-wider block mb-1">
                    {t.specifications}
                  </span>
                  {Object.entries(productSpecs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-zinc-800/60 last:border-0">
                      <span className="text-zinc-400">{key}:</span>
                      <span className="font-semibold text-zinc-200">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 text-zinc-300 hover:text-white font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 text-zinc-300 hover:text-white font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`w-full sm:flex-1 py-3 px-6 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg whitespace-nowrap cursor-pointer ${
                    added
                      ? 'bg-emerald-500 text-black'
                      : 'bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 hover:from-emerald-400 hover:to-lime-300 text-black shadow-emerald-500/25'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5 animate-bounce text-black" />
                      <span>{t.addedToCart}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 text-black" />
                      <span>{t.addToCart} • {formatPrice(product.price * quantity, lang)}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleFavorite(product)}
                  className={`p-3 rounded-2xl border transition shrink-0 cursor-pointer ${
                    isFavorite ? 'bg-emerald-500 text-black border-emerald-500' : 'bg-zinc-900 text-zinc-300 border-zinc-800'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-black text-black' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-zinc-400">
                <div className="flex items-center gap-1.5 bg-zinc-900/40 p-2 rounded-xl border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{t.originalBadge}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-900/40 p-2 rounded-xl border border-zinc-800">
                  <Truck className="w-4 h-4 text-lime-400" />
                  <span>{t.fittingBadge}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-zinc-900/40 p-2 rounded-xl border border-zinc-800">
                  <RotateCcw className="w-4 h-4 text-emerald-400" />
                  <span>{t.returnBadge}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
