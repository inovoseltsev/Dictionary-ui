import React from "react";
import ContentControlBar from "../../../components/shared/ContentControlBar";
import {Button} from "@material-ui/core";
import {CreateOutlined, LibraryBooksRounded} from "@material-ui/icons";

export default function TermControlBar() {

  return (
    <>
      <ContentControlBar>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
          }}
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
    </>
  );
}