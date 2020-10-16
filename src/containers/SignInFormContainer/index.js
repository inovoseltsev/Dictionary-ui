import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {loginUser} from "../../actions/auth";
import {Redirect} from "react-router-dom";
import SignInForm from "../../components/form/SignInForm";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../../components/Spinner";

export default function SignInFormContainer() {

  const dispatch = useDispatch();

  const {isAuth, status} = useSelector(state => state.authReducer);

  const {handleSubmit, register} = useForm();

  const [formIsSubmitted, setFormSubmitted] = useState(false);

  function onSubmit(data) {
    dispatch(loginUser(data));
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
          status === LOADING ? <Spinner/> :
            <SignInForm
              status={status}
              handleSubmit={handleSubmit(onSubmit)}
              register={register}
              onPasswordClick={onPasswordClick}
            />
        }
      </>
  )
}
