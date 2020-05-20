import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyD2k_yfqbyBjcdDHbVWvQbgcVMX3zHhrxk",
    authDomain: "ptd-project-f7bf5.firebaseapp.com",
    databaseURL: "https://ptd-project-f7bf5.firebaseio.com",
    projectId: "ptd-project-f7bf5",
    storageBucket: "ptd-project-f7bf5.appspot.com",
    messagingSenderId: "674684555069",
    appId: "1:674684555069:web:b410dad538eb60c13f7f54"
  })
  .firestore()

export const ClothingRef = db.collection('clothing')
export const basketRef = db.collection('basket')