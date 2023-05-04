import Table from 'react-bootstrap/Table';
import '../GenericTable/GenericTable.css'

const GenericTable = (props) => {
  const columns = props.columns

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
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default GenericTable;