import { createContext, useState } from "react";

export interface Auth {
    email: string;
    password: string;
    accessToken: string;
}

export type UserContextType = {
    auth: Auth;
    setAuth: (user: Auth) => void;
};

const AuthContext = createContext<UserContextType | {}>({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [auth, setAuth] = useState<Auth>({
        email: "",
        password: "",
        accessToken: "",
    });
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
