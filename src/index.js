// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHTHAudRu8HXBm-UgZxr4tL0uefH2oyWs",
  authDomain: "new-hope-uc.firebaseapp.com",
  databaseURL: "https://new-hope-uc-default-rtdb.firebaseio.com",
  projectId: "new-hope-uc",
  storageBucket: "new-hope-uc.appspot.com",
  messagingSenderId: "468926253169",
  appId: "1:468926253169:web:df14773556752a09f033d0",
  measurementId: "G-D6KZMPBSXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app();
analytics();