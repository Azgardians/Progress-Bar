import React from 'react';

const CustomBox = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                    Value:
                    <input placeholder="value" onChange={props.changeHandler}  type="number"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CustomBox; 