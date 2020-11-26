import React from 'react'
import { Switch, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <ul>
            <Switch>
                <Link to="/">Home</Link>
            </Switch>
            <Switch>
                <Link to="/getinfo">Enter City</Link>
            </Switch>
            </ul>
        </div>
    );
}
