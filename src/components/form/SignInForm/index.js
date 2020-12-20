import React, {useContext} from "react";
import {Link, Redirect} from "react-router-dom";
import Input from "../../shared/Input";
import {FAILED} from "../../../helpers/requestStatus";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {loginUser} from "../../../actions/auth";
import Form from "../../shared/Form";
import {FormattedMessage} from "react-intl";
import {LanguageMessageContext} from "../../../context";

import "./index.css"

export default function SignInForm() {

  const dispatch = useDispatch();
  const {isAuth, status} = useSelector(state => state.authReducer);
  const {handleSubmit, register} = useForm();
  const getLangMessage = useContext(LanguageMessageContext);

  function onSubmit(data) {
    dispatch(loginUser(data));
  }

  return (
    isAuth ? <Redirect to="/home"/> :
      <Form
        className="sign-in-form"
        title={getLangMessage("sign-in-title")}
        onSubmit={handleSubmit(onSubmit)}>

        <div className="small text-danger text-center">
          {status === FAILED ? getLangMessage("login-error-message") : ""}
        </div>

        <Input
          label={getLangMessage("sign-in-form-login")}
          name="login"
          type="text"
          register={register}
          required
        />

        <Input
          label={getLangMessage("sign-in-form-password")}
          name="password"
          type="password"
          register={register}
          required
        />

        <div className="sign-in-button-wrapper">
          <button type="submit" className="btn btn-primary btn-raised">
            <FormattedMessage id="sign-in-title"/>
          </button>
        </div>

        <div className="sign-up-message-wrapper">
          <p><FormattedMessage id="sign-in-form-question"/>
            <Link to="/sign-up">
              <FormattedMessage id="sign-up-title"/>
            </Link>
          </p>
        </div>
      </Form>
  )
}
