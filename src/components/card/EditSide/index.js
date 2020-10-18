import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "../../generic/TextField";

import "./index.css"
import IconButton from "../../generic/IconButton";
import {ClearRounded, DoneAllRounded} from "@material-ui/icons";

export default function EditSide({name, description, onApply, onCancel}) {

  return (
    <>
      <CardContent className="edit-fields">
        <TextField type="text" variant="filled" value={name}/>
        <TextField type="text" variant="filled" value={description}/>
      </CardContent>
      <CardActions>
        <IconButton icon={<DoneAllRounded/>} onClick={onApply}/>
        <IconButton icon={<ClearRounded/>} onClick={onCancel}/>
      </CardActions>
    </>
  );
}
