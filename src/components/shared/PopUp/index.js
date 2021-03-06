import React from "react";
import MuiDialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {FormattedMessage} from "react-intl";

import "./index.css"

export default function PopUp({title, open, onClose, children, onAccept}) {

  return (
    <MuiDialog open={open} onClose={onClose} className="pop-up">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          <FormattedMessage id="close-pop-up-name"/>
        </Button>
        {onAccept ?
          <Button onClick={onAccept} color="primary">
            <FormattedMessage id="accept-pop-up-name"/>
          </Button> : ""}
      </DialogActions>
    </MuiDialog>
  );
}
