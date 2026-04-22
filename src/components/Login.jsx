import React from "react";
import "./Login.css";

const Login = () => {
  const submitLogin = () => {};

  return (
    <div className="login_form">
      <h2>Login or Sign Up</h2>
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect with Facebook</button>
        <button className="google-login">Connect with Google</button>
        <div className="login_or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="email"
          className="browser-default"
          placeholder="Email address"
        />
        <input
          type="password"
          className="browser-default"
          placeholder="Password"
        />
        <button className="sign_up_button">Login</button>
        <div className="divder"></div>
        <div>Don't have an account? Sign up</div>
      </form>
    </div>
  );
};

export default Login;
