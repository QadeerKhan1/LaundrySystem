// Import the functions you need from the SDKs you nee

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// where to add above url


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC12HtsgavCiPop7dNMIgtTIeVowt5_OXo",
  authDomain: "laundry-f31d7.firebaseapp.com",
  projectId: "laundry-f31d7",
  storageBucket: "laundry-f31d7.appspot.com",
  messagingSenderId: "561193685812",
  appId: "1:561193685812:web:eff1b14cf1091dd29c4b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };