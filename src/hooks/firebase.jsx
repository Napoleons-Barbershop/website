import React, {useState, useEffect} from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const useFirebaseConfig = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCs9qg25g0Zjwdwg4cBMUMc6w1HDVhd5mY",
    authDomain: "napoleons-barbershop.firebaseapp.com",
    projectId: "napoleons-barbershop",
    storageBucket: "napoleons-barbershop.appspot.com",
    messagingSenderId: "76631314763",
    appId: "1:76631314763:web:83365fbff198a1e01818ce",
    measurementId: "G-XZW89G68WY"
  };

  const [app, setApp] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [auth, setAuth] = useState(null);


  useEffect(() => {
  // Initialize Firebase
    setApp(initializeApp(firebaseConfig));

    if(app) {
      setAnalytics(getAnalytics(app));
      setAuth(getAuth(app));
    }

  }, [app]);


  return {app, analytics, auth};
}

export default useFirebaseConfig;