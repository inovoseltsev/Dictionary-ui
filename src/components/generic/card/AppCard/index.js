import React, {useState} from "react";
import EditSide from "../EditSide";
import ContentSide from "../ContentSide";
import Card from "@material-ui/core/Card";

import "./index.css"

export default function AppCard({name, content, onDelete, onChangesApply, id}) {

  const [isEditable, setEditable] = useState(false);

  const onApply = (data) => {
    setEditable(false);
    onChangesApply({cardId: id, ...data});
  }

  return (
    <Card className="app-card">
      {!isEditable ?
        <ContentSide
          name={name}
          description={content}
          onEdit={() => setEditable(true)}
          onDelete={onDelete}
        />
        :
        <EditSide
          name={name}
          description={content}
          onApply={onApply}
          onCancel={() => setEditable(false)}
        />
      }
    </Card>
  )
}
