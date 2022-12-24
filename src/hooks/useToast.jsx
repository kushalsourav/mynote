import { useData } from "../contexts/DataContext/DataContext";

const useToast = () => {
    const {setData} = useData();
    const postToast =(type, message) => {
        setData({type:"TOAST", toastType:type, toastMessage:message });
        setTimeout(() => {
            setData({type:"TOAST", toastType:'', toastMessage:'' });
        }, 5000)
    };
    return postToast;
};

export default useToast;