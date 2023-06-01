import React from 'react'
import './Layouts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PeopleFill } from "react-bootstrap-icons";
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
                        <NavLink to='/championships' className='navs' ><PeopleFill /> Championships</NavLink>
                        <NavLink to='/create-championship' className='navs' ><PeopleFill /> Create championship</NavLink>
                        <NavLink to='/teams' className='navs' ><PeopleFill /> Teams</NavLink>
                        <NavLink to='/create-team' className='navs' ><PeopleFill /> Create team</NavLink>
                        <NavLink to='/competitions' className='navs' ><PeopleFill /> Competitions</NavLink>
                        <NavLink to='/create-competition' className='navs' ><PeopleFill /> Create competition</NavLink>
                        <NavLink to='/players' className='navs' ><PeopleFill /> Players</NavLink>
                        <NavLink to='/users' className='navs' ><PeopleFill /> User</NavLink>
                        <NavLink to='/create-user' className='navs' ><PeopleFill /> Create user</NavLink>
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