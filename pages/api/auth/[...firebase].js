// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKU6DqodiXwZb87VPvUUr0STcRup8aAZ0",
  authDomain: "hair-genius.firebaseapp.com",
  projectId: "hair-genius",
  storageBucket: "hair-genius.appspot.com",
  messagingSenderId: "698041766513",
  appId: "1:698041766513:web:0e0161313801fc872101d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getDatabase(app);