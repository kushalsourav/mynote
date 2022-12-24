import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

const RequireAuth = ({children}) => {
    const {authState} = useAuth();
    const location = useLocation();
    return authState.login ? children : <Navigate to='/' state={{from : location}} replace />
};

export default RequireAuth;