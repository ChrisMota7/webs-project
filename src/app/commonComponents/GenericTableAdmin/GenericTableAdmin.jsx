import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import '../GenericTableAdmin/GenericTableAdmin.css'
import { deleteUser } from '../../../controller/UserController'
import { deleteChampionship } from '../../../controller/ChampionshipController'
import { deleteTeam, getTeamId } from '../../../controller/TeamController'
import { deleteCompetition } from '../../../controller/CompetitionController';
import { useState } from 'react';

const GenericTableAdmin = (props) => {
  const navigate = useNavigate();

  const [ team1, setTeam1 ] = useState("")
  const [ team2, setTeam2 ] = useState("")

  const columns = props.columns
  const content = props.content
  const category = props.id

  console.log("contnnt",content)

  const setTeamNames = async (t1, t2) => {
    await getTeamId(setTeam1, t1)
    await getTeamId(setTeam2, t2)
  }

  const handleDelete = (id, t1, t2) => {
    if(props.type === "users")
      deleteUser(id)
    else if (props.type === "championships")
      deleteChampionship(id)
    else if (props.type === "teams")
      deleteTeam(id)
    else if (props.type === "competitions"){
      setTeamNames(t1, t2)
      deleteCompetition(category, team1, team2)
    }
  }

  return (    
    <div>
      <h3>You have {content.length} {props.type}</h3>
      <div className='titulo'>
        <label htmlFor="">{props.title}</label>
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
                  key !== 'id' && key !== 'password' && <td key={key}>{typeof value === 'boolean' ? value.toString() : value}</td>
                ))}
                <td className='action-buttons'>
                  {props.type !== "competitions" &&
                    <button 
                      type="button" 
                      className="btn btn-warning" 
                      onClick={() =>{
                        if (props.type === 'users') {
                          navigate(`/update-user?id=${data.id}&fullname=${data.fullname}&username=${data.username}&password=${data.password}&isadmin=${data.isadmin}`)
                        } else if (props.type === 'championships') {
                          navigate(`/update-championship?id=${data.id}&category=${data.category}`)
                        } else if (props.type === 'teams') {
                          navigate(`/update-team?id=${data.id}&name=${data.name}`)
                        }}
                      }>
                        Edit
                    </button>
                  }
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id, data.team1, data.team2)}>
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default GenericTableAdmin;