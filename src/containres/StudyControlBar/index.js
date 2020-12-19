import React from "react";
import ContentControlBar from "../../components/shared/ContentControlBar";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {finishStudying} from "../../actions/term";

export default function StudyControlBar() {

  const dispatch = useDispatch();
  const groupId = useSelector(state => state.termGroupReducer.termGroup.id);
  const history = useHistory();

  const onFinish = () => {
    dispatch(finishStudying());
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
