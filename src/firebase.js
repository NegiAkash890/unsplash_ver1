import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpj69H5GVSVtdpP6noyCzvhXYTjUeUoa0",
  authDomain: "unsplash-17ab7.firebaseapp.com",
  projectId: "unsplash-17ab7",
  storageBucket: "unsplash-17ab7.appspot.com",
  messagingSenderId: "530049623568",
  appId: "1:530049623568:web:f04082fcb996d6e84b8c95"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore()
const auth = firebase.auth()
export {auth} 
export default db ;