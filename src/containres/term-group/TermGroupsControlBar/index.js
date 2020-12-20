import React, {useContext, useState} from "react";
import ContentControlBar from "../../../components/shared/ContentControlBar";
import PopUp from "../../../components/shared/PopUp";
import {Button} from "@material-ui/core";
import {CreateOutlined} from "@material-ui/icons";
import TermGroupForm from "../TermGroupForm";
import {FormattedMessage} from "react-intl";
import {LanguageMessageContext} from "../../../context";

export default function TermGroupsControlBar() {

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const getLangMessage = useContext(LanguageMessageContext);

  return (
    <>
      <ContentControlBar>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setPopUpOpen(true)}
          startIcon={<CreateOutlined fontSize="small"/>}
        >
          <FormattedMessage id="term-group-create-title"/>
        </Button>
      </ContentControlBar>

      <PopUp
        open={isPopUpOpen}
        onClose={() => setPopUpOpen(false)}>

        <TermGroupForm
          title={getLangMessage("term-group-create-title")}
          closePopUp={() => setPopUpOpen(false)}
        />
      </PopUp>
    </>
  );
}
