import logo from './logo.svg';
import './App.css';
import {FBConfig, db} from './FireBase/FBConfig';
//import db from './FireBase/FBConfig';
//import firebase from 'firebase/compat/app';
import 'firebase/firestore';
//import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import 'firebase/compat/firestore';


function App() {
  

  return (
   

    <div className="App">



      <button onClick={
        ()=> {

          fireBase.firestore().collection("Products").get().
          then(

            (snapshot)=>{
              snapshot.forEach(
                (obj)=>{
                  console.log(obj.data())
                }
              )
             
                   }

          )


        }




      }> Click Here </button>
      
    </div>
  );
}

export default App;






