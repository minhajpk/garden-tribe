
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2zNApIZygT7eQLuBOOFAawXy0bob83vM",
  authDomain: "garden-tribe.firebaseapp.com",
  projectId: "garden-tribe",
  storageBucket: "garden-tribe.firebasestorage.app",
  messagingSenderId: "958772468732",
  appId: "1:958772468732:web:a19a5dd40e3141fb99f079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);