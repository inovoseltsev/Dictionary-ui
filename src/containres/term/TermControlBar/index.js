import React, {useContext, useState} from "react";
import ContentControlBar from "../../../components/shared/ContentControlBar";
import {Button} from "@material-ui/core";
import {CreateOutlined, LibraryBooksRounded} from "@material-ui/icons";
import PopUp from "../../../components/shared/PopUp";
import TermForm from "../TermForm";
import StudyMethodsMenu from "../../../components/StudyMethodsMenu";
import {FormattedMessage} from "react-intl";
import {LanguageMessageContext} from "../../../context";

export default function TermControlBar() {

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [popUpContentName, setPopUpContentName] = useState("form");
  const getLangMessage = useContext(LanguageMessageContext);

  const openPopUp = (name) => {
    setPopUpContentName(name);
    setPopUpOpen(true);
  }

  return (
    <>
      <ContentControlBar>
        <Button
          color="primary"
          variant="contained"
          onClick={() => openPopUp("form")}
          startIcon={<CreateOutlined fontSize="small"/>}
        >
          <FormattedMessage id="term-create-title"/>
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => openPopUp("study")}
          startIcon={<LibraryBooksRounded fontSize="small"/>}
        >
          <FormattedMessage id="study-group-name"/>
        </Button>
      </ContentControlBar>

      <PopUp
        open={isPopUpOpen}
        onClose={() => setPopUpOpen(false)}
      >
        {
          popUpContentName === "form"
            ? <TermForm
              title={getLangMessage("term-create-title")}
              closePopUp={() => setPopUpOpen(false)}/>
            : <StudyMethodsMenu/>
        }
      </PopUp>
    </>
  );
}
