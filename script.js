// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'library.html'; // Redirect on success
    } else {
        alert('Invalid username or password.');
        // Clear inputs
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
    }
});

// Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Retrieve existing users
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username exists
    if (storedUsers.some(user => user.username === username)) {
        alert('Username already exists.');
    } else {
        // Add new user
        storedUsers.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert('Signup successful!');
        window.location.href = 'login.html'; // Redirect to login
    }
});
