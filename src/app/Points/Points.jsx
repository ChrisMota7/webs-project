import React, { useEffect, useState } from 'react';
import TablePoints from '../Competitions/points/TablePoints';

const Points = () => {
    return (    
        <div className='Points'>
            <div>
                <h1>Puntajes:</h1>

                <div className='teamsColumns'>
                    <TablePoints />
                </div>
            </div>
        </div>
            
    );
  }
  
  export default Points;