import React from 'react';
import Categories from '../../json/Points.json'
import GenericTableAdmin from "../../components/GenericTableAdmin/GenericTableAdmin"

const Points = () => {
    const columnName = ["Played Competition", "Sinned Competition"]
    return (    
        <div className='Points'>
            <div>
                <GenericTableAdmin 
                    columns={columnName} 
                    content={Categories} 
                    title={"POINTS"}/>
            </div>
        </div>
            
    );
  }
  
  export default Points;