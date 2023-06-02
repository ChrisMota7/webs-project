import React, { useContext, useEffect, useState } from 'react';
import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin";
import GenericTable from "../commonComponents/GenericTable/GenericTable";
import { getPlayers } from '../../controller/UserController'
import { AuthContext } from '../../controller/AuthContext';

const Players = () => {
  const columnName = ["Fullname", "Username", "Goles"];
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    getPlayers(setPlayersData);
  }, []);
  
  const { userRol } = useContext(AuthContext);

  return (
    <div>
      <h3>You have {playersData.length} players</h3>
      {
        !userRol ? 
        <div>
          <GenericTable
            columns={columnName}
            content={playersData}
            title={"Players"}
            type={"user"}
          />
        </div>
        :
        <div>
          <GenericTableAdmin
            columns={columnName}
            content={playersData}
            title={"Players"}
            type={"user"}
          />
        </div>
      }
    </div>
  );
};

export default Players;