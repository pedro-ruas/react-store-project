import { initializeApp } from "@firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { getAnalytics } from "@firebase/analytics";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDspohKTvDKRfdaksmLd2pi32y5qhShJMU",
  authDomain: "react-store-644b5.firebaseapp.com",
  projectId: "react-store-644b5",
  storageBucket: "react-store-644b5.appspot.com",
  messagingSenderId: "181518196784",
  appId: "1:181518196784:web:3362300eaaee5421fb4df5",
  measurementId: "G-057E650G6R",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
  const { user } = await signInWithPopup(auth, googleProvider)
  return await createUserDocumentFromAuth(user);
};

export const signInWithGoogleRedirect = async () =>{
  const { user } = await signInWithRedirect(auth, googleProvider)
  return await createUserDocumentFromAuth(user);
};

export const database = getFirestore();

const CREATE_USER_ERROR = {
  "auth/email-already-in-use":
    "There's already an account registered with this e-mail",
  "auth/invalid-email": "Please use a valid e-mail",
  "auth/weak-password": "Password should be at least 6 characters",
};

const LOGIN_USER_ERROR = {
  "auth/wrong-password": "E-mail and password don't match",
  "auth/user-not-found": "This e-mail doesn't have an account",
  "auth/invalid-credential": "Invalid Login Method",
};

export const createUserDocumentFromAuth = async (userAuth, extraData = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(database, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...extraData,
      });

      alert("User registered successfully!");
      return userDocRef;
    } catch (error) {
      alert(
        CREATE_USER_ERROR[error.code] ??
          `Error creating user:\n${error.message}`
      );
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  if (!email || !password || !displayName) return;

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return await createUserDocumentFromAuth(user, { displayName });
  } catch (error) {
    alert(
      CREATE_USER_ERROR[error.code] ?? `Error creating user:\n${error.message}`
    );
  }
};

export const signInUserWithEmailAndPassword = async ({ email, password }) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(
      LOGIN_USER_ERROR[error.code] ?? `Something went wrong:\n${error.message}`
    );
  }
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
