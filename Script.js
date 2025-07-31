function iniciarSesion() {
    alert("Redirigiendo al inicio de sesión...");
  }
  
  function verAulas() {
    alert("Mostrando aulas disponibles...");
  }
  
  function hacerReserva() {
    alert("Abriendo formulario de reserva...");
  }
  function enviarReserva(e) {
    e.preventDefault();
    alert("Reserva enviada con éxito 💜");
  }
  function iniciarSesion(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
  
    if (usuario === "admin" && contrasena === "1234") {
      alert("¡Bienvenido, " + usuario + "!");
      window.location.href = "index.html";
    } else {
      alert("Usuario o contraseña incorrectos ❌");
    }
  }
  const reservas = [
    {
      aula: '202',
      fecha: '2025-07-12',
      horaInicio: '09:00',
      horaFin: '11:00',
      motivo: 'Clase de programación',
      estado: 'Activa'
    },
    {
      aula: '305',
      fecha: '2025-07-13',
      horaInicio: '14:00',
      horaFin: '16:00',
      motivo: 'Taller de investigación',
      estado: 'Cancelada'
    }
  ];
  
  window.onload = function () {
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    if (cuerpoTabla) {
      reservas.forEach(r => {
        const fila = document.createElement("tr");
  
        fila.innerHTML = `
          <td>${r.aula}</td>
          <td>${r.fecha}</td>
          <td>${r.horaInicio}</td>
          <td>${r.horaFin}</td>
          <td>${r.motivo}</td>
          <td>${r.estado}</td>
        `;
  
        cuerpoTabla.appendChild(fila);
      });
    }
  };
  