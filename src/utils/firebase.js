import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDIffVuUlQfA7El9GSL1DeWRhgIs5w8htg",
  authDomain: "netflixgpt-937fc.firebaseapp.com",
  projectId: "netflixgpt-937fc",
  storageBucket: "netflixgpt-937fc.appspot.com",
  messagingSenderId: "378715668401",
  appId: "1:378715668401:web:4c2d240aa153b8a94b4790",
  measurementId: "G-H20WSEGLG3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();