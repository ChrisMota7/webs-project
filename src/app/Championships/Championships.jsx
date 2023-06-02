import React, { useContext } from 'react';

import "./Championships.css"

import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin"
import GenericTable from "../commonComponents/GenericTable/GenericTable"
import { getChampionships } from '../../controller/ChampionshipController'
import { useEffect, useState } from 'react';
import { AuthContext } from '../../controller/AuthContext';

const Championships = () => {
    const columnName = ["Category"]
    
    const [championshipsData, setChampionshipsData] = useState([]);

    const { userRol } = useContext(AuthContext);
  
    useEffect(() => {
      getChampionships(setChampionshipsData);
    }, []);

    return (
        <div className='championships'>
            {
                !userRol ? 
                <div>
                    <GenericTable 
                        columns={columnName} 
                        content={championshipsData} 
                        title={"Championships"}
                        type={"championships"}/>
                </div>
                :
                <div>
                    <GenericTableAdmin 
                        columns={columnName} 
                        content={championshipsData} 
                        title={"Championships"}
                        type={"championships"}/>
                </div>
            }
        </div>
    )
}

export default Championships