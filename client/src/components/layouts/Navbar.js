import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary px-5">
                <Link to="/" className="navbar-brand">MERN</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto p-1">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-post">Add Post</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    )
}

//Navbar Container
const NavbarContainer=styled.div`
    background:turquoise;
    .nav-link{
        color:#000 !important;
        &:hover{
            border-radius:5px;
            background:#ddd;
            cursor:pointer;
        }
    }

`;

export default Navbar
