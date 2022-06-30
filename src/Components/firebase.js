import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = firebase.initializeApp({
    apiKey: "AIzaSyDqNKnNH4C9UKfPalNp0LIpwXGt2-4CdaA",
    authDomain: "hamol-register.firebaseapp.com",
    projectId: "hamol-register",
    storageBucket: "hamol-register.appspot.com",
    messagingSenderId: "889966655301",
    appId: "1:889966655301:web:eb4fee00f1820b0830f02c",
    measurementId: "G-KNX6JLQYN4"
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserAccount = (email, password ) => auth.createUserWithEmailAndPassword( email, password )
export const signInAccount = (email,password) => auth.signInWithEmailAndPassword( email,password )

export default config
