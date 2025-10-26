// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate authentication (replace with real backend API call)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Handle registration form submission
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving user data (replace with real backend API call)
    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
});

// Auto-login check
window.addEventListener('load', function() {
    if (localStorage.getItem('isLoggedIn') === 'true' && window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
    }
});

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}