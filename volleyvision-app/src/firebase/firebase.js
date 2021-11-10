// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import {doc, collection, getDoc, getFirestore} from 'firebase/firestore'
// // import 'firebase/compat/firestore'
// // import { getDatabase } from "firebase/database";

// //code for the future when we choose to setup analytics
// //import { getAnalytics } from "firebase/analytics";

// const fb = firebase.initializeApp({
//     apiKey: "AIzaSyC4lk1ACdzgs93tnuze1BSkwX2KmvRqu8Q",
//     authDomain: "volleyvision-e6c88.firebaseapp.com",
//     databaseURL: "https://volleyvision-e6c88-default-rtdb.firebaseio.com",
//     projectId: "volleyvision-e6c88",
//     storageBucket: "volleyvision-e6c88.appspot.com",
//     messagingSenderId: "810069680059",
//     appId: "1:810069680059:web:ece16ae4ede793ee826e9e",
//     measurementId: "G-1Z6HRYP7NT"
// })

// //const fba = getAnalytics(fb);
// // const db = fb.firebase.Firestore;
// const db = getFirestore();
// const auth = fb.auth();

// export {
//     auth,
//     db
// }

// // const citiesRef = collection(db, 'users');
// // let collectionRef = collection(db, 'player1');
// // let docRef = doc(collectionRef, 'firstName');
// const docRef = doc(db, 'users', 'players','player1','player1');
// const docSnap = getDoc(doc(db,'users','players')).then(docSnap => {
//     if (docSnap){
//         console.log('reached');
//         console.log(docSnap.data);
//     }
//     else {
//         console.log('bleehhhh');
//     }
// });
// // console.log(docRef);
// // if (docSnap){
// //     console.log('reached');
// //     console.log(docSnap);
// // }
// // else {
// //     console.log('bleehhhh');
// // }
// // .get();
// // snapshot.forEach(doc => {
// // console.log(doc.id, '=>', doc.data());
// // });

// // const docSnap = getDoc(doc(db,'users',auth.currentUser)).then(docSnap=> {
// //     if (docSnap.exists()){
// //         console.log(docSnap.data);
// //     }
// //     else {
// //         console.log('Fuck you firebase');
// //     }
// // })

// // export default db
// export default fb

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
//code for the future when we choose to setup analytics
//import { getAnalytics } from "firebase/analytics";

const fb = firebase.initializeApp({
    apiKey: "AIzaSyC4lk1ACdzgs93tnuze1BSkwX2KmvRqu8Q",
    authDomain: "volleyvision-e6c88.firebaseapp.com",
    databaseURL: "https://volleyvision-e6c88-default-rtdb.firebaseio.com",
    projectId: "volleyvision-e6c88",
    storageBucket: "volleyvision-e6c88.appspot.com",
    messagingSenderId: "810069680059",
    appId: "1:810069680059:web:ece16ae4ede793ee826e9e",
    measurementId: "G-1Z6HRYP7NT"
})

//const fba = getAnalytics(fb);

export const auth = fb.auth()
export default fb
