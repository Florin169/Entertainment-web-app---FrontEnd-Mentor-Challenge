import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFkH4MxoM2nu024oCzTKrDGvSaHs_hniU",
  authDomain: "practice-43921.firebaseapp.com",
  projectId: "practice-43921",
  storageBucket: "practice-43921.appspot.com",
  messagingSenderId: "875625859902",
  appId: "1:875625859902:web:daba995f2862b3a8f2ba6f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
