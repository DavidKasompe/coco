document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting right away

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.textContent = '';

    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Please fill out all fields.";
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
    } else {
        // If all fields are valid
        alert("Form submitted successfully!");
        // Optionally, submit the form data using an AJAX request or save it to a database
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
