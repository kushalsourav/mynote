import { Fragment } from "react";
import "./NoteCard.css";
import ColorCard from "../ColorCard/ColorCard";

const NoteCard = ({notes,label, getEditNote, editNote, setData,colors,  deleteNote, colorPallete, postToast, edit,restoreNote, postArchive, filterLabel, filterText, filterPriority}) => {

    return (
        <>
        {notes.map((note) => {
                if(filterText && note.title.indexOf(filterText) === -1) {
                    return <Fragment key={note._id}></Fragment>;
                } 
                if(filterLabel &&  filterLabel.filterChecked && !note.label.includes(filterLabel.filterLabelName)) {
                    return <Fragment key={note._id}></Fragment>;
                }
                if(filterPriority &&  filterPriority.filterChecked && !note.priority.includes(filterPriority.filterPriorityLevel)) {
                    return <Fragment key={note._id}></Fragment>;
                }
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
                        {
                            postArchive && 
                            <button className="btn-icon" onClick={() => {postArchive(note._id, note, setData, postToast)}}>
                                    <i className="fa fa-archive" aria-hidden="true"></i>
                            </button>
                        }
                        { colors &&
                                <div className="note-colors" style={{display:colorPallete.palleteChecked && colorPallete.palleteId === note._id   ?"block" : "none"}}>
                                       <ColorCard colors={colors} setData={setData} note={note} noteId={note._id} editNote={edit} />
                                </div>
                        }
                         <label className="btn-icon"><i className="fa fa-palette">
                            <input type="checkbox" className="note-checkbox" checked={colorPallete.palleteChecked && colorPallete.palleteId === note._id } onChange={(e) => {setData({type:"PALLETE", palleteChecked: e.target.checked, palleteId:note._id })}}/>
                            </i></label> 
                            {
                            restoreNote &&    
                            <button className="btn-icon" 
                              onClick={() => {restoreNote(note._id, setData, postToast)}}>
                              <i className="fa fa-window-restore" aria-hidden="true"></i>
                            </button>
                        }
                   
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