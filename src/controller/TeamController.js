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