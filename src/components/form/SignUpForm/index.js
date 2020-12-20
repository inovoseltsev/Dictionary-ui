import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Input from "../../shared/Input";
import {
  LOGIN_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN
} from "../../../utils/constants/validation/regexp";

import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {createUser} from "../../../actions/user";
import {LOADING} from "../../../helpers/requestStatus";
import Spinner from "../../Spinner";
import Form from "../../shared/Form";
import {LanguageMessageContext} from "../../../context";
import {FormattedMessage} from "react-intl";

export default function SignUpForm() {

  const dispatch = useDispatch();
  const {status} = useSelector(state => state.userReducer);
  const {handleSubmit, register, errors} = useForm();
  const {firstName, lastName, login, password} = errors;
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const getLangMessage = useContext(LanguageMessageContext);

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
      <Form
        className="sign-up-form"
        title={getLangMessage("sign-up-title")}
        onSubmit={handleSubmit(onSubmit)}>

        <Input
          label={getLangMessage("sign-up-form-first-name")}
          name="firstName"
          type="text"
          register={register}
          error={firstName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={getLangMessage("first-name-validation-message")}
          required
        />
        <Input
          label={getLangMessage("sign-up-form-last-name")}
          name="lastName"
          type="text"
          register={register}
          error={lastName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={getLangMessage("last-name-validation-message")}
          required
        />
        <Input
          label={getLangMessage("sign-up-form-login")}
          name="login"
          type="text"
          register={register}
          error={login}
          inputPattern={LOGIN_PATTERN}
          invalidDataMessage={getLangMessage("login-validation-message")}
          required
        />
        <Input
          label={getLangMessage("sign-up-form-password")}
          name="password"
          type="password"
          register={register}
          error={password}
          inputPattern={PASSWORD_PATTERN}
          invalidDataMessage={getLangMessage("password-validation-message")}
          required
        />
        <Input
          label={getLangMessage("sign-up-form-repeat-password")}
          name="repeatedPassword"
          type="password"
          register={register}
          required
        />
        <div className="small text-danger">
          {passwordsMatch ? "" : getLangMessage("repeat-password-validation-message")}
        </div>

        <div className="sign-up-button-wrapper">
          <button type="submit" className="btn btn-primary btn-raised">
            <FormattedMessage id="sign-up-title"/>
          </button>
        </div>

        <div className="sign-in-message-wrapper">
          <p><FormattedMessage id="sign-up-form-question"/>
            <Link to="/sign-in"><FormattedMessage id="sign-in-title"/></Link>
          </p>
        </div>
      </Form>
  )
}
