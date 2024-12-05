
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAK8AkfCQnS6WBoiuKvIU_-kG7lWI14H4",
  authDomain: "mini-hacathon-e895a.firebaseapp.com",
  projectId: "mini-hacathon-e895a",
  storageBucket: "mini-hacathon-e895a.firebasestorage.app",
  messagingSenderId: "435076080956",
  appId: "1:435076080956:web:33849863b96d27e1fb6a39",
  measurementId: "G-197TWJ2PH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//get id's
const signup_email = document.getElementById('signup_email');
const signup_password= document.getElementById('signup_password');
const btn= document.getElementById('btn');

const signin_email = document.getElementById('signin_email');
const signin_password= document.getElementById('signin_password');
const btn_2= document.getElementById('btn_2');
function createUserAccount (){
  // console.log("email=>",signup_email.value);
  // console.log("password=>",signup_password.value);
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
.then((userCredential) => {
  // Signed up 
  const user = userCredential.user;
  console.log('user=>',user);
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
  // ..
});
}


function signIn() {
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
  }

btn.addEventListener("click",createUserAccount);
btn_2.addEventListener("click",signIn);
logout_btn.addEventListener("click",logout)

onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log('user is logged in');
    const uid = user.uid;
  } else {
      console.log('user is not logged in');
  }
});


