const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


   const usernames = [];

   gameInfo.forEach(player => {
     usernames.push(player.username + "!");
   });
   
   console.log(usernames);
   
// ex2

const highScoreUsernames = [];

gameInfo.forEach(player => {
  if (player.score > 5) {
    highScoreUsernames.push(player.username);
  }
});

console.log(highScoreUsernames);
 

// ex3

let totalScore = 0;

for (let i = 0; i < gameInfo.length; i++) {
  totalScore += gameInfo[i].score;
}

console.log(totalScore);



