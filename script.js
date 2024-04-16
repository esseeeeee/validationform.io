document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const messageBox = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = form.email.value;
        const password = form.password.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (password.length < 8) {
            showMessage('Password must be at least 8 characters long.', 'error');
            return;
        }

        if (email === 'ashton@gmail.com' && password === 'ashton123') {
            showMessage('Login successful! Redirecting...', 'success');

            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            showMessage('Invalid email or password. Please try again.', 'error');
        }
    });

    function showMessage(message, type) {
        messageBox.textContent = message; 
        messageBox.className = type; 
    }
});