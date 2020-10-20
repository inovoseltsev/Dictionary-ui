export default function createCardRows(dataArray) {
  let subArr = [];
  const result = [];
  const lastEl = dataArray[dataArray.length - 1];
  dataArray.forEach(el => {
    subArr.push(el);
    if (subArr.length === 3 || el === lastEl) {
      result.push(createArrObject(subArr));
      subArr = [];
    }
  });
  return result;
}

let idCounter = 0;
function createArrObject(array) {
  return {
    id: idCounter++,
    data: array
  }
}
