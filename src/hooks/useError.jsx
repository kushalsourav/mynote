import { useState } from "react";

const useError = () => {
    
    const [state, setState] = useState({type:"", message:""});
    const postError = (type, message) => {
      setState({...state , type: type, message: message});
    };
    return [state , postError];
};

export default useError; 