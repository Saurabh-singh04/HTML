function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the username and password (You can add your validation logic here)

    // Example: Saving data to localStorage (for demo purposes, not secure)
    localStorage.setItem('username', username);

    // Redirect to another page after successful login
    window.location.href = 'dashboard.html';
}
