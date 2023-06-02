import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUsers } from '../../../controller/UserController';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../controller/AuthContext';

const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      async function fetchUsers() {
        await getUsers(setUsers);
      }
      fetchUsers();
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = users.filter((user) => {
        return user.username === username && user.password === password;
      });
      console.log('result', result);
      if (result.length > 0) {
        setUsername('');
        setPassword('');
        login(result[0].fullname, result[0].isadmin);
        navigate(`/home?fullname=${result[0].fullname}&username=${result[0].username}&isadmin=${result[0].isadmin}`);
      } else {
        console.log('error');
      }
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div style={{
            position: 'absolute',
            top: '20%',
            backgroundColor: '#ffffff',
            width: '73%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={handleUsernameChange} />
                    <Form.Text className="text-muted">
                    We'll never share your private information with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignIn;