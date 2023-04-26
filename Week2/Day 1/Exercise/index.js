// ex1

let favoriteFood= "Pizza";
let favoriteMeal="dinner";

console.log("I eat" + " " + favoriteFood  + " at every"+ " " +favoriteMeal);

// ex2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);


const myWatchedSeriesSentence = myWatchedSeries[0]  + ", " + myWatchedSeries[1] + ", "  + "and" + " " + myWatchedSeries[2];
console.log(myWatchedSeriesSentence);

const sentence = "I watched" + " " + myWatchedSeriesLength + " series:" + myWatchedSeriesSentence;
console.log(sentence)

// Part II

myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

myWatchedSeries.push("Batman");
console.log(myWatchedSeries);

myWatchedSeries.unshift("Spider");
console.log(myWatchedSeries);

delete myWatchedSeries[1];
console.log(myWatchedSeries);

const moneyHeist = myWatchedSeries[2];
console.log(moneyHeist[2]);


console.log(myWatchedSeries);


// ex3

// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsiusTemperature = 10;
console.log(celsiusTemperature)

const fahrenheitTemperature = celsiusTemperature / 5 * 9 + 32 ;
console.log(fahrenheitTemperature);


// ex4//

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
let c;
let a = 34;
let b = 21;

// console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because 2 and 21 are numbers
// Actual: 23

console.log(3 + 4 + '5');
// 3+4 is a number 
// '5' is a string 
// so when we add them together it will be 75



// ex5

typeof(15)
// Prediction: Number
// Actual:

typeof(5.5)
// Prediction:Number
// Actual:

typeof(NaN)
// Prediction:Number
// Actual:

typeof("hello")
// Prediction: hello
// Actual: string

typeof(true)
// Prediction:true
// Actual:boolean

typeof(1 != 2)
// Prediction:
// Actual:boolean

"hamburger" + "s"
// Prediction:NaN
// Actual:

"hamburgers" - "s"
// Prediction:NaN
// Actual:

"1" + "3"
// Prediction:13
// Actual:concatenation 

"1" - "3"
// Prediction:-2
// Actual:Number

"johnny" + 5
// Prediction: johnny5
// Actual:string

"johnny" - 5
// Prediction:NaN
// Actual:

99 * "hello"
// Prediction:NaN
// Actual:

1 != 1
// Prediction:false
// Actual:Boolean

1 == "1"
// Prediction: true
// Actual:Boolean

1 === "1"
// Prediction:false
// Actual:boolean



// ex6


5 + "34"
// Prediction:'534'
// Actual: concatenation 

5 - "4"
// Prediction:1
// Actual:number

10 % 5
// Prediction:0
// Actual: Boolean

5 % 10
// Prediction:5
// Actual:number

"Java" + "Script"
// Prediction:'JavaScript'
// Actual:concatenation

" " + " "
// Prediction:'  '
// Actual:

" " + 0
// Prediction:'0'
// Actual: Boolean

true + true
// Prediction: 2
// Actual: number

true + false
// Prediction:
// Actual:

false + true
// Prediction:1
// Actual: number

false - true
// Prediction: -1
// Actual: number

!true
// Prediction:false
// Actual:boolean

3 - 4
// Prediction:-1
// Actual:number

"Bob" - "bill"
// Prediction:NaN
// Actual:









 
