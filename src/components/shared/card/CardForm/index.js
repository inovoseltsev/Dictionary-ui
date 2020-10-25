import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Input from "../../Input";
import CardActions from "@material-ui/core/CardActions";
import "./index.css"
import DoneAllRounded from "@material-ui/icons/DoneAllRounded";
import {IconButton} from "@material-ui/core";

export default function CardForm({firstInputProps, secondInputProps, onSubmit}) {

  return (
    <form onSubmit={onSubmit} className="card-form">
      <CardContent className="edit-fields">
        <Input {...firstInputProps}/>
        <Input {...secondInputProps}/>
      </CardContent>
      <CardActions>
        <IconButton type="submit">
          <DoneAllRounded/>
        </IconButton>
      </CardActions>
    </form>
  );
}
