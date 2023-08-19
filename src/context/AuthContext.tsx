import { createContext, ReactNode, useState, useEffect } from "react";
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { api } from "../../lib/axios";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession()

export interface AuthDataProps {
    user: UserProps
    singIn: () => Promise<void>;
    isUserLoading: boolean;

}

export interface UserProps {
    name: string;
    avatarURL: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({} as UserProps)

    const [isUserLoading, setUserLoading] = useState(false)

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '220771322705-sfvouaqu1unogff4t0ng9fmk0dvnjd9b.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })


    async function singIn() {
        try {
            setUserLoading(true)

            await promptAsync()
        } catch (error) {
            console.log(error)
            throw error
        } finally {
            setUserLoading(false)
        }
    }

    async function singInWithGoogle(access_token: string) {
        try {
            setUserLoading(true)

            const tokenResponse = await api.post('/users', { access_token })
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`

            const userInfoResponse = await api.get('/auth')
            setUser(userInfoResponse.data)

        } catch (error) {
            console.log(error)
            throw error
        } finally {
            setUserLoading(false)
        }
    }

    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            singInWithGoogle(response.authentication.accessToken)
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