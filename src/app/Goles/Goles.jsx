import React from 'react';
import Categories from '../../json/Goles.json'
import GenericTableAdmin from "../../components/GenericTableAdmin/GenericTableAdmin"

const Goles = () => {
    const columnName = ["Amount", "User"]
    return (    
        <div className='Goles'>
            <div>
                <GenericTableAdmin 
                    columns={columnName} 
                    content={Categories} 
                    title={"Goles"}/>
            </div>
        </div>
            
    );
  }
  
  export default Goles;