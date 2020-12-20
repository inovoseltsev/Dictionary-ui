import React, {useContext, useEffect} from "react";
import TermControlBar from "../../containres/term/TermControlBar";
import {useDispatch, useSelector} from "react-redux";
import {deleteTerm, getTerms} from "../../actions/term";
import AppCard from "../shared/card/AppCard";
import TermForm from "../../containres/term/TermForm";
import ContentCover from "../shared/ContentCover";
import {LanguageMessageContext} from "../../context";

import "./index.css"

export default function Terms() {

  const dispatch = useDispatch();
  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const {terms, status} = useSelector(state => state.termReducer);
  const getLangMessage = useContext(LanguageMessageContext);

  useEffect(() => {
    dispatch(getTerms(groupId));
  }, [dispatch, groupId])

  const onTermDelete = (termId) => {
    dispatch(deleteTerm(termId, terms));
  }

  return (
    <>
      <TermControlBar/>
      <ContentCover status={status}>
        {terms.map(el =>
          <AppCard
            key={el.id}
            className="term-card"
            cardName={el.name}
            content={el.definition}
            about={getLangMessage("term-name")}
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
      </ContentCover>
    </>
  );
}
