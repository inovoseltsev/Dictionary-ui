import React, {useState} from "react";
import Form from "../../../components/shared/Form";
import Input from "../../../components/shared/Input";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {AddPhotoAlternateOutlined} from "@material-ui/icons";
import {createTerm} from "../../../actions/term";
import {useRouteMatch} from "react-router";

export default function TermForm(props) {

  const {
    title, isEdit, termName, termDefinition, keyword,
     termId, closePopUp
  } = props;

  const dispatch = useDispatch();
  const {handleSubmit, register} = useForm();
  const termGroupId = useRouteMatch().params.id;
  const termsOfGroup = useSelector(state => state.termReducer.terms);
  const {image} = useSelector(state => state.termReducer.term);

  const [file, setFile] = useState("");

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const onTermCreate = (data) => {
    const term = {...data, termGroupId};
    dispatch(createTerm(term, termsOfGroup));
  }

  const onSubmit = (data) => {
  }

  return (
    <Form title={title} onSubmit={handleSubmit(onTermCreate)}>
      <Input
        name="name"
        label="Term name"
        value={isEdit ? termName : ""}
        register={register}
        required
      />

      <Input
        name="definition"
        label="Term definition"
        value={isEdit ? termDefinition : ""}
        register={register}
        required
      />

      <Input
        name="keyword"
        label="Term keyword(s)"
        value={isEdit ? keyword : ""}
        register={register}
      />

      <div style={{display: "flex"}}>
        <input
          className="form-input"
          name="image"
          id="image"
          type="file"
          value={isEdit ? image : undefined}
          ref={register}
          accept=".png, .jpg, .jpeg"
          onChange={onFileChange}
          hidden
        />
        <label htmlFor="image">
          Upload Image
          <Fab component="span" style={{marginLeft: "15px", marginRight: "15px"}}>
            <AddPhotoAlternateOutlined/>
          </Fab>
          {file.name}
        </label>
      </div>

      <Button
        className="primary-button"
        type="submit"
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <img src={image ? `data:image/jpeg;base64,${image}` : ""} width={"100px"} height={"100px"} alt={""}/>
    </Form>
  );
}