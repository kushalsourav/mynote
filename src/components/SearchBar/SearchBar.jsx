import './SearchBar.css';
const SearchBar = ({filterText, setData}) => {
    return (
        <label htmlFor="search" className='search'>                
        <span className="search-icon"><i className="fas fa-search"></i></span>
        <input type="text" 
        name="search"
        className="input searchbar"
        value={filterText}
        onChange={(e) => setData({type:"SEARCH" ,  search:e.target.value})}
        onBlur={(e) => setData({type:"SEARCH" ,  search:''})}
        />
        </label>
        
    );
};

export default SearchBar;