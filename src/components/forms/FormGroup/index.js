import React from "react";

export default function FormGroup(props) {

  const {
    inputType, inputName, isRequired,
    inputPattern, invalidDataMessage,
    labelName, register, error, onClick
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={inputName}
             className="bmd-label-floating">{labelName}</label>
      <input name={inputName} type={inputType} id={inputName}
             className="form-control" onClick={onClick}
             ref={register({
               required: {
                 value: isRequired,
                 message: "Field is required"
               },
               pattern: {
                 value: inputPattern,
                 message: invalidDataMessage
               }
             })}
      />
      <div className="small text-danger">
        {error && error.message}
      </div>
    </div>
  );
}

