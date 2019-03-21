import React, { useState, useContext } from 'react';
import '../../css/GridControl.scss';
import { gridContext } from '../../context/gridContext';

export default function GridControl() {
    const {gridParameters, setGridParameters} = useContext(gridContext);
    const [newParameters, setNewParameters] = useState(gridParameters);

    const handleChange = e => {
        setNewParameters({
            ...newParameters,
            [e.target.name]: e.value
        })
    }

    const {horizontalLines, verticalLines} = newParameters;
    return (
        <div className="grid-control">
            horizontal lines: <br/>
            <input 
                type="number" 
                value={horizontalLines}
                name="horizontalLines"
                onChange={handleChange}
            /> <br/>
            vertical lines: <br/>
            <input 
                type="number"
                value={verticalLines}
                name="verticalLines"
                onChange={handleChange}
            /> <br/>
            <button onClick={() => setGridParameters(newParameters)}></button>
        </div>
    )
}