import { signInWithGooglePopup } from "../../utils/utils.firebase";

export function SignInPage() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>SIGN IN PAGE WORKS</h1>
      <button onClick={logGoogleUser}>Log-In</button>
    </div>
  );
}
 