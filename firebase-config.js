
  // Import the functions you need from the SDKs you need





  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBRxvAD7o_UlR_FzyTYaMx3vIeqGlXBSk4",
    authDomain: "ecommerce--store.firebaseapp.com",
    projectId: "ecommerce--store",
    storageBucket: "ecommerce--store.firebasestorage.app",
    messagingSenderId: "756853239536",
    appId: "1:756853239536:web:2244f5ce65929f09681c35",
    measurementId: "G-5Z2L4LSS0Y"
  };




  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);