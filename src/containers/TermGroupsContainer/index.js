import React, {useEffect, useState} from "react";
import CardsRow from "../../components/CardsRow";
import AppCard from "../../components/generic/card/AppCard";
import {useDispatch, useSelector} from "react-redux";
import {
  createUserTermGroup,
  deleteTermGroup,
  getUserTermGroups,
  updateTermGroup
} from "../../actions/termGroup";
import createCardRows from "../../helpers/createCardRows";
import {LOADING} from "../../helpers/requestStatus";
import Spinner from "../../components/Spinner";
import Fab from "../../components/generic/button/Fab";
import {Add} from "@material-ui/icons";
import AddDialog from "../../components/generic/Dialog"
import FormGroup from "../../components/form/FormGroup";
import {useForm} from "react-hook-form";

export default function TermGroupsContainer() {

  const {termGroups, status} = useSelector(state => state.termGroupReducer);
  const rows = createCardRows(termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const dispatch = useDispatch();
  const {handleSubmit, register} = useForm();
  const [isDialogOpen, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserTermGroups(userId));
  }, [dispatch, userId]);

  const onChangesApply = (data) => {
    dispatch(updateTermGroup(data, termGroups));
  }

  const onGroupDelete = (groupId) => {
    dispatch(deleteTermGroup(groupId, termGroups));
  }

  const onAddClick = (data) => {
    setOpen(false);
    const termGroup = {userId, ...data};
    dispatch(createUserTermGroup(termGroup, termGroups));
  }

  return (
    status === LOADING ? <Spinner/> :
      <>
        <div className="content-wrapper">
          {rows.map(row =>
            <CardsRow key={row.id} cards={row.data.map(el =>
              <AppCard key={el.id} cardId={el.id}
                       head={el.name}
                       content={el.description}
                       onChangesApply={onChangesApply}
                       onDelete={onGroupDelete}
                       about="group"
              />)}
            />)}
        </div>
        <div className="controls">
          <Fab color="primary" icon={<Add/>} onClick={() => setOpen(true)}/>
          <AddDialog title="Create group"
                     isOpened={isDialogOpen}
                     onClose={() => setOpen(false)}
                     onAccept={handleSubmit(onAddClick)}
                     isForm>
            <form>
              <FormGroup inputName="name" labelName="Group name"
                         register={register}
                         isRequired/>
              <FormGroup inputName="description" labelName="Description"
                         register={register}/>
            </form>
          </AddDialog>
        </div>
      </>
  );
}
