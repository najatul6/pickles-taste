// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_CONSOLE,
  authDomain:import.meta.env.VITE_FIREBASE_DOMAIN_CONSOLE,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID_CONSOLE,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGEBUCKET_CONSOLE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID_CONSOLE,
  appId: import.meta.env.VITE_FIREBASE_APPID_CONSOLE,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID_CONSOLE,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;