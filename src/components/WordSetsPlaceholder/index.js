import React from "react";

import "./index.css"
import {useSelector} from "react-redux";
import WordSetCard from "../WordSetCard";

export default function WordSetsPlaceholder() {

  const {wordSets} = useSelector(state => state.wordSetReducer);

  const createRows = (wordSets) => {
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
      {wordSets.map(wordSet => <WordSetCard key={wordSet.id}/>)}
      <WordSetCard isAddCard/>
    </div>
  );
}
