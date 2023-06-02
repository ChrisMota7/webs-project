import React, { useEffect, useState } from 'react';
import { getTeamsInfo } from '../../../controller/TeamController';
import GenericTable from '../../commonComponents/GenericTable/GenericTable';

const TablePoints = () => {
    const columnName = ["Team", "PJ", "GF", "GC", "DF", "JG", "JE", "JP", "PTS"];
    const [teamsPoints, setTeamsPoints] = useState([]);
  
    useEffect(() => {
      getTeamsInfo(setTeamsPoints); 
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