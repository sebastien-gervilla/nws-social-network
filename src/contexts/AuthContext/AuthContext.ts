import { Responses } from "@/services/interfaces/responses";
import { CredentialResponse } from "@react-oauth/google";
import { createContext } from "react";

interface AuthContextProps {
    user: Responses.User.Entity | null;
    login: (credentialResponse: CredentialResponse) => void
}

export const AuthContext = createContext<AuthContextProps>(null!);