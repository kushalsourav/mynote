import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import RequireAuth from '../../contexts/AuthContext/RequireAuth/RequireAuth';
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import Label from "../../pages/Label/Label";
import Archives from "../../pages/Archives/Archives";
import Trash from "../../pages/Trash/Trash";
import Profile from "../../pages/Profile/Profile";

const Router = () => {

    return (
        <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/Home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/Label" element={<RequireAuth><Label /></RequireAuth>} />
        <Route path="/Archive" element={<RequireAuth><Archives /></RequireAuth>} />
        <Route path="/Trash" element={<RequireAuth><Trash /></RequireAuth>} />
        <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default Router;