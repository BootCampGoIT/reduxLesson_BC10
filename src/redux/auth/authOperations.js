import axios from "axios";
import {
  setError,
  setLoader,
  signUp,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

const signUpOperation = (user) => async (dispatch) => {
  // dispatch(setLoader());
  dispatch(signUpRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, user);
    // dispatch(signUp(response.data));
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    // dispatch(setError(error.response.data.error.message));
    dispatch(signUpError(error.response.data.error.message));
  }
  //  finally {
  //   dispatch(setLoader());
  // }
};

export { signUpOperation };
