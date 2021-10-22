import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpError } from "../../redux/auth/authActions";
import {
  signInOperation,
  signUpOperation,
} from "../../redux/auth/authOperations";
import { errorSelector, loaderSelector } from "../../redux/auth/authSelectors";
import AuthForm from "./authForm/AuthForm";
import { AuthContainer } from "./AuthStyled";

const Auth = () => {
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const loader = useSelector(loaderSelector);
  const resetError = () => error && dispatch(signUpError(""));
  const signUp = (user) => dispatch(signUpOperation(user));
  const signIn = (user) => dispatch(signInOperation(user));
  return (
    <AuthContainer>
      <AuthForm signUp={signUp} signIn={signIn} resetError={resetError} />
      {/* {error && <h2>{error}</h2>}
      {loader && <h2>...loading</h2>} */}
    </AuthContainer>
  );
};

export default Auth;
