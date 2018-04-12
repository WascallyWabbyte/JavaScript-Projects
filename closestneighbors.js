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
