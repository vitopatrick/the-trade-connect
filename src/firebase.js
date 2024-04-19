import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdkcqLMcNITMlRlwdagsp9kpDDNRFQ1RM",
  authDomain: "thetradeconnect-ef675.firebaseapp.com",
  projectId: "thetradeconnect-ef675",
  storageBucket: "thetradeconnect-ef675.appspot.com",
  messagingSenderId: "1004894779803",
  appId: "1:1004894779803:web:457b761194f36ce15f493e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
