import React,{Component} from "react"
import './sectionBar.css'
class Section extends Component {
    render(){
        return(
            <div className="section">
                {console.log(this.props.mainWidth)}
                <input type="range" min={this.props.min*100} max={this.props.max*100} readOnly={true} value={this.props.values*100}  step="1" className="slider" id="myRange" ></input>
                <svg width={this.props.mainWidth} height={this.props.height} viewBox={`0 0 ${this.props.mainWidth} ${this.props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="648" width="213" height={this.props.height} fill="#EB3324"/>
                    <rect x="349" width="299" height={this.props.height} fill="#FBE44D"/>
                    <rect x={this.props.firstZone.start} width={this.props.firstZone.width} height={this.props.height} fill={this.props.firstZone.strokeStyle}/>
                </svg>
                <label className="labels">
                    <p className="firstValue">  {this.props.section[0]}</p>
                    <p className="secondValue">{this.props.section[1]}</p>
                    <p className="thirdValue">{this.props.section[2]}</p>
                    <p className="fourthValue">{this.props.section[3]}</p>
                </label>
            </div>
        );
    }
    
}

export default Section

            