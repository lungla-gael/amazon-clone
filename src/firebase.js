// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCpLsF3co67UZiu4CtLppBGfB2Xt48iUxA",
    authDomain: "challenge-e839a.firebaseapp.com",
    projectId: "challenge-e839a",
    storageBucket: "challenge-e839a.appspot.com",
    messagingSenderId: "974722530591",
    appId: "1:974722530591:web:a863a03102f0d8c6a2c42a",
    measurementId: "G-5XF0PFWEMB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}