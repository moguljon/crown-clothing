import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-Ds75Gnakx3y3tByHrhYmxmtAcenigJo",
    authDomain: "crowndb-21d90.firebaseapp.com",
    databaseURL: "https://crowndb-21d90.firebaseio.com",
    projectId: "crowndb-21d90",
    storageBucket: "crowndb-21d90.appspot.com",
    messagingSenderId: "960257198149",
    appId: "1:960257198149:web:8bf48ed2b414d0faa33b2c",
    measurementId: "G-DRJMZ8FB49"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
