import React, {useState} from "react";
import ContentSide from "../CardContent";
import Card from "@material-ui/core/Card";

import "./index.css"
import PopUp from "../../PopUp";
import {DialogContentText} from "@material-ui/core";

export default function AppCard(props) {

  const {cardName, content, onDelete, about, form: Form, onClick} = props;

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);

  const onEditPress = () => {
    setEditable(true);
    setPopUpOpen(true);
  }
  const onDeletePress = () => {
    setEditable(false);
    setPopUpOpen(true);
  }

  return (
    <>
      <Card className="app-card">
        <ContentSide
          cardName={cardName}
          content={content}
          onEdit={onEditPress}
          onDelete={onDeletePress}
          dialogAbout={about}
          onOpenCard={onClick}
        />

        <PopUp
          open={isPopUpOpen}
          title={isEditable ? "" : `Delete ${about}`}
          onClose={() => setPopUpOpen(false)}
          onAccept={isEditable ? "" : onDelete}
        >
          {isEditable ?
            <Form
              title={`Edit ${about}`}
              {...props}
              isEdit
              closePopUp={() => setPopUpOpen(false)}
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
