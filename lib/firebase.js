import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCb7M95mERPcEIqyLqisfZBqDHgtc0Fdkk",
  authDomain: "nextfire-3fe43.firebaseapp.com",
  databaseURL: "https://nextfire-3fe43-default-rtdb.firebaseio.com",
  projectId: "nextfire-3fe43",
  storageBucket: "nextfire-3fe43.appspot.com",
  messagingSenderId: "1045516536293",
  appId: "1:1045516536293:web:dabbfa98adf1fde5f7870c",
  measurementId: "G-93C2TY01BN"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();