import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { errorSelector } from "../../../redux/auth/authSelectors";
import { AuthFormContainer } from "./AuthFormStyled";
import sprite from "../../../icons/sprite.svg";

const AuthForm = ({ signUp, signIn, resetError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const error = useSelector(errorSelector);
  const location = useLocation();

  const onHandleChange = (e) => {
    error && resetError();
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "displayName" && setDisplayName(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/signup"
      ? signUp({ email, password, displayName })
      : signIn({ email, password });
  };

  return (
    <AuthFormContainer>
      {error && <p>{error}</p>}
      <form onSubmit={onHandleSubmit} className='authForm'>
        {location.pathname === "/signup" && (
          <label className='authFormLabel'>
            Name
            <input
              type='text'
              value={displayName}
              onChange={onHandleChange}
              name='displayName'
              className='authFormInput'
              placeholder='Alex Ivanov'
            />
            <div className='authFormInputIconContainer'>
              <svg className='authFormInputIcon'>
                <use href={sprite + "#icon-user-tie"} />
              </svg>
            </div>
          </label>
        )}
        <label className='authFormLabel'>
          Email
          <input
            type='text'
            value={email}
            onChange={onHandleChange}
            name='email'
            className='authFormInput'
            placeholder='alexIvanov@mail.com'
          />
          <div className='authFormInputIconContainer'>
            <svg className='authFormInputIcon'>
              <use href={sprite + "#icon-drawer"} />
            </svg>
          </div>
        </label>
        <label className='authFormLabel'>
          Password
          <input
            type='text'
            value={password}
            onChange={onHandleChange}
            name='password'
            className='authFormInput'
            placeholder='Qwerty123'
          />
          <div className='authFormInputIconContainer'>
            <svg className='authFormInputIcon'>
              <use href={sprite + "#icon-key2"} />
            </svg>
          </div>
        </label>
        <button type='submit' className='authFormSubmitButton'>
          {location.pathname === "/signup" ? "Sign up" : "Sign in"}
        </button>
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;
