import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../weather.css';


const KEY = "d7908f4f11ef423aa9854244202511";
export default function Weather(props) {
    const[name, setName] = useState('');
    const[region, setRegion] = useState('');
    const[country, setCountry] = useState('');
    const[forecast, setForecast] = useState([]);
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${props.location.props.location}&days=3`

     useEffect(() => {
        const fetch = async () =>{
            const res = await axios.get(
                URL
            );
            setName(res.data.location.name)
            setRegion(res.data.location.region)
            setCountry(res.data.location.country)
            setForecast(res.data.forecast.forecastday)
        }
        fetch();
    }, [URL]);
    // console.log(forecast[0].date);
    return (
        <div>
            <h1>Three Day forecast for {name}, {region}, {country}</h1>

                {forecast.map(day =>{
                   return( 
                    <div className="Row">
                        <div className="Col">
                            <h3>{day.date}</h3>
                            <img src={day.day.condition.icon} alt="conditions"></img>
                            <p>{day.day.avgtemp_f}<span>&#8457;</span></p>
                            <p>{day.day.condition.text}</p>
                        </div>
                   </div>
                   );
                })}
        
        </div>
    )
}
