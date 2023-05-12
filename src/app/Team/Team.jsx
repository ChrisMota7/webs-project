import React from 'react';
import Categories from '../../json/Teams.json'
import GenericTableAdmin from "../../components/GenericTableAdmin/GenericTableAdmin"

const Team = () => {
    const columnName = ["NameUser", "Shield"]
    return (    
        <div className='Teams'>
            <div>
                <GenericTableAdmin 
                    columns={columnName} 
                    content={Categories} 
                    title={"TEAMS"}/>
            </div>
        </div>
            
    );
  }
  
  export default Team;