import React from 'react'



const Rectangle = (props) => {
    
    return(
        <svg>
            {props.sectionZones.map(zone => (
                <svg key={zone.color}>
                    <rect x="0" width={zone.width} height={props.height} fill={zone.color} />
                </svg> 
            ))}
        </svg>
    );
}

export default Rectangle;