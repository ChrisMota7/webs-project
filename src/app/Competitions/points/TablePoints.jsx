import React from 'react';

const TablePoints = () => {
    const columnName = ["Team", "PJ", "GF", "GC", "DF", "JG", "JE", "JP", "PTS"];
    const [teamsPoints, setTeamsPoints] = useState([]);
  
    useEffect(() => {
      getUsers(setTeamsPoints); //Bring teams info from firebase, bring only name and points
    }, []);

    return (
    <div className='Users'>
        <div>
        <GenericTable
            columns={columnName}
            content={teamsPoints}
            title={"Points"}
            type={"points"}
        />
        </div>
    </div>
    )
}

export default TablePoints