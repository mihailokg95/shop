/* eslint-disable no-unused-vars */
import "./sign-in.styles.scss";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (evt) => {
    const { value, name } = evt.target;
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your E-mail and password</span>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={email} required />
        <label>Email</label>
        <input name="password" type="password" value={password} required />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
