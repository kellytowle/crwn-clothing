import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const cfg = {
  apiKey: "AIzaSyAShLVLqiO38wJD7wugQjE4vVRezSu7q3o",
  authDomain: "crown-clothing-store.firebaseapp.com",
  databaseURL: "https://crown-clothing-store.firebaseio.com",
  projectId: "crown-clothing-store",
  storageBucket: "",
  messagingSenderId: "186407190931",
  appId: "1:186407190931:web:1744571f98b3c379"
};

firebase.initializeApp(cfg);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase