import React from "react";
import {Link} from "react-router-dom";
import FormGroup from "../FormGroup";
import {FAILED} from "../../../helpers/requestStatus";
import "./index.css"
import {LOGIN_ERROR} from "../../../utils/constants/messages/error-messages";
import AppHeader from "../../generic/AppHeader";

export default function SignInForm({status, handleSubmit, register, onPasswordClick}) {

  return (
    <>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <AppHeader linkTo="/"/>
        <p>Sign in</p>
        <div className="small text-danger text-center">
          {status === FAILED ? LOGIN_ERROR : ""}
        </div>
        <FormGroup
          labelName="Login"
          inputName="login"
          inputType="text"
          register={register}
          isRequired
        />
        <FormGroup
          labelName="Password"
          inputName="password"
          inputType="password"
          onClick={onPasswordClick}
          register={register}
          isRequired
        />

        <div className="sign-in-button-wrapper">
          <button
            type="submit"
            className="btn btn-primary btn-raised">
            Sign in
          </button>
        </div>

        <div className="sign-up-message-wrapper">
          <p>Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </form>
    </>
  )
}
