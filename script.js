
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

    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, "user");
            userInput.value = "";

            // Simulating AI response
            setTimeout(() => {
                const aiResponse = `You asked: "${userMessage}". I'll help you learn Python!`;
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
