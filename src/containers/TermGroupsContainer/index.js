import React, {useEffect} from "react";
import CardsRow from "../../components/CardsRow";
import AppCard from "../../components/generic/card/AppCard";

export default function TermGroupsContainer() {

  // const {termGroups} = useSelector(state => state.termGroupReducer);
  const termGroups = [
    {id: 0, name: "name", description: "desc"},
    {id: 1, name: "name", description: "desc"},
    {id: 2, name: "name", description: "desc"}
  ];

  const createRows = (termGroups) => {
    let subArr = [];
    const result = [];
    const lastEl = termGroups[termGroups.length - 1];
    termGroups.forEach(el => {
      subArr.push(el);
      if (subArr.length === 3 || el === lastEl) {
        result.push(subArr);
        subArr = [];
      }
    });
    return result;
  }

  const rows = createRows(termGroups);
  useEffect(() => {
    console.log(createRows(termGroups));
  })

  const onChangesApply = (data) => {
    console.log(data);
  }

  return (
    <div>
      {rows.map(arr =>
        <CardsRow key={0} cards={arr.map(el =>
          <AppCard key={el.id} id={el.id}
                   name={el.name} content={el.description} onChangesApply={onChangesApply}
          />)}
        />)}
    </div>
  );
}
