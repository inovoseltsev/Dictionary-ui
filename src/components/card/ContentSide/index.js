import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import "./index.css"
import IconButton from "../../generic/IconButton";
import {Delete, Edit} from "@material-ui/icons";

export default function ContentSide({name, description, onEdit, onDelete}) {

  return (
    <>
      <CardContent className="default-card-content">
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" icon={<Edit fontSize="small"/>} onClick={onEdit}/>
        <IconButton size="small" icon={<Delete fontSize="small"/>} onClick={onDelete}/>
      </CardActions>
    </>
  );
}
