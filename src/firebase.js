import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCW2AmvOP42he12CWaRN5Z1AgrKtGy6TUs",
  authDomain: "todo-list-app-f844f.firebaseapp.com",
  projectId: "todo-list-app-f844f",
  storageBucket: "todo-list-app-f844f.appspot.com",
  messagingSenderId: "524938629209",
  appId: "1:524938629209:web:9140b00704b4347b1c6148"
});

export const auth = firebase.auth();
export const db = firebaseConfig.firestore();