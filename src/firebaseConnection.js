import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAcXfKZJ7ekQfCIczzaQuujy55jYOmX-KU",
    authDomain: "clone-3dc87.firebaseapp.com",
    projectId: "clone-3dc87",
    storageBucket: "clone-3dc87.appspot.com",
    messagingSenderId: "869464158253",
    appId: "1:869464158253:web:82e16615a3c6615dffc8a4",
    measurementId: "G-Q04MP7ZLF5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export { auth, db, provider };