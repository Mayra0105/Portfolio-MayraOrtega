// Selecciona todas las barras de progreso
const barrasProgreso = document.querySelectorAll('.porcentaje-progreso');

function animarBarras() {
    barrasProgreso.forEach((barra) => {
        const distancia = barra.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        // Comprobamos si la barra está visible en el viewport
        if (distancia < alturaVentana) {
            const porcentaje = barra.getAttribute('data-porcentaje');
            barra.style.width = porcentaje;
        }
    });
}
// Llamar a la función al cargar la página y al hacer scroll
window.addEventListener('scroll', animarBarras);
window.addEventListener('load', animarBarras);


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-effect');
    const text = textElement.textContent; 
    textElement.textContent = ''; 
  
    let index = 0;
    const speed = 40; 
  
    function type() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
  
    type(); // Inicia el efecto de escritura
  });

// Barra de navegacion
const navbar = document.querySelector('.navbar');
// Función para agregar o quitar la clase de barra fija
function stickyNavbar() {
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
// Escucha el evento de desplazamiento para aplicar la funcionalidad sticky
window.addEventListener('scroll', stickyNavbar);

//Footer Copyright, Función para obtener el año actual
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear; 
})

// Mostrar y ocultar el chat
document.getElementById('chatIcon').addEventListener('click', function () {
  document.getElementById('chatPopup').style.display = 'flex';
});

document.getElementById('closeChat').addEventListener('click', function () {
  document.getElementById('chatPopup').style.display = 'none';
});

// Respuesta inicial y opciones juntas
const mensajeInicial = `
  Hola, ¿en qué puedo ayudarte?
  Aquí tienes algunas opciones para continuar:
`;

let respuestaIndex = 0; // Índice para controlar el envío del mensaje

// Enviar mensaje
document.getElementById('sendMessageButton').addEventListener('click', function () {
  sendMessage();
});

document.getElementById('messageInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Función para enviar el mensaje del usuario y mostrar todas las opciones de una vez
function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value.trim();

  if (messageText !== '') {
    // Añadir el mensaje del usuario al chat
    addMessageToChat(messageText, 'me');
    messageInput.value = '';  

    // Si es el primer mensaje, mostrar todas las opciones juntas
    if (respuestaIndex === 0) {
      setTimeout(() => {
        addMessageToChat(mensajeInicial, 'other');
        mostrarOpciones();  
      }, 1000);

      respuestaIndex++;
    }
  }
}
// Función para agregar un mensaje al chat
function addMessageToChat(text, sender) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);  
  messageElement.textContent = text;

  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;  
}

// Función para mostrar opciones con botones
function mostrarOpciones() {
  const messagesContainer = document.getElementById('chatMessages');

  // Crear el contenedor de las opciones
  const opcionesDiv = document.createElement('div');
  opcionesDiv.classList.add('message', 'other'); 
  
  // Opción 1: Ver más proyectos
  const verProyectosBtn = document.createElement('button');
  verProyectosBtn.textContent = "Ver más proyectos";
  verProyectosBtn.classList.add('chat-option-btn');
  verProyectosBtn.addEventListener('click', function () {
    window.open('https://github.com/Mayra0105', '_blank');
  });

  // Opción 2: Conocer más habilidades
  const habilidadesBtn = document.createElement('button');
  habilidadesBtn.textContent = "Conocer más habilidades";
  habilidadesBtn.classList.add('chat-option-btn');
  habilidadesBtn.addEventListener('click', function () {
    addMessageToChat("Mis principales habilidades incluyen HTML, CSS, JavaScript, y más.", 'other');
  });

  // Opción 3: Contactar directamente
  const contactoBtn = document.createElement('button');
  contactoBtn.textContent = "Contactar conmigo";
  contactoBtn.classList.add('chat-option-btn');
  contactoBtn.addEventListener('click', function () {
    addMessageToChat("Puedes contactarme a través del correo mayraortegacervantes1@gmail.com", 'other');
  });

  // Agregar botones al contenedor de opciones
  opcionesDiv.appendChild(verProyectosBtn);
  opcionesDiv.appendChild(habilidadesBtn);
  opcionesDiv.appendChild(contactoBtn);

  // Agregar el contenedor de opciones al chat
  messagesContainer.appendChild(opcionesDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; 
}
