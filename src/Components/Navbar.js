import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
            <ul className="nav">
                    <li><Link to="/" style={{ textDecoration: 'inherit' }}>Home</Link></li>
                    <li><Link to="/getinfo" style={{ textDecoration: 'inherit' }}>Enter City</Link></li>
            </ul>
    );
}

