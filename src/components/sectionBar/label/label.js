import React from "react"

const label = (props) => {
    return (
        <div>
            
            {props.labels.map((label,i) =>(
                    <div key={i}>
                        {/* {console.log(props.position[3-i])} */}
                        <p style={{marginLeft : `${props.position[3-i]}px`, position : 'absolute',top : '0'}}>
                            {label}
                        </p>
                    </div>
                ))
            }
        </div>        
    )
}

export default label