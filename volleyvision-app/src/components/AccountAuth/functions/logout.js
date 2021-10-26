import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../../firebase/firebase'

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});