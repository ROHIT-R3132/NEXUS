// Mentorship form submission
document.getElementById('mentorship-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const expertise = document.getElementById('expertise').value;

    alert(`Thank you, ${name}! We will match you based on your ${role === 'offering' ? 'offered' : 'requested'} mentorship in ${expertise}.`);
});

// Chat functionality
document.getElementById('send-btn').addEventListener('click', function () {
    let inputField = document.getElementById("chat-input");
    let message = inputField.value;
    if (message.trim() !== "") {
        appendMessage("user-message", message);
        getBotResponse(message);
        inputField.value = ""; // Clear input field after sending
    }
});

function appendMessage(type, text) {
    let messagesDiv = document.getElementById("messages");
    let newMessage = document.createElement("div");
    newMessage.className = `message ${type}`;
    newMessage.innerText = text;
    messagesDiv.appendChild(newMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}

function getBotResponse(message) {
    let botResponse = "Thanks for reaching out! A mentor will get back to you soon.";
    setTimeout(() => appendMessage("bot-message", botResponse), 500);
}

// Placeholder for video chat function
function startVideoCall() {
    alert("Starting video call...");
}
