import React, {useState} from 'react';
import { elementsContext } from '../context/elementsContext';

export default function GridContainer({children}) {
    const [elements, setElements] = useState({dfdf:'dfdf'});
    return (
        <>
            <elementsContext.Provider value={{elements, setElements}}>
                {children}
            </elementsContext.Provider>
        </>
    )
}