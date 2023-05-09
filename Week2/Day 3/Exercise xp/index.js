// ex1

const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
console.log(people);


// Write code to add your name to the end of the people array.
people.push("Nilesh");
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const index = people.indexOf("Mary");
console.log(index);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// console.log(people);
const newPeople =people.slice(1);
console.log(newPeople);


// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?





// ex2

// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


const colors = ["Red", "Blue", "Yellow", "Green", "Black"];
console.log(colors);

let space = " ";


const suffixes = ["st", "nd", "rd", "th","th"]

for (let i = 0; i < colors.length; i++) {
console.log( "My" + " " + "#" + [i+1] + " " + "choice"+ " " + "is"+ " " + colors[i]);

}

for (let i = 0; i < colors.length; i++) {
    console.log( "My" + " " +  [i+1] + (suffixes[i]) + " " + "choice"+ " " + "is"+ " " + colors[i]);

}
   

// ex3

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let num = prompt("Please enter a number:");
// console.log("The data type of the input is:", typeof num);

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


// let nums = prompt("Please enter a number:");

// while (nums < 10) {
//   nums = prompt("Please enter a number:");
// }

// console.log("The final number entered is:", nums);



// ex4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


const floors = building.numberOfFloors;
console.log(floors);

const firstFloorApts = building.numberOfAptByFloor.firstFloor;
console.log(firstFloorApts);


const thirdFloorApts = building.numberOfAptByFloor.thirdFloor;
console.log(thirdFloorApts);

const secondTenantName = building.nameOfTenants[1];
console.log(secondTenantName);

const danRooms = building.numberOfRoomsAndRent.dan[0];
console.log(danRooms);



const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
const davidRent = building.numberOfRoomsAndRent.david[1];


if (sarahRent + davidRent > danRent) {
building.numberOfRoomsAndRent.dan[1] = 1200;
console.log("dan rent is lower");

  }

//   Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    dad: "jack",
    mother: "mel",
    daughter: "kia"
} 

for (let key in family) {
    console.log(key);
  }

  for (let key in family) {
    console.log(family[key]);
  }



// Given the object and using a for loop, console.log “my name is Rudolf the raindeer”


  const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  const space = " ";
  