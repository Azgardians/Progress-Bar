import React from "react";


const label = (props) => {
    
    return(
        <div>
            <label>
                ValuePointer:
                <input placeholder="Enter between 0.5 to 1.5" onChange={props.changeHandler}  type="number"/>
            </label>
        </div>
    );
}

export default label;