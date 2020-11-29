import React, {useEffect} from "react";
import TermControlBar from "../../containres/term/TermControlBar";
import {useDispatch, useSelector} from "react-redux";
import {getTerms} from "../../actions/term";
import AppCard from "../shared/card/AppCard";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../Spinner";

import "./index.css"

export default function Terms() {

  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const {terms, status} = useSelector(state => state.termReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTerms(groupId));
  }, [dispatch, groupId])


  return (status === LOADING ? <Spinner/> :
      <>
        <TermControlBar/>
        <div className="content-wrapper">
          {terms.map(term =>
            <AppCard
              key={term.id}
              id={term.id}
              className="term-card"
              cardName={term.name}
              content={term.definition}
              about="term"
              onDelete={() => {}}
              isTerm
              isOpenIconHidden={!term.keyword && !term.image}
              text={term.keyword}
              image={term.image}
            />)}
        </div>
      </>
  );
}
