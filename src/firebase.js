import firebase from "firebase/app";
import "firebase/firestore";
// step1
import "firebase/auth";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDJ4VRzDPHl18gUB0jKVdSMWC4M60QfQzk",
    authDomain: "reels-e08fe.firebaseapp.com",
    projectId: "reels-e08fe",
    storageBucket: "reels-e08fe.appspot.com",
    messagingSenderId: "1082545881711",
    appId: "1:1082545881711:web:ec9e62697a11a8f9f5c39a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// object inititalised of firestore
export const firestore = firebase.firestore();
// step2
// object inititalised of auth
export const auth = firebase.auth();

// step 3 => firebase console enable; google login in auth panel
// by this provider we will be provided google services to login
export const provider = new firebase.auth.GoogleAuthProvider();

// this function will help us sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider)



export default firebase;