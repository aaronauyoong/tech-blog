// // This is for signing up new users
// const signupForm = async (event) => {
//     event.preventDefault();

//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (username && email && password) {
//         const response = await fetch('/api/users', {
//             method: 'Post',
//             body: JSON.stringify({ username, email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupForm);