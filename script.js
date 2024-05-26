document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(`Email: ${email}, Password: ${password}`);
    
    // Backend integration can be added here
});

