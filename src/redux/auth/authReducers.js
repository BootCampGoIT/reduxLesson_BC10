import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  signInError,
  signInRequest,
  signInSuccess,
  signOutError,
  signOutRequest,
  signOutSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

const authUserReducer = createReducer(null, {
  // [signUp]: (_, action) => action.payload,
  // [signIn]: (_, action) => action.payload,
  [signUpSuccess]: (_, action) => action.payload,
  [signInSuccess]: (_, action) => action.payload,
  [signOutSuccess]: () => null,
  // [signOut]: () => null,
});

const authLoaderReducer = createReducer(false, {
  // [setLoader]: (state) => !state,
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
  [signOutRequest]: () => true,
  [signOutSuccess]: () => false,
  [signOutError]: () => false,
});

const authErrorReducer = createReducer("", {
  // [setError]: (_, action) => action.payload,
  [signUpError]: (_, action) => action.payload,
  [signInError]: (_, action) => action.payload,
  [signOutError]: (_, action) => action.payload,
});

export const authReducer = combineReducers({
  user: authUserReducer,
  isLoading: authLoaderReducer,
  error: authErrorReducer,
});
