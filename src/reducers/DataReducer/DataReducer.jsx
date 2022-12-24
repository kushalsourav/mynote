const DataReducer = (state, action) => {
     switch (action.type) {
          case "FORM_TYPE":
               return {...state, formType: action.formType};
          default:
               break;
     }; 
};

export default DataReducer;