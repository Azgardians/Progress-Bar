import React , {Component} from 'react';
import './progressBar.css';

class ProgressBar extends Component {
    
    render(){
        return(
            <div className="Bar">
                <input type="range" min={this.props.min*100} max={this.props.max*100} readOnly={true} value={this.props.values}  step="1" className="slider" id="myRange" ></input>
                <svg width="861" height="59" viewBox="0 0 861 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="648" width="213" height="59" fill="#EB3324"/>
                    <rect width="349" height="59" fill="#20D420"/>
                    <rect x="349" width="299" height="59" fill="#FBE44D"/>
                </svg>
                <label className="labels">
                    <p className="firstValue"> 0.5 </p>
                    <p className="secondValue">0.8</p>
                    <p className="thirdValue">1.0</p>
                    <p className="fourthValue">1.5</p>
                </label>
            </div>
        );
    }
}

export default ProgressBar;