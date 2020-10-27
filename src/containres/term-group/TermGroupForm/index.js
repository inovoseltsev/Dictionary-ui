import React from "react";
import CardForm from "../../../components/shared/card/CardForm";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createUserTermGroup, updateTermGroup} from "../../../actions/termGroup";

export default function TermGroupForm({isEdit, groupName, groupDescription, groupId, closePopUp}) {

  const allTermGroups = useSelector(state => state.termGroupReducer.termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const {handleSubmit, register} = useForm();
  const dispatch = useDispatch();

  const firstInputProps = {
    name: "name",
    label: "Group name",
    value: isEdit ? groupName : "",
    register: register,
    required: true
  };

  const secondInputProps = {
    name: "description",
    label: "Group description",
    value: isEdit ? groupDescription : "",
    register: register,
    required: false
  };

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
    <CardForm
      onSubmit={handleSubmit(onSubmit)}
      firstInputProps={firstInputProps}
      secondInputProps={secondInputProps}
      closePopUp={closePopUp}
    />
  );
}
