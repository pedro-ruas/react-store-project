import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./auth.styles.scss";

export function AuthPage() {
  return (
    <div className="AuthPage-Container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
