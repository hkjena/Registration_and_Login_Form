import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onLoginNameChange, onLoginPasswordChange } from "../actions/actions";

import Input from "./Input";
import { emailsvg, passwordsvg, loginsvg } from "./allsvg";
import Button from "./Button";
import Wrapper from "./Wrapper";

const Login = ({ onLoginNameChange, onLoginPasswordChange }) => {
  const [{ username, password }] = login;
  const handelChange = e => {
    e.target.name === "username"
      ? onLoginNameChange(e.target.value)
      : onLoginPasswordChange(e.target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <Wrapper svg={loginsvg}>
          <span className="mt-8 mb-4 text-center">
            <span className="text-2xl text-green-900">
              Sign in to WebSpider
            </span>
          </span>
          <Input
            name="username"
            svg={emailsvg}
            placeholder="Email"
            label="Username"
            type="email"
            value={username}
            onChange={handelChange}
            // error="Enter valid username"
          />
          <Input
            name="password"
            svg={passwordsvg}
            placeholder="Password"
            label="Password"
            type="password"
            value={password}
            onChange={handelChange}
            // error="Enter valid Password"
          />
          <Button type="submit" name="Sign In" />
          <span className="font-medium tracking-wide text-sm mt-1 text-center">
            New to Spider?{" "}
            <Link to="/Registration">
              <span className="text-blue-600 cursor-pointer">
                Create an account
              </span>
              .
            </Link>
          </span>
        </Wrapper>
      </form>
    </>
  );
};
export default connect(null,
  { onLoginNameChange, onLoginPasswordChange }
)(Login);
