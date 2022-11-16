import { createContext, ReactNode } from 'react';
import { useState } from 'react'
import * as AuthSessions from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

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
  const [isUserLoading, setIsUserLoading] = useState(false);
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '854935019698-uliupg0otosp7u6cgfgf3q35td7h8dvs.apps.googleusercontent.com',
    redirectUri: AuthSessions.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email'],
  });


  async function singIn() {
    try {
      setIsUserLoading(true)
      await promptAsync();
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
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