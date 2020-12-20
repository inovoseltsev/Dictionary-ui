import React, {useContext} from "react";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {setStudyMode} from "../../actions/term";
import {useHistory} from "react-router";
import {DEFAULT, IMAGES, KEYWORDS} from "../../helpers/studyMode";

import "./index.css"
import {LanguageMessageContext} from "../../context";
import {FormattedMessage} from "react-intl";

export default function StudyMethodsMenu() {

  const dispatch = useDispatch();
  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const history = useHistory();
  const getLangMessage = useContext(LanguageMessageContext);

  const onMethodChoose = (mode) => {
    dispatch(setStudyMode(mode));
    history.push(`/term-groups/studying/${groupId}`);
  }

  const methods = [
    {id: 0, name: getLangMessage("default-study-method"), onChoose: () => onMethodChoose(DEFAULT)},
    {id: 1, name: getLangMessage("keywords-study-method"), onChoose: () => onMethodChoose(KEYWORDS)},
    {id: 2, name: getLangMessage("images-study-method"), onChoose: () => onMethodChoose(IMAGES)},
    {id: 3, name: getLangMessage("chunks-study-method"), onChoose: () => {}}
  ];

  return (
    <div className="methods-menu">
      <h2><FormattedMessage id="study-methods-title"/></h2>
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
