
import firebase from 'firebase';


  var firebaseApp =firebase.initializeApp(
  {
    apiKey: "AIzaSyCpCIue8VUlZttuLS8oxw3RfYWNcLwbgWA",
    authDomain: "happystore-b6b8c.firebaseapp.com",
    databaseURL: "https://happystore-b6b8c-default-rtdb.firebaseio.com",
    projectId: "happystore-b6b8c",
    storageBucket: "happystore-b6b8c.appspot.com",
    messagingSenderId: "446265469540",
    appId: "1:446265469540:web:dbc693d160317532168d71"
    }

) ;
  


const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage= firebase.storage();
export  {db,auth,storage};
