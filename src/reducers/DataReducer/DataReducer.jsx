const DataReducer = (state, action) => {
     switch (action.type) {
          case "FORM_TYPE":
               return {...state, formType: action.formType};
          case "MODAL" :
               return {...state, modal:action.modal};
          case "TOAST":
               return {...state, toast: {...state.toast , toastType: action.toastType, toastMessage:action.toastMessage}};
          case "CREATE_NOTE" : 
               return {...state, note : {...state.note, [action.name] : action.input  , createdDate: new Date().toLocaleDateString()}}
          case "GET_NOTES" :
               return {...state, notes: action.notes};
          case "EDIT_ID" :
               return {...state, editId: action.editId};
          case "IS_EDIT" : 
               return {...state , isEdit: action.isEdit};
          case "PALLETE" : 
               return {...state,     colorPallete : {...state.colorPallete, palleteChecked:action.palleteChecked, palleteId:action.palleteId }}
          case "RESET" : 
               return {...state , note: {...state.note , title:'', description:'', label:'', priority:''}}
          case "ARCHIVE" :
               return {...state, archives: action.archives};
          case "FILTER" :
               return {...state , filterLabel : {...state.filterLabel,  filterChecked:action.filterChecked,filterLabelName: action.filterLabelName}}
          default:
               break;
     }; 
};

export default DataReducer;