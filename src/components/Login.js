import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Login.module.css";
import Card from "./UI/Card";

const Login = (props) => {
  let history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      name: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.onLogin(userDetails);
    history.push("/dashboard");
  };

  return (
    <Card>
      <form onSubmit={loginHandler}>
        <div className={classes["email-login"]}>
          <label htmlFor="name">
            <b>Email</b>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Email"
            ref={emailRef}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            ref={passwordRef}
          />
        </div>

        <button className={classes["cta-btn"]}>Log In</button>
        {/* <Link className={classes["forget-pass"]} href="#">
          Forgot password?
        </Link> */}
      </form>
    </Card>
  );
};

export default Login;
