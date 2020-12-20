import React from "react";
import Image from "../../Image";

import "./index.css"
import {FormattedMessage} from "react-intl";

export default function HiddenCardContent({text, image}) {

  return (
    <div className="hidden-content">
      {text ?
        <div>
          <p><FormattedMessage id="hidden-content-keyword" values={{text}}/></p>
        </div> : ""}
      <Image imageContent={image.content} size="small"/>
    </div>
  )
}
