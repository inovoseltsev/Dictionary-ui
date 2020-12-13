import React from "react";
import ContentControlBar from "../../components/shared/ContentControlBar";
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

export default function StudyControlBar() {

  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const history = useHistory();

  const onFinish = () => {
    history.push(`/term-groups/${groupId}`);
  }

  return (
    <>
      <ContentControlBar>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => onFinish()}
        >
          Finish
        </Button>
      </ContentControlBar>
    </>
  );
}
