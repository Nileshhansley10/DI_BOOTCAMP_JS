let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// // const displayGroceries = () => {
// //     groceries.fruits.forEach(fruit => {
// //       console.log(fruit);
// //     });
// //   };
  
// //   displayGroceries(); 



//   const cloneGroceries = () => {
//     let user = client;
//     client = "Betty";
//     console.log("Client: " + client); // Output: Client: Betty
//     console.log("User: " + user); // Output: User: John
//   };
  
//   cloneGroceries();
//   When we log the values of client and user to the console, we'll see that the client variable has been modified to "Betty", but the user variable still holds the original value of "John". This is because when we assigned user = client, we created a new reference to the same value, rather than creating a new copy of the value itself. Therefore, when we modify the client variable, it doesn't affect the user variable.


// const cloneGroceries = () => {
//   let shopping = Object.assign({}, groceries);
//   shopping.totalPrice = "35$";
//   shopping.other.payed = false;
//   console.log("Groceries totalPrice: " + groceries.totalPrice); // Output: Groceries totalPrice: 20$
//   console.log("Shopping totalPrice: " + shopping.totalPrice); // Output: Shopping totalPrice: 35$
//   console.log("Groceries payed: " + groceries.other.payed); // Output: Groceries payed: true
//   console.log("Shopping payed: " + shopping.other.payed); // Output: Shopping payed: false
// };

// cloneGroceries();

  