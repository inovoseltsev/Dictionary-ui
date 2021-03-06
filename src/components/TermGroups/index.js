import React, {useContext, useEffect} from "react";
import CardsRow from "../CardsRow";
import AppCard from "../shared/card/AppCard";
import {useDispatch, useSelector} from "react-redux";
import {deleteTermGroup, getTermGroup, getUserTermGroups} from "../../actions/termGroup";
import createRows from "../../helpers/createRows";
import TermGroupsControlBar from "../../containres/term-group/TermGroupsControlBar";
import TermGroupForm from "../../containres/term-group/TermGroupForm";
import {useHistory} from "react-router";
import ContentCover from "../shared/ContentCover";
import {LanguageMessageContext} from "../../context";

export default function TermGroups() {

  const {termGroups, status} = useSelector(state => state.termGroupReducer);
  const rows = createRows(termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const getLangMessage = useContext(LanguageMessageContext);

  useEffect(() => {
    dispatch(getUserTermGroups(userId));
  }, [dispatch, userId]);

  const onGroupDelete = (groupId) => {
    dispatch(deleteTermGroup(groupId, termGroups));
  }

  const onCardOpen = (groupId) => {
    dispatch(getTermGroup(groupId));
    history.push(`/term-groups/${groupId}`);
  }

  return (
    <>
      <TermGroupsControlBar/>
      <ContentCover status={status}>
        {rows.map(row =>
          <CardsRow key={row.id} cards={row.data.map(el =>
            <AppCard
              key={el.id}
              cardName={el.name}
              content={el.description}
              about={getLangMessage("term-group-name")}
              onDelete={() => onGroupDelete(el.id)}
              form={TermGroupForm}
              groupName={el.name}
              groupDescription={el.description}
              groupId={el.id}
              onCardOpen={() => onCardOpen(el.id)}
            />)}
          />)}
      </ContentCover>
    </>
  );
}
