const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01".split("");
let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = Array.from({ length: columns }).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffcc";
    ctx.font = fontSize + "px monospace";

    drops.forEach((y, i) => {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);

        drops[i] = y * fontSize > canvas.height && Math.random() > 0.95 ? 0 : y + 1;
    });
}

setInterval(draw, 40);
