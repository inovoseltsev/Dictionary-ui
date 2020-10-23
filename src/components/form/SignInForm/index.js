import React from "react";
import {Link, Redirect} from "react-router-dom";
import Input from "../../shared/Input";
import {FAILED} from "../../../helpers/requestStatus";
import {LOGIN_ERROR} from "../../../utils/constants/messages/error-messages";
import AppHeader from "../../shared/AppHeader";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {loginUser} from "../../../actions/auth";

export default function SignInForm() {

  const dispatch = useDispatch();

  const {isAuth, status} = useSelector(state => state.authReducer);

  const {handleSubmit, register} = useForm();

  function onSubmit(data) {
    dispatch(loginUser(data));
  }

  return (
    isAuth ? <Redirect to="/home"/> :
      <>
        <form className="form sign-in-form" onSubmit={handleSubmit(onSubmit)}>
          <AppHeader linkTo="/"/>
          <p className="form-title">Sign in</p>

          <div className="small text-danger text-center">
            {status === FAILED ? LOGIN_ERROR : ""}
          </div>

          <Input
            labelName="Login"
            name="login"
            type="text"
            register={register}
            isRequired
          />

          <Input
            labelName="Password"
            name="password"
            type="password"
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
