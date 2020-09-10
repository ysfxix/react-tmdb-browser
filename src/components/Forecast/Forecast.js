import React, { Component } from 'react';
import Card from '../Card/Card'
import Cities from '../Cities/Cities'

const apiKey = "9514e79b490898110137088b299059c9";
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?APPID=" + apiKey;

class Forecast extends Component {
   
    constructor(props) {
        super(props);
        this.state = {              
        };
        console.log("Forecast: ", this.props.location.state.forecast);
    }

    componentDidMount(){

    }

    render() { 
        
        var {cityID} = this.props.location.state;
        const {forecast} = this.props.location.state;
        console.log("Props: ", forecast);
        var weatherIconURL = "http://openweathermap.org/img/w/";

        return ( 
            <div>
                <div className="row">
                    {
                        forecast.map((f) => {
                            return(
                                <Card 
                                key={f.dt_txt}
                                cityID={cityID} 
                                cardTitle={new Date(f.dt_txt).toLocaleDateString() + " " + new Date(f.dt_txt).toLocaleTimeString()} 
                                temp={f.main.temp} 
                                description={f.weather[0].description} 
                                forecast={null}
                                icon = {weatherIconURL + f.weather[0].icon +".png"} />
                            )
                        })
                    }  
                </div> 
            </div>
         );
    }
}
 
export default Forecast;