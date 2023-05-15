// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

 
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('last-name').value;

    // Create JSON object
    let formData = {
      name: name,
      lastName: lastName
    };

    // Convert JSON object to string
    let jsonString = JSON.stringify(formData);

    // Append JSON string to the DOM
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = jsonString;
  }