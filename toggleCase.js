/*Write a script 'toggleCase.js` that takes a string as an argument then logs the
string with the casing of each letter reversed. Lower case becomes upper case and vice versa.*/

let string = process.argv.slice(2);

let arr = string[0].split("");
let output = "";

    for(let letter in arr){
        if (arr[letter] === arr[letter].toUpperCase()) {
            output += arr[letter].toLowerCase();
        }
        else if (arr[letter] === arr[letter].toLowerCase()){
            output += arr[letter].toUpperCase();
         }
    }
  console.log(output);
