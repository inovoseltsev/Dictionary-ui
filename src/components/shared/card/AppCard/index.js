import React, {useContext, useState} from "react";
import CardContent from "../CardContent";
import Card from "@material-ui/core/Card";

import "./index.css"
import PopUp from "../../PopUp";
import {DialogContentText} from "@material-ui/core";
import {FormattedMessage} from "react-intl";
import {LanguageMessageContext} from "../../../../context";

export default function AppCard(props) {

  const {
    cardName, content, onDelete, about,
    form: Form, onCardOpen, className, isTerm
  } = props;

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [isHiddenVisible, setHiddenVisible] = useState(false);
  const cardHeightStyle = {height: isHiddenVisible ? "210px" : "100px"}
  const getLangMessage = useContext(LanguageMessageContext);

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
          onDeletePress={onDeletePress}
          onCardOpen={!isTerm ? onCardOpen : onHiddenContentShow}
          isHiddenVisible={isHiddenVisible}
          isTerm={isTerm}
          {...props}
        />

        <PopUp
          open={isPopUpOpen}
          title={isEditable ? "" : getLangMessage("pop-up-delete", {about})}
          onClose={() => setPopUpOpen(false)}
          onAccept={isEditable ? "" : onDelete}
        >
          {isEditable ?
            <Form
              title={getLangMessage("pop-up-edit", {about})}
              closePopUp={() => setPopUpOpen(false)}
              isEdit
              {...props}
            />
            :
            <DialogContentText>
              <FormattedMessage id="pop-up-prevention"/>
            </DialogContentText>
          }
        </PopUp>
      </Card>
    </>
  )
}
