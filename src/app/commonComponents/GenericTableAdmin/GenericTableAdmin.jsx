import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import '../GenericTableAdmin/GenericTableAdmin.css'
import { deleteUser } from '../../../controller/UserController'

const GenericTableAdmin = (props) => {
  const navigate = useNavigate();

  const columns = props.columns
  const content = props.content

  console.log("content",content)

  const handleDelete = (id) => {
    deleteUser(id)
  }

  return (    
    <div>
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
                {Object.entries(data).map(([key, value], index) => (
                  index !== 0 && <td key={key}>{value}</td>
                ))}
                <td className='action-buttons'>
                  <button 
                    type="button" 
                    className="btn btn-warning" 
                    onClick={() =>
                      navigate(`/update-user?id=${data.id}&fullname=${data.fullname}&username=${data.username}&password=${data.password}`)
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