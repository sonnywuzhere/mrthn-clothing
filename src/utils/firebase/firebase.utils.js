import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAU1a6YzCCR5P7AoKzti_GxT_BE6SrLeE",
    authDomain: "mrthn-clothing-db.firebaseapp.com",
    projectId: "mrthn-clothing-db",
    storageBucket: "mrthn-clothing-db.appspot.com",
    messagingSenderId: "590943243635",
    appId: "1:590943243635:web:c422622839724602f78906"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      });
    } catch (error) {
      console.log('error creating user ', error.message)
    }
  } 
  
  return userDocRef;
}