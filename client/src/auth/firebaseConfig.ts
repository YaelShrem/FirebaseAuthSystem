// ;

// Rest of your code
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDs1rfCWCrLmkHrf87AHffDyESJ1vMAnG8",
  authDomain: "saveprodemo.firebaseapp.com",
  projectId: "saveprodemo",
  storageBucket: "saveprodemo.appspot.com",
  messagingSenderId: "12023133627",
  appId: "1:12023133627:web:cf1604e3c29cc3b246c09e"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app as default, auth };
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDs1rfCWCrLmkHrf87AHffDyESJ1vMAnG8",
//   authDomain: "saveprodemo.firebaseapp.com",
//   projectId: "saveprodemo",
//   storageBucket: "saveprodemo.appspot.com",
//   messagingSenderId: "12023133627",
//   appId: "1:12023133627:web:cf1604e3c29cc3b246c09e"
// };

