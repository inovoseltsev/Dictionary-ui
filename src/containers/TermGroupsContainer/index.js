import React from "react";

import {useSelector} from "react-redux";
import ContentRow from "../../components/ContentRow";
import CardContainer from "../../components/card/CardContainer";

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
      <ContentRow
        leftCard={<CardContainer name={"name"}
                                 description={"description description description description description description"}/>}
        middleCard={<CardContainer name={"name"} description={"description"}/>}
        rightCard={<CardContainer name={"name"} description={"description"}/>}
      />
    </div>
  );
}
