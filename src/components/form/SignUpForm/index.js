import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../../shared/Input";
import {
  LOGIN_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN
} from "../../../utils/constants/validation/regexp";
import {
  INVALID_FIRST_NAME_MESSAGE,
  INVALID_LAST_NAME_MESSAGE,
  INVALID_LOGIN_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  INVALID_REPEATED_PASSWORD_MESSAGE
} from "../../../utils/constants/validation/validation-messages";

import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createUser} from "../../../actions/user";
import {LOADING} from "../../../helpers/requestStatus";
import Spinner from "../../Spinner";
import Form from "../../shared/Form";

export default function SignUpForm() {

  const dispatch = useDispatch();
  const {status} = useSelector(state => state.userReducer);
  const {handleSubmit, register, errors} = useForm();
  const {firstName, lastName, login, password} = errors;
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const onSubmit = (data) => {
    const {password, repeatedPassword} = data;
    if (password === repeatedPassword) {
      const user = {...data, role: "USER"};
      dispatch(createUser(user));
    } else {
      setPasswordsMatch(false)
    }
  }

  return (
    status === LOADING ? <Spinner/> :
      <Form className="sign-up-form" title="Sign up" onSubmit={handleSubmit(onSubmit)}>

        <Input
          label="First name"
          name="firstName"
          type="text"
          register={register}
          error={firstName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_FIRST_NAME_MESSAGE}
          required
        />
        <Input
          label="Last name"
          name="lastName"
          type="text"
          register={register}
          error={lastName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_LAST_NAME_MESSAGE}
          required
        />
        <Input
          label="Login"
          name="login"
          type="text"
          register={register}
          error={login}
          inputPattern={LOGIN_PATTERN}
          invalidDataMessage={INVALID_LOGIN_MESSAGE}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          error={password}
          inputPattern={PASSWORD_PATTERN}
          invalidDataMessage={INVALID_PASSWORD_MESSAGE}
          required
        />
        <Input
          label="Repeat password"
          name="repeatedPassword"
          type="password"
          register={register}
          required
        />
        <div className="small text-danger">
          {passwordsMatch ? "" : INVALID_REPEATED_PASSWORD_MESSAGE}
        </div>

        <div className="sign-up-button-wrapper">
          <button type="submit" className="btn btn-primary btn-raised">
            Sign up
          </button>
        </div>

        <div className="sign-in-message-wrapper">
          <p>Have an account? <Link to="/sign-in">Sign in</Link></p>
        </div>
      </Form>
  )
}
