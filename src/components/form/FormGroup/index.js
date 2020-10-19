import React, {useState} from "react";
import TextField from "../../generic/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

import "./index.css"

export default function FormGroup(props) {

  const {
    inputType, inputName, isRequired,
    inputPattern, invalidDataMessage,
    labelName, register, error, onClick
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [isPassword] = useState(inputType === "password");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const inputRef = register({
    required: {
      value: isRequired,
      message: "Field is required *"
    },
    pattern: {
      value: inputPattern,
      message: invalidDataMessage
    }
  });

  const passwordFieldProps = {
    endAdornment: isPassword ? (
      <InputAdornment>
        <IconButton
          aria-label="Toggle password visibility"
          onClick={handleClickShowPassword}
          style={{width: "50px"}}
        >
          {showPassword ? <VisibilityOff/> : <Visibility/>}
        </IconButton>
      </InputAdornment>
    ) : ""
  }

  return (
    <div className="form-group">
      <TextField
        name={inputName}
        id={inputName}
        type={showPassword ? "text" : inputType}
        label={labelName}
        onClick={onClick}
        InputProps={passwordFieldProps}
        inputRef={inputRef}
        variant="filled"
      />
      <div className="small text-danger">
        {error && error.message}
      </div>
    </div>
  );
}

