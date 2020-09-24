import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
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
import {useDispatch} from "react-redux";
import {createUser} from "../../../actions/user";

export default function SignUpForm() {

  const {handleSubmit, register, errors} = useForm();

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const dispatch = useDispatch();


  const onSubmit = (data) => {
    const {password, repeatedPassword} = data;
    if (password === repeatedPassword) {
      dispatch(createUser(data));
    } else {
      setPasswordsMatch(false)
    }
  }

  return (
    <>
      <h1 className={'home-link'}>
        <Link to={'/'}>Dicter</Link>
      </h1>
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <p>Sign up</p>

        <FormGroup
          labelName={"First name"} inputName={"firstName"}
          inputType={"text"}
          register={register} error={errors.firstName} isRequired
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_FIRST_NAME_MESSAGE}
        />
        <FormGroup
          labelName={"Last name"} inputName={"lastName"} inputType={"text"}
          register={register} error={errors.lastName} isRequired
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_LAST_NAME_MESSAGE}
        />
        <FormGroup
          labelName={"Login"} inputName={"login"} inputType={"text"}
          register={register} error={errors.login} isRequired
          inputPattern={LOGIN_PATTERN}
          invalidDataMessage={INVALID_LOGIN_MESSAGE}
        />
        <FormGroup
          labelName={"Email"} inputName={"email"} inputType={"email"}
          register={register} error={errors.email} isRequired={false}
          inputPattern={EMAIL_PATTERN}
          invalidDataMessage={INVALID_EMAIL_MESSAGE}
        />
        <FormGroup
          labelName={"Password"} inputName={"password"}
          inputType={"password"}
          register={register} error={errors.password}
          isRequired inputPattern={PASSWORD_PATTERN}
          invalidDataMessage={INVALID_PASSWORD_MESSAGE}
        />
        <FormGroup
          labelName={"Repeat password"} inputName={"repeatedPassword"}
          inputType={"password"} isRequired register={register}
        />
        <div className="small text-danger">
          {passwordsMatch ? "" : INVALID_REPEATED_PASSWORD_MESSAGE}
        </div>

        <div className="sign-up-button-wrapper">
          <button
            type="submit"
            className='btn btn-primary btn-raised'>
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