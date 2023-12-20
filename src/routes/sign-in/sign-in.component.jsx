import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/utils.firebase";

export function SignInPage() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    return await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIGN IN PAGE WORKS</h1>
      <button onClick={logGoogleUser}>Log-In</button>

      <SignUpForm />
    </div>
  );
}
