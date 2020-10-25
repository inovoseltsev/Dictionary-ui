import React, {useState} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

import "./index.css"

export default function Input(props) {

  const {
    type = "text", name, required,
    inputPattern, invalidDataMessage, label,
    register, error, onClick, variant = "filled", value = ""
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [isPassword] = useState(type === "password");
  const [inputData, setData] = useState(value);

  const handleChange = (event) => {
    setData(event.target.value);
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const inputRef = register({
    required: {
      value: required,
      message: "Field is required"
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
    <div className="form-input">
      <TextField
        name={name}
        id={name}
        type={showPassword ? "text" : type}
        label={error ? `${label} *` : label}
        onClick={onClick}
        InputProps={passwordFieldProps}
        inputRef={inputRef}
        variant={variant}
        value={inputData}
        onChange={handleChange}
        error={!!error}
        helperText={error && error.message}
      />
    </div>
  );
}

