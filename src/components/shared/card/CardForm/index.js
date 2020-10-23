import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Input from "../../Input";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "../../button/IconButton";
import "./index.css"
import DoneAllRounded from "@material-ui/icons/DoneAllRounded";

export default function CardForm(props) {

  const {nameValue, contentValue, register, onSubmit} = props;

  return (
    <form onSubmit={onSubmit} className="card-form">
      <CardContent className="edit-fields">
        <Input name="name" register={register} value={nameValue}/>
        <Input name="content" register={register} value={contentValue}/>
      </CardContent>
      <CardActions>
        <IconButton icon={<DoneAllRounded/>} type="submit"/>
      </CardActions>
    </form>
  );
}
