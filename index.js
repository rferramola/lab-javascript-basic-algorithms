// Iteration 1: Names and Input
const hacker1 = "Tomás"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Èric"
console.log(`The navigator's name is ${hacker2}`);
const hacker3 = "Roxana"
console.log(`The navigator's name is ${hacker3}`);


// Iteration 2: Conditionals
let longestName 

if (hacker1.length > hacker2.length && hacker1.length > hacker3.length ) {
    longestName = hacker1

} else if(hacker2.length > hacker1.length && hacker2.length > hacker3.length ){
    longestName = hacker2
} else (longestName = hacker3)

if(longestName === hacker1){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if(longestName === hacker2){
    console.log(`It seems that the navigator1 has the longest name, it has ${hacker2.length} characters.`);

} else if(longestName === hacker3){
    console.log(`It seems that the navigator2 has the longest name, it has ${hacker3.length} characters.`);

} else{console.log(`wow, you all have equally longs names, ${hacker1.length} characters. `)}




// Iteration 3: Loops
