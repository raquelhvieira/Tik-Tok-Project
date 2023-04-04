import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCS6FHmtljZKIazLfl1j2T8wOHy62c-yKo",
  authDomain: "tiktok---jornada-ebac-rhv.firebaseapp.com",
  projectId: "tiktok---jornada-ebac-rhv",
  storageBucket: "tiktok---jornada-ebac-rhv.appspot.com",
  messagingSenderId: "1023555132331",
  appId: "1:1023555132331:web:d07f80f61465934f2c10ee"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db 