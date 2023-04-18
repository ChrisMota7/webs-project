import React from 'react'
import '../NavBar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { HouseFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { ImageFill } from "react-bootstrap-icons";
import { GlobeAmericas } from "react-bootstrap-icons";
 import { GearFill } from "react-bootstrap-icons";
 import { StopwatchFill } from "react-bootstrap-icons";
 import { Phone } from "react-bootstrap-icons";

const NavBar = () => {
    return( 
        <div className='background'>
            <div className='content'>
                <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                    <label className='label1'>User </label> 
                    <Nav.Link href="/home" className='paperbase'><HouseFill /> Power Overview</Nav.Link>
                    
                    <div className='build'>
                        <label className='label'>Build </label>
                        <hr />
                        <Nav.Link eventKey="link-1" ><PeopleFill /> Authentication</Nav.Link>
                        <Nav.Link eventKey="link-2" ><PeopleFill /> Database</Nav.Link>
                        <Nav.Link eventKey="link-3" ><ImageFill /> Storge</Nav.Link>
                        <Nav.Link eventKey="link-4" ><GlobeAmericas /> Hosting</Nav.Link>
                        <Nav.Link eventKey="link-4" ><GlobeAmericas /> Functions</Nav.Link>
                        <Nav.Link eventKey="link-4" ><GlobeAmericas /> Machine Learning</Nav.Link>
                    </div>
                    
                    <div className='quality'>
                        <label className='label'>Quality </label>
                        <hr />
                        <Nav.Link eventKey="link-5" ><GearFill /> Analytics</Nav.Link>
                        <Nav.Link eventKey="link-6" ><StopwatchFill /> Performance</Nav.Link>
                        <Nav.Link eventKey="link-7" ><Phone />Test Lab</Nav.Link>
                    </div>
                </Nav>
            </div>
        </div>
    )
}

export default NavBar;