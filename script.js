
document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    const appendMessage = (message, sender) => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", sender);
        msgDiv.textContent = message;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    const mockAIResponse = (userMessage) => {
        // Simple simulated responses for demonstration
        if (userMessage.toLowerCase().includes("what is python")) {
            return "Python is a versatile programming language that's widely used for web development, data analysis, AI, and more.";
        } else if (userMessage.toLowerCase().includes("how to create a function")) {
            return "In Python, you can create a function using the 'def' keyword. For example: \ndef my_function():\n    print('Hello, World!')";
        } else if (userMessage.toLowerCase().includes("error")) {
            return "If you're encountering an error, please share the error message, and I'll help debug it!";
        } else {
            return "I'm not sure about that yet, but I'm here to help you learn Python step by step. Can you try rephrasing your question?";
        }
    };

    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, "user");
            userInput.value = "";

            setTimeout(() => {
                const aiResponse = mockAIResponse(userMessage);
                appendMessage(aiResponse, "assistant");
            }, 500);
        }
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
});
