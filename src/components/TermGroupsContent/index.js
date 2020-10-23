import React, {useEffect, useState} from "react";
import CardsRow from "../CardsRow";
import AppCard from "../shared/card/AppCard";
import {useDispatch, useSelector} from "react-redux";
import {deleteTermGroup, getUserTermGroups} from "../../actions/termGroup";
import createCardRows from "../../helpers/createCardRows";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../Spinner";
import Fab from "../shared/button/Fab";
import {Add} from "@material-ui/icons";
import PopUp from "../shared/PopUp"
import {useForm} from "react-hook-form";
import CardForm from "../shared/card/CardForm";

export default function TermGroupsContent() {

  const {termGroups, status} = useSelector(state => state.termGroupReducer);
  const rows = createCardRows(termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const dispatch = useDispatch();
  const {handleSubmit, register} = useForm();
  const [isDialogOpen, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserTermGroups(userId));
  }, [dispatch, userId]);

  const onEditApply = (cardId, data) => {
    // dispatch(updateTermGroup(termGroup, termGroups));
  }

  const onGroupDelete = (groupId) => {
    dispatch(deleteTermGroup(groupId, termGroups));
  }

  const onAddGroup = (data) => {
    setOpen(false);
    const termGroup = {userId, ...data};
    // dispatch(createUserTermGroup(termGroup, termGroups));
  }

  return (
    status === LOADING ? <Spinner/> :
      <>
        <div className="content-wrapper">
          {rows.map(row =>
            <CardsRow key={row.id} cards={row.data.map(el =>
              <AppCard
                key={el.id}
                cardName={el.name}
                content={el.description}
                onEditApply={handleSubmit(onEditApply)}
                onDelete={() => onGroupDelete(el.id)}
                about="group"
                register={register}
              />)}
            />)}
        </div>
        <div className="controls">
          <Fab color="primary" icon={<Add/>} onClick={() => setOpen(true)}/>
          <PopUp title="Create group" open={isDialogOpen} onClose={() => setOpen(false)}>
            <CardForm onSubmit={handleSubmit(onAddGroup)} register={register}/>
          </PopUp>
        </div>
      </>
  );
}
