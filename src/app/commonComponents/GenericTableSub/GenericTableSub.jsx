import Table from 'react-bootstrap/Table';
import '../GenericTableSub/GenericTableSub.css'

const GenericTableSub = (props) => {
  const columns = props.columns
  const content = props.content

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
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default GenericTableSub;