import React from "react";

import "./index.css"

export default function StudyElementAnswers({onSelectAnswer, answerRows}) {

  // const dispatch = useDispatch();
  // const {answers} = useSelector(state => state.termReducer.term);
  // const answerRows = createRows(answers);

  // useEffect(() => {
  //   dispatch(getTermAnswers(termId));
  // }, [answers])

  return (
    <div className="answer-variants">
      {answerRows.map(row =>
        <div className="answer-row" key={row.id}>
          {row.data.map(answer =>
            <div
              className="term-answer"
              onClick={() => onSelectAnswer(answer)}
              key={answer.id}
            >
              <div className="answer-content">{answer.definition}</div>
            </div>
          )}
        </div>)
      }
    </div>
  );
}
