import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudySet, getTermAnswers, updateAwareStatus} from "../../actions/term";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../Spinner";
import {BAD, GOOD, PERFECT} from "../../helpers/termAwareStatus";

import "./index.css"
import createRows from "../../helpers/createRows";
import StudyControlBar from "../../containres/StudyControlBar";

export default function StudyView() {

  const dispatch = useDispatch();
  const groupId = useSelector(state => state.termGroupReducer.termGroup.id)
  const {studySet, status, studyMode} = useSelector(state => state.termReducer);
  const {answers} = useSelector(state => state.termReducer.term);
  const [studyElement, setStudyElement] = useState(null);
  const [isStudSetKnown, setStudSetKnown] = useState(false);
  const answerRows = createRows(answers);

  useEffect(() => {
    setStudyElement(studyElement == null ? studySet[0] : studyElement);
    setStudSetKnown(studySet.length === 0)
    if (studyElement != null) {
      dispatch(getTermAnswers(studyElement.id));
    }
  }, [dispatch, studyElement, studySet])

  const onChooseVariant = (answer) => {
    let awareStatus = BAD;
    if (answer.isCorrect) {
      awareStatus = studyElement.awareSatus === BAD ? GOOD : PERFECT;
    }
    dispatch(updateAwareStatus(studyElement.id, awareStatus));
    setNextElement();
  }

  const setNextElement = () => {
    const studyElementIndex = studySet.findIndex((el) => el === studyElement);
    const nextStudyElement = studySet[studyElementIndex + 1]
    nextStudyElement == null
      ? dispatch(getStudySet(groupId, studyMode))
      : setStudyElement(nextStudyElement);
  }

  return (
    status === LOADING ? <Spinner/> :
      <>
        <StudyControlBar/>
        <div className="content-wrapper">
          {isStudSetKnown || studyElement == null ? <div>You already know this set. Dou want to reset?</div> :
            <>
              <div className="study-content">
                {Array.isArray(studyElement)
                  ? studyElement.map(el => <div
                    className="multiply-variant">{el.name}</div>)
                  : <div className="single-variant">{studyElement.name}</div>
                }
              </div>
              <div className="answer-variants">
                {answerRows.map(row =>
                  <div className="answer-row" key={row.id}>
                    {row.data.map(el =>
                      <div
                        className={Array.isArray(studyElement) ? "chunk-answer" : "term-answer"}
                        onClick={() => onChooseVariant(el)}
                        key={el.id}>
                        <div className="answer-content">
                          {el.definition}
                        </div>
                      </div>)}
                  </div>)
                }
              </div>
            </>
          }
        </div>
      </>
  );
}
