function DarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
const mockUserData = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = mockUserData.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('calculator-container').style.display = 'block';
    } else {
        alert('Nesprávné uživatelské jméno nebo heslo.');
    }
}

function register() {
    const usernameInput = document.getElementById('reg-username').value;
    const passwordInput = document.getElementById('reg-password').value;
    const confirmPasswordInput = document.getElementById('confirm-password').value;

    const existingUser = mockUserData.find(u => u.username === usernameInput);
    if (existingUser) {
        alert('Uživatelské jméno již existuje.');
        return;
    } else if (usernameInput.length < 5) {
        alert('Uživatelské jméno musí mít minimálně 5 znaků.');
        return;
    }

    if (passwordInput !== confirmPasswordInput) {
        alert('Hesla se neshodují.');
        return;
    } else if (!/\d/.test(passwordInput) || passwordInput.length < 7) {
        alert('Heslo musí obsahovat alespoň 7 znaků, včetně alespoň jedné číslice.');
        return;
    }

    mockUserData.push({ username: usernameInput, password: passwordInput });

    alert('Registrace proběhla úspěšně. Nyní se můžete přihlásit.');
    toggleRegister();
}

function toggleRegister() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');

    if (loginContainer.style.display === 'block') {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    } else {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
