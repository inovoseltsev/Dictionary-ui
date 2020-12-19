import React from "react";

import "./index.css"
import {LOADING} from "../../../helpers/requestStatus";
import Spinner from "../../Spinner";

export default function ContentCover({children, status}) {

  return (
    <div className="content-cover">
      {status === LOADING ? <Spinner/> : children}
    </div>
  )
}
