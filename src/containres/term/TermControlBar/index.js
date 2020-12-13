import React, {useState} from "react";
import ContentControlBar from "../../../components/shared/ContentControlBar";
import {Button} from "@material-ui/core";
import {CreateOutlined, LibraryBooksRounded} from "@material-ui/icons";
import PopUp from "../../../components/shared/PopUp";
import TermForm from "../TermForm";
import StudyMethodsMenu from "../../../components/StudyMethodsMenu";

export default function TermControlBar() {

  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const [popUpContentName, setPopUpContentName] = useState("form");

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
          Create term
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => openPopUp("study")}
          startIcon={<LibraryBooksRounded fontSize="small"/>}
        >
          Study group
        </Button>
      </ContentControlBar>

      <PopUp
        open={isPopUpOpen}
        onClose={() => setPopUpOpen(false)}
      >
        {
          popUpContentName === "form"
            ? <TermForm title="Create term" closePopUp={() => setPopUpOpen(false)}/>
            : <StudyMethodsMenu/>
        }
      </PopUp>
    </>
  );
}
