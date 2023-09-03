// script.js

// Function to show the success message
function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
}

// Add an event listener to the submit button
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', showSuccessMessage);
