import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9t0GeKQ77-GRdqH110b_1_POrAsKO5fw",
  authDomain: "hellochef-restaurant.firebaseapp.com",
  projectId: "hellochef-restaurant",
  storageBucket: "hellochef-restaurant.appspot.com",
  messagingSenderId: "650810448992",
  appId: "1:650810448992:web:f250e8b59c8ebbf530b705",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }; //exporting a function by distructuring
