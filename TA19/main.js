document.getElementById("registro").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let errores = false;
  
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("error-nombre").textContent = nombre ? "" : "El nombre es obligatorio.";
  document.getElementById("error-email").textContent = validarEmail(email) ? "" : "Email no válido.";
  document.getElementById("error-password").textContent = password.length >= 8 ? "" : "Contraseña min. 8 caracteres.";

  if (!nombre || !validarEmail(email) || password.length < 8) {
      errores = true;
  }

  if (!errores) {
      document.getElementById("resultado").textContent = `Nombre: ${nombre}, Email: ${email}, Contraseña: ${password}`;
  }
});

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
