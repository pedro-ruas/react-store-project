import { initializeApp } from "@firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";
import { getAnalytics } from "@firebase/analytics";

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
