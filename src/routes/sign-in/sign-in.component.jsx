import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/utils.firebase";

export function SignInPage() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN PAGE WORKS</h1>
      <button onClick={logGoogleUser}>Log-In</button>
    </div>
  );
}
 