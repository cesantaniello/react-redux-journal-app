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

const firebaseConfigTesting = {
    apiKey: "AIzaSyAZvdXxURu8Qw0siWsnFJKgmMVABy9lQK8",
    authDomain: "daw-3bff8.firebaseapp.com",
    projectId: "daw-3bff8",
    storageBucket: "daw-3bff8.appspot.com",
    messagingSenderId: "443391207865",
    appId: "1:443391207865:web:7038adc298e5530853ae68",
    measurementId: "G-QSYC5TFZ4E"
};

(process.env.NODE_ENV === 'test') 
    ? firebase.initializeApp(firebaseConfigTesting) //Testing
    : firebase.initializeApp(firebaseConfig) //Production and development;


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };