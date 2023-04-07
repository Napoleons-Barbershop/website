// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const initializeFirebaseConfig = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCs9qg25g0Zjwdwg4cBMUMc6w1HDVhd5mY",
    authDomain: "napoleons-barbershop.firebaseapp.com",
    projectId: "napoleons-barbershop",
    storageBucket: "napoleons-barbershop.appspot.com",
    messagingSenderId: "76631314763",
    appId: "1:76631314763:web:83365fbff198a1e01818ce",
    measurementId: "G-XZW89G68WY",
    databaseURL: "https://napoleons-barbershop-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);

  return { auth, database }
}

export default initializeFirebaseConfig