import React , {Component} from 'react';
import './App.css';
import ProgressBar from './container/progressBar/progressBar';

class App extends Component {

  state = {
    data : 0.5,
    max : 1.5,
    min : 0.5,
    isLoaded : false,
    items : null
  };  

  async componentDidMount (){
    const url = "https://ac8d418a-14cf-41a4-908a-4a803dc878ab.mock.pstmn.io/demo";
    const response = await fetch(url);
    const dataBar = await response.json();
    console.log(dataBar);
    console.log(dataBar.kpi[0].currentValue);
    this.setState({
      items : dataBar,
      data : dataBar.kpi[0].currentValue,
      isLoaded : true
    });
    
   
  }

  changeHandler = (event) => {
    const inputValue = event.target.value;
    this.setState({data : inputValue});
  }

  render(){
    let progressBar = <div><h3>Loading...</h3></div>
    if (this.state.isLoaded){
      progressBar = (
        <ProgressBar 
          values={this.state.data}
          max = {this.state.max}
          min = {this.state.min}/>
      )
    }
    return (
      <div className="App">
        {progressBar}
        <label>
          ValuePointer:
          <input placeholder="Enter between 0.5 to 1.5" onChange={this.changeHandler}  type="number"/>
        </label>
        {console.log(this.state.data)}
      </div>
    );
  }
}

export default App;
