import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../actions/user";
import SignUpForm from "../../components/form/SignUpForm";
import Spinner from "../../components/Spinner";
import {LOADING} from "../../helpers/requestStatus";

export default function SignUpFormContainer() {

  const dispatch = useDispatch();

  const {status} = useSelector(state => state.userReducer);

  const {handleSubmit, register, errors} = useForm();

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
    <>
      {
        status === LOADING ? <Spinner/> :
          <SignUpForm
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            passwordsMatch={passwordsMatch}
          />
      }
    </>
  )
}
