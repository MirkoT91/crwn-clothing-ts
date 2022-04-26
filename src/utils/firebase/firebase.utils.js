import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithRedirect, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBikyC-KzmvXUCnfjicXJ0Es_fn719ZfcQ",
    authDomain: "crwn-clothing-db-bc1e2.firebaseapp.com",
    projectId: "crwn-clothing-db-bc1e2",
    storageBucket: "crwn-clothing-db-bc1e2.appspot.com",
    messagingSenderId: "679208890379",
    appId: "1:679208890379:web:8de0804d9ba93f280e970e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {

      if(!email || !password ) return;

      return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password ) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);