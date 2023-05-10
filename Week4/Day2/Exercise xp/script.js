// ex1
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// const sum = (num1, num2) => num1 + num2;
// console.log(sum(4, 7)); 




// ex2
// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// // First, use function declaration and invoke it.
// // Then, use function expression and invoke it.
// // Write in a one line comment, the difference between function declaration and function expression.
// // Finally, use a one line arrow function and invoke it.

// const weight = 1
// function convertToGrams(weight){
//     return weight *1000 + "g"
// }
// // console log it
// console.log(convertToGrams(weight))

// // make it in one line
// const convertToGrams = weight => weight*1000 + "g";
// console.log(convertToGrams(50))


// ex3
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function(numberOfChildren, partnerName, geographicLocation, jobTitle) {

//     const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

//     document.getElementById("output").textContent = sentence;

//   })(3, "Emma", "New York City", "Web Developer");


// ex4
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the navbar, displaying the name of the user and his profile picture.



(function(name) {
    let userProfile = document.getElementById("user-profile");
    
    // Create a div to hold the user's name and profile picture
    let userDiv = document.createElement("div");
    userDiv.className = "nav-item dropdown";
    
    
    // Add the user div to the user profile div
    userProfile.appendChild(userDiv);
  })("John");
  