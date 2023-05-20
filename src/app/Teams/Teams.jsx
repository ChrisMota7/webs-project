import React, { useEffect, useState } from 'react';
import GenericTableSubAdmin from "../commonComponents/GenericTableSubAdmin/GenericTableSubAdmin";
import GenericTable from "../commonComponents/GenericTable/GenericTable";
import GenericTableSub from "../commonComponents/GenericTableSub/GenericTableSub";
import { getTeams, getTeamPlayers } from '../../controller/TeamController'

const TeamPlayers = (props) => {
    const [players, setPlayers] = useState([]);

    console.log(props.team.id)
  
    useEffect(() => {
        console.log(`/teams/${props.team.id}/players`)
        getTeamPlayers(setPlayers, `/teams/${props.team.id}/players`)
    }, [props.team.id]);

    console.log("Here!")
  
    return (
        <div>
            <GenericTableSubAdmin 
                columns={props.columnName} 
                content={players} 
                title={props.team.name}
                type={"players"}
            />

            <GenericTableSub 
                columns={props.columnName} 
                content={players} 
                title={props.team.name}
                type={"players"}
            />
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
        <div>
          <GenericTable
            columns={columnName}
            content={teamsData}
            title={"Teams"}
            type={"teams"}
          />
        </div>
  
        <div>
            <GenericTableSubAdmin
            columns={columnName}
            content={teamsData}
            title={"Teams"}
            type={"teams"}
            />
        </div>
  
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