import { PageLayout } from '@/components';
import { api } from '@/services/api';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage: FC = () => {

    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialsResponse: CredentialResponse) => {
        console.log(credentialsResponse);
        if (!credentialsResponse.credential)
            return;

        const response = await api.user.register(credentialsResponse.credential);
        if (response.status === 204) return navigate('/login');
        if (response.status === 200) return navigate('/');
    }

    return (
        <PageLayout id='register-page'>
            <div className="register-form form">
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

export default RegisterPage;