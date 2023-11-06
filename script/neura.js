const textToType = "The Java language is a widely used programming language...";
let typingSpeed = 20; 

const textElement = document.getElementById("typing-text");
const speedInput = document.getElementById("typing-speed");
let displayedText = "";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        displayedText += textToType.charAt(index);
        textElement.textContent = displayedText;
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

function updateTypingSpeed() {
    typingSpeed = parseInt(speedInput.value) || 20; 
}

typeText();
