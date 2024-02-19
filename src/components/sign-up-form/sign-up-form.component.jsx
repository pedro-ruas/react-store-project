import { Form } from "../form/form.component";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { useState } from "react";
import "./sign-up-form.styles.scss";

const SIGN_UP_FORM = {
  fields: {
    firstName: { label: "First Name", type: "text", required: true, value: "" },
    lastName: { label: "Last Name", type: "text", required: false, value: "" },
    email: { label: "E-mail", type: "email", required: true, value: "" },
    password: {
      label: "Password",
      type: "password",
      required: true,
      value: "",
    },
    confirmPassword: {
      label: "Confirm Password",
      type: "password",
      required: true,
      value: "",
    },
  },
  headerText: "Sign up with e-mail",
  submitButtonText: "Sign Up",
};

async function validateAndCreateUser(signUpData) {
  const {
    firstName: { value: firstName },
    lastName: { value: lastName },
    email: { value: email },
    password: { value: password },
    confirmPassword: { value: confirmPassword },
  } = signUpData;

  if (
    ![email, password, firstName].includes("") &&
    password === confirmPassword
  ) {
    return await createAuthUserWithEmailAndPassword({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });
  }
}

export function SignUpForm(props) {
  const [signUpFields, setSignUpFields] = useState(SIGN_UP_FORM.fields);

  const onSubmit = async (event) => {
    event.preventDefault();
    validateAndCreateUser(signUpFields);
  };

  return (
    <div className="SignUpForm-Container">
      <h2 className="SignUpForm-Header"> Don't have an account?</h2>
      <Form {...SIGN_UP_FORM} onChange={setSignUpFields} onSubmit={onSubmit} />
    </div>
  );
}

export default SignUpForm;
