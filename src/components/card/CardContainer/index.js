import React, {useState} from "react";
import EditSide from "../EditSide";
import ContentSide from "../ContentSide";
import Card from "@material-ui/core/Card";

import "./index.css"

export default function CardContainer({name, description}) {

  const [isEditable, setEditable] = useState(false);

  return (
    <Card className="app-card">
      {!isEditable ?
        <ContentSide
          name={name}
          description={description}
          onEdit={() => setEditable(true)}
          onDelete={() => {
          }}
        />
        :
        <EditSide
          onApply={() => {
          }}
          onCancel={() => setEditable(false)}
          name={name}
          description={description}
        />
      }
    </Card>
  )
}
