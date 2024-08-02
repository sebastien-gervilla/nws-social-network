import { PageLayout } from '@/components';
import { AuthContext } from '@/contexts/AuthContext';
import { api } from '@/services/api';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { FC, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialsResponse: CredentialResponse) => {
        console.log(credentialsResponse);
        if (!credentialsResponse.credential)
            return;

        const response = await api.user.login(credentialsResponse.credential);
        if (response.status === 204 || response.status === 200)
            return navigate('/');
    }

    if (user) return <Navigate to='/' />

    return (
        <PageLayout id='login-page'>
            <div className="login-form form">
                <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </PageLayout>
    );
}

export default LoginPage;