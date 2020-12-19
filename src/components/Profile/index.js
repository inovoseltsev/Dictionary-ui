import React, {useState} from "react";
import ContentCover from "../shared/ContentCover";
import {useDispatch, useSelector} from "react-redux";
import Form from "../shared/Form";
import Input from "../shared/Input";
import {useForm} from "react-hook-form";
import {NAME_PATTERN} from "../../utils/constants/validation/regexp";
import {
  INVALID_FIRST_NAME_MESSAGE,
  INVALID_LAST_NAME_MESSAGE
} from "../../utils/constants/validation/validation-messages";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {setLocale, updateUser} from "../../actions/user";
import {EN, UA} from "../../helpers/languageChooser";

import "./index.css"

export default function Profile() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const {handleSubmit, register, errors} = useForm();
  const {firstName, lastName} = errors;
  const [menuElement, setMenuElement] = useState(null);

  const onSubmit = (data) => {
    const updatedUser = {id: user.id, ...data};
    dispatch(updateUser(updatedUser));
  }

  const onLanguageMenuClick = (event) => {
    setMenuElement(event.currentTarget);
  }

  const onLanguageChoose = (locale) => {
    dispatch(setLocale(locale));
    setMenuElement(null);
  }

  return (
    <ContentCover status={user.status}>
      <h2 className="profile-title">User profile</h2>
      <Form className="profile-form user-info"
            title="Change user info"
            onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="firstName"
          name="firstName"
          label="First name"
          value={user.firstName}
          register={register}
          error={firstName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_FIRST_NAME_MESSAGE}
          required
        />
        <Input
          id="lastName"
          name="lastName"
          label="Last name"
          value={user.lastName}
          register={register}
          error={lastName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={INVALID_LAST_NAME_MESSAGE}
          required
        />
        <Button type="submit" color="primary" variant="contained">Save changes</Button>
      </Form>

      <Form className="profile-form language" title="Choose language">
        <p className="form-description">
          Set language for menu dialogs and other instructions
        </p>
        <Button
          variant="contained"
          color="secondary"
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={onLanguageMenuClick}
        >
          Change language
        </Button>
        <Menu
          id="language-menu"
          anchorEl={menuElement}
          keepMounted
          open={Boolean(menuElement)}
          onClose={() => setMenuElement(null)}
        >
          <MenuItem onClick={() => onLanguageChoose(EN)}>English</MenuItem>
          <MenuItem onClick={() => onLanguageChoose(UA)}>Українська</MenuItem>
        </Menu>
      </Form>

    </ContentCover>
  );
}
