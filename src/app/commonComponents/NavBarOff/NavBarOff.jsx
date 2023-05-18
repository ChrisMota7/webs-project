import React, { useState } from 'react';

import "./NavBarOff.css"

import Navbar from 'react-bootstrap/Navbar';
import NavBar from '../NavBar/NavBar';
import CloseButton from 'react-bootstrap/CloseButton';

const NavBarOff = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
  
  return (
    <div>
        <Navbar bg="#081627" expand='false' >
            <Navbar.Toggle 
                aria-controls={`offcanvasNavbar-expand-false`} 
                onClick={() => setShow(true)}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`} 
              placement="start"
              show={show}
              onHide={handleClose}
            >
                <div className="d-flex align-items-start justify-content-center">
                    <NavBar />
                    <CloseButton onClick={handleClose} />
                </div>
            </Navbar.Offcanvas>
        </Navbar>
    </div>
  );
}

export default NavBarOff;