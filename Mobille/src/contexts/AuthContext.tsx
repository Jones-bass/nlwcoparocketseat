import { createContext, ReactNode, useEffect, useState } from 'react';
import * as AuthSessions from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContexDataProps {
  user: UserProps;
  isUserLoading: boolean;
  singIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContexDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '854935019698-7s8d6kp3dukufvdvs1bk4bj167sipcb3.apps.googleusercontent.com',
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

  async function signInWithGoogle(access_token: string) {
    console.log("TOKEN DE AUTENTICAçÃO ===>", access_token);
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken)
    }

  }, [response])


  return (
    <AuthContext.Provider value={{
      singIn,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}