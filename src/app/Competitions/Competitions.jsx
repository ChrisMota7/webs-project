import React, { useEffect, useState } from 'react';
import GenericTableSubAdmin from "../commonComponents/GenericTableSubAdmin/GenericTableSubAdmin";
import GenericTableSub from "../commonComponents/GenericTableSub/GenericTableSub";
import { getCompetitions, getTeamName } from '../../controller/CompetitionController'
import { getChampionships, searchChampionshipId } from '../../controller/ChampionshipController';
import { getTeams } from '../../controller/TeamController';
import GenericTable from '../commonComponents/GenericTable/GenericTable'

const CompetitionsTable = (props) => {
  const competitions = props.content;
  const teams = props.teams;

  console.log("teams", teams);
  console.log("competitions", competitions);

  const getTeamName = (teamId) => {
    const team = teams.find((team) => team.id === teamId);
    return team ? team.name : "";
  };

  const updatedCompetitions = competitions.map((competition) => ({
    team1: getTeamName(competition.team1),
    team2: getTeamName(competition.team2),
  }));

  return (
    <div>
      <GenericTableSubAdmin
        columns={props.columnName}
        content={updatedCompetitions}
        title={props.tableName}
        id={props.id}
        type={"competitions"}
      />

      <GenericTable
        columns={props.columnName}
        content={updatedCompetitions}
        title={props.tableName}
        id={props.id}
        type={"competitions"}
      />
    </div>
  );
};
  
  const Competitions = () => {
    const columnName = ["Team One", "Team Two"];
    const [ competitionsData, setCompetitionsData ] = useState([]);
    const [ championshipsData, setChampionshipsData ] = useState([]);
    const [ allTeams, setAllteams ] = useState([])
  
    useEffect(() => {
      getCompetitions(setCompetitionsData);
      getChampionships(setChampionshipsData)
      getTeams(setAllteams)
    }, []);

    return (
      <div className="Competitions">
        {championshipsData && championshipsData.length > 0 && (
          <div>
            {championshipsData.map((championship) => {
              const { id, category } = championship;
              const championshipCompetitions = competitionsData.filter((competition) => competition.category === id)

              const competitions = []
              let team1 = ""
              let team2 = ""
              return (
                <div>
                  {championshipCompetitions.forEach((competition) => {
                    team1 = competition.team1
                    team2 = competition.team2
                    competitions.push({team1, team2})
                  })}
                  <CompetitionsTable
                    key={id}
                    id={id}
                    tableName={category}
                    content={competitions}
                    teams={allTeams}
                    columnName={columnName}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
  );
  };
  
  export default Competitions;