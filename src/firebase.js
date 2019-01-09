import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBgAXFIyTP5LZxpT2G_YWP31dlzvkSgGbs",
  authDomain: "bedu-test.firebaseapp.com",
  databaseURL: "https://bedu-test.firebaseio.com",
  projectId: "bedu-test",
  storageBucket: "bedu-test.appspot.com",
  messagingSenderId: "781811559772"
};

export const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);
