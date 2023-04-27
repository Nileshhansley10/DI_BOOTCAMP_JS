// Write a JavaScript program that recreates the pattern below.
// // Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// // Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * * 
let number = 10 
let stars = " "

for (let i = 0;i < number; i++){
stars = stars + " * "
console.log(stars);
}



let number1 = 10;
let stars1 = " ";
  for (let i = 0;i < number; i++){

  for (let j = 0; j < i ; j++){
    stars1 = stars1 + " * "
  }
  
    stars1 = stars1 + "\n";

}

console.log(stars1);
                 
      



