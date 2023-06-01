import { addDoc, collection, updateDoc, doc, deleteDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config/fbConfig';

export const getChampionships = async (setChampionshipsData) => {
    const q = query(collection(db, 'championships'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let championshipsArray = [];
      querySnapshot.forEach((doc) => {
        const { category } = doc.data();
        championshipsArray.push({ id: doc.id, category });
      });
      setChampionshipsData(championshipsArray);
    });
    return () => unsubscribe(); 
}

export const createChampionship = async (category)  => {
    if(category === ""){
        return false
    }
    else {
        await addDoc(collection(db, 'championships'), {
            category: category
        })
        return true
    }
}

export const updateChampionship = async (id, category)  => {
    if(category === ""){
        return false
    }
    else {
        await updateDoc(doc(db, 'championships', id), {
            category: category
        })
        return true
    }
}

export const deleteChampionship = async (id) => {
    await deleteDoc(doc(db, 'championships', id))
}

export const searchChampionshipId = async (categoryName) => {
    return new Promise((resolve, reject) => {
  const q = query(collection(db, 'championships'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const { category } = doc.data();
      if(categoryName === category){
        resolve(doc.id);
      }
    });
  });
  
  return () => {
    unsubscribe();
    reject(new Error("Search canceled"));
  };
});
}