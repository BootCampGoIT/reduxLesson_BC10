import React, { useState } from "react";

const AuthForm = ({ resetError, signUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleChange = (e) => {
    resetError();
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Email
        <input
          type='text'
          value={email}
          onChange={onHandleChange}
          name='email'
        />
      </label>
      <label>
        Password
        <input
          type='text'
          value={password}
          onChange={onHandleChange}
          name='password'
        />
      </label>
      <button type='submit'>Sign up</button>
    </form>
  );
};

export default AuthForm;
