import axios from "axios"

export const postNote = async (note, setData, postToast) => {
    try {
       await axios.post('/api/notes', {note}, {headers: {authorization: localStorage.getItem('token')}}).then((response) => {
          if(response.status === 201) {
             postToast("success", `${note.title} created`)
             getNote(setData)
          }
         })
    } catch (error) {
       console.log(error)
    }
 }
 
 export const getNote = async (setData) => {
    try {
       await axios.get('/api/notes',  {headers: {authorization: localStorage.getItem('token')}}).then((response) => {
          setData({type:"GET_NOTES", notes:response.data.notes})
         });
    } catch (error) {
       console.log(error)
    }
 };
 
 export const editNote = async (ID, note, setData, postToast) => {
    try {
       await axios.post(`/api/notes/${ID}`, {note}, {headers: {authorization: localStorage.getItem('token')}}).then((response) => {
          if(response.status === 201) {
             setData({type:"GET_NOTES", notes:response.data.notes})
             postToast("success", `${note.title} edited successfully`)
          }
         });
    } catch (error) {
       console.log(error)
    }
  
 };