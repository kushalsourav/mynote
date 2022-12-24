import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import Label from "../../pages/Label/Label";
import Archives from "../../pages/Archives/Archives";
import Trash from "../../pages/Trash/Trash";
import Profile from "../../pages/Profile/Profile";

const Router = () => {

    return (
        <>
        <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Label" element={<Label />} />
        <Route path="/Archive" element={<Archives />} />
        <Route path="/Trash" element={<Trash />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />

        </Routes>
        </>
    )
};

export default Router;