import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useData } from "../../contexts/DataContext/DataContext";
import useToast from "../../hooks/useToast";
import useToggle from "../../hooks/useToggle";

const SignIn = () => {
    const {authDispatch, authState} = useAuth();
    const [toggle, setToggle] = useToggle();
    const {data} = useData();
    const postToast = useToast();
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await axios.post('/api/auth/login', 
            {email: authState.email, password: authState.password})
            .then(function(response){
               if(response.status === 200 || response.status === 201) {
                localStorage.setItem("token",response.data.encodedToken);
                authDispatch({type:"LOGIN", login:true});
                authDispatch({type:"CLEAR_INPUTS"});
                navigate('/Home');
               }
            });
        }
        catch (error) {
            if(error.response.status === 404) {
                 postToast('warning',"the email you entered is not registered");
            }
            if(error.response.status === 401) {
                 postToast('warning',"you have entered incorrect password");
            }
        }
    };
    const guestLogin = async (e) => {
        try {
            await axios.post('/api/auth/login', 
              {email: 'roronoazoro@gmail.com'  , password:'roronoazoro'})
              .then(function(response){
                 if(response.status === 200 || response.status === 201) {
                  localStorage.setItem("token",response.data.encodedToken);
                  authDispatch({type:"LOGIN", login:true})
                  authDispatch({type:"USER_DATA", userData: response.data.foundUser});
                  authDispatch({type:"CLEAR_INPUTS"});
                  navigate('/Home');
                 }
              });
          } catch (error) {
              console.log(error)
          }
    };
    return(
        <>
            <Form onHandleSubmit={handleLogin} type={data.formType} authState={authState} authDispatch={authDispatch} passVisible={!toggle} setPassVisible={setToggle} /> 
            <div className="form-box">
               <div className="form-btn">
                 <button onClick={(e) => {guestLogin(e)}} className="btn cta-btn btn-large">Guest Login</button>
               </div>
            </div>
        </>
    );
};

export default SignIn;






























