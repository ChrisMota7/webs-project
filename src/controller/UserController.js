import { addDoc, collection, updateDoc, doc, deleteDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '../config/fbConfig';

export const getUsers = async (setUsersData) => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let usersArray = [];
      querySnapshot.forEach((doc) => {
        const { fullname, username, password } = doc.data();
        usersArray.push({ id: doc.id, fullname, username, password });
      });
      setUsersData(usersArray);
    });
    return () => unsubscribe(); 
}

export const createUser = async (fullname, username, password)  => {
    if(fullname === "" || username === "" || password === ""){
        return true
    }
    else {
        await addDoc(collection(db, 'users'), {
            fullname: fullname,
            username: username,
            password: password
        })
        return false
    }
}

export const updateUser = async (id, fullname, username, password)  => {
    console.log("fullname", fullname)
    console.log("username", username)
    console.log("password", password)
    if(fullname === "" || username === "" || password === ""){
        return true
    }
    else {
        await updateDoc(doc(db, 'users', id), {
            fullname: fullname,
            username: username,
            password: password
        })
        return false
    }
}

export const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'users', id))
}