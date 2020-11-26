import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import '../Styles/form.css'


export default function GetInfo() {

const [city, setCity] = useState("");
const [redirect, setRedirect] = useState(false);

function handleSubmit(){
    setRedirect(true);
}


    if(redirect === false){
    return (
        <div className="formdiv">
            <h1>Please Enter Your Desired City/Zip</h1>
            <form onSubmit={handleSubmit}>
               <label>City/Zip: </label>
               <input className="fields" type="text" value={city} onChange={e => setCity(e.target.value)} required />
               <br></br>
                <button className="button" type="submit" value="Submit">Submit</button>
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
