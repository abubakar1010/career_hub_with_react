// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyufbJSNj7pTXePwFSnSUNoTOz3DgRbQQ",
  authDomain: "career-hub-react-app.firebaseapp.com",
  projectId: "career-hub-react-app",
  storageBucket: "career-hub-react-app.appspot.com",
  messagingSenderId: "158269666887",
  appId: "1:158269666887:web:f752b0c1d6d05a1c352362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth