import { addDoc, collection, updateDoc, doc, deleteDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config/fbConfig';

export const getTeams = async (setTeamsData) => {
    const q = query(collection(db, 'teams'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let teamsArray = [];
      querySnapshot.forEach((doc) => {
        const { name } = doc.data();
        teamsArray.push({ id: doc.id, name });
      });
      setTeamsData(teamsArray);
    });
    return () => unsubscribe(); 
}

export const getTeamId = async (setTeamId, teamName) => {
  const q = query(collection(db, 'teams'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const { name } = doc.data();
      if(teamName === name)
        setTeamId(doc.id)
    });
  });
  return () => unsubscribe(); 
}

export const getTeamsInfo = (setTeamsData) => {
  const q = query(collection(db, 'teams'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let teamsArray = [];
    querySnapshot.forEach((doc) => {
      const { name, pj, gf, gc, df, jg, je, jp, pts } = doc.data();
      teamsArray.push({ id: doc.id, name, pj, gf, gc, df, jg, je, jp, pts });
    });
    setTeamsData(teamsArray);
  });
  return () => unsubscribe(); 
}

export const getTeamPlayers = async (setPlayersData, path) => {
    const q = query(collection(db, path));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let playersArray = [];
      querySnapshot.forEach((doc) => {
        const { player } = doc.data();
        playersArray.push({ id: doc.id, player });
      });
      const playersId = playersArray.map((player) => player.player);
      getPlayersNames(setPlayersData, playersId)
    });
    return () => unsubscribe(); 
}

const getPlayersNames = async (setPlayersData, playersArray) => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach((doc) => {
        const { fullname } = doc.data();
        playersArray.map((player) => {
          if(player === doc.id)
            usersArray.push({ id: doc.id, fullname });
        })
      });
      setPlayersData(usersArray)
    });
    return () => unsubscribe(); 
}

export const searchPlayer = async (setSearchStatus, playerFullName, setPlayerid) => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { fullname, isadmin } = doc.data();
        if(playerFullName === fullname){
            setSearchStatus(true)
            setPlayerid(doc.id)
        }
      });
    });
    setSearchStatus(false)
    return () => unsubscribe(); 
}

export const addPlayer = async (playerid, path) => {
    await addDoc(collection(db, path), {
        player: playerid
    })
}

export const deletePlayer = async (playerid, path) => {
    try {
        await deleteDoc(doc(db, path, playerid));
      } catch (error) {
        console.error("Error deleting player:", error);
      }
}

export const searchPlayerInTeam = (setDeleteid, playerid, collectionid) => {
    return new Promise((resolve, reject) => {
      const q = query(collection(db, `/teams/${collectionid}/players`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { player } = doc.data();
          if (playerid === player) {
            setDeleteid(doc.id);
            resolve(doc.id);
          }
        });
      });
  
      return () => {
        unsubscribe();
        reject(new Error("Search canceled"));
      };
    });
  };

export const createTeam = async (name)  => {
    if(name === ""){
        return false
    }
    else {
        await addDoc(collection(db, 'teams'), {
            name: name
        })
        return true
    }
}

export const updateTeam = async (id, name)  => {
    if(name === ""){
        return false
    }
    else {
        await updateDoc(doc(db, 'teams', id), {
            name: name
        })
        return true
    }
}

export const deleteTeam = async (id) => {
    await deleteDoc(doc(db, 'teams', id))
}