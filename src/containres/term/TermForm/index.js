import React, {useContext, useState} from "react";
import Form from "../../../components/shared/Form";
import Input from "../../../components/shared/Input";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {AddPhotoAlternateOutlined} from "@material-ui/icons";
import {createTerm, updateTerm} from "../../../actions/term";
import {useRouteMatch} from "react-router";
import Image from "../../../components/shared/Image";
import {LanguageMessageContext} from "../../../context";
import {FormattedMessage} from "react-intl";

export default function TermForm(props) {

  const {
    title, isEdit, termName, termDefinition,
    termKeyword, image, termId, closePopUp
  } = props;

  const dispatch = useDispatch();
  const {handleSubmit, register} = useForm();
  const termGroupId = useRouteMatch().params.id;
  const termsOfGroup = useSelector(state => state.termReducer.terms);
  const getLangMessage = useContext(LanguageMessageContext);

  const [imageFile, setImageFile] = useState(image ? image : {});

  const onFileChange = (event) => {
    const data = event.target.files[0];
    const file = {name: data.name, content: data}
    setImageFile(file);
  }

  const onTermCreate = (formData) => {
    const term = {...formData, termGroupId};
    dispatch(createTerm(term, termsOfGroup));
  }

  const onEditTerm = (formData) => {
    const term = {id: termId, ...formData};
    dispatch(updateTerm(term, termsOfGroup));
  }

  const onSubmit = (data) => {
    closePopUp();
    isEdit ? onEditTerm(data) : onTermCreate(data)
  }

  return (
    <Form title={title} onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        label={getLangMessage("term-form-name")}
        value={isEdit ? termName : ""}
        register={register}
        required
      />

      <Input
        name="definition"
        label={getLangMessage("term-form-definition")}
        value={isEdit ? termDefinition : ""}
        register={register}
        required
      />

      <Input
        name="keyword"
        label={getLangMessage("term-form-keyword")}
        value={isEdit ? termKeyword : ""}
        register={register}
      />

      <div style={{display: "flex"}}>
        <input
          className="form-input"
          name="image"
          id="image"
          type="file"
          ref={register}
          accept=".png, .jpg, .jpeg"
          onChange={onFileChange}
          hidden
        />
        <label htmlFor="image">
          <FormattedMessage id="term-form-image"/>
          <Fab component="span" style={{marginLeft: "15px", marginRight: "15px"}}>
            <AddPhotoAlternateOutlined/>
          </Fab>
        </label>
        <Image
          imageContent={imageFile.content}
          size="small"
          isBlob={imageFile.content && imageFile.content.size != null}
        />
        {imageFile.name ? imageFile.name : ""}
      </div>

      <Button
        className="primary-button"
        type="submit"
        color="primary"
        variant="contained"
      >
        <FormattedMessage id="submit-name"/>
      </Button>
    </Form>
  );
}
