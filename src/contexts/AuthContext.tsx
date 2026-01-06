import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthState } from '../types';
import { getUser, saveUser, removeUser } from '../utils/storage';

interface AuthContextType extends AuthState {
  login: (username: string, email: string) => void;
  logout: () => void;
  register: (username: string, email: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const user = getUser();
    return {
      user,
      isAuthenticated: !!user,
    };
  });

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
