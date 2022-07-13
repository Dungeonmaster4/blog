import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjC3ocSmJhQaelWU3wUDHcpcwXrM148Ko",
  authDomain: "blogproject-b099b.firebaseapp.com",
  projectId: "blogproject-b099b",
  storageBucket: "blogproject-b099b.appspot.com",
  messagingSenderId: "380430550550",
  appId: "1:380430550550:web:3b56e659b13ebd8290d737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()