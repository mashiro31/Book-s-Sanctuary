document.addEventListener('DOMContentLoaded', () => {

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

    console.log('Is Logged In:', isLoggedIn);

    const libraryLink = document.getElementById('library-link');
    const authLink = document.getElementById('auth-link');
    const addbookLink = document.getElementById('addBook-link');
    const loginButton = document.getElementById('log-1');
    const signupButton = document.getElementById('log-2');

    if (isLoggedIn) {
        if (libraryLink) libraryLink.style.display = 'block';
        if (loginButton) {
            loginButton.textContent = 'Library';
            loginButton.href = 'library.html';
        }
        if (signupButton) signupButton.style.display = 'none';
        if (addbookLink) addbookLink.style.display = 'block';

        if (authLink) {
            authLink.textContent = 'Logout';
            authLink.href = '#';
            authLink.addEventListener('click', () => {

                localStorage.setItem('isLoggedIn', false);
                alert('You have been logged out.');
                window.location.href = 'index.html';
            });
        }
    } else {
        if (libraryLink) libraryLink.style.display = 'none';
        if (addbookLink) addbookLink.style.display = 'none';

        if (authLink) {
            authLink.textContent = 'Login';
            authLink.href = 'login.html';
        }
    }
});

let books = JSON.parse(localStorage.getItem("books")) || [];
let imageBase64 = "";

function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
        reader.onload = function (e) {
            imageBase64 = e.target.result;
            const preview = document.getElementById("imagePreview");
            preview.src = imageBase64;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

function addBook() {
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();
    const link = document.getElementById("bookLink").value.trim();

    if (!title || !author || !link || !imageBase64) {
        alert("Please fill all fields and upload a book cover.");
        return;
    }

    const newBook = { title, author, link, cover: imageBase64 };
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added successfully!");
    clearForm();
}

function clearForm() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookLink").value = "";
    document.getElementById("bookCover").value = "";
    document.getElementById("imagePreview").style.display = "none";
    imageBase64 = "";
}

function displayBooks() {
    const container = document.getElementById("bookListContainer");
    if (!container) return;

    books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="Book Cover">
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <a href="${book.link}" target="_blank">Read Online</a>
        `;
        container.appendChild(bookDiv);
    });
}

if (document.getElementById("bookListContainer")) {
    displayBooks();
}
 
