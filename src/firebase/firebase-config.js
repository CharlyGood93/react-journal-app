import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAtzu8iX6GAUxbIKo3gUl4LT7qZHUdg0G4",
    authDomain: "react-app-cursos-fd98a.firebaseapp.com",
    projectId: "react-app-cursos-fd98a",
    storageBucket: "react-app-cursos-fd98a.appspot.com",
    messagingSenderId: "1020794537271",
    appId: "1:1020794537271:web:0c5054f801fd7538e446b2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}