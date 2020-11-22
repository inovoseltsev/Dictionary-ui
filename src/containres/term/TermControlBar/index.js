import React, {useState} from "react";
import ContentControlBar from "../../../components/shared/ContentControlBar";
import {Button} from "@material-ui/core";
import {CreateOutlined, LibraryBooksRounded} from "@material-ui/icons";
import PopUp from "../../../components/shared/PopUp";
import TermForm from "../TermForm";

export default function TermControlBar() {

  const [isPopUpOpen, setPopUpOpen] = useState(false);

  return (
    <>
      <ContentControlBar>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setPopUpOpen(true)}
          startIcon={<CreateOutlined fontSize="small"/>}
        >
          Create term
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
          }}
          startIcon={<LibraryBooksRounded fontSize="small"/>}
        >
          Study group
        </Button>
      </ContentControlBar>

      <PopUp
        open={isPopUpOpen}
        onClose={() => setPopUpOpen(false)}
      >
        <TermForm title="Create term" closePopUp={() => setPopUpOpen(false)}/>
      </PopUp>
    </>
  );
}