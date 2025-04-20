// frontend/src/hooks/useAuth.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import { loginUser, LoginResponse, registerUser } from "../services/authService";

interface User {
  email: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const data: LoginResponse = await loginUser(email, password);
    setUser(data.user);
  };

  const register = async (email: string, password: string) => {
      await registerUser(email, password);
  };

  const logout = () => {
    setUser(null);
    // Optionally also clear tokens/cookies here
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
