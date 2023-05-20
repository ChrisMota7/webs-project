import React, { useEffect, useState } from 'react';
import GenericTableAdmin from "../commonComponents/GenericTableAdmin/GenericTableAdmin";
import GenericTable from "../commonComponents/GenericTable/GenericTable";
import { getPlayers } from '../../controller/UserController'

const Players = () => {
  const columnName = ["Fullname", "Username", "Password"];
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    getPlayers(setPlayersData);
  }, []);

  return (
    <div>
      <h3>You have {playersData.length} players</h3>
      <div>
        <GenericTable
          columns={columnName}
          content={playersData}
          title={"Players"}
        />
      </div>

      <div>
        <GenericTableAdmin
          columns={columnName}
          content={playersData}
          title={"Players"}
          type={"user"}
        />
      </div>
    </div>
  );
};

export default Players;