import React, { useRef, useContext } from 'react';
import '../../css/GridControl.scss';
import { gridContext } from '../../context/gridContext';

export default function GridControl() {
    const {gridParameters, setGridParameters} = useContext(gridContext);
    const horizontalLines = useRef();
    const verticalLines = useRef();
    const submit = () => {
        setGridParameters({
            ...gridParameters,
            horizontalLines: horizontalLines.current.value,
            varticalLines: verticalLines.current.value
        })
    }
    const toggleGrid = () => {
        setGridParameters({
            ...gridParameters,
            visible: !gridParameters.visible
        })
    }
    return (
        <div className="grid-control">
            horizontal lines: <br/>
            <input 
                type="number" 
                ref={horizontalLines}
                defaultValue={gridParameters.horizontalLines}
                name="horizontalLines"
            /> <br/>
            vertical lines: <br/>
            <input 
                type="number"
                ref={verticalLines}
                defaultValue={gridParameters.verticalLines}
                name="verticalLines"
            /> <br/>
            <button onClick={submit}>Save</button>
            <br/>
            <button onClick={toggleGrid}>Toggle grid</button>
        </div>
    )
}