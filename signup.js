document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();


    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;


    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];


    const existingUser = storedUsers.find(user => user.username === username);
    if (existingUser) {
        alert('Username already exists.');
        return;
    }


    storedUsers.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Signup successful! Redirecting to the login page...');
    window.location.href = 'login.html';
});
