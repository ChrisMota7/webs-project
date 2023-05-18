import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignIn = () => {
    const [ usename, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("usename",usename)
        console.log("password",password)
    }

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
                    <Form.Control type="email" placeholder="Enter email" onChange={handleUsernameChange} />
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