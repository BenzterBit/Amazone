import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8c3jHfXjOl441tcqhzhC0vxJn5r4rhF8",
  authDomain: "e-7b624.firebaseapp.com",
  projectId: "e-7b624",
  storageBucket: "e-7b624.appspot.com",
  messagingSenderId: "341414567058",
  appId: "1:341414567058:web:21e4c4c2bdc4dbe8a1da4b",
  measurementId: "G-K2QKGBVSLN"
};

<<<<<<< HEAD
=======

>>>>>>> ed3e1ab14429c116050ea1aa126ddb9dc73146d7
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();