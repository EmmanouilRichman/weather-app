import React, {useState} from 'react'

export default function GetInfo() {

const [city, setCity] = useState("");


    function handleSubmit(){

    }
    return (
        <div>
            <h1>Please Enter The Closest City To You</h1>
            <form onSubmit={handleSubmit}>
               <label>City: </label>
               <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
               <br></br>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}
