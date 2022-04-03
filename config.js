import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDxtpyx_htruW6alXPV7BorGztSQxLfr28",
    authDomain: "project-71-a0d0a.firebaseapp.com",
    projectId: "project-71-a0d0a",
    storageBucket: "project-71-a0d0a.appspot.com",
    messagingSenderId: "558607210712",
    appId: "1:558607210712:web:9dba6262b2274ee43f5fad"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
