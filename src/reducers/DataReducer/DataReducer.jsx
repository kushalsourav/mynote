const DataReducer = (state, action) => {
     switch (action.type) {
          case "FORM_TYPE":
               return {...state, formType: action.formType};
          case "MODAL" :
               return {...state, modal:action.modal};
          case "TOAST":
               return {...state, toast: {...state.toast , toastType: action.toastType, toastMessage:action.toastMessage}};
          default:
               break;
     }; 
};

export default DataReducer;