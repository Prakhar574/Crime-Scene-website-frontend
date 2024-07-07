const loginForm = document.querySelector('.loginform');

loginForm.addEventListener('submit', (event) => { event.preventDefault();

const username = document.getElementById('username').value; 
const password = document.getElementById('password').value;

if (username === 'Prakhar' && password === '123456') {
window.location.href = 'home.html'; 
} else {
alert('Incorrect username or password.');
}
});
