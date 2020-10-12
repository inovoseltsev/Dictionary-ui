import React from "react";

import "./index.css"
import {useSelector} from "react-redux";
import TermGroupCard from "../TermGroupCard";

export default function TermGroupsPlaceholder() {

  const {wordSets} = useSelector(state => state.wordSetReducer);

  const createRows = (termGroups) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let subArr = [];
    const result = [];

    arr.forEach(el => {
      subArr.push(el);
      if (subArr.length === 3) {
        result.push(subArr);
        subArr = [];
      }
    });
    if (subArr.length !== 0) {
      result.push(subArr);
    }
    console.log(result);
  }

  return (
    <div className="word-sets-placeholder">
      {wordSets.map(wordSet => <TermGroupCard key={wordSet.id}/>)}
      <TermGroupCard isAddCard/>
    </div>
  );
}
