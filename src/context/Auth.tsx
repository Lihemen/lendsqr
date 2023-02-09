import React, { createContext, useContext, useState } from 'react';
import { toast } from '../components';

type AuthContextProps = {
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthCtx = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const user = sessionStorage.getItem('user'); // get state of current user from session

    if (!user) return false;

    return true;
  });

  const login = ({ email, password }: { email: string; password: string }) => {
    sessionStorage.setItem('user', email + password); // save details per session
    toast('success', 'Login successful, redirecting...');
    setTimeout(() => window.location.assign('/users'), 2000); // mimic latency of request and reload
    return;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('user'); // remove user from session
    toast('success', 'Logout successful, redirecting...');
    setTimeout(() => window.location.assign('/login'), 2000); // mimic latency of ending session and reload
    return;
  };

  return (
    <AuthCtx.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
};

const useAuthCtx = () => {
  const currentAuthCtx = useContext(AuthCtx);

  if (!currentAuthCtx)
    throw new Response('', {
      status: 500,
      statusText: 'useAuthCtx has to be used within <AuthCtx.Provider>',
    });

  return currentAuthCtx;
};

export { AuthProvider, useAuthCtx };
