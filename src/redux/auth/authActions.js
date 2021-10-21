import { createAction } from "@reduxjs/toolkit";
import { SETERROR, SETLOADER, SIGNIN, SIGNOUT, SIGNUP } from "./authTypes";

// const SIGNUPREQUEST = "auth/signUpRequest";
// const SIGNUPSUCCESS = "auth/signUpSuccess";
// const SIGNUPERROR = "auth/signUpError";
const SIGNINREQUEST = "auth/signInRequest";
const SIGNINSUCCESS = "auth/signInSuccess";
const SIGNINERROR = "auth/signInError";
const SIGNOUTREQUEST = "auth/signOutRequest";
const SIGNOUTSUCCESS = "auth/signOutSuccess";
const SIGNOUTERROR = "auth/signOutError";

export const signUpRequest = createAction("auth/signUpRequest");
export const signUpSuccess = createAction("auth/signUpSuccess");
export const signUpError = createAction("auth/signUpError");

export const signInRequest = createAction("auth/signInRequest");
export const signInSuccess = createAction("auth/signInSuccess");
export const signInError = createAction("auth/signInError");

export const signOutRequest = createAction(SIGNOUTREQUEST);
export const signOutSuccess = createAction(SIGNOUTSUCCESS);
export const signOutError = createAction(SIGNOUTERROR);

// export {
//   SIGNUPREQUEST,
//   SIGNUPSUCCESS,
//   SIGNUPERROR,
//   SIGNINREQUEST,
//   SIGNINSUCCESS,
//   SIGNINERROR,
//   SIGNOUTREQUEST,
//   SIGNOUTSUCCESS,
//   SIGNOUTERROR,
// };

// const signUp = createAction(SIGNUP);
// const signIn = createAction(SIGNIN);
// const signOut = createAction(SIGNOUT);
// const setLoader = createAction(SETLOADER);
// const setError = createAction(SETERROR);

// export { signUp, signIn, signOut, setLoader, setError };
