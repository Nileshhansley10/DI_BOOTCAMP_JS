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




for (var i = 0; i < number; i++) {        
    var stars = " ";                      
    for (var j = 0; j < number; j++) {      
      if (j < i) {                     
        stars= stars + " * ";                    
      }
    }
    console.log(stars);                   
  }
  
                 
      



