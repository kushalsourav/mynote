import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
const Navbar = ({ handleLogout, authDispatch, filterBySearch, setData , navigate, setToggle}) => {

    return (
        <nav className="navbar">
            <div className="navbar-items">
                    <SearchBar  filterBySearch={filterBySearch} setData={setData}/>
                    <button className="btn-filter btn-icon" onClick={() => setToggle()}>
                        <i className="fa fa-tasks" aria-hidden="true"></i></button>
            </div>
            <div className="navbar-items">
                <button className="btn cta-btn" onClick={() => 
                {handleLogout(authDispatch, navigate)}}>
                {"logout" }
                </button>
            </div>
        </nav>
    );
};

export default Navbar;