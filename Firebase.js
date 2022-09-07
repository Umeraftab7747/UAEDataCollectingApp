import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjrwLHDF0uHjvTTlw5kFe9LOKzFjjrNWg",
  authDomain: "estatesdata-83c31.firebaseapp.com",
  projectId: "estatesdata-83c31",
  storageBucket: "estatesdata-83c31.appspot.com",
  messagingSenderId: "381235112634",
  appId: "1:381235112634:web:f10fe0c241ccba2cb53083",
  measurementId: "G-BVJ468MXWG",
};

const app = initializeApp(firebaseConfig);

// const app = initializeFirestore(firebaseConfig, {
//   experimentalForceLongPolling: true, // this line
//   useFetchStreams: false, // and this line
// });

const db = getFirestore(app);

export default db;
