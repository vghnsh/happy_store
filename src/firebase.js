

import firebase from 'firebase';

var firebaseApp = {
    apiKey: "AIzaSyCpCIue8VUlZttuLS8oxw3RfYWNcLwbgWA",
    authDomain: "happystore-b6b8c.firebaseapp.com",
    projectId: "happystore-b6b8c",
    storageBucket: "happystore-b6b8c.appspot.com",
    messagingSenderId: "446265469540",
    appId: "1:446265469540:web:dbc693d160317532168d71"
  };

firebase.initializeApp(firebaseApp);
const auth= firebase.auth();
const storage= firebase.storage();
export  {auth,storage};
