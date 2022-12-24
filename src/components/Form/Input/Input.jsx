
const Input = ({name, setInput, placeholder, id , value , error, setPassVisible, passVisible}) => {
    return(
        <>
        <div className={`form-control `}>
        <label htmlFor={id} className="input-label"> {name} :
         <input type={passVisible ? "password" : "text"} placeholder={placeholder} name={name} id={id} value={value}
          onChange={(e) => 
            {
                setInput({type:"INPUT", name: e.target.name , input:e.target.value})
            }} 
          className="input"
          autoComplete="on"
          />
         </label>
          {
            setPassVisible && <span className="input-icon" onClick={() => setPassVisible()}><i className="fas fa-eye-slash"></i></span>
          }
          {
            error && error.type === name.toLowerCase() &&  <small className="error">{error.message}</small>
          }

        </div>
        </>
    )
};

export default Input;