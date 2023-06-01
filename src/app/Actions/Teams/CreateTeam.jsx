import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { createTeam } from '../../../controller/TeamController'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate();

    const [ teamName, setTeamName ] = useState("")

    const [ show, setShow ] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await createTeam(teamName) === false)
          setShow(true)
        else navigate("/teams")
    };  

    const handleChangeTeamName = (e) => {
        setTeamName(e.target.value)
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
                <Toast.Body>Please enter team name</Toast.Body>
            </Toast>
        </ToastContainer>
        
        <Form onSubmit={handleSubmit}>
          <h1>Create new Team</h1>
          <Form.Group className="mb-3" controlId="teamName">
            <Form.Label>Team name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              onChange={handleChangeTeamName}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    );
}

export default CreateUser;