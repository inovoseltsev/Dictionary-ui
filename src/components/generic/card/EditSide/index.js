import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "../../TextField";

import "./index.css"
import IconButton from "../../IconButton";
import {ClearRounded, DoneAllRounded} from "@material-ui/icons";
import {useForm} from "react-hook-form";

export default function EditSide({name, description, onApply, onCancel}) {

  const {handleSubmit, register} = useForm();

  return (
    <form onSubmit={handleSubmit(onApply)}>
      <CardContent className="edit-fields">
        <TextField name="name" inputRef={register} type="text" variant="filled"
                   value={name}/>
        <TextField name="content" inputRef={register} type="text" variant="filled"
                   value={description}/>
      </CardContent>
      <CardActions>
        <IconButton icon={<DoneAllRounded/>} type="submit"/>
        <IconButton icon={<ClearRounded/>} onClick={onCancel}/>
      </CardActions>
    </form>
  );
}
