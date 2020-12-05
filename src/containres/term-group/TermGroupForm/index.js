import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createUserTermGroup, updateTermGroup} from "../../../actions/termGroup";
import Form from "../../../components/shared/Form";
import Input from "../../../components/shared/Input";
import {Button} from "@material-ui/core";

export default function TermGroupForm(props) {

  const {
    title, isEdit, groupName,
    groupDescription, groupId, closePopUp
  } = props

  const allTermGroups = useSelector(state => state.termGroupReducer.termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const {handleSubmit, register} = useForm();
  const dispatch = useDispatch();

  const onEditGroup = (formData) => {
    const termGroup = {id: groupId, ...formData};
    dispatch(updateTermGroup(termGroup, allTermGroups));
  }

  const onCreateGroup = (formData) => {
    const termGroup = {...formData, userId};
    dispatch(createUserTermGroup(termGroup, allTermGroups));
  }

  const onSubmit = (data) => {
    if (closePopUp) {
      closePopUp();
    }
    isEdit ? onEditGroup(data) : onCreateGroup(data);
  }

  return (
    <Form title={title} onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        label="Group name"
        value={isEdit ? groupName : ""}
        register={register}
        required
      />
      <Input
        name="description"
        label="Group description"
        value={isEdit ? groupDescription : ""}
        register={register}
      />
      <Button
        className="primary-button"
        type="submit"
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
    </Form>
  );
}
