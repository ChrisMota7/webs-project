import React from 'react'
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { HouseFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
 import { GearFill } from "react-bootstrap-icons";
 import { StopwatchFill } from "react-bootstrap-icons";

const NavBar = () => {
    return( 
        <div className='background'>
            <div className='content'>
                <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                    <label className='label1'>User </label> 
                    <Nav.Link href="/home" className='paperbase selected-nav'><HouseFill /> Home</Nav.Link>
                    
                    <div className='build'>
                        <label className='label'>Championships </label>
                        <hr />
                        <Nav.Link eventKey="link-1" className='navs' ><PeopleFill /> Teams</Nav.Link>
                        <Nav.Link eventKey="link-2" className='navs' ><PeopleFill /> Competitions</Nav.Link>
                        <Nav.Link eventKey="link-3" className='navs' ><PeopleFill /> Players</Nav.Link>
                    </div>
                    
                    <div className='quality'>
                        <label className='label'>Profile </label>
                        <hr />
                        <Nav.Link eventKey="link-5" className='navs' ><GearFill /> Profile</Nav.Link>
                        <Nav.Link eventKey="link-6" className='navs' ><StopwatchFill /> Logout</Nav.Link>
                    </div>
                </Nav>
            </div>
        </div>
    )
}

export default NavBar;