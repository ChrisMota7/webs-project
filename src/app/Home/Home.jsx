import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [ fullname, setFullname ] = useState(searchParams.get('fullname'))
    const [ username, setUsername ] = useState(searchParams.get('username'))
    const [ isadmin, setIsAdmin ] = useState(searchParams.get('isadmin'))
    
    
    console.log(fullname)
    console.log(username)
    console.log(isadmin)

    return(
        <div>
            <h1>Home!!</h1>
        </div>
    )
}

export default Home