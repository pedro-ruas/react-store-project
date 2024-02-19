import { Form } from "../form/form.component";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import { useState } from "react";
import "./sign-in-form.styles.scss";
import { Button } from "../button/button.component";

const SIGN_IN_FORM = {
  fields: {
    email: { label: "E-mail", type: "email", required: true, value: "" },
    password: {
      label: "Password",
      type: "password",
      required: true,
      value: "",
    },
  },
  headerText: "Log In with e-mail",
  submitButtonText: "Login",
};

async function validateAndLogin(signInData) {
  const {
    email: { value: email },
    password: { value: password },
  } = signInData;

  return await signInUserWithEmailAndPassword({ email, password });
}

export function SignInForm(props) {
  const [signInFields, setSignInFields] = useState(SIGN_IN_FORM.fields);

  const onSubmit = async (event) => {
    event.preventDefault();
    validateAndLogin(signInFields);
  };

  return (
    <div className="SignInForm-Container">
      <Form
        {...SIGN_IN_FORM}
        onChange={setSignInFields}
        onSubmit={onSubmit}
        extraButton={
          <Button
            onClick={signInWithGooglePopup}
            className="Button-GoogleSign"
            text="Google Sign In"
          />
        }
      />
    </div>
  );
}

export default SignInForm;
