// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null); 

  const login = (email) => {
    setUserEmail(email); 
    localStorage.setItem('userEmail', email); 
  };

  const logout = () => {
    setUserEmail(null);
    localStorage.removeItem('userEmail'); 
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
