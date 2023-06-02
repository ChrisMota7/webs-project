import React, { useContext, useEffect, useState } from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { HouseFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import SignedInLinks from '../Layouts/SignedInLinks';
import SignedOutLinks from '../Layouts/SignedOutLinks';
import { AuthContext } from '../../../controller/AuthContext';

const NavBar = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return( 
        <div className='background'>
            <div className='content'>
                <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                    <label className='label1'>User </label> 
                    <Link to="/" className='paperbase selected-nav'><HouseFill /> Home</Link>
                    {
                        isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />
                    }
                </Nav>
            </div>
        </div>
    )
}

export default NavBar;