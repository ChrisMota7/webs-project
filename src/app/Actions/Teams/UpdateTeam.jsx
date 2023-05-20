import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateTeam } from '../../../controller/TeamController'

const UpdateTeam = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [ id ] = useState(searchParams.get('id'))
    const [ teamName, setTeamName ] = useState(searchParams.get('name'))

    const [ show, setShow ] = useState(false)
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await updateTeam(id, teamName) === false)
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
          <h1>Update Team</h1>
          <Form.Group className="mb-3" controlId="team">
            <Form.Label>Team name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter team name"
              defaultValue={teamName}
              onChange={handleChangeTeamName}
            />
          </Form.Group> 
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
}

export default UpdateTeam;