function findEvenIndex(arr) {
  if (arr.length === 2 && !arr[0]) return 1;
  if (arr.length === 1) return 0;
  if (isSequential(arr)) {
    return -1
  }

  const fromLeft = sumArrayValues(arr);
  const fromRight = sumArrayValues(arr.reverse()).reverse();
  const mergedArr = fromLeft.map((value, index) => [value, fromRight[index]]);
  console.log(mergedArr);
  for (let index = (mergedArr.length - 1); index >= 0; index -= 1) {
    if (mergedArr[index][0] === mergedArr[index][1]) {
      return index;
    }
  };
  return -1
}

function isSequential(arr) {
  return arr.every((value, index) => {
    if (index) return value > arr[index - 1];
    return true;
  })
}

function sumArrayValues(arr) {
  return arr.map((_value, index) => {
    let currentValue = 0;
    for (let ind = 0; ind <= index; ind += 1) {
      currentValue += arr[ind];
    }
    return currentValue;
  });
}

console.log(findEvenIndex([0,8]));
