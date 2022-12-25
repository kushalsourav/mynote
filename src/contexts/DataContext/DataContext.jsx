import { createContext, useContext, useReducer } from "react";
import { handleSubmitNote, getEditNote, filterByDate } from "../../helperFunctions/helperFunctions";
import DataReducer from "../../reducers/DataReducer/DataReducer";

const initialDataState = {
    formType:"",
    modal:false,
    toast: {
        toastType: '',
        toastMessage: ''
    },
    label : [
        {labelName: "work"},
        {labelName: "Exercise"},
        {labelName: "Health + Fitness"},
        {labelName: "creativity"},
        {labelName: "chores"},
        {labelName: "school"},
        {labelName: "teams"},
    ],
    priority: [
        {priorityLevel:  "high"},
        {priorityLevel:  "medium"},
        {priorityLevel:  "low"},
    ],
    editId: "",
    isEdit: false,
    cardColors: [
        {colorcode:"#00ffff3d"},
        {colorcode:"#faf6233d"},
        {colorcode:"#fa43233d"},
        {colorcode:"#4323fa3d"},
        {colorcode:"#7ceb2188"},
        {colorcode:"#db10105e"},
    ],
    colorPallete : {
        palleteChecked:"",
        palleteId:""
    },
    notes: [],
    note: {
       title: "",
       description: "",
       label: "",
       priority: "",
       createdDate:"",
       colorCode: "#db10105e",
    },
    archives: [],
    filterLabel: {
        filterChecked:  "",
        filterLabelName: "",
    },
    filterPriority: {
        filterChecked:  "",
        filterPriorityLevel: "",
    },
    filterByDate :"",
    search:"",
    trash:[],
}

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const [data, setData] = useReducer(DataReducer, initialDataState);
    const filteredData = filterByDate(data.notes, data.filterByDate);
    return(
        <DataContext.Provider value={{data, setData,  handleSubmitNote, getEditNote, filteredData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData};


