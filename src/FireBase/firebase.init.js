// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW3iVQI__szaknzzZQoFnfPIBKeC8A2ng",
  authDomain: "factory-auth-project.firebaseapp.com",
  projectId: "factory-auth-project",
  storageBucket: "factory-auth-project.appspot.com",
  messagingSenderId: "836950587970",
  appId: "1:836950587970:web:1bcafbcc3c54ff11f54bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);