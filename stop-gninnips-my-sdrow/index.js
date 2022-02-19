function spinWords(string){
  const stringArr = string.split(' ');
  return stringArr.reduce((acc, curr) => {
    if (curr.length >= 5) acc.push(curr.split('').reverse().join(''));
    else acc.push(curr);
    return acc;
  }, []).join(' ');
}