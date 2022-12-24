import { Link , useLocation} from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({setData}) => {
    return (
        <>
        <div className="sidebar">
             <div className="sidebar-user">
             <Link to="/Home"  className="sidebar-items">
                <div className="sidebar-icon"><i className="fa fa-home" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Home</div>
            </Link>
            <Link to="/Label" className="sidebar-items">
                 <div className="sidebar-icon"><i className="fa fa-tag" aria-hidden="true"></i>
                 </div>
                <div className="sidebar-item-name">Label</div>
            </Link>
            <Link to="/Archive" className="sidebar-items">
            <div className="sidebar-icon"><i className="fa fa-archive" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Archive</div>
            </Link>
            <Link to="/Trash" className="sidebar-items">
            <div className="sidebar-icon"><i className="fa fa-trash" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Trash</div>
            </Link>  
            <Link to="/Profile" className="sidebar-items">
                <div className="sidebar-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></div>
                <div className="sidebar-item-name">Profile</div>
            </Link>
            {
                useLocation().pathname === "/Home" &&
                <div>
                <button className="cta-btn btn btn-large" onClick={() => {
                    setData({type:"RESET"})
                    setData({type:"MODAL", modal:true})
            
            }}>Create new note</button>
            </div>
            }
             </div>
        </div>
        </>
    );
};

export default Sidebar;