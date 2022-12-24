import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapper = (wrraperID) => {
 const wrraperElement = document.createElement('div');
       wrraperElement.setAttribute('id', wrraperID);
       document.body.appendChild(wrraperElement);

 return wrraperElement;
};

const ReactPortal = ({children, wrraperID}) => {
    const [wrraperElement, setWrraperElement] = useState(null);

    useEffect(() => {
        const element = createWrapper(wrraperID);
        const systemCreated = true;
        setWrraperElement(element);
        return () => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element);
              }
        };

    }, [wrraperID]);

    if(wrraperElement=== null) return null;
    return createPortal(children, wrraperElement);
};

export default ReactPortal;