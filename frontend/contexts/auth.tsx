import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  username: string;
}

type AuthResponse = {
  user: User;
  token: string;
}

type AuthContextData = {
  user: User | null;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
}

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(username: string, password: string) {
    try {
      const response = await api.post<AuthResponse>('/session', {
        username,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@vintage:token', token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      setUser(user);

      alert('Login realizado com sucesso!');
      Router.push('/');
    } catch (error: any) {
      const message = error.response.data.message;

      if (message === 'Incorrect username/password combination.') {
        alert('Usuário ou senha incorretos.');
        return;
      }

      alert('Algum erro aconteceu com a aplicação, tente novamente.');
    }
  }

  async function signOut() {
    setUser(null);
    localStorage.removeItem('@vintage:token');
  }

  return (
    <AuthContext.Provider value={{ signOut, signIn, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}
