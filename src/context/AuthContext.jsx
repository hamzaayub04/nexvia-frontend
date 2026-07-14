import { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithGoogle as fbSignInWithGoogle,
  loginWithEmail as fbLoginWithEmail,
  registerWithEmail as fbRegisterWithEmail,
  resetPassword as fbResetPassword,
  logoutUser as fbLogout,
  onAuthChange,
} from '../services/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      setError(null);
      await fbSignInWithGoogle();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const loginWithEmail = async (email, password) => {
    try {
      setError(null);
      await fbLoginWithEmail(email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const registerWithEmail = async (email, password, displayName) => {
    try {
      setError(null);
      await fbRegisterWithEmail(email, password, displayName);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const resetPassword = async (email) => {
    try {
      setError(null);
      await fbResetPassword(email);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await fbLogout();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    signInWithGoogle,
    loginWithEmail,
    registerWithEmail,
    resetPassword,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
