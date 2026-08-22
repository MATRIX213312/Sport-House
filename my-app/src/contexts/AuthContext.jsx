import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('sporthouse_user');
    if (!saved) return null;
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem('sporthouse_user');
      return null;
    }
  });

  // Persist user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('sporthouse_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('sporthouse_user');
    }
  }, [user]);

  const login = (email) => {
    setUser({
      id: Date.now(),
      name: email.split('@')[0],
      email,
      avatar: null,
      phone: '',
      address: '',
    });
    return true;
  };

  const register = (name, email) => {
    setUser({
      id: Date.now(),
      name,
      email,
      avatar: null,
      phone: '',
      address: '',
    });
    return true;
  };

  const logout = () => setUser(null);

  const deleteAccount = () => {
    setUser(null);
    localStorage.removeItem('sporthouse_user');
  };

  const updateProfile = (updates) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        deleteAccount,
        updateProfile,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
