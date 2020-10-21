import React, {useState} from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "../../IconButton";
import {Delete, Edit} from "@material-ui/icons";
import DeleteDialog from "../../Dialog";
import "./index.css"

export default function ContentSide({name, content, onEdit, onDelete, dialogAbout}) {

  const [isDialogOpen, setOpen] = useState(false);

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
        <IconButton
          size="small"
          icon={<Edit fontSize="small"/>}
          onClick={onEdit}
        />
        <IconButton
          size="small"
          icon={<Delete fontSize="small"/>}
          onClick={() => setOpen(true)}
        />
      </CardActions>
      <DeleteDialog isOpened={isDialogOpen}
                    title={`Delete ${dialogAbout}?`}
                    content="You wil not have opportunity to restore it"
                    onClose={() => setOpen(false)}
                    onAccept={onDelete}
      />
    </>
  );
}
