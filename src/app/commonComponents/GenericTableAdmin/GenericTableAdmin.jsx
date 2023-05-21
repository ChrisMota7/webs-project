import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import '../GenericTableAdmin/GenericTableAdmin.css'
import { deleteUser } from '../../../controller/UserController'
import { deleteChampionship } from '../../../controller/ChampionshipController'
import { deleteTeam } from '../../../controller/TeamController'

const GenericTableAdmin = (props) => {
  const navigate = useNavigate();

  const columns = props.columns
  const content = props.content

  const handleDelete = (id) => {
    if(props.type === "users")
      deleteUser(id)
    else if (props.type === "championships")
      deleteChampionship(id)
    else if (props.type === "teams")
      deleteTeam(id)
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
                  key !== 'id' && <td key={key}>{typeof value === 'boolean' ? value.toString() : value}</td>
                ))}
                <td className='action-buttons'>
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
                  <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}>
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