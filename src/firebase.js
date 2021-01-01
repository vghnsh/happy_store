
import firebase from 'firebase';


  var firebaseApp =firebase.initializeApp(
  {
    apiKey: "AIzaSyB28w3A6sgusTqulfml8Qj-HP6ngUjFjw8",
    authDomain: "happystore-3e775.firebaseapp.com",
    projectId: "happystore-3e775",
    storageBucket: "happystore-3e775.appspot.com",
    messagingSenderId: "885195820421",
    appId: "1:885195820421:web:034c03adee76790fa148ec",
    measurementId: "G-FC3JP0VZ8F"
    }

) ;
  


const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage= firebase.storage();
export  {db,auth,storage};
