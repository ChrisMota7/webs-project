import React from 'react'
import './Layouts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PeopleFill } from "react-bootstrap-icons";
import { People } from "react-bootstrap-icons";
import { TrophyFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { PersonPlusFill } from "react-bootstrap-icons";
import { ClipboardDataFill } from "react-bootstrap-icons";
import { GearFill } from "react-bootstrap-icons";
import { StopwatchFill } from "react-bootstrap-icons";
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return( 
        <div className='background'>
            <div className='content'>
                <div className='navSection'>
                    <label className='label'>Championships </label>
                    <hr />
                    <div className='navLinks'> 
                        <NavLink to='/championships' className='navs' ><TrophyFill /> Championships</NavLink>
                        <NavLink to='/teams' className='navs' ><PeopleFill /> Teams</NavLink>
                        <NavLink to='/competitions' className='navs' ><ClipboardDataFill /> Competitions</NavLink>
                        <NavLink to='/' className='navs' ><People /> Players</NavLink>
                        <NavLink to='/users' className='navs' ><PersonFill /> User</NavLink>
                        <NavLink to='/create-user' className='navs' ><PersonPlusFill /> Create user</NavLink>
                    </div>
                </div>
                
                <div className='navSection'>
                    <label className='label'>Profile </label>
                    <hr />
                    <div  className='navLinks'>
                        <NavLink to='/' className='navs' ><GearFill /> Profile</NavLink>
                        <NavLink to='/' className='navs' ><StopwatchFill /> Logout</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignedInLinks;