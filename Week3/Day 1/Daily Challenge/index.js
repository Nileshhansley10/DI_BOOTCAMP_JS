// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
var planets=["Earth","Jupyter","Saturn","Pluto","Mars","Venus","Uranus","Neptune","Mercury"];

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
 let newPlanet=document.createElement("div");

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?




var colors=["#00FF00","#FF0000","#FFFF00","#FF00FF","#00FFFF","#0000FF","#FF8000","#8000FF","#00FF80"];
var moons=[1,3,4,2,2,0,1,4,0];
listPlanets=document.querySelector(".listPlanets");
for (let planet of planets){
    console.log(planet);
   
    newPlanet.setAttribute("class","planet");
    newPlanet.setAttribute("style","background-color:"+colors[planets.indexOf(planet)]);
    newPlanet.innerHTML=planet;
    document.querySelector(".listPlanets").appendChild(newPlanet);
    moon_num=moons[planets.indexOf(planet)];
    console.log(moon_num);
    for (let i=0;i<moon_num;i++){
        let newMoon=document.createElement("div");
        newMoon.setAttribute("class","moon");
        document.querySelector(".listPlanets").appendChild(newMoon);
    }
}

