import React , {Component} from 'react';
import './App.css';
import ProgressBar from './container/progressBar/progressBar';

class App extends Component {
  state = {
    data : 0.5,
    max : 1.5,
    min : 0.5
  };  

  changeHandler = (event) => {
    const inputValue = event.target.value;
    const outputValue = (inputValue *100);
    console.log(outputValue);
    this.setState({data : outputValue});
  }

  render(){
    
    return (
      <div className="App">
        <ProgressBar 
          values={this.state.data}
          max = {this.state.max}
          min = {this.state.min}/>
          <label>
            ValuePointer:
            <input placeholder="Enter between 1 to 100" onChange={this.changeHandler}  type="number"/>
          </label>
      </div>
    );
  }
}

export default App;
