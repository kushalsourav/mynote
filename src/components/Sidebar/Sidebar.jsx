import { Link , useLocation} from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({setData,labels, filterLabel,}) => {
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
            { 
                useLocation().pathname === "/Label" && 
                <div className="filter-labels">
                Labels
                    {labels.map(({labelName}) => {
                        return (
                            <label htmlFor={labelName}
                            key={labelName}>
                                <input type="checkbox" 
                                id={labelName} className="filter-input" 
                                value={labelName}
                                checked={filterLabel.filterChecked && filterLabel.filterLabelName === labelName}
                                onChange={(e) =>setData({type:"FILTER" ,filterChecked: e.target.checked, filterLabelName:labelName}) }
                                /> {labelName}
                            </label>
                        )
                    })}
                </div>
            }
             </div>
        </div>
        </>
    );
};

export default Sidebar;