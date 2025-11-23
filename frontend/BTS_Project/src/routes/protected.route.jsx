import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const token = localStorage.getItem('token');

    if (!token) {
        // Redirection si pas de token
        console.log(5);
        
        return <Navigate to="/login" />;
    }

    // Sinon, affiche les routes enfants
    return <Outlet />;
}
