
import "./TextEditor.css";

const TextEditor = ({labels, setData, handleSubmitNote,notes, isEdit, editId, priority, postNote, editNote ,postToast }) => {

    return (
        <>
        <form className="form form-primary" onSubmit={(e) => handleSubmitNote(e, isEdit, notes, setData ,editId,postNote, editNote , postToast)}>
                <label htmlFor="title" className="input-label" >Title
                <input type="text" placeholder="Enter the Title" name="title"  id="title"   className="input"  
                value={notes.title} required
                onChange={(e) => {setData({type:"CREATE_NOTE", name:e.target.name, input:e.target.value})}}/>
                </label>
                <label htmlFor="textarea" className="input-label">Enter your Note
                <textarea name="description" id="textarea" rows="10" cols="30" required value={notes.description}  className="input-textarea" 
                onChange={(e) => {setData({type:"CREATE_NOTE", name:e.target.name,input:e.target.value})}}></textarea>
                </label>
                <select required  name="label" value={notes.label} className="label" onChange={(e) => {setData({type:"CREATE_NOTE",name:e.target.name, input:e.target.value})}}>
                    <option value="label" className="label" hidden>Label</option>
                    { 
                      labels.map((label) => <option className="label" key={label.labelName} value={label.labelName}>{label.labelName}</option>)
                    }
                </select>
                <select  name="priority" value={notes.priority} className="priority" required onChange={(e) => {setData({type:"CREATE_NOTE",name:e.target.name, input:e.target.value})}}> 
                <option value="priority" className="priority" hidden>Priority</option>
                    { 
                      priority.map((priority) => <option className="priority" key={priority.priorityLevel} value={priority.priorityLevel}>{priority.priorityLevel}</option>)
                    }
                </select>
                <button  className="btn cta-btn editor-button">Add note</button>
        </form>
        </>
    );
};

export default TextEditor;