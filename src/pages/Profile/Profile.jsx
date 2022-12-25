import { useAuth } from "../../contexts/AuthContext/AuthContext";
import "./Profile.css";

const Profile = () => {

  const {authState} = useAuth();
  return (
        <div className="personal-information">
            <h2>Personal information</h2>
            <div className="personal-details">
                  <p className="user-email">Email: {authState.userData.email}</p>
                  <p className="user-name">Firstname : {authState.userData.firstName}</p>
                  <p className="user-name">  Lastname : {authState.userData.lastName}</p>
            </div>
      </div>
  );
};

export default Profile;