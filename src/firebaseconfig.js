import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAA9-msXZbpLMgSBfNhwbfwI8B6ReaXuDA",
    authDomain: "product-ticket.firebaseapp.com",
    projectId: "product-ticket",
    storageBucket: "product-ticket.appspot.com",
    messagingSenderId: "250960872272",
    appId: "1:250960872272:web:7a7deceeae14335e41e255",
    measurementId: "G-T9936XTND3",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const app = fire.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const dbFirebase = fire.firestore();

export { app };
export { dbFirebase };
export { googleAuthProvider };
export { fire };
