import { UserContextType } from "../context/AuthProvider";
import { useAuth } from "../hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RequireAuth: React.FC = () => {
    const { auth } = useAuth() as UserContextType;
    const location = useLocation();
    return auth?.email ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" state={{ from: location }} replace />
    );
};
