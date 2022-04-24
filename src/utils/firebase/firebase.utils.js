import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup  } from 'firebase/auth';

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
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef;
  }