// Efecto de escritura estilo terminal
const text = "Bienvenidos a Arrowwlee";
let index = 0;
const speed = 100; // Velocidad de escritura

function typeWriter() {
    if (index < text.length) {
        document.getElementById("title").textContent = text.substring(0, index + 1); // Actualizar textContent con el texto progresivo
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

// Fondo animado estilo cibernético
const canvas = document.createElement("canvas");
canvas.id = "backgroundCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Detectar si es móvil para optimizar rendimiento
const isMobile = window.innerWidth <= 768;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Más transparencia para efecto más sutil
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = "15px monospace";

    // Ajustar densidad según el dispositivo
    const spacing = isMobile ? 60 : 40; // Más espaciado en móviles
    const frequency = isMobile ? 0.85 : 0.7; // Menos frecuencia en móviles
    
    // Reducir la densidad de caracteres (menos caracteres por frame)
    for (let i = 0; i < canvas.width; i += spacing) {
        if (Math.random() > frequency) { // Ajustado para móviles
            const char = String.fromCharCode(0x30A0 + Math.random() * 96);
            ctx.fillText(char, i, Math.random() * canvas.height);
        }
    }

    // Ralentizar más en móviles para mejor rendimiento
    const delay = isMobile ? 150 : 100;
    setTimeout(() => {
        requestAnimationFrame(drawMatrix);
    }, delay);
}

// Redimensionar canvas cuando cambie el tamaño de ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

drawMatrix();