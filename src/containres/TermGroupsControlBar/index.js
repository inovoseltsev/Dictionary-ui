import React, {useState} from "react";
import ContentControlBar from "../../components/shared/ContentControlBar";
import PopUp from "../../components/shared/PopUp";
import {Button} from "@material-ui/core";
import {CreateOutlined} from "@material-ui/icons";
import TermGroupForm from "../TermGroupForm";

export default function TermGroupsControlBar() {

  const [isDialogOpen, setOpen] = useState(false);

  return (
    <>
      <ContentControlBar>
        <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
          <CreateOutlined fontSize="small"/>
        </Button>
      </ContentControlBar>

      <PopUp title="Create group" open={isDialogOpen} onClose={() => setOpen(false)}>
        <TermGroupForm closePopUp={() => setOpen(false)}/>
      </PopUp>
    </>
  );
}
