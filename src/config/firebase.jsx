import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoEIelxnfTxKmxlHayMMg_BWnjN-79nA",
  authDomain: "contact-list-7a1f3.firebaseapp.com",
  projectId: "contact-list-7a1f3",
  storageBucket: "contact-list-7a1f3.appspot.com",
  messagingSenderId: "41990709229",
  appId: "1:41990709229:web:0646ff3993adf0fa9a11e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
