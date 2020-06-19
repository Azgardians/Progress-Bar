import React from "react"
import './sectionBar.css'
import Rectangle from './rectangle/rectangle'
import Label from './label/label'


const Section = (props) =>{
    let zone = props.sectionZones.map(zone => {
        return (
            zone.width + 25
        )
    });
    zone = zone.concat(25)
    
    return(
        <div className="section">
            <input style={{width: props.mainWidth + 62}} type="range" min="1" max="100" readOnly={true} value={props.values}  step="1" className="slider" id="myRange" ></input>
            <svg width={props.mainWidth} height={props.height} viewBox={`0 0 ${props.mainWidth} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rectangle 
                    mainWidth={props.mainWidth}
                    sectionZones={props.sectionZones}
                    height={props.height}/>
            </svg>
            <label className="labels">
                <Label 
                    labels={props.section}
                    position={zone}/>
            </label>
        </div>
    );
    
}

export default Section

            