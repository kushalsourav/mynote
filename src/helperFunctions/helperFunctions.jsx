export const handleSubmitNote = (e, isEdit, note, setData, editId,postNote, editNote, postToast) => {
    e.preventDefault();
    !isEdit && postNote(note, setData, postToast);
    setData({type:"MODAL", modal:false});
    isEdit && editNote(editId, note, setData, postToast);
    setData({type:"IS_EDIT", isEdit:false});
}


export const getEditNote = (editNote, note,  setData) => {
setData({type:"EDIT_ID", editId:note._id});
editNote.title = note.title;
editNote.description =  note.description;
editNote.label =  note.label;
editNote.priority =  note.priority;
setData({type:"IS_EDIT", isEdit:true});
setData({type:"MODAL", modal:true});
}