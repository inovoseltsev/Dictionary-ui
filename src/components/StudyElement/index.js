import React, {useEffect, useState} from "react";
import {CHUNKS, IMAGES, KEYWORDS} from "../../helpers/studyMode";
import Image from "../shared/Image";

import "./index.css"

export default function StudyElement({studyElement, studyMode}) {

  const [studyContent, setStudyContent] = useState(null);
  const [contentClassName, setContentClassName] = useState("text");

  useEffect(() => {
    if (studyMode === IMAGES) {
      setStudyContent(studyElement.imageFile.content);
      setContentClassName("image");
    } else if (studyMode === CHUNKS) {
      setStudyContent(studyElement);
      setContentClassName("chunk");
    } else if (studyMode === KEYWORDS) {
      setStudyContent(studyElement.keyword)
    } else {
      setStudyContent(studyElement.name);
    }
  }, [studyElement])

  return (
    studyContent == null ? "" :
      <div className="study-content">
        {studyMode === CHUNKS
          ? studyElement.map(element =>
            <div className={contentClassName}>{element.name}</div>
          )
          : <div className={`study-element ${contentClassName}`}>
            {
              studyMode === IMAGES
                ? <Image size="large" imageContent={studyContent}/>
                : studyContent
            }
          </div>
        }
      </div>
  )
}
