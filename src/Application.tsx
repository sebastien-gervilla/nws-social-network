import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth, Home, Login, Register } from "./pages";
import { AuthContextProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components';

const Application = () => {
    return (
        <div className="application">
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <AuthContextProvider>
                    <BrowserRouter>
                        <Routes>

                            <Route element={<ProtectedRoute />}>
                                <Route path='/' element={<Home />} />
                            </Route>

                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/integrations/google/oauth2/callback' element={<Auth />} />

                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </GoogleOAuthProvider>
        </div>
    );
}

export default Application;
