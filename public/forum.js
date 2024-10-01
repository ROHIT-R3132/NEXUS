// Simulated discussion data
const discussions = {
    "Career Path Advice": [
        { author: "John Doe", message: "I am trying to figure out the best career path in software development. Any advice?" },
        { author: "Jane Smith", message: "It depends on your interests! Do you like front-end or back-end development?" }
    ],
    "Networking Tips": [
        { author: "Emily Johnson", message: "I recommend attending local tech meetups or virtual conferences to grow your network." }
    ],
    "Study Motivation and Guidance": [
        { author: "Michael Lee", message: "Staying motivated during long study hours can be tough, but setting short-term goals helps a lot." }
    ]
};

// Open discussion modal
function openDiscussion(topicTitle) {
    const modal = document.getElementById("discussion-modal");
    const discussionTitle = document.getElementById("discussion-title");
    const discussionMessages = document.getElementById("discussion-messages");

    discussionTitle.innerText = topicTitle;
    discussionMessages.innerHTML = "";  // Clear existing messages

    // Load messages
    if (discussions[topicTitle]) {
        discussions[topicTitle].forEach(({ author, message }) => {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.innerHTML = `<strong>${author}:</strong> ${message}`;
            discussionMessages.appendChild(messageElement);
        });
    }

    modal.style.display = "flex";  // Show the modal
}

// Close discussion modal
function closeDiscussion() {
    const modal = document.getElementById("discussion-modal");
    modal.style.display = "none";  // Hide the modal
}

// Handle new message submission in the discussion
document.getElementById("send-message-btn").addEventListener("click", function() {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    const discussionTitle = document.getElementById("discussion-title").innerText;

    if (messageText !== "") {
        const discussionMessages = document.getElementById("discussion-messages");

        // Append new message to discussion
        const newMessageElement = document.createElement("div");
        newMessageElement.classList.add("message");
        newMessageElement.innerHTML = `<strong>You:</strong> ${messageText}`;
        discussionMessages.appendChild(newMessageElement);

        // Simulate adding to the "database"
        if (!discussions[discussionTitle]) {
            discussions[discussionTitle] = [];
        }
        discussions[discussionTitle].push({ author: "You", message: messageText });

        // Clear the input field after submitting
        messageInput.value = "";
    }
});

// Handle new topic submission
document.getElementById("new-topic-form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form from submitting

    const topicTitle = document.getElementById("topic-title").value.trim();
    const topicDescription = document.getElementById("topic-description").value.trim();

    if (topicTitle !== "" && topicDescription !== "") {
        // Create a new forum card for the new topic
        const forumList = document.getElementById("forum-list");
        const newForumCard = document.createElement("div");
        newForumCard.classList.add("forum-card");

        newForumCard.innerHTML = `
            <h3>${topicTitle}</h3>
            <p>${topicDescription}</p>
            <button onclick="openDiscussion('${topicTitle}')">View Discussion</button>
        `;

        // Add the new topic to the forum list
        forumList.appendChild(newForumCard);

        // Add the new topic to the discussions object
        discussions[topicTitle] = [];

        // Clear the form fields after submission
        document.getElementById("topic-title").value = "";
        document.getElementById("topic-description").value = "";
    }
});
