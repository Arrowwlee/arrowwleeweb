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

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = "15px monospace";

    for (let i = 0; i < canvas.width; i += 20) {
        const char = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(char, i, Math.random() * canvas.height);
    }

    requestAnimationFrame(drawMatrix);
}

drawMatrix();