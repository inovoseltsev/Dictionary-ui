import React from "react";
import {Link} from "react-router-dom";
import FormGroup from "../FormGroup";
import {
  EMAIL_PATTERN,
  LOGIN_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN
} from "../../../utils/constants/validation/regexp";
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_FIRST_NAME_MESSAGE,
  INVALID_LAST_NAME_MESSAGE,
  INVALID_LOGIN_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  INVALID_REPEATED_PASSWORD_MESSAGE
} from "../../../utils/constants/validation/validation-messages";

import "./index.css"

export default function SignUpForm({handleSubmit, register, errors, passwordsMatch}) {

  const {firstName, lastName, login, email, password} = errors;

  return (
    <>
      <h1 className={'home-link'}>
        <Link to={'/'}>Dicter</Link>
      </h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <p>Sign up</p>

        <FormGroup
          labelName={"First name"}
          inputName={"firstName"}
          inputType={"text"}
          register={register}
          error={firstName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_FIRST_NAME_MESSAGE}
          isRequired
        />
        <FormGroup
          labelName={"Last name"}
          inputName={"lastName"}
          inputType={"text"}
          register={register}
          error={lastName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_LAST_NAME_MESSAGE}
          isRequired
        />
        <FormGroup
          labelName={"Login"}
          inputName={"login"}
          inputType={"text"}
          register={register}
          error={login}
          inputPattern={LOGIN_PATTERN}
          invalidDataMessage={INVALID_LOGIN_MESSAGE}
          isRequired
        />
        <FormGroup
          labelName={"Email"}
          inputName={"email"}
          inputType={"email"}
          register={register}
          error={email}
          inputPattern={EMAIL_PATTERN}
          invalidDataMessage={INVALID_EMAIL_MESSAGE}
          isRequired={false}
        />
        <FormGroup
          labelName={"Password"}
          inputName={"password"}
          inputType={"password"}
          register={register}
          error={password}
          inputPattern={PASSWORD_PATTERN}
          invalidDataMessage={INVALID_PASSWORD_MESSAGE}
          isRequired
        />
        <FormGroup
          labelName={"Repeat password"}
          inputName={"repeatedPassword"}
          inputType={"password"}
          register={register}
          isRequired
        />
        <div className="small text-danger">
          {passwordsMatch ? "" : INVALID_REPEATED_PASSWORD_MESSAGE}
        </div>

        <div className="sign-up-button-wrapper">
          <button type="submit" className='btn btn-primary btn-raised'>
            Sign up
          </button>
        </div>

        <div className="sign-in-message-wrapper">
          <p>Have an account? <Link to={"/sign-in"}>Sign in</Link></p>
        </div>
      </form>
    </>
  )
}
