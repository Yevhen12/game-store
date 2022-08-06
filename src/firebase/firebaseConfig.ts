import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { IFirebaseConfig } from '../interfaces/interfaces'

const firebaseConfig: IFirebaseConfig = {
    apiKey: "AIzaSyDfZeqai3YAg0b8uKM_eSmcWslUohOY_xE",
    authDomain: "game-store-8621c.firebaseapp.com",
    projectId: "game-store-8621c",
    storageBucket: "game-store-8621c.appspot.com",
    messagingSenderId: "549158222893",
    appId: "1:549158222893:web:95c9e81151d69d6918cca4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);


export { app, db, auth }