const textToType = "The Java language is a widely used programming language...";

const textElement = document.getElementById("typing-text");
let displayedText = "";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        displayedText += textToType.charAt(index);
        textElement.textContent = displayedText;
        index++;
        setTimeout(typeText, 50); // Typing speed (in milliseconds)
    }
}

typeText();