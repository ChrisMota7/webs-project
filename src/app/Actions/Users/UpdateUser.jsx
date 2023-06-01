import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../controller/UserController'

const UpdateUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [ show, setShow ] = useState(false)

    const [ id ] = useState(searchParams.get('id'))
    const [ fullname, setFullname ] = useState(searchParams.get('fullname'))
    const [ username, setUsername ] = useState(searchParams.get('username'))
    const [ password, setPassword ] = useState(searchParams.get('password'))
    const [ isadmin, setIsAdmin ] = useState(searchParams.get('isadmin'))

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(await updateUser(id, fullname, username, password, isadmin) === false)
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
          <h1>Update User</h1>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={fullname}
              placeholder="Enter full name"
              onChange={handleChangeFullname}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={username}
              placeholder="Enter user name"
              onChange={handleChangeUsername}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              defaultValue={password}
              placeholder="Password"
              onChange={handleChangePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rol">
            <Form.Label>Rol</Form.Label>
            <Form.Select 
              aria-label="Default select example"
              onChange={handleChangeSelect}>
                {/* This is not giving you a boolean!!! */}
                {isadmin === true ? (
                  <>
                  <option value={true}>Admin</option>
                  <option value={false}>Player</option>
                  </>
                ) : (
                  <>
                  <option value={false}>Player</option>
                  <option value={true}>Admin</option>
                  </>
                )}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
}

export default UpdateUser;