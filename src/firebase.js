import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDesvFcvjexNJavo2yPZiAL_AjUUYmQwMs",
  authDomain: "bitpay-fddca.firebaseapp.com",
  projectId: "bitpay-fddca",
  storageBucket: "bitpay-fddca.appspot.com",
  messagingSenderId: "275512799478",
  appId: "1:275512799478:web:d7ae47b046413fa6bb7cd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
