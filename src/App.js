import React , {Component} from 'react';
import './App.css';
import ProgressBar from './container/progressBar/progressBar';

class App extends Component {
  state = {
    data : 50,
    max : 100,
    min : 1
  };  

  changeHandler = (event) => {
    this.setState({data : event.target.value});
  }
  handleSubmit = (event) => {
    console.log(this.state.data);
    event.preventDefault();
  }
  
  render(){
    
    return (
      <div className="App">
        <ProgressBar 
          values={this.state.data}
          max = {this.state.max}
          min = {this.state.min}/>
          <label>
            Value:
            <input placeholder="Enter between 1 to 100" onChange={this.changeHandler}  type="number"/>
          </label>
          
      </div>
    );
  }
}

export default App;
