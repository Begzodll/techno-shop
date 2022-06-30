import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY_REACT_CHAT ,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN_REACT_CHAT ,
    projectId: process.env.REACT_APP_PROJECT_ID_REACT_CHAT,
    storageBucket: process.env.REACT_APP_STORAGE_BECKET_REACT_CHAT,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_USER_ID ,
    appId: process.env.REACT_APP_APP_ID_PROJECT_ID ,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID_PROJECT
});

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserAccount = (email, password ) => auth.createUserWithEmailAndPassword( email, password )
export const signInAccount = (email,password) => auth.signInWithEmailAndPassword( email,password )

export default config
