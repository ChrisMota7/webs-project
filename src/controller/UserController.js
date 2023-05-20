import { addDoc, collection, updateDoc, doc, deleteDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config/fbConfig';

export const getUsers = async (setUsersData) => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach((doc) => {
        const { fullname, username, password, isadmin } = doc.data();
        usersArray.push({ id: doc.id, fullname, username, password, isadmin });
      });
      setUsersData(usersArray);
    });
    return () => unsubscribe(); 
}

export const getPlayers = async (setPlayersData) => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let playersArray = [];
      querySnapshot.forEach((doc) => {
        const { fullname, username, password, isadmin } = doc.data();
        console.log(fullname, isadmin)
        if(isadmin === false)
            playersArray.push({ id: doc.id, fullname, username, password });
      });
      setPlayersData(playersArray);
    });
    return () => unsubscribe(); 
}

export const createUser = async (fullname, username, password, isadmin)  => {
    if(fullname === "" || username === "" || password === ""){
        return false
    }
    else {
        await addDoc(collection(db, 'users'), {
            fullname: fullname,
            username: username,
            password: password,
            isadmin: isadmin
        })
        return true
    }
}

export const updateUser = async (id, fullname, username, password, isadmin)  => {
    if(fullname === "" || username === "" || password === ""){
        return false
    }
    else {
        await updateDoc(doc(db, 'users', id), {
            fullname: fullname,
            username: username,
            password: password,
            isadmin: isadmin
        })
        return true
    }
}

export const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'users', id))
}