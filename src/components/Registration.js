import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  onRegNameChange,
  onRegMailChange,
  onRegPasswordChange
} from "../actions/actions";

import Input from "./Input";
import { namesvg, emailsvg, passwordsvg, sinupsvg } from "./allsvg";
import Button from "./Button";
import Wrapper from "./Wrapper";

const Registration = ({
  register,
  onRegNameChange,
  onRegMailChange,
  onRegPasswordChange
}) => {
  const [{ name, email, password }] = register;

  const handelChange = e => {
    e.target.name === "name"
      ? onRegNameChange(e.target.value)
      : e.target.name === "email"
      ? onRegMailChange(e.target.value)
      : onRegPasswordChange(e.target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <Wrapper svg={sinupsvg}>
          <span className="mt-6 mb-4 text-center">
            <span className="text-2xl text-green-900">
              Join WebSpider Family
            </span>
          </span>
          <Input
            name="name"
            svg={namesvg}
            placeholder="Name"
            label="Full Name"
            type="text"
            onChange={handelChange}
            value={name}
          />
          <Input
            name="email"
            svg={emailsvg}
            placeholder="Email"
            label="Username"
            type="email"
            onChange={handelChange}
            value={email}
          />
          <Input
            name="password"
            svg={passwordsvg}
            placeholder="Password"
            label="Password"
            type="password"
            onChange={handelChange}
            value={password}
          />
          <Button type="submit" name="Sign Up" />
          <span className="font-medium tracking-wide text-sm mt-1 text-center">
            Already a Member?{" "}
            <Link to="/Login">
              <span className="text-blue-600 cursor-pointer">Sign In Here</span>
              .
            </Link>
          </span>
        </Wrapper>
      </form>
    </>
  );
};
export default connect(
  s => s,
  { onRegNameChange, onRegMailChange, onRegPasswordChange }
)(Registration);
