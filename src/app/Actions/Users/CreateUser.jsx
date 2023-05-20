import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { createUser } from '../../../controller/UserController'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate();

    const [ fullname, setFullname ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ isadmin, setIsAdmin ] = useState(false)

    const [ show, setShow ] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await createUser(fullname, username, password, isadmin) === false)
          setShow(true)
        else navigate("/users")
    };  

    const handleChangeFullname = (e) => {
        setFullname(e.target.value)
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeSelect = (e) => {
      setIsAdmin(e.target.value)
    }

    return (
      <div
        style={{
          position: 'absolute',
          top: '10%',
          backgroundColor: '#ffffff',
          width: '73%',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <ToastContainer position={'top-end'}>
            <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={4000} autohide>
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">ERROR</strong>
                </Toast.Header>
                <Toast.Body>Please, enter fullname, username and password</Toast.Body>
            </Toast>
        </ToastContainer>
        
        <Form onSubmit={handleSubmit}>
          <h1>Create new User</h1>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              onChange={handleChangeFullname}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              onChange={handleChangeUsername}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChangePassword}
            />
            <Form.Text className="text-muted">
                Don't ever share this private information with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="rol">
            <Form.Label>Rol</Form.Label>
            <Form.Select 
              aria-label="Default select example"
              onChange={handleChangeSelect}>
                <option value={false}>Player</option>
                <option value={true}>Admin</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    );
}

export default CreateUser;