// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj9Zif51oALrS7XULLnMJZpmg-EBW6cfs",
  authDomain: "musiquest-daec0.firebaseapp.com",
  projectId: "musiquest-daec0",
  storageBucket: "musiquest-daec0.appspot.com",
  messagingSenderId: "359816262006",
  appId: "1:359816262006:web:c75861fea66c5548034a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;