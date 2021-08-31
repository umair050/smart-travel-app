import * as firebase from 'firebase';
import 'firebase/firestore';
import {Alert} from 'react-native';

export async function registration(email, password, name,registrationComplete) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=> login(email, password, registrationComplete))
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection('users')
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        name: name,
        password: password,
      })
  .catch ((err) =>
    Alert.alert('There is something wrong!', err.message)
  )
}
export async function login(email, password,loginComplete) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(()=> loginComplete()) 
      .catch ((err)=> 
    Alert.alert('There is something wrong!', err.message)
      )
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}
