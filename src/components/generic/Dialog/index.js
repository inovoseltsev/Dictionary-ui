import React from "react";
import MuiDialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function Dialog(props) {
  const {
    title, text, content, isOpened,
    onClose, onAccept, isForm
  } = props;

  return (
    <MuiDialog open={isOpened} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={onAccept}
                color="primary"
                type={isForm ? "submit" : "button"}>Ok</Button>
      </DialogActions>
    </MuiDialog>
  );
}
