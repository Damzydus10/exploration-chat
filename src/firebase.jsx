// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-9NlWbm8vYUHSgUz2hvBVqPWDLJXoOGM",
  authDomain: "explorationchat.firebaseapp.com",
  projectId: "explorationchat",
  storageBucket: "explorationchat.appspot.com",
  messagingSenderId: "883659760568",
  appId: "1:883659760568:web:cf22e0e32c4c50486b654d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
