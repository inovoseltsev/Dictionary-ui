import React, {useState} from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";

import "./index.css"
import {Delete, Edit} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

export default function TermCard() {

  const [isEditable, setEditable] = useState(false);

  return (
    <Card className="term-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          Name
        </Typography>
        <Typography variant={"body2"} component="p" color={"textSecondary"}>
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete" size={"small"}>
          <Edit fontSize="small"/>
        </IconButton>
        <IconButton aria-label="delete" size={"small"}>
          <Delete fontSize="small"/>
        </IconButton>
      </CardActions>
    </Card>
  )
}
