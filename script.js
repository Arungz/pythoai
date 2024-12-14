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
        getAIResponse(question);
    }
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getAIResponse(question) {
    let response;

    const answers = {
        "what is python": "Python is a high-level programming language known for its readability and versatility. It is used for web development, AI, data science, and more.",
        "print hello": "To print 'hello' in Python, use: <br><code>print('hello')</code>",
        "how to create a list": "In Python, you can create a list like this: <br><code>my_list = [1, 2, 3, 'a', 'b']</code>",
        "what is a function": "A function in Python is a reusable block of code that performs a specific task. Define it using <code>def</code> keyword."
    };

    // Simple logic to check for known questions
    const lowerQuestion = question.toLowerCase();
    response = answers[lowerQuestion] || "I'm still learning. Could you clarify your question, or ask something else about Python?";

    appendMessage("Pytho AI", response);
}