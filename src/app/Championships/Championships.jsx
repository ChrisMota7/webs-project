import React from 'react';

import "./Championships.css"

import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin"
import GenericTable from "../commonComponents/GenericTable/GenericTable"
import { getChampionships } from '../../controller/ChampionshipController'
import { useEffect, useState } from 'react';

const Championships = () => {
    const columnName = ["Category"]
    
    const [championshipsData, setChampionshipsData] = useState([]);
  
    useEffect(() => {
      getChampionships(setChampionshipsData);
    }, []);

    return (
        <div className='championships'>
            <div>
                <GenericTable 
                    columns={columnName} 
                    content={championshipsData} 
                    title={"Championships"}
                    type={"championships"}/>
            </div>

            <div>
                <GenericTableAdmin 
                    columns={columnName} 
                    content={championshipsData} 
                    title={"Championships"}
                    type={"championships"}/>
            </div>
        </div>
    )
}

export default Championships