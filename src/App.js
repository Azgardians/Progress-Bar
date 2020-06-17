import React , {Component} from 'react';
import './App.css';
import ProgressBar from './container/progressBar/progressBar';
class App extends Component {
  render(){
    return (
      <div className="App">
        <ProgressBar />
      </div>
    );
  }
}

export default App;
