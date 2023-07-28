import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD2R1kzmtymu6nPL3uAD0j9LVvC7gEdIDA",
    authDomain: "tech-solutions-74640.firebaseapp.com",
    projectId: "tech-solutions-74640",
    storageBucket: "tech-solutions-74640.appspot.com",
    messagingSenderId: "340881459904",
    appId: "1:340881459904:web:b5f0e3e35aa3ad2d987b25"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;