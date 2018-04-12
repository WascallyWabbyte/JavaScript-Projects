/*Write a function, closestNeighbors, that takes a integer, n, and three other integers,
a, b and c. Find the largest integer below n that is divisible by a, b and c and find
the smallest integer above n that is also divisible by a, b, and c then return both
results in array.*/


function closestNeighbors(n, a, b, c){
  let results = [];
  for(let i = n; i < Infinity; i += 1){
    if(i % a === 0 && i % b === 0 && i % c === 0){
      results.push(i);
      break;
    }
  }

  for(let ii = n; ii > -Infinity; ii -= 1){
    if(ii % a === 0 && ii % b === 0 && ii % c === 0){
      results.push(ii);
      break;
    }
  }
    return results;
}
closestNeighbors(3000,7,13,31);
