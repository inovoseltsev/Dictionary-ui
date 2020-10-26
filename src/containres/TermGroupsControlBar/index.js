import React, {useState} from "react";
import ContentControlBar from "../../components/shared/ContentControlBar";
import PopUp from "../../components/shared/PopUp";
import {Button} from "@material-ui/core";
import {CreateOutlined} from "@material-ui/icons";
import TermGroupForm from "../TermGroupForm";

export default function TermGroupsControlBar() {

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
          Create group
        </Button>
      </ContentControlBar>

      <PopUp
        title="Create group"
        open={isPopUpOpen}
        onClose={() => setPopUpOpen(false)}
      >
        <TermGroupForm closePopUp={() => setPopUpOpen(false)}/>
      </PopUp>
    </>
  );
}
