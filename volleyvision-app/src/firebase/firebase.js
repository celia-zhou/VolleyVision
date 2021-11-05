import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getFirestore} from 'firebase/firestore/lite';

//code for the future when we choose to setup analytics
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC4lk1ACdzgs93tnuze1BSkwX2KmvRqu8Q",
    authDomain: "volleyvision-e6c88.firebaseapp.com",
    databaseURL: "https://volleyvision-e6c88-default-rtdb.firebaseio.com",
    projectId: "volleyvision-e6c88",
    storageBucket: "volleyvision-e6c88.appspot.com",
    messagingSenderId: "810069680059",
    appId: "1:810069680059:web:ece16ae4ede793ee826e9e",
    measurementId: "G-1Z6HRYP7NT"
};

const app = firebase.initializeApp(firebaseConfig);
//const fba = getAnalytics(fb);

export const auth = app.auth();
export const db = getFirestore(app);
export default app;

