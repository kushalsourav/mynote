import axios from "axios"

export const  getUser =  async(setData) => {
   try {
      await axios.get("/api/user",{headers : { authorization: localStorage.getItem("token")} }).then((response) => 
        setData({type:"USER_DATA", userData: response.data.user})
      )
   } catch (error) {
      
   };
};

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
    };
 };
 
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

 export const postArchive = async (noteID, note, setData, postToast) => {
   try {
      await axios.post(`/api/notes/archives/${noteID}`, {note}, {headers: {authorization:localStorage.getItem("token")}}).then((response) => {
         if(response.status === 201) {
            postToast("success", `${note.title} moved to archive`)
            getArchive(setData)
            getNote(setData)
         }
      });
   } catch (error) {
      console.log(error)
   }
};

const getArchive = async (setData) => {
   try {
      await axios.get('/api/archives', {headers: {authorization:localStorage.getItem("token")}}).then((response) => {
         setData({type:"ARCHIVE", archives:response.data.archives})
      });
   } catch (error) {
      console.log(error)
   }
};

export const restoreArchive = async (noteID,  setData, postToast) => {
   try {
      await axios.post(`/api/archives/restore/${noteID}`, {}, {headers: {authorization:localStorage.getItem("token")}}).then((response) => {
         if(response.status === 200) {
            postToast("success", "note been restored");
            getArchive(setData);
            getNote(setData);
         }
      });
   } catch (error) {
      console.log(error);
   }
};

export const deleteArchive = async (noteID,  setData, postToast) => {
   try {
      await axios.delete(`/api/archives/delete/${noteID}`,  {headers: {authorization:localStorage.getItem("token")}}).then((response) => {
         if(response.status === 200) {
         getArchive(setData);
         postToast("success", "note has been removed from archive")
         }
      });
   } catch (error) {
      console.log(error)
   }
};

export const postTrash = async (trashId,setData,postToast) => {
   try {
      await axios.post(`/api/notes/trash/${trashId}`, {},{headers: {authorization:localStorage.getItem("token")}}).then((response) => {
         if(response.status === 201) {
            getTrash(setData);
            getNote(setData);
            postToast("success", "Note moved to trash");
         }
     });
   } catch (error) {
      console.log(error);
   }
};

const getTrash = async (setData) => {
   try {
      await axios.get('/api/trash',{headers: {authorization:localStorage.getItem("token")}}).then((response) =>{
         setData({type:"TRASH", trash:response.data.trash});
      });
   } catch (error) {
      console.log(error)
   }
};

export const deleteTrash = async (trashId, setData, postToast) => {
   try {
      await axios.delete(`/api/trash/delete/${trashId}`, {headers: {authorization:localStorage.getItem("token")}}).then((response) => {
        if(response.status === 200) {
         getTrash(setData);
         postToast("success", "note is removed from trash");
        }
     });
   } catch (error) {
      console.log(error);
   }
}

export const restoreTrash = async (noteID,  setData, postToast) => {
try {
   await axios.post(`/api/trash/restore/${noteID}`, {}, {headers: {authorization:localStorage.getItem("token")}}).then((response) => {
      if(response.status === 200) {
         getTrash(setData)
         getNote(setData)
         postToast("success", "note is restored to home")
      }
   });
} catch (error) {
   console.log(error);
}

};

