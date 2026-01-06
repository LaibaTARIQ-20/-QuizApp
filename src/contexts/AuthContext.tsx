import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthState } from '../types';
import { getUser, saveUser, removeUser } from '../utils/storage';

interface AuthContextType extends AuthState {
  login: (username: string, email: string) => void;
  logout: () => void;
  register: (username: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const user = getUser();
    if (user) {
      setAuthState({
        user,
        isAuthenticated: true,
      });
    }
  }, []);

  const login = (username: string, email: string) => {
    const user: User = {
      id: `user-${Date.now()}`,
      username,
      email,
      createdAt: new Date().toISOString(),
    };
    saveUser(user);
    setAuthState({
      user,
      isAuthenticated: true,
    });
  };

  const register = (username: string, email: string) => {
    login(username, email);
  };

  const logout = () => {
    removeUser();
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
