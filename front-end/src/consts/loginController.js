import * as firebase from 'firebase';
import { Alert } from 'react-native';
export function login(email, password, loginComplete){
    // const user = { 'email' : email, 'password' : password}
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=> loginComplete())
        .catch((error) => Alert.alert(error.message)
        )
}
export function signUp(email, password,name, signUpComplete) {
    firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then(()=> login(email, password, signUpComplete))
        const currentUser= firebase.auth().currentUser;
        const db = firebase.firestore();
        db.collection("users")
          .doc(currentUser.uid)
          .set({
            name:name,
            email:email,
            password: password,
          })
        .catch((error) =>
                   Alert.alert(error.message)
        )
        // console.log("name", name)
        // console.log("Signup Email", email)
        // console.log("Signup Password", password)
}
export function signOut(signedOut){
    firebase.auth().signOut().then(()=> signedOut)
}


export function subscribeToAuth(authStateChanged){

    firebase.auth()
        .onAuthStateChanged((currentUser) => {
            authStateChanged(currentUser)
        })
}
// export async function getUsers(UserId,name){
//     var snapshot = await firebase
//                             .firestore()
//                             .collection("Users")
//                             .orderBy("UserId")
//                             .get({
//                              name:name,
//                             email:email,
//                              password:password
       
//     })
// }
// export async function updateUsers(dance, updateComplete){
//     firebase.
//     firestore().
//     collection("DanceMoves").
//     doc(dance.id).
//     set(dance).then(() => updateComplete(dance)).
//     catch((error) => console.log(error))
// }