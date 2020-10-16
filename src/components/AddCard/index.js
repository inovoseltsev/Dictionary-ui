import React from "react";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {Add} from "@material-ui/icons";

import "./index.css"
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

export default function AddCard() {

  return (
    <Card className="term-card add">
      <CardContent>
        <Typography variant={"h6"} component="p" color={"textSecondary"}>
          Create card
        </Typography>
        <CardActions>
          <Fab color="primary" aria-label="edit" >
            <Add fontSize={"small"}/>
          </Fab>
        </CardActions>
      </CardContent>
    </Card>
  )
}
