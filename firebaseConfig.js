import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI9S2x_cQ8qIfw1wODJzKBA9E0jcfGcrg",
  authDomain: "jfsinger-a8fcd.firebaseapp.com",
  projectId: "jfsinger-a8fcd",
  storageBucket: "jfsinger-a8fcd.appspot.com",
  messagingSenderId: "942143701274",
  appId: "1:942143701274:web:3d7c22752d688c487f6ca3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
