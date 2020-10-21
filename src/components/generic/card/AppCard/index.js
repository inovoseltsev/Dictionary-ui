import React, {useState} from "react";
import EditSide from "../EditSide";
import ContentSide from "../ContentSide";
import Card from "@material-ui/core/Card";

import "./index.css"

export default function AppCard({head, content, onDelete, onChangesApply, id, about}) {

  const [isEditable, setEditable] = useState(false);

  const onEditApply = (data) => {
    setEditable(false);
    onChangesApply({cardId: id, ...data});
  }

  return (
    <Card className="app-card">
      {!isEditable ?
        <ContentSide
          name={head}
          content={content}
          onEdit={() => setEditable(true)}
          onDelete={() => onDelete(id)}
          dialogAbout={about}
        />
        :
        <EditSide
          name={head}
          description={content}
          onApply={onEditApply}
          onCancel={() => setEditable(false)}
        />
      }
    </Card>
  )
}
