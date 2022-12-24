import ReactPortal from '../ReactPortal/ReactPortal';
import './Modal.css';

const Modal = ({children, isOpen , handleClose}) => {

    
     return(
        <>
        {
            isOpen && 
            <ReactPortal wrraperID={"wrrapedId"}>
            <div className="modal">
              <div className="content">
              <button onClick={handleClose} className="close-btn btn cta-btn">
                Close
              </button>
              {children}
              </div>
             </div>
            </ReactPortal>
        }
        </>
     );
};

export default Modal;