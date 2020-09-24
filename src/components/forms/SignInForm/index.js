import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {Link, Redirect} from "react-router-dom";
import FormGroup from "../FormGroup";
import {loginUser} from "../../../actions/auth";
import {FAILED, LOADING} from "../../../helpers/requestStatus";
import "./index.css"
import Spinner from "../../Spinner";

export default function SignInForm() {

  const dispatch = useDispatch();

  const {isAuth, status} = useSelector(state => state.authReducer);

  const {handleSubmit, register} = useForm();

  const [login, setLogin] = useState("");

  const [formIsSubmitted, setFormSubmitted] = useState(false);

  function onSubmit(data) {
    dispatch(loginUser(data));
    const {login} = data;
    setLogin(login);
    setFormSubmitted(true);
  }

  const onPasswordClick = () => {
    if (formIsSubmitted) {
      document.getElementById("password").value = "";
      setFormSubmitted(false);
    }
  }

  return (
    isAuth ? <Redirect to={"/home"}/> :
      <>
        {
          status !== LOADING ?
            <>
              <h1 className={'home-link'}>
                <Link to={'/'}>Dicter</Link>
              </h1>

              <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                <p>Sign in</p>
                <div className="small text-danger text-center">
                  {status === FAILED ? "Login or password is incorrect" : ""}
                </div>
                <FormGroup
                  labelName={"Login"} inputName={"login"} inputType={"text"}
                  register={register} data={login} isRequired
                />
                <FormGroup
                  labelName={"Password"} inputName={"password"}
                  inputType={"password"} onClick={onPasswordClick}
                  register={register} isRequired
                />

                <div className="sign-in-button-wrapper">
                  <button
                    type="submit"
                    className='btn btn-primary btn-raised'>
                    Sign in
                  </button>
                </div>

                <div className="sign-up-message-wrapper">
                  <p>Don't have an account? <Link to={"/sign-up"}>Sign up</Link>
                  </p>
                </div>
              </form>
            </> : <Spinner/>
        }
      </>
  )
}
