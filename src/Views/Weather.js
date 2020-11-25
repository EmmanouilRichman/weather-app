import React, {useState, useEffect} from 'react'
import axios from 'axios';


var correctName = true;

export default function Weather(props) {
    return (
        <div>
            <h1>5 Day Forcast for {props.location.props.location}</h1>
        </div>
    )
}
