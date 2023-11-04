import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVeLVQTezPzICn3896UUZvhhQkewPD0q4",
    authDomain: "ecommerce-a6d05.firebaseapp.com",
    projectId: "ecommerce-a6d05",
    storageBucket: "ecommerce-a6d05.appspot.com",
    messagingSenderId: "232972547819",
    appId: "1:232972547819:web:5222bdb57b6a3b04ceb0ae"
};

const app = initializeApp(firebaseConfig);
export const ls = getFirestore(app);