import React from "react";

import {useSelector} from "react-redux";
import TermCard from "../../components/TermCard";
import ContentRow from "../../components/ContentRow";

export default function TermGroupsContainer() {

  const {termGroups} = useSelector(state => state.termGroupReducer);

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
    <div>
      {termGroups.map(termGroup => <ContentRow
        key={termGroup.id}
        leftCard={<TermCard/>}
        rightCard={<TermCard/>}
      />)}
      <ContentRow
        leftCard={<TermCard/>}
        middleCard={<TermCard/>}
        rightCard={<TermCard/>}
      />
    </div>
  );
}
