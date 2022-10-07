import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDeDilVTBLLfAo1wIJdTWckv76RcaAc0uo",
    authDomain: "project-67-f2f95.firebaseapp.com",
    databaseURL: "https://project-67-f2f95-default-rtdb.firebaseio.com",
    projectId: "project-67-f2f95",
    storageBucket: "project-67-f2f95.appspot.com",
    messagingSenderId: "504915619828",
    appId: "1:504915619828:web:de61543e0578486364d3a1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();