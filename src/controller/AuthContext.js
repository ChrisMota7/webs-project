import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRol, setUserRol] = useState(null)

  const login = (user, rol) => {
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userInfo', JSON.stringify(user));
    localStorage.setItem('userRol', JSON.stringify(rol));
    setIsLoggedIn(true);
    setUserInfo(user);
    setUserRol(rol)
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userRol');
    setIsLoggedIn(false);
    setUserInfo(null);
    setUserRol(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userInfo, userRol, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };