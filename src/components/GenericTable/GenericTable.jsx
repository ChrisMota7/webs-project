import Table from 'react-bootstrap/Table';
import '../GenericTable/GenericTable.css'

const GenericTable = (props) => {
  const columns = props.columns
  const content = props.content

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
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default GenericTable;