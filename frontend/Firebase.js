// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "foodgo-food-delivery.firebaseapp.com",
    projectId: "foodgo-food-delivery",
    storageBucket: "foodgo-food-delivery.appspot.com",
    messagingSenderId: "79586585130",
    appId: "1:79586585130:web:938f87efaf6f3910b37153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth} 