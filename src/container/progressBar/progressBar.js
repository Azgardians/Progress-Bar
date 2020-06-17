import React , {Component} from 'react';
import './progressBar.css';
import Section from '../../components/sectionBar/sectionBar';
import Label from '../Label/Label';


class ProgressBar extends Component {

    state = {
        data : null,
        max : null,
        min : null,
        labels : null,
        zones : null,
        mainWidth : null,
        mainHeight: null,
        isLoaded : false,
        items : null
    };  

    async componentDidMount (){
        const url = "https://ac8d418a-14cf-41a4-908a-4a803dc878ab.mock.pstmn.io/demo/bar";
        const response = await fetch(url);
        const dataBar = await response.json();
        console.log(dataBar);
        console.log(dataBar.staticZones[0]);
        this.setState({
            items : dataBar,
            data : dataBar.currentValue,
            min : dataBar.minValue,
            max : dataBar.maxValue,
            labels : dataBar.staticLabels.labels,
            mainWidth : dataBar.mainWidth,
            zones : dataBar.staticZones[0],
            mainHeight : dataBar.mainHeight,
            isLoaded : true
        });
    }

    changeHandler = (event) => {
        const inputValue = event.target.value;
        this.setState({data : inputValue});
    }

    render(){
        let sectionBar = <div><h3>Loading...</h3></div>
        if (this.state.isLoaded){
            sectionBar = (
                <Section 
                    values={this.state.data}
                    max = {this.state.max}
                    min = {this.state.min}
                    section={this.state.labels}
                    mainWidth={this.state.mainWidth}
                    firstZone={this.state.zones}
                    height={this.state.mainHeight}/>
            )
        }
        return(
            <div className="Bar">
                {sectionBar}
                <Label changeHandler={this.changeHandler}/>
            </div>
        );
    }
}

export default ProgressBar;