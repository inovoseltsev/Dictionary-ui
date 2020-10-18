import React, {useState} from "react";
import MaterialTextField from "@material-ui/core/TextField"

export default function TextField(props) {

  const {
    name, id, type, label, onClick, InputProps,
    inputRef, variant, value = "", style
  } = props;

  const [inputData, setData] = useState(value);

  const handleChange = (event) => {
    setData(event.target.value);
  }

  return (
    <MaterialTextField
      name={name}
      type={type}
      id={id}
      label={label}
      onClick={onClick}
      InputProps={InputProps}
      inputRef={inputRef}
      variant={variant}
      onChange={e => handleChange(e)}
      value={inputData}
      style={style}
    />
  );
}
