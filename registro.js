document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
  
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    
    
    if (password !== confirm_password) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    
    let existingUser = JSON.parse(localStorage.getItem(username));
    if (existingUser) {
      alert('Ya existe un usuario con este nombre de usuario');
      return;
    }
    
    
    let newUser = {
      username: username,
      email: email,
      password: password
    };
    
    
    localStorage.setItem(username, JSON.stringify(newUser));
    
    
    sessionStorage.setItem('loggedInUser', username);
    
    
    document.getElementById('signupForm').reset();
    
    alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión en la página1.');
    
    
    window.location.href = 'pagina1.html';
});

