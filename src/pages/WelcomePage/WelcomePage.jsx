import welcomeImage from '../../assets/images/welcome-img.webp';
import Grid12 from '../../components/Ui/Grid-1-2/Grid12';
import Welcome from '../../components/Welcome/Welcome';
import { useData } from '../../contexts/DataContext/DataContext';
import useToggle from '../../hooks/useToggle';
import SignIn from '../../views/Signin/Signin';
import SignUp from '../../views/Signup/Signup';


const WelcomePage = () => {
    const {data, setData} = useData();
    const [toggle, setToggle] = useToggle(); 
    return(
        <>
        <Grid12>
        <Welcome setData={setData} toggle={toggle} setToggle={setToggle} formType={data.formType} />
        <div className="welcome-form">
          {data.formType === 'signin' && toggle && <SignIn />}
          { data.formType === 'signup'&& toggle   &&  <SignUp />}
          {!toggle && <img src={welcomeImage} className="img-responsive welcome-image" alt="welcomeimage" />} 
        </div>
        </Grid12>
        </>
    );
};

export default WelcomePage;