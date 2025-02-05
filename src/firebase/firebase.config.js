// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp-pz7WQPNm8hnijX_iWJf-FW1AfvUTcU",
  authDomain: "dragon-news-projects-257d1.firebaseapp.com",
  projectId: "dragon-news-projects-257d1",
  storageBucket: "dragon-news-projects-257d1.firebasestorage.app",
  messagingSenderId: "380188426764",
  appId: "1:380188426764:web:d770dbead8062d02ae6429",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
