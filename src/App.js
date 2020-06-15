import React , {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    value : 5
  };  

  handleChange = (event) => {
    this.setState = ({value : event.target.value});
    // console.log(this.setState = ({value : event.target.value}));
  }
  render(){
    return (
      <div className="App">
        <input type="range" min="1" max="100"  onChange={this.handleChange} step="1" className="slider" id="myRange" ></input>
        <svg width="861" height="59" viewBox="0 0 861 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="861" height="59" fill="#E5E5E5"/>
          <rect width="861" height="59" fill="white"/>
          <rect x="0.5" y="0.5" width="860" height="58" fill="white" stroke="black"/>
          <rect x="648" width="213" height="59" fill="#EB3324"/>
          <rect width="349" height="59" fill="#20D420"/>
          <rect x="349" width="299" height="59" fill="#FBE44D"/>
        </svg>
        <label className="labels">
          <p className="firstValue"> 0.1 </p>
          <p className="secondValue">0.5</p>
          <p className="thirdValue">0.8</p>
          <p className="fourthValue">1.0</p>
        </label>
      </div>
    );
  }
}

export default App;
