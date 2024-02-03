document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let storedUser = JSON.parse(localStorage.getItem(username));
  if (storedUser && storedUser.password === password) {
      sessionStorage.setItem('loggedInUser', username);
      window.location.href = 'inicio.html';
  } else {
      alert('Usuario o contraseña incorrectos');
      window.location.href = 'pagina1.html'; 
  }
});
