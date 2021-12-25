import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK5YEhkIoBE0-FYDGLWlP5IWA0n_mW7Ls",
  authDomain: "whatsapp-clone-e6687.firebaseapp.com",
  projectId: "whatsapp-clone-e6687",
  storageBucket: "whatsapp-clone-e6687.appspot.com",
  messagingSenderId: "884253702470",
  appId: "1:884253702470:web:8d07030204fc7ae31b8d47"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
