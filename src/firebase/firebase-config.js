import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFmY_HUYWTWgGUQYJfk0wMf1MwVU7suFs",
    authDomain: "react-redux-journal-app-curso.firebaseapp.com",
    projectId: "react-redux-journal-app-curso",
    storageBucket: "react-redux-journal-app-curso.appspot.com",
    messagingSenderId: "302502615837",
    appId: "1:302502615837:web:3bd0ef7e0fb8d351e49ff4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };