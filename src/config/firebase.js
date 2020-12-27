import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiYJ78LSWMRDhgN7BmxdqgF2mE1U3KHzE",
  authDomain: "chat-app-20201224.firebaseapp.com",
  projectId: "chat-app-20201224",
  storageBucket: "chat-app-20201224.appspot.com",
  messagingSenderId: "109236825130",
  appId: "1:109236825130:web:a7a8640db4d20cf8a3e753",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
