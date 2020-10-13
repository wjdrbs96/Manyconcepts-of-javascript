const numberList = [1, 2, 3];

const result = numberList.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);

console.log(result); // [ 1, 3 ]