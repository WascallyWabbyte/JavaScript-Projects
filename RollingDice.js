/* Write a script rollingDice.js that takes two numbers as arguments. The first one represents a quantity of dice and the second one represents a number
of faces. Simulate rolling the dice. Log the result of each dice, the sum and the average of all rolls.*/

let numbers = process.argv.slice(2);
let numOfDice = numbers[0];
let dicefaces = numbers[1];

let total = 0;



for(let i = 0; i < numOfDice; i += 1){
  let result = Math.floor(Math.random() * dicefaces + 1);
  console.log("Rolled: " + result);
  total += result;
}
console.log("------------------------------");
console.log("Total: " + total);
console.log("Average Roll: " + (total / numOfDice).toFixed(2));
