import "./NoteCard.css";
import ColorCard from "../ColorCard/ColorCard";

const NoteCard = ({notes,label, getEditNote, editNote, setData,colors,  deleteNote, colorPallete, postToast, edit}) => {


    return (
        <>
        {notes.map((note) => {
 
                return (
                <div className="note-card" key={note._id} style={{backgroundColor:  note.colorCode}}>
                 { label &&  <span className="note-label">{note.label}</span>}
                <div className="note-title">{note.title}</div>
                <div className="note-description">
                   <p>{note.description}</p> 
                </div>
                <div className="note-elements">
                    <div className="note-date">created date {note.createdDate}</div>
                    <div className="note-icons">
                        <button className="btn-icon" onClick={() => {
                            deleteNote(note._id,setData,  postToast)
                        }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    
                        { colors &&
                                <div className="note-colors" style={{display:colorPallete.palleteChecked && colorPallete.palleteId === note._id   ?"block" : "none"}}>
                                       <ColorCard colors={colors} setData={setData} note={note} noteId={note._id} editNote={edit} />
                                </div>
                        }
                         <label className="btn-icon"><i className="fa fa-palette">
                            <input type="checkbox" className="note-checkbox" checked={colorPallete.palleteChecked && colorPallete.palleteId === note._id } onChange={(e) => {setData({type:"PALLETE", palleteChecked: e.target.checked, palleteId:note._id })}}/>
                            </i></label> 
                   
                        {
                            editNote &&   <button className="btn-icon btn-edit" 
                            onClick={() => {
                                  getEditNote(editNote,note, setData, postToast)
                            }}><i className="fa fa-pen"></i></button>
                        }
                    </div>
                </div>
            </div>
                )
            
        })}
        </>
    )
};

export default NoteCard;