import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "../../button/IconButton";
import {Delete, Edit} from "@material-ui/icons";
import "./index.css"

export default function ContentSide({cardName, content, onEdit, onDelete}) {

  return (
    <>
      <CardContent className="default-card-content">
        <Typography variant="h5" component="h2">
          {cardName}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton icon={<Edit fontSize="small"/>} onClick={onEdit}/>
        <IconButton icon={<Delete fontSize="small"/>} onClick={onDelete}/>
      </CardActions>
    </>
  );
}
