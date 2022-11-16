import { createContext, ReactNode } from 'react';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContexDataProps {
  singIn: () => Promise<void>;
  user: UserProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContexDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function singIn() {
    console.log('Logar')
  }


  return (
    <AuthContext.Provider value={{
      singIn,
      user: {
        name: 'Jones Souza',
        avatarUrl: 'https://github.com/jones-bass.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}