import React, {useContext, useEffect} from "react";
import ContentCover from "../shared/ContentCover";
import {FormattedMessage} from "react-intl";
import {LanguageMessageContext} from "../../context";
import {DataGrid} from "@material-ui/data-grid";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/user";

import "./index.css"

export default function UsersView() {

  const dispatch = useDispatch();
  const {users} = useSelector(state => state.userReducer);
  const getLangMessage = useContext(LanguageMessageContext);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users])

  const columns = [
    {field: "id", headerName: getLangMessage("users-table-header1"), width: 70},
    {field: "firstName", headerName: getLangMessage("users-table-header2"), width: 130},
    {field: "lastName", headerName: getLangMessage("users-table-header3"), width: 130},
    {field: "login", headerName: getLangMessage("users-table-header4"), width: 130},
    {
      field: "status",
      headerName: getLangMessage("users-table-header5"),
      sortable: false,
      width: 90
    }
  ];

  return (
    <ContentCover>
      <h2 className="users-title"><FormattedMessage id="users-menu-title"/></h2>
      <div className="users-table">
        <DataGrid rows={users} columns={columns} pageSize={5}/>
      </div>
    </ContentCover>
  )
}
