import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { getChampionships } from '../../../controller/ChampionshipController';
import { getTeams } from '../../../controller/TeamController';
import { createCompetition } from '../../../controller/CompetitionController';

const CreateUser = () => {
    const navigate = useNavigate();

    const [ teams, setTeams ] = useState([])
    const [ teamOne, setTeamOne ] = useState("")
    const [ teamTwo, setTeamTwo ] = useState("")
    const [ selectedChampionship, setChampionship ] = useState("")
    const [ championships, setChampionships ] = useState([])

    useEffect(() => {
        getTeams(setTeams)
        getChampionships(setChampionships)
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createCompetition(selectedChampionship, teamOne, teamTwo)
        navigate("/competitions")
    };  

    const handleTeamOneChange = (e) => {
        setTeamOne(e.target.value)
        console.log("champ",selectedChampionship)
        console.log("t1",teamOne)
        console.log("t2",teamTwo)
    }

    const handleTeamTwoChange = (e) => {
        setTeamTwo(e.target.value)
        console.log("champ",selectedChampionship)
        console.log("t1",teamOne)
        console.log("t2",teamTwo)
    }

    const handleChampionshipChange = (e) => {
        setChampionship(e.target.value)
        console.log("champ",selectedChampionship)
        console.log("t1",teamOne)
        console.log("t2",teamTwo)
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
        <Form onSubmit={handleSubmit}>
          <h1>Create Competition</h1>

          <Form.Group className="mb-3" controlId="teamName">
            <Form.Label>Championship</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleChampionshipChange} value={selectedChampionship}>
                <option value="none">Choose a championship</option>
                {championships.map((championship) => (
                <option key={championship.id} value={championship.id}>
                    {championship.category}
                </option>
                ))}
            </Form.Select>
          </Form.Group>

          <hr />

          <Form.Group className="mb-3" controlId="teamName">
            <Form.Label>Team 1</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleTeamOneChange} value={teamOne}>
                <option value="none">Choose a team</option>
                {teams.map((team) => (
                <option key={team.id} value={team.id}>
                    {team.name}
                </option>
                ))}
            </Form.Select>
          </Form.Group>
            <Form.Label className='fw-bold'>VS</Form.Label>
          <Form.Group className="mb-3" controlId="teamName">
            <Form.Label>Team 2</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleTeamTwoChange} value={teamTwo}>
                <option value="none">Choose a team</option>
                {teams.map((team) => (
                <option key={team.id} value={team.id}>
                    {team.name}
                </option>
                ))}
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