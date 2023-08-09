import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhI91ZZQxrICKmAo9WOB6wIc-s0aOcF6Y",
  authDomain: "blog-app-f75b4.firebaseapp.com",
  projectId: "blog-app-f75b4",
  storageBucket: "blog-app-f75b4.appspot.com",
  messagingSenderId: "760661157964",
  appId: "1:760661157964:web:15912a4358f69325112ce9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
