import { FC, ReactNode, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { CredentialResponse } from '@react-oauth/google';
import { api } from '@/services/api';
import { Responses } from '@/services/interfaces/responses';

interface Props {
    children: ReactNode
}

const AuthContextProvider: FC<Props> = ({ children }) => {

    const [user, setUser] = useState<Responses.User.Entity | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const login = async (credentialsResponse: CredentialResponse) => {
        if (!credentialsResponse.credential)
            return;

        setIsLoading(true);
        const responseProfile = await api.user.current();
        if (responseProfile) {
            console.log(responseProfile);
        }
        setIsLoading(false);

    }

    const loginFromSession = async () => {
        setIsLoading(true);
        const user = await api.user.current();
        if (!user) return setIsLoading(false);

        setUser(user);
        setIsLoading(false);
    }

    useEffect(() => {
        if (!user)
            loginFromSession();
    }, []);

    if (isLoading)
        return <p>Loading...</p>;

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;