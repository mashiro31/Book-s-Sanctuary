document.addEventListener('DOMContentLoaded', () => {

    // Get the 'isLoggedIn' value from localStorage
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

    // Debugging log to check if 'isLoggedIn' is correctly retrieved
    console.log('Is Logged In:', isLoggedIn);

    // Elements for library link and authentication buttons
    const libraryLink = document.getElementById('library-link');
    const authLink = document.getElementById('auth-link');
    const loginButton = document.getElementById('log-1');
    const signupButton = document.getElementById('log-2');

    // If the user is logged in
    if (isLoggedIn) {
        // Show the Library link and update the Login button
        if (libraryLink) libraryLink.style.display = 'block';
        if (loginButton) {
            loginButton.textContent = 'Library';
            loginButton.href = 'library.html';
        }
        if (signupButton) signupButton.style.display = 'none';

        // Update the auth link to show 'Logout'
        if (authLink) {
            authLink.textContent = 'Logout';
            authLink.href = '#';
            authLink.addEventListener('click', () => {
                // Log the user out
                localStorage.setItem('isLoggedIn', false);
                alert('You have been logged out.');
                window.location.href = 'index.html'; // Redirect to home page after logout
            });
        }
    } else {
        // If the user is not logged in
        if (libraryLink) libraryLink.style.display = 'none';

        // Update the auth link to show 'Login'
        if (authLink) {
            authLink.textContent = 'Login';
            authLink.href = 'login.html';
        }
    }
});
