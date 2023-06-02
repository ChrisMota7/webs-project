import { addDoc, collection, updateDoc, doc, deleteDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config/fbConfig';

export const getCompetitions = async (setCompetitionsData) => {
    const q = query(collection(db, 'competitions'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let competitionsArray = [];
      querySnapshot.forEach((doc) => {
        const { category, team1, team2 } = doc.data();
        competitionsArray.push({ id: doc.id, category, team1, team2 });
      });
      setCompetitionsData(competitionsArray);
    });
    return () => unsubscribe(); 
}

export const getChampionshipName = async (setChampionshipData, championshipid) => {
  const q = query(collection(db, 'championships'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const { category } = doc.data();
      if(championshipid === doc.id)
        setChampionshipData(category);
    });
  });
  return () => unsubscribe(); 
}

export const getCompetitionsByChampionship = async (setCompetitionsData, championshipid) => {
  const q = query(collection(db, 'competitions'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let competitionsArray = [];
    querySnapshot.forEach((doc) => {
      const { category, team1, team2 } = doc.data();
      if(championshipid === category)
        competitionsArray.push({ id: doc.id, team1, team2 });
    });
    setCompetitionsData(competitionsArray);
  });
  return () => unsubscribe(); 
}

export const getCompetitionByInfo = async (setCompetitionId, championshipid, teamone, teamtwo) => {
  const q = query(collection(db, 'competitions'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const { category, team1, team2 } = doc.data();
      if(championshipid === category && team1 === teamone && team2 === teamtwo)
        setCompetitionId(doc.id)
    });
  });
  return () => unsubscribe(); 
}

export const getTeamName = async (teamid) => {
  return new Promise((resolve, reject) => {
    const q = query(collection(db, 'teams'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { name } = doc.data();
        if(teamid === doc.id)
          resolve(name);
      });
    });
  
    return () => {
      unsubscribe();
      reject(new Error("Search canceled"));
    };
  })
}

export const createCompetition = async (category, teamOne, teamTwo)  => {
  console.log("caegroy",category)
  console.log("t1",teamOne)
  console.log("t2",teamTwo)
    await addDoc(collection(db, 'competitions'), {
        category: category,
        team1: teamOne,
        team2: teamTwo
    })
}

export const deleteCompetition2 = async (id) => {
  console.log("id",id)
    await deleteDoc(doc(db, 'competitions', id))
}


export const deleteCompetition = async (categoryid, teamOne, teamTwo) => {
  const q = query(collection(db, 'competitions'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let competitionsArray = [];
    querySnapshot.forEach((doc) => {
      const { category, team1, team2 } = doc.data();
      if(category === categoryid && team1 === teamOne && team2 === team2)
        deleteCompetition2(doc.id)
    });
  });
  return () => unsubscribe(); 
}

export const updateCompetitionStatus = async (id) => {
  await updateDoc(doc(db, 'competitions', id), {
    status: 1
  })
}