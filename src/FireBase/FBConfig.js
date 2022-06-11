import 'firebase/firestore';
import { initializeApp, firebase } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
import 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");


//import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClKF2ZhrQxpAgEx1d7WLYVCc3McNjpCEo",
    authDomain: "r-apps-b5bce.firebaseapp.com",
    projectId: "r-apps-b5bce",
    storageBucket: "r-apps-b5bce.appspot.com",
    messagingSenderId: "425105569075",
    appId: "1:425105569075:web:1cd34b160c994aacdd3a46",
    measurementId: "G-BLY5TCXSPG"
  };

  const FBConfig = initializeApp(firebaseConfig);

 const db = getFirestore(FBConfig);

 export default db;

 //const db = fireBase.firestore();


