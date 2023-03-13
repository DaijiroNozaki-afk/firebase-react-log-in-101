import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAooggY9eTxEu1tBMexUP3CSQ88VirrCBY",
  authDomain: "fir-login-tutorial-a161a.firebaseapp.com",
  projectId: "fir-login-tutorial-a161a",
  storageBucket: "fir-login-tutorial-a161a.appspot.com",
  messagingSenderId: "929856230547",
  appId: "1:929856230547:web:da67d6298b3f6a4fa56966"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, provider }