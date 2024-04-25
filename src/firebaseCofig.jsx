// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvjjUpHF7lx0ptgncrScPLhAoTypXmzv4",
  authDomain: "a-10-art.firebaseapp.com",
  projectId: "a-10-art",
  storageBucket: "a-10-art.appspot.com",
  messagingSenderId: "64799949275",
  appId: "1:64799949275:web:0e6629276b9eec3a01a7fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);