import React from "react";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setStudyMode} from "../../actions/term";
import {useHistory} from "react-router";
import {DEFAULT, IMAGES, KEYWORDS} from "../../helpers/studyMode";

import "./index.css"

export default function StudyMethodsMenu() {

  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const dispatch = useDispatch();
  const history = useHistory();

  const onMethodChoose = (mode) => {
    dispatch(setStudyMode(mode));
    history.push(`/term-groups/studying/${groupId}`);
  }

  const methods = [
    {id: 0, name: "Usual terms", onChoose: () => onMethodChoose(DEFAULT)},
    {id: 1, name: "Keywords", onChoose: () => onMethodChoose(KEYWORDS)},
    {id: 2, name: "Images", onChoose: () => onMethodChoose(IMAGES)},
    {
      id: 3, name: "Chunks", onChoose: () => {
      }
    }
  ];

  return (
    <div className="methods-menu">
      <h2>Choose Method</h2>
      <div className="methods-wrapper">
        {
          methods.map(el =>
            <Button
              className="method-btn"
              variant="outlined"
              color="primary"
              onClick={() => el.onChoose()}
              key={el.id}
            >
              {el.name}
            </Button>
          )
        }
      </div>
    </div>
  );
}
