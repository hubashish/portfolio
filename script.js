console.log("Welcome to Nagesh's Cybersecurity Portfolio 🔐");

// Simple typing effect
const text = "Initializing Security Portfolio...";
let i = 0;

function typing() {
    if (i < text.length) {
        document.title += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();