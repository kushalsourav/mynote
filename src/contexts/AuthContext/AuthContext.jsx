import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../../reducers/AuthReducer/AuthReducer";

const initalAuthState = {
     email:'',
     password:'',
     confirmPassword:'',
     firstName:'',
     lastName:'',
     login : false,
     userData: {}
};

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initalAuthState);
    const handleLogout = (authDispatch, navigate) => {
        authDispatch({type:"LOGIN", login:false, token:localStorage.removeItem("token")})
        navigate("/")
      }
    return(
        <AuthContext.Provider value={{authState, authDispatch, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, useAuth};