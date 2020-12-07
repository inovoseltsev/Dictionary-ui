import React, {useEffect} from "react";
import TermControlBar from "../../containres/term/TermControlBar";
import {useDispatch, useSelector} from "react-redux";
import {deleteTerm, getTerms} from "../../actions/term";
import AppCard from "../shared/card/AppCard";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../Spinner";
import TermForm from "../../containres/term/TermForm";

import "./index.css"

export default function Terms() {

  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const {terms, status} = useSelector(state => state.termReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTerms(groupId));
  }, [dispatch, groupId])

  const onTermDelete = (termId) => {
    dispatch(deleteTerm(termId, terms));
  }

  return (status === LOADING ? <Spinner/> :
      <>
        <TermControlBar/>
        <div className="content-wrapper">
          {terms.map(el =>
            <AppCard
              key={el.id}
              className="term-card"
              cardName={el.name}
              content={el.definition}
              about="term"
              onDelete={() => onTermDelete(el.id)}
              isTerm
              isOpenIconHidden={!el.keyword && !el.image}
              text={el.keyword}
              image={el.imageFile}
              form={TermForm}
              termId={el.id}
              termName={el.name}
              termDefinition={el.definition}
              termKeyword={el.keyword}
            />)}
        </div>
      </>
  );
}
