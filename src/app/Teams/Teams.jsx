import React, { useContext, useEffect, useState } from 'react';
import GenericTableSubAdmin from "../commonComponents/GenericTableSubAdmin/GenericTableSubAdmin";
import GenericTableSub from "../commonComponents/GenericTableSub/GenericTableSub";
import { getTeams, getTeamPlayers } from '../../controller/TeamController'
import { AuthContext } from '../../controller/AuthContext';

const TeamPlayers = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getTeamPlayers(setPlayers, `/teams/${props.team.id}/players`)
    }, [props.team.id]);

    const { userRol } = useContext(AuthContext);

    return (
        <div>
          {
            userRol ? 
            <GenericTableSubAdmin 
                columns={props.columnName} 
                content={players} 
                title={props.team.name}
                id={props.team.id}
                type={"players"}
            />
            :
            <GenericTableSub 
                columns={props.columnName} 
                content={players} 
                title={props.team.name}
                id={props.team.id}
                type={"players"}
            />
          }
        </div>
    );
  };
  
  const Teams = () => {
    const columnName = ["Players"];
    const [teamsData, setTeamsData] = useState([]);
  
    useEffect(() => {
      getTeams(setTeamsData);
    }, []);
  
    return (
      <div className='Teams'>  
        {teamsData && teamsData.length > 0 && (
          <div>
            {teamsData.map((team) => (
              <TeamPlayers key={team.id} team={team} columnName={columnName} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Teams;