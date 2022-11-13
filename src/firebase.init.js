// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_Api_Key,
  authDomain: process.env.REACT_APP_Auth_Domain,
  projectId: process.env.REACT_APP_Project_Id,
  storageBucket: process.env.REACT_APP_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_Messaging_SenderId,
  appId: process.env.REACT_APP_App_Id,

  // apiKey: "AIzaSyAuPvwJAxRTzrnFpOba9nxeYU5X7w3hO_s",
  // authDomain: "mess-meal-calculator.firebaseapp.com",
  // projectId: "mess-meal-calculator",
  // storageBucket: "mess-meal-calculator.appspot.com",
  // messagingSenderId: "1027118502050",
  // appId: "1:1027118502050:web:c04c45ae200756311c47fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
