import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const useLogout = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const logout = async (e) => {

        try {
            const res = await fetch('/api/v1/auth/logout', {
                method: 'GET',
                credentials: 'include',
            });

            if (res.status === 204) {
                console.log('logout successful');
                localStorage.removeItem('auth');
                navigate('/login');
            }
        } catch (err) {
            console.log(`failed to logout: ${err}`);
        }
    };

    return { logout };
};
