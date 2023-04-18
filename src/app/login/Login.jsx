import React from 'react'
import '../login/Login.css'

const Login = () => {
    return(
        <div className='background'>
             <div className = "content">
                <div className = "text">
                    Login
                </div>

                <form action="#">
                    <div className='field'>
                        <input type="text" className='input' required/>
                        <label className='label'> Username </label>
                    </div>
                    <div className='field'>
                        <input type="password" className='input' required/>
                        <label className='label'> Password </label>
                    </div>
                    <button className='button'>
                        Sing in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login