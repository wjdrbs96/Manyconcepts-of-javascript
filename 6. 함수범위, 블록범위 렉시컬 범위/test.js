var printsToBeExecuted = [];

for (let i = 0; i < 3; i++) {  
  printsToBeExecuted.push(() => console.log(i));
}

printsToBeExecuted.forEach(f => f());  

// Output: 3, 3, 3
