import { Form } from "../form/form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/utils.firebase";
import { useState, useContext } from "react";
import "./sign-in-form.styles.scss";
import { Button } from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

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

  const { setCurrentUser } = useContext(UserContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    validateAndLogin(signInFields).then((user) => {
      setCurrentUser(user);
    });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    return await createUserDocumentFromAuth(user).then((r) => {
      setCurrentUser(user);
    });
  };

  return (
    <div className="SignInForm-Container">
      <Form
        {...SIGN_IN_FORM}
        onChange={setSignInFields}
        onSubmit={onSubmit}
        extraButton={
          <Button
            onClick={logGoogleUser}
            className="Button-GoogleSign"
            text="Google Sign In"
          />
        }
      />
    </div>
  );
}

export default SignInForm;
