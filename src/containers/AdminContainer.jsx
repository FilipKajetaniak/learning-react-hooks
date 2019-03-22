import React, { useState } from 'react';
import { gridContext } from '../context/gridContext';

export default function AdminContainer({children}) {
    const [gridParameters, setGridParameters] = useState({
        width: 810,
        height: 1000,
        verticalLines: 26,
        horizontalLines: 35,
        visible: true
    })
    return (
        <gridContext.Provider value={{gridParameters, setGridParameters}}>
            {children}
        </gridContext.Provider>
    )
}