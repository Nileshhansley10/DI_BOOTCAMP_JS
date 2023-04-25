// ex1

const sentence ="The movie is not that bad, I like it."
console.log(sentence)

const wordNot = sentence.indexOf("not");
console.log(wordNot);

const wordBad = sentence.indexOf("bad")+3;
console.log(wordBad);



// console.log(notThatBad);


// If the word “bad” comes after the word “not”,

if (wordNot < wordBad){
const notThatBad = sentence.substring(wordNot,wordBad);
console.log(notThatBad)
 
const addGood = sentence.replace(notThatBad,"good");
console.log(addGood);

}
else{
    console.log(sentence);
}



