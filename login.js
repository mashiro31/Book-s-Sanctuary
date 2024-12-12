document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();


    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful! Redirecting to the library...');
        localStorage.setItem('isLoggedIn', true);
        window.location.href = 'library.html';
    } else {
        alert('Invalid username or password.');
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';
    }
});
