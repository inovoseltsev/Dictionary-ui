import React from "react";
import MuiCardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {
  ArrowForwardIosRounded,
  Delete,
  Edit,
  ExpandLessRounded,
  ExpandMoreRounded
} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

import "./index.css"
import HiddenCardContent from "../HiddenCardContent";

export default function CardContent(props) {

  const {
    cardName, content, onEdit, onDelete, onCardOpen,
    isOpenIconHidden, isTerm, isHiddenVisible
  } = props;

  return (
    <>
      <MuiCardContent className="default-card-content">
        <div>
          <Typography variant="h5" component="h2">
            {cardName}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" component="p" color="textSecondary">
            {content}
          </Typography>
        </div>
      </MuiCardContent>
      {isHiddenVisible ? <HiddenCardContent {...props}/> : ""}
      <CardActions className="card-actions">
        {isOpenIconHidden ? "" :
          <IconButton onClick={onCardOpen}>
            {isTerm
              ? <>{isHiddenVisible ? <ExpandLessRounded/> : <ExpandMoreRounded/>}</>
              : <ArrowForwardIosRounded fontSize="small"/>}
          </IconButton>
        }
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
