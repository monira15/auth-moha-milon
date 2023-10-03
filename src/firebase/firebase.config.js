// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe4_XMyQU1W8ZoS04zsYb8Ev368RZse0Q",
  authDomain: "auth-moha-milon-2fd0e.firebaseapp.com",
  projectId: "auth-moha-milon-2fd0e",
  storageBucket: "auth-moha-milon-2fd0e.appspot.com",
  messagingSenderId: "342627955494",
  appId: "1:342627955494:web:cf7bf69eab0d928c0907e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;