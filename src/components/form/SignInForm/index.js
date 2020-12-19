import React from "react";
import {Link, Redirect} from "react-router-dom";
import Input from "../../shared/Input";
import {FAILED} from "../../../helpers/requestStatus";
import {LOGIN_ERROR} from "../../../utils/constants/messages/error-messages";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {loginUser} from "../../../actions/auth";
import Form from "../../shared/Form";

import "./index.css"
import {useIntl} from "react-intl";

export default function SignInForm() {

  const dispatch = useDispatch();
  const {isAuth, status} = useSelector(state => state.authReducer);
  const {handleSubmit, register} = useForm();
  const lang = useIntl();

  function onSubmit(data) {
    dispatch(loginUser(data));
  }

  return (
    isAuth ? <Redirect to="/home"/> :
      <Form className="sign-in-form" title="Sign in" onSubmit={handleSubmit(onSubmit)}>

        <div className="small text-danger text-center">
          {status === FAILED ? LOGIN_ERROR : ""}
        </div>

        <Input
          label={lang.formatMessage({id: "start-menu-header"})}
          name="login"
          type="text"
          register={register}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          required
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
      </Form>
  )
}
