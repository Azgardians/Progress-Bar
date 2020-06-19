import React from "react";


const input = (props) => {
    
    return(
        <div>
            <label>
                ValuePointer:
                <input placeholder="Enter the values" onChange={props.changeHandler}  type="number"/>
            </label>
        </div>
    );
}

export default input;