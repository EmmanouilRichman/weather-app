import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';


export default function GetInfo() {

const [city, setCity] = useState("");
const [redirect, setRedirect] = useState(false);

function handleSubmit(){
    setRedirect(true);
}
    if(redirect === false){
    return (
        <div>
            <h1>Please Enter Your Desired City/Zip</h1>
            <form onSubmit={handleSubmit}>
               <label>City/Zip: </label>
               <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
               <br></br>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
        )
    }
    else{
        return(
            <div>
                <Redirect to={{
                    pathname: '/weather',
                    props: {location: city}
                }}/>
            </div>
        );
    }
}
