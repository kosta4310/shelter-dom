export function generateArray(cntCards) {
  let arrayArrays = [];
  let arr = [];
  let initArray = getInitArray();
  let arrayAll = [];

  for (let j = 0; j < 48 / cntCards; j++) {
    arr = initArray.slice(j * cntCards, cntCards * (j + 1));
    arr = shuffleSattolo(arr);
    arrayArrays.push(arr);
  }
  arrayArrays = shuffleSattolo(arrayArrays);
  arrayArrays.forEach((arr) => {
    arrayAll.push(...arr);
  });

  function getInitArray() {
    let init = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        init.push(j);
      }
    }
    return init;
  }
  function shuffleSattolo(array) {
    let arraySorted = array;
    for (let i = arraySorted.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arraySorted[i], arraySorted[j]] = [arraySorted[j], arraySorted[i]];
    }

    return arraySorted;
  }
  return arrayAll;
}
