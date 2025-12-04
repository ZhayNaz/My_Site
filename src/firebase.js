import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvdqlq1AHDqbtidxbEjbKWUPd_CIX5caw",
  authDomain: "mypage-a8498.firebaseapp.com",
  projectId: "mypage-a8498",
  storageBucket: "mypage-a8498.appspot.com",
  messagingSenderId: "142499144944",
  appId: "1:142499144944:web:3cfd2836da5d5526ba8e35",
  measurementId: "G-THS1HG2SDX"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
