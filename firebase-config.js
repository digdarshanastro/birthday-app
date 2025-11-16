// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC687auGZzXIr6UZLg2r4JMghFRYe0rvvs",
  authDomain: "birthday-wishes-4a88d.firebaseapp.com",
  projectId: "birthday-wishes-4a88d",
  storageBucket: "birthday-wishes-4a88d.appspot.com",
  messagingSenderId: "214785637006",
  appId: "1:214785637006:web:f66d6ffd474b107c59a7df"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);