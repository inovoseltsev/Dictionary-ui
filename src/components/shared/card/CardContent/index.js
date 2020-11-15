import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {ArrowForwardIosRounded, Delete, Edit} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

import "./index.css"

export default function ContentSide({cardName, content, onEdit, onDelete, onOpenCard}) {

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
      <CardActions className="card-actions">
        <IconButton onClick={onOpenCard}>
          <ArrowForwardIosRounded fontSize="small"/>
        </IconButton>
        <IconButton onClick={onEdit}>
          <Edit fontSize="small"/>
        </IconButton>
        <IconButton onClick={onDelete}>
          <Delete fontSize="small"/>
        </IconButton>
      </CardActions>
    </>
  );
}
