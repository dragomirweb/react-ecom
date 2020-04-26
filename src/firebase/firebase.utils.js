import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-ecom-f0b12.firebaseapp.com",
  databaseURL: "https://react-ecom-f0b12.firebaseio.com",
  projectId: "react-ecom-f0b12",
  storageBucket: "react-ecom-f0b12.appspot.com",
  messagingSenderId: "886446082322",
  appId: "1:886446082322:web:9e06b8429070ea017a4bcb"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
