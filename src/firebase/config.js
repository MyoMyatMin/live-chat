import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC6PgAGHIyyP3nJPZ7qiVwTmUlRD6MABZM",
    authDomain: "vue-blog-system-cd6e6.firebaseapp.com",
    projectId: "vue-blog-system-cd6e6",
    storageBucket: "vue-blog-system-cd6e6.appspot.com",
    messagingSenderId: "1098004268468",
    appId: "1:1098004268468:web:3a7610a25c06161bb6dee1"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export { db,timestamp,auth }