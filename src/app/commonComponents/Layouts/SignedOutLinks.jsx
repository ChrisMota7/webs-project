import React from 'react'
import './Layouts.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignedOutLinks = () => {
    return( 
        <div className='background'>
            <div className='content'>                
                <div className='navSection'>
                    <label className='label'>No has iniciado sesión </label>
                </div>
            </div>
        </div>
    )
}

export default SignedOutLinks;