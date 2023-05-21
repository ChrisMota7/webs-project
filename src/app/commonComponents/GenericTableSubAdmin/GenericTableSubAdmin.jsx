import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import '../GenericTableSubAdmin/GenericTableSubAdmin.css'
import { deleteUser } from '../../../controller/UserController'
import { deleteChampionship } from '../../../controller/ChampionshipController'
import { deleteTeam } from '../../../controller/TeamController'

const GenericTableSubAdmin = (props) => {
  const navigate = useNavigate();

  const columns = props.columns
  const content = props.content

  const handleDelete = () => {
    if(props.type === "users")
      deleteUser(props.id)
    else if (props.type === "championships")
      deleteChampionship(props.id)
    else if (props.type === "players")
      deleteTeam(props.id)
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
              } }}>
              Edit
          </button>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={handleDelete}>
              Delete
          </button>
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
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default GenericTableSubAdmin;