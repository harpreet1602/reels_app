import firebase from "firebase/app";
import "firebase/firestore";


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


export const firestore = firebase.firestore();

export default firebase;