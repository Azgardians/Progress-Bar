import React , {Component} from 'react';
import './progressBar.css';
import Section from '../../components/sectionBar/sectionBar';
// import Input from '../../components/Input/Input';


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
        this.setState({
            items : dataBar,
            data : dataBar.currentValue,
            min : dataBar.minValue,
            max : dataBar.maxValue,
            labels : dataBar.staticLabels.labels,
            mainWidth : dataBar.mainWidth,
            zones : dataBar.staticZones,
            mainHeight : dataBar.mainHeight,
            isLoaded : true
        });
    }

    changeHandler = (event) => {
        const inputValue = event.target.value
        this.setState({data : inputValue});
    }
    gettheWidth (max , min , mainWidth) {
        const divisons = (this.state.max - this.state.min);
        const difference = max - min;
        let width = ((difference * mainWidth)/divisons)
        return width;
    }

    render(){
        let sectionBar = <div><h3>Loading...</h3></div>
        let currentData = (((this.state.data - this.state.min)*100)/(this.state.max - this.state.min)+1);
        if (this.state.isLoaded){
            const sectorZones = this.state.zones.slice(0).reverse().map((zone , i) => {
                return{
                    start : 0,
                    color : zone.strokeStyle,
                    width : this.gettheWidth(zone.max , this.state.min , this.state.mainWidth),
                }
            })
            sectionBar = (
                <Section 
                    values={currentData}
                    max = {this.state.max}
                    min = {this.state.min}
                    section={this.state.labels}
                    mainWidth={this.state.mainWidth}
                    sectionZones={sectorZones}
                    height={this.state.mainHeight}/>
            )
        }
        return(
            <div className="Bar">
                {sectionBar}
            </div>
        );
    }
}

export default ProgressBar;