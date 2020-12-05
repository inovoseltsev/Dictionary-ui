import React, {useState} from "react";
import CardContent from "../CardContent";
import Card from "@material-ui/core/Card";

import "./index.css"
import PopUp from "../../PopUp";
import {DialogContentText} from "@material-ui/core";

export default function AppCard(props) {

  const {
    cardName, content, onDelete, about,
    form: Form, onCardOpen, className, isTerm
  } = props;

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [isHiddenVisible, setHiddenVisible] = useState(false);
  const cardHeightStyle = {height: isHiddenVisible ? "210px" : "100px"}

  const onEditPress = () => {
    setEditable(true);
    setPopUpOpen(true);
  }
  const onDeletePress = () => {
    setEditable(false);
    setPopUpOpen(true);
  }

  const onHiddenContentShow = () => {
    setHiddenVisible(prevState => !prevState)
  }

  return (
    <>
      <Card className={`app-card ${className}`}
            style={isHiddenVisible ? cardHeightStyle : {}}>
        <CardContent
          cardName={cardName}
          content={content}
          onEdit={onEditPress}
          onDelete={onDeletePress}
          dialogAbout={about}
          onCardOpen={!isTerm ? onCardOpen : onHiddenContentShow}
          isHiddenVisible={isHiddenVisible}
          isTerm={isTerm}
          {...props}
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
              closePopUp={() => setPopUpOpen(false)}
              isEdit
              {...props}
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
