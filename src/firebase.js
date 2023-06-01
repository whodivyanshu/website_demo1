
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgXEb8b09AwI_PkP2GDKUaEdSO_NxOUD4",
  authDomain: "enhanced-kiln-318415.firebaseapp.com",
  projectId: "enhanced-kiln-318415",
  storageBucket: "enhanced-kiln-318415.appspot.com",
  messagingSenderId: "1010045976229",
  appId: "1:1010045976229:web:6fac37cfb9f4f25434574c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);
export { app, auth, provider, database };

