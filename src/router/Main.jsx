import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext/DataContext";
import Navbar from "../components/Navbar/Navbar";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import Router from "./Router/Router"
import Sidebar from "../components/Sidebar/Sidebar";
import Grid28 from "../components/Ui/Grid-2-8/Grid28";
import Toast from "..//components/Toast/Toast";
import useToggle from "../hooks/useToggle";
import FilterCard from "../components/FilterCard/FilterCard";


const Main = () => {

  const {authDispatch, handleLogout} = useAuth();
  const {data ,setData} = useData();
  const [toggle, setToggle] = useToggle();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
        <Grid28>
          {location.pathname !== '/' && <Sidebar setData={setData} filterLabel={data.filterLabel} labels={data.label} />}
          {location.pathname !== '/' &&
          <div>
            <Navbar  
            navigate={navigate} 
            authDispatch={authDispatch} 
            handleLogout={handleLogout} 
            filterBySearch={data.search}  
            setData={setData}
            setToggle={setToggle}
            /> 
            <Router />
            </div> }
        </Grid28>
        {location.pathname === '/' && <Router />}
        <FilterCard labels={data.label} toggle={toggle} filterLabel={data.filterLabel} setData={setData} priority={data.priority} filterPriority={data.filterPriority} date={data.filterByDate} setToggle={setToggle}/>
        <Toast type={data.toast.toastType} message={data.toast.toastMessage}/>  
    </div>
  );
};

export default Main;