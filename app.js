import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3u6NK--67YgV4CKumPevfUijqLnMFzY0",
    authDomain: "messorderingsystem.firebaseapp.com",
    projectId: "messorderingsystem",
    storageBucket: "messorderingsystem.firebasestorage.app",
    messagingSenderId: "1036262149494",
    appId: "1:1036262149494:web:888f6b1fb4581c11553e57",
    measurementId: "G-NH04V0C5BL"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };