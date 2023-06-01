import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ListGroup from 'react-bootstrap/ListGroup';
import GenericTableAdmin from '../../commonComponents/GenericTableAdmin/GenericTableAdmin'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { searchPlayer, 
  updateTeam, 
  addPlayer, 
  searchPlayerInTeam, 
  getTeamPlayers,
  deletePlayer,
  getTeams, } from '../../../controller/TeamController'
import { createCompetition, getChampionshipName, getCompetitionsByChampionship } from '../../../controller/CompetitionController';

const UpdateCompetition = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [ id ] = useState(searchParams.get('id'))
    const [ teamName, setTeamName ] = useState(searchParams.get('name'))
    const [ players, setPlayers ] = useState([])
    const [ player, setPlayer ] = useState("")
    const [ playerid, setPlayerid ] = useState("")
    const [ searchStatus, setSearchStatus ] = useState(false)
    const [ deleteid, setDeleteid ] = useState("")
    const [ teams, setTeams ] = useState([])
    const [ competitions, setCompetitions ] = useState([])

    const [ selectedNewTeam1, setSelectedNewTeam1 ] = useState("")
    const [ selectedNewTeam2, setSelectedNewTeam2 ] = useState("")

    useEffect(() => {
      getTeamPlayers(setPlayers, `/teams/${id}/players`)
      getTeams(setTeams)
      getCompetitionsByChampionship(setCompetitions, id)
    }, [id]);

    const [ show, setShow ] = useState(false)

    const getTeamName = (teamId) => {
        const team = teams.find((team) => team.id === teamId);
        return team ? team.name : "";
    };

    const updatedCompetitions = competitions.map((competition) => ({
        team1: getTeamName(competition.team1),
        team2: getTeamName(competition.team2),
    }));
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await updateTeam(id, teamName) === false)
          setShow(true)
        else navigate("/competitions")
    };  

    const handleChangeTeamName = (e) => {
      setTeamName(e.target.value)
    }
    
    const handleChangePlayerName = (e) => {
      setPlayer(e.target.value)
    }

    const handleAddCompetition = async (e) => {
        await createCompetition(id, selectedNewTeam1, selectedNewTeam2)
    }

    const handleNewTeam1Change = (e) => {
        setSelectedNewTeam1(e.target.value)
    }

    const handleNewTeam2Change = (e) => {
        setSelectedNewTeam2(e.target.value)
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
          <h1>Update Competitions</h1>
          <Form.Group className="mb-3" controlId="team">
            <Form.Label>Category name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter team name"
              defaultValue={teamName}
              onChange={handleChangeTeamName}
            />
          </Form.Group> 

          <Form.Group className="mb-3" controlId="competition">
            <Form.Label>Add competition</Form.Label>
            <div>
                <div>
                    <Form.Label>New team 1</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleNewTeam1Change} value={selectedNewTeam1}>
                        <option value="none">Choose a team</option>
                        {teams?.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                        ))}
                    </Form.Select>
                </div>
                
                <Form.Label className='fw-bold'>VS</Form.Label>
                <br />

                <div>
                    <Form.Label>New team 2</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleNewTeam2Change} value={selectedNewTeam2}>
                        <option value="none">Choose a team</option>
                        {teams?.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                        ))}
                    </Form.Select>
                </div>
            </div>
            <Button 
              variant="primary" 
              type="button"
              onClick={handleAddCompetition}>
                Add
            </Button>
          </Form.Group> 

            <GenericTableAdmin
                columns={["Team 1", "Team 2"]}
                content={updatedCompetitions}
                title={"Competitions"}
                id={id}
                type={"competitions"}
            />

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
}

export default UpdateCompetition;