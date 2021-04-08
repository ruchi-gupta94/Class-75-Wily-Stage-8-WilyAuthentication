import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDLi4RyfXpC4StVAtN3bK_h9YJKxQ_KxYk",
    authDomain: "wily-app-2816a.firebaseapp.com",
    projectId: "wily-app-2816a",
    storageBucket: "wily-app-2816a.appspot.com",
    messagingSenderId: "765006760610",
    appId: "1:765006760610:web:886ab4d4fe911bda5c65fb"
  };

  // Initialize Firebase
if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig); 
}

export default firebase.firestore();