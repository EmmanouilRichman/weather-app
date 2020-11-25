import React, {useState, useEffect} from 'react'
import axios from 'axios';


var correctName = true;

export default function Weather(props) {
    return (
        <div>
            <h1>10 Day Forcast!</h1>
            <h2>{props.location.props.location}</h2>
        </div>
    )
}
