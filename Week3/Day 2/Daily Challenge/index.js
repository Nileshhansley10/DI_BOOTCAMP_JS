// Get the form element and add an event listener for form submission
let btn=document.getElementById("lib-button")
btn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  // Get the values of the inputs
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;
  const verb = document.getElementById("verb").value;
  const place = document.getElementById("place").value;
  const story = document.getElementById("story");
  
  if (noun === " " ||adjective === " " || person ===" " || verb ===" " ||place ===" ") {
    console.error('Please fill in all the fields!');

  } else {
      story.innerHTML = `Once upon a time, there was a ${adjective} ${noun} named ${person}. One day, ${person} decided to ${verb} to ${place}. Along the way, ${person} met a friendly ${noun} who offered to help ${person} on their journey. Together, they arrived at ${place} and had a wonderful time.`;
  }
});


