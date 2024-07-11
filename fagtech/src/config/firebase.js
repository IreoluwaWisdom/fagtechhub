import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDH5mymiWI7dIrWxIW2N72dMiGYFZSmakM",
  authDomain: "fagtechhub.firebaseapp.com",
  projectId: "fagtechhub",
  storageBucket: "fagtechhub.appspot.com",
  messagingSenderId: "150580809482",
  appId: "1:150580809482:web:27113213136732d4d0b4f3",
  measurementId: "G-KLP2M7BLN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
