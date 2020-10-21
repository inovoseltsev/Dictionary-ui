import React, {useEffect} from "react";
import CardsRow from "../../components/CardsRow";
import AppCard from "../../components/generic/card/AppCard";
import {useDispatch, useSelector} from "react-redux";
import {
  deleteTermGroup,
  getUserTermGroups,
  updateTermGroup
} from "../../actions/termGroup";
import createCardRows from "../../helpers/createCardRows";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../../components/Spinner";

export default function TermGroupsContainer() {

  const {termGroups, status} = useSelector(state => state.termGroupReducer);
  const rows = createCardRows(termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserTermGroups(userId));
  }, [dispatch, userId])

  const onChangesApply = (data) => {
    dispatch(updateTermGroup(data, termGroups));
  }

  const onGroupDelete = (groupId) => {
    dispatch(deleteTermGroup(groupId, termGroups));
  }

  return (
    status === LOADING ? <Spinner/> :
    <div>
      {rows.map(row =>
        <CardsRow key={row.id} cards={row.data.map(el =>
          <AppCard key={el.id} id={el.id}
                   head={el.name}
                   content={el.description}
                   onChangesApply={onChangesApply}
                   onDelete={onGroupDelete}
                   about="group"
          />)}
        />)}
    </div>
  );
}
