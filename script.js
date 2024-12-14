const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function appendMessage(sender, text) {
    const message = document.createElement("div");
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    const question = userInput.value.trim();
    if (question) {
        appendMessage("You", question);
        userInput.value = "";
        respondToQuestion(question);
    }
}

function respondToQuestion(question) {
    let response;

    switch (question.toLowerCase()) {
        case "hi":
        case "hello":
            response = "Hello! How can I assist you in learning Python?";
            break;
        case "what is python?":
            response = "Python is a versatile, high-level programming language that is widely used for web development, data analysis, artificial intelligence, scientific computing, and more.";
            break;
        case "print hello":
            response = "To print 'hello' in Python, use: <br><code>print('hello')</code>";
            break;
        default:
            response = "I'm still learning! Please ask questions like 'What is Python?' or 'Print hello'.";
            break;
    }

    appendMessage("Pytho AI", response);
}