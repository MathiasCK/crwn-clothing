import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2CqsA_4hgdf4BE3TYVJIjSJ4pYjNSR-c",
  authDomain: "crwn-db-cd2a8.firebaseapp.com",
  projectId: "crwn-db-cd2a8",
  storageBucket: "crwn-db-cd2a8.appspot.com",
  messagingSenderId: "330064213310",
  appId: "1:330064213310:web:49d1e296a60e0b5c60686f",
  measurementId: "G-QFFSTF7G35",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
