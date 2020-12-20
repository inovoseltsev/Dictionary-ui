import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createUserTermGroup, updateTermGroup} from "../../../actions/termGroup";
import Form from "../../../components/shared/Form";
import Input from "../../../components/shared/Input";
import {Button} from "@material-ui/core";
import {LanguageMessageContext} from "../../../context";
import {FormattedMessage} from "react-intl";

export default function TermGroupForm(props) {

  const {
    title, isEdit, groupName,
    groupDescription, groupId, closePopUp
  } = props

  const dispatch = useDispatch();
  const allTermGroups = useSelector(state => state.termGroupReducer.termGroups);
  const userId = useSelector(state => state.userReducer.id);
  const {handleSubmit, register} = useForm();
  const getLangMessage = useContext(LanguageMessageContext);

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
        label={getLangMessage("term-group-form-name")}
        value={isEdit ? groupName : ""}
        register={register}
        required
      />
      <Input
        name="description"
        label={getLangMessage("term-group-form-description")}
        value={isEdit ? groupDescription : ""}
        register={register}
      />
      <Button
        className="primary-button"
        type="submit"
        color="primary"
        variant="contained"
      >
        <FormattedMessage id="submit-name"/>
      </Button>
    </Form>
  );
}
