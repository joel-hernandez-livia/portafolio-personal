document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, mediante AJAX.
      // También puedes mostrar un mensaje de éxito o error al usuario.
      alert('¡Mensaje enviado!');
  });
});
