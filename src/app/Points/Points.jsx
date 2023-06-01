import React, { useState } from 'react';
import GenericTableAdmin from "../../components/GenericTableAdmin/GenericTableAdmin"

const Points = () => {
    const [ category ] = useState(searchParams.get('category'))
    const [ team1 ] = useState(searchParams.get('team1'))
    const [ team2 ] = useState(searchParams.get('team2'))

    return (    
        <div className='Points'>
            <div>
                <h1>Puntajes:</h1>

                <div className='teamsColumns'>
                    <div>

                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
            
    );
  }
  
  export default Points;