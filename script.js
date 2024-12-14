document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;

    appendMessage('You: ' + userInput, 'user');
    document.getElementById('userInput').value = '';

    // Send message to backend
    fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userInput })
    })
    .then(response => response.json())
    .then(data => appendMessage('Pytho AI: ' + data.answer, 'bot'))
    .catch(err => console.error(err));
}

function appendMessage(text, sender) {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.textContent = text;
    message.className = sender;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}