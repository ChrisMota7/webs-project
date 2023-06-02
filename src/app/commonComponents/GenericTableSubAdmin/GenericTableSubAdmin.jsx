import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import '../GenericTableSubAdmin/GenericTableSubAdmin.css'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteUser, getPlayers } from '../../../controller/UserController'
import { deleteChampionship } from '../../../controller/ChampionshipController'
import { deleteTeam, getTeamsInfo, updateTeamPoints } from '../../../controller/TeamController'
import { useState } from 'react';
import { getTeamId } from '../../../controller/TeamController';
import { parse } from 'uuid';
import { getCompetitionByInfo, updateCompetitionStatus } from '../../../controller/CompetitionController';

const GenericTableSubAdmin = (props) => {
  const navigate = useNavigate();

  const columns = props.columns
  const content = props.content

  const [show, setShow] = useState(false);
  const [ teams, setTeams ] = useState([])
  const [ id, setId ] = useState("");
  const [ teamOneResult, setTeamOneResult ] = useState("")
  const [ teamTwoResult, setTeamTwoResult ] = useState("")
  const [ teamOne, setTeamOne ] = useState("")
  const [ teamTwo, setTeamTwo ] = useState("")
  const [ pj1, setPj1 ] = useState(0)
  const [ pj2, setPj2 ] = useState(0)
  const [ gf1, setGf1 ] = useState(0)
  const [ gf2, setGf2 ] = useState(0)
  const [ gc1, setGc1 ] = useState(0)
  const [ gc2, setGc2 ] = useState(0)
  const [ df1, setDf1 ] = useState(0)
  const [ df2, setDf2 ] = useState(0)
  const [ jg1, setJg1 ] = useState(0)
  const [ jg2, setJg2 ] = useState(0)
  const [ je1, setJe1 ] = useState(0)
  const [ je2, setJe2 ] = useState(0)
  const [ jp1, setJp1 ] = useState(0)
  const [ jp2, setJp2 ] = useState(0)
  const [ pts1, setPts1 ] = useState(0)
  const [ pts2, setPts2 ] = useState(0)

  console.log("TEAM1")
  console.log("pj",pj1)
  console.log("gf",gf1)
  console.log("gc",gc1)
  console.log("df",df1)
  console.log("jg",jg1)
  console.log("je",je1)
  console.log("jp",jp1)
  console.log("pts",pts1)

  console.log("TEAM2")
  console.log("pj",pj2)
  console.log("gf",gf2)
  console.log("gc",gc2)
  console.log("df",df2)
  console.log("jg",jg2)
  console.log("je",je2)
  console.log("jp",jp2)
  console.log("pts",pts2)

  console.log(content)
  const handleClose = () => setShow(false);

  const handleDelete = () => {
    if(props.type === "users")
      deleteUser(props.id)
    else if (props.type === "championships")
      deleteChampionship(props.id)
    else if (props.type === "players")
      deleteTeam(props.id)
  }

  const handleTeam1Point = (e) => {
    setTeamOneResult(e.target.value)
  }

  const handleTeam2Point = (e) => {
    setTeamTwoResult(e.target.value)
  }

  const searchTeam = (teamid) => {
    let filtered
    return filtered = teams.filter((team) => team.id === teamid)
  }
  
  const handleInit = () => {
    const team1info = searchTeam(teamOne)
    console.log("team1infooooo",team1info)
    setPj1(parseInt(team1info[0].pj))
    setGf1(parseInt(team1info[0].gf))
    setGc1(parseInt(team1info[0].gc))
    setDf1(parseInt(team1info[0].df))
    setJg1(parseInt(team1info[0].jg))
    setJe1(parseInt(team1info[0].je))
    setJp1(parseInt(team1info[0].jp))
    setPts1(parseInt(team1info[0].pts))

    console.log("pj",pj1)
    console.log("gf",gf1)
    console.log("gc",gc1)
    console.log("df",df1)
    console.log("jg",jg1)
    console.log("je",je1)
    console.log("jp",jp1)
    console.log("pts",pts1)
    
    const team2info = searchTeam(teamTwo)
    console.log("teame2Info",team2info)
    setPj2(parseInt(team2info[0].pj))
    setGf2(parseInt(team2info[0].gf))
    setGc2(parseInt(team2info[0].gc))
    setDf2(parseInt(team2info[0].df))
    setJg2(parseInt(team2info[0].jg))
    setJe2(parseInt(team2info[0].je))
    setJp2(parseInt(team2info[0].jp))
    setPts2(parseInt(team2info[0].pts))

    console.log("pj",pj2)
    console.log("gf",gf2)
    console.log("gc",gc2)
    console.log("df",df2)
    console.log("jg",jg2)
    console.log("je",je2)
    console.log("jp",jp2)
    console.log("pts",pts2)
  }

  const handlePost = () => {
    if(teamOneResult > teamTwoResult){
      console.log(pts1 + 3)
      setPts1(pts1 + 3)
      console.log(jg1 + 1)
      setJg1(jg1 + 1)
      console.log(jp2 + 1)
      setJp2(jp2 + 1)
    }
    else if(teamOneResult < teamTwoResult){
      setPts2(pts2 + 3)
      setJg2(jg2 + 1)
      setJp1(jp1 + 1)
    }
    else {
      setPts1(pts1 + 1)
      setPts2(pts2 + 1)
      setJe1(je1 + 1)
      setJe2(je2 + 1)
    }

    setPj1(pj1 + 1)
    setPj2(pj2 + 1)
    setGf1(gf1 + parseInt(teamOneResult))
    setGc1(gc1 + parseInt(teamTwoResult))
    setGf2(gf2 + parseInt(teamTwoResult))
    setGc2(gc2 + parseInt(teamOneResult))

    const localDf1 = parseInt(teamOneResult) - parseInt(teamTwoResult)
    setDf1(df1 + localDf1)
    const localDf2 = parseInt(teamTwoResult) - parseInt(teamOneResult)
    setDf2(df2 + localDf2)
  }

  const handleSubmit = async () => {
    await updateTeamPoints(teamOne, pj1, gf1, gc1, df1, jg1, je1, jp1, pts1)
    await updateTeamPoints(teamTwo, pj2, gf2, gc2, df2, jg2, je2, jp2, pts2)
    await getCompetitionByInfo(setId, props.id, teamOne, teamTwo)
    await updateCompetitionStatus(id)
    setShow(false)
  }

  const handleFinish = async (competitionid, team1, team2) => {
    console.log("1", team1)
    console.log("2", team2)
    setShow(true)
    await getTeamsInfo(setTeams)
    await getTeamId(setTeamOne, team1)
    await getTeamId(setTeamTwo, team2)
    handleInit()
  }

  return (    
    <div>
      <h3>You have {content.length} {props.type}</h3>
      <div className='titulo'>
        <label htmlFor="">{props.title}</label>
        
        <div className='title-buttons'>
          <button 
            type="button" 
            className="btn btn-warning" 
            onClick={() =>{
              if (props.type === 'players') {
                navigate(`/update-team?id=${props.id}&name=${props.title}`)
              } else if (props.type === 'competitions'){
                navigate(`/update-competition?id=${props.id}&name=${props.title}`)
              } }}>
              Edit
          </button>
          {
            props.type !== "competitions" &&
            <button 
              type="button" 
              className="btn btn-danger"
              onClick={handleDelete}>
                Delete
            </button>
          }
        </div>
      </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.map(data => (
              <tr key={data.id}>
                {Object.entries(data).map(([key, value]) => (
                  key !== 'id' && <td key={key}>{typeof value === 'boolean' ? value.toString() : value}</td>
                ))}
                {props.type === "competitions" && 
                  <td>
                    <button 
                      type="button" 
                      className="btn btn-success"
                      onClick={() => handleFinish(data.id, data.team1, data.team2)}>
                        Finalizar
                    </button>
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </Table>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Team 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Team 1 result"
                onChange={handleTeam1Point}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm2.ControlInput1">
              <Form.Label>Team 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Team 2 result"
                onChange={handleTeam2Point}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Post Changes
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GenericTableSubAdmin;