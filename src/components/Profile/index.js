import React, {useContext, useState} from "react";
import ContentCover from "../shared/ContentCover";
import {useDispatch, useSelector} from "react-redux";
import Form from "../shared/Form";
import Input from "../shared/Input";
import {useForm} from "react-hook-form";
import {NAME_PATTERN} from "../../utils/constants/validation/regexp";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {setLocale, updateUser} from "../../actions/user";
import {EN, UA} from "../../helpers/languageChooser";

import "./index.css"
import {LanguageMessageContext} from "../../context";
import {FormattedMessage} from "react-intl";

export default function Profile() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const {handleSubmit, register, errors} = useForm();
  const {firstName, lastName} = errors;
  const [menuElement, setMenuElement] = useState(null);
  const getLangMessage = useContext(LanguageMessageContext);

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
      <h2 className="profile-title"><FormattedMessage id="user-profile-title"/></h2>
      <Form className="profile-form user-info"
            title={getLangMessage("profile-form-title")}
            onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="firstName"
          name="firstName"
          label={getLangMessage("sign-up-form-first-name")}
          value={user.firstName}
          register={register}
          error={firstName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={getLangMessage("first-name-validation-message")}
          required
        />
        <Input
          id="lastName"
          name="lastName"
          label={getLangMessage("sign-up-form-last-name")}
          value={user.lastName}
          register={register}
          error={lastName}
          inputPattern={NAME_PATTERN}
          invalidDataMessage={getLangMessage("last-name-validation-message")}
          required
        />
        <Button type="submit" color="primary" variant="contained">
          <FormattedMessage id="user-profile-save-changes-name"/>
        </Button>
      </Form>

      <Form className="profile-form language" title={getLangMessage("choose-language-title")}>
        <p className="form-description">
          <FormattedMessage id="language-change-explanation"/>
        </p>
        <Button
          variant="contained"
          color="secondary"
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={onLanguageMenuClick}>

          <FormattedMessage id="language-change-button-name"/>
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
