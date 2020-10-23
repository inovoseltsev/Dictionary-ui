import React, {useState} from "react";
import CardForm from "../CardForm";
import ContentSide from "../CardContent";
import Card from "@material-ui/core/Card";

import "./index.css"
import PopUp from "../../PopUp";
import {DialogContentText} from "@material-ui/core";

export default function AppCard({cardName, content, onDelete, onEditApply, register, about}) {

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);

  const onEditPress = () => {
    setEditable(true);
    setPopUpOpen(true);
  }

  return (
    <>
      <Card className="app-card">
        <ContentSide
          cardName={cardName}
          content={content}
          onEdit={onEditPress}
          onDelete={() => setPopUpOpen(true)}
          dialogAbout={about}
        />

        <PopUp
          open={isPopUpOpen}
          title={isEditable ? `Edit ${about}` : `Delete ${about}`}
          onClose={() => setPopUpOpen(false)}
          onAccept={isEditable ? "" : onDelete}
        >
          {isEditable ?
            <CardForm
              nameValue={cardName}
              contentValue={content}
              onSubmit={onEditApply}
              register={register}
            />
            :
            <DialogContentText>
              You will not have opportunity to restore it
            </DialogContentText>
          }
        </PopUp>
      </Card>
    </>
  )
}
