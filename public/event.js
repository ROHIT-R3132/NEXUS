document.getElementById("send-btn").addEventListener("click", function () {
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
    let botResponse = "";

    // Basic responses for common queries
    if (message.includes("event") || message.includes("events")) {
        botResponse = "Upcoming events include: \n1. Alumni Meetup - New York City on September 5\n2. Virtual Networking Session on September 12\n3. 10-Year Alumni Reunion on September 26.";
    } else if (message.includes("library")) {
        botResponse = "The library is open from 8 AM to 8 PM on weekdays.";
    } else if (message.includes("scholarship")) {
        botResponse = "You can find scholarship information at the financial aid office or the university website.";
    } else {
        botResponse = "I'm here to assist! You can ask about events, library hours, scholarships, and more!";
    }

    setTimeout(() => appendMessage("bot-message", botResponse), 500);
}
