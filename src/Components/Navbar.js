import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    visited:none;
    active:none;
    color: white;
    :hover {
		color: red;
		cursor: pointer;
	}
    }

`;

export default function Navbar() {
    return (
        <div>
            <ul className="nav">
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/getinfo">Enter Info</StyledLink></li>
                </ul>
            </div>
    );
}

