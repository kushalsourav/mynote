
import "./ColorCard.css";

const ColorCard = ({colors, setData , noteId, note, editNote}) => {
  return (
    <div className="color-card">
       <div className="colors">
        {colors.map(({colorcode}) => {
            return(
                   <span className="color-item" style={{backgroundColor: colorcode}} key={colorcode} onClick={() => {
                   note.colorCode = colorcode;
                   editNote(noteId,note,setData);
                  }
                   }>
                    {" "}
                   </span>
            )
        })}
       </div>
    </div>
  )
}

export default ColorCard;