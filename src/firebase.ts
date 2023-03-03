import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzo-FCG4c4tknOoLt130KRL3FhKytItyg",
  authDomain: "chatgpt-messenger-7a479.firebaseapp.com",
  projectId: "chatgpt-messenger-7a479",
  storageBucket: "chatgpt-messenger-7a479.appspot.com",
  messagingSenderId: "979209529149",
  appId: "1:979209529149:web:cc2b9440d688597f6ec754"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };