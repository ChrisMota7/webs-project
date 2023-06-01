import { useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import '../GenericTableSubAdmin/GenericTableSubAdmin.css'
import { deleteUser } from '../../../controller/UserController'
import { deleteChampionship } from '../../../controller/ChampionshipController'
import { deleteTeam } from '../../../controller/TeamController'

const TablePoints = (props) => {
  const navigate = useNavigate();

  const columns = props.columns
  const content = props.content

  return (    
    <div>
      <h3>You have {content.length} {props.type}</h3>
      <div className='titulo'>
        <label htmlFor="">{props.title}</label>
        
        <div className='title-buttons'>
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
                
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Points"
                    aria-label="Recipient's points"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" 
                        id="button-addon2"
                        onClick={handleDelete}>
                    Button
                    </Button>
                </InputGroup>
                <button 
                  type="button" 
                  className="btn btn-danger">
                    Update
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default TablePoints;