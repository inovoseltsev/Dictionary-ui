import React, {useState} from "react";
import EditSide from "../EditSide";
import ContentSide from "../ContentSide";
import Card from "@material-ui/core/Card";

import "./index.css"

export default function AppCard({head, content, onDelete, onChangesApply, cardId, about}) {

  const [isEditable, setEditable] = useState(false);

  return (
    <Card className="app-card">
      {!isEditable ?
        <ContentSide
          name={head}
          content={content}
          onEdit={() => setEditable(true)}
          onDelete={() => onDelete(cardId)}
          dialogAbout={about}
        />
        :
        <EditSide
          name={head}
          description={content}
          onApply={onChangesApply}
          onCancel={() => setEditable(false)}
          cardId={cardId}
          setEditable={setEditable}
        />
      }
    </Card>
  )
}
