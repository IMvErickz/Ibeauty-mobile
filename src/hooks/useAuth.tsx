import { useContext } from 'react';
import { AuthContext, AuthDataProps } from '../context/AuthContext';

export function useAuth(): AuthDataProps {
    const context = useContext(AuthContext)

    return context
}
