import React, {useState} from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "../../button/IconButton";
import {Delete, Edit} from "@material-ui/icons";
import DeleteDialog from "../../Dialog";
import "./index.css"

export default function ContentSide({name, content, onEdit, onDelete, dialogAbout}) {

  const [isDialogOpen, setDialogOpen] = useState(false);

  const onAcceptDialog = () => {
    onDelete();
    setDialogOpen(false);
  }

  return (
    <>
      <CardContent className="default-card-content">
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton icon={<Edit fontSize="small"/>} onClick={onEdit}/>
        <IconButton icon={<Delete fontSize="small"/>}
                    onClick={() => setDialogOpen(true)}/>
      </CardActions>

      <DeleteDialog isOpened={isDialogOpen}
                    title={`Delete ${dialogAbout}?`}
                    onClose={() => setDialogOpen(false)}
                    onAccept={onAcceptDialog}>
        <p>You will not have opportunity to restore it</p>
      </DeleteDialog>
    </>
  );
}
