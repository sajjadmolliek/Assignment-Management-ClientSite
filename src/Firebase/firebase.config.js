// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAhFv0xfy3gTAPfFenDj4Ha7a9t_Iq07po",
  // authDomain: "shoes-store-c81c1.firebaseapp.com",
  // projectId: "shoes-store-c81c1",
  // storageBucket: "shoes-store-c81c1.appspot.com",
  // messagingSenderId: "149312167499",
  // appId: "1:149312167499:web:8e026f91174824b1f7b7ce",

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
