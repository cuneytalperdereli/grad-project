import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toastSuccessNotify } from "../helper/ToastNotify";

//* Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser =async(email,password,navigate,displayName) => {
  try {
   let userCredential= await createUserWithEmailAndPassword(auth, email, password);
   updateProfile(auth.currentUser, {
    displayName: displayName,
  });
   navigate("/")
   toastSuccessNotify("Registered Successfully")
   console.log(userCredential);
    
  } catch (error) {
    alert(error.message);
    
  }
}
export const signIn = async(email,password,navigate)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
    toastSuccessNotify("Logged in Successfully")

    
  } catch (error) {
    alert(error.message);
  }
}

export const userObserver = (setCurrentUser)=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {email,displayName,photoURL} = user;
      setCurrentUser({email,displayName,photoURL})
     console.log(user);
    } else {
      setCurrentUser(false)
      console.log("user signed out");
    }
  });
}

export const logOut = ()=>{
  signOut(auth)
  
}

export const signUpWithGoogle = (navigate) =>{
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  navigate("/")
  toastSuccessNotify("Logged in Successfully")
  }).catch((error) => {
    console.log(error);
  });
}
