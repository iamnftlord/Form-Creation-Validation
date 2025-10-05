// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Form and feedback div selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // prevent actual form submission

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation state and messages
        let isValid = true;
        const messages = [];

        // Username validation: at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation: must include '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must include "@" and ".").');
        }

        // Password validation: at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Show feedback div
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // green
            feedbackDiv.style.backgroundColor = '#e6f4ea'; // light green background (optional)
            // Optionally clear the form
            form.reset();
        } else {
            // Join messages with <br> so each shows on its own line
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // red
            feedbackDiv.style.backgroundColor = '#ffd6d9'; // light red background (optional)
        }
    });
});
