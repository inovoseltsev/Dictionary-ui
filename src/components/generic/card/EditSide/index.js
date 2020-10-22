import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import "./index.css"
import IconButton from "../../button/IconButton";
import {ClearRounded, DoneAllRounded} from "@material-ui/icons";
import {useForm} from "react-hook-form";
import FormGroup from "../../../form/FormGroup";

export default function EditSide({name, description, onApply, onCancel, cardId, setEditable}) {

  const {handleSubmit, register} = useForm();

  const onEditApply = (data) => {
    setEditable(false);
    onApply({cardId, ...data});
  }

  return (
    <form onSubmit={handleSubmit(onEditApply)}>
      <CardContent className="edit-fields">
        <FormGroup inputName="name" register={register} value={name}/>
        <FormGroup inputName="content" register={register} value={description}/>
      </CardContent>
      <CardActions>
        <IconButton icon={<DoneAllRounded/>} type="submit"/>
        <IconButton icon={<ClearRounded/>} onClick={onCancel}/>
      </CardActions>
    </form>
  );
}
