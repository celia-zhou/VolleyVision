import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const uid = user.uid;
    const email = user.email;
    // ...
  } else {
    // User is signed out
  }
});