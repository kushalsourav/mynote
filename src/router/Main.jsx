import { useLocation } from "react-router-dom";
import { useData } from "../contexts/DataContext/DataContext";
import Router from "./Router/Router"
import Sidebar from "../components/Sidebar/Sidebar";
import Grid28 from "../components/Ui/Grid-2-8/Grid28";
import Toast from "..//components/Toast/Toast";


const Main = () => {

  const {data ,setData} = useData();
 const location = useLocation();
  return (
    <div>
        <Grid28>
          {location.pathname !== '/' && <Sidebar setData={setData} filterLabel={data.filterLabel} labels={data.label} />}
          {location.pathname !== '/' &&  <div><Router /></div> }
        </Grid28>
        {location.pathname === '/' && <Router />}
        <Toast type={data.toast.toastType} message={data.toast.toastMessage}/>  
    </div>
  );
};

export default Main;