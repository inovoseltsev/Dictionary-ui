import React from "react";
import MaterialDialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function Dialog({title, content, isOpened, onClose, onAccept}) {

  const confirmDialog = () => {
    onClose();
    onAccept();
  }

  return (
    <MaterialDialog open={isOpened} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={confirmDialog} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </MaterialDialog>
  );
}
