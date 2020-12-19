import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudySet, getTermAnswers, updateAwareStatus} from "../../actions/term";
import {BAD, GOOD, PERFECT} from "../../helpers/termAwareStatus";
import createRows from "../../helpers/createRows";
import StudyControlBar from "../../containres/StudyControlBar";
import StudyElementAnswers from "../StudyElementAnswers";
import ContentCover from "../shared/ContentCover";
import StudyElement from "../StudyElement";

import "./index.css"

export default function StudyView() {

  const dispatch = useDispatch();
  const groupId = useSelector(state => state.termGroupReducer.termGroup.id)
  const {studySet, status, studyMode} = useSelector(state => state.termReducer);
  const {answers} = useSelector(state => state.termReducer.term);
  const answerRows = createRows(answers);
  const [studyElement, setStudyElement] = useState(studySet[0]);
  const [isStudSetKnown, setStudSetKnown] = useState(true);
  const [isSetStarted, setStarted] = useState(false);

  useEffect(() => {
    if (!isSetStarted) {
      dispatch(getStudySet(groupId, studyMode));
      setStarted(true);
    }
    const currentStudyElement = studySet[0];
    setStudyElement(studySet[0]);
    setStudSetKnown(studySet.length === 0)
    if (currentStudyElement != null) {
      dispatch(getTermAnswers(currentStudyElement.id));
    }
  }, [studySet, isSetStarted])

  const onSelectAnswer = (answer) => {
    let awareStatus = BAD;
    if (answer.isCorrect) {
      awareStatus = studyElement.awareStatus === BAD ? GOOD : PERFECT;
    }
    dispatch(updateAwareStatus(studyElement.id, awareStatus, studySet));
    if (studySet[1] == null) {
      setStarted(false);
    }
  }

  return (
    <>
      <StudyControlBar/>
      <ContentCover status={status}>
        {isStudSetKnown
          ? <div>You already know this set. Dou want to reset?</div>
          : <>
            <StudyElement
              studyElement={studyElement}
              studyMode={studyMode}
            />
            <StudyElementAnswers
              answerRows={answerRows}
              onSelectAnswer={onSelectAnswer}
            />
          </>
        }
      </ContentCover>
    </>
  );
}
