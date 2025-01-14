let currentData = {};
let allData = {
    "segment": [],
    "mparticle": [],
    "lytics": [],
    "zeotap": []
};

// Load the CDP documentation data (assumes JSON files are in the 'data' folder)
fetch('data/segment.json').then(res => res.json()).then(data => allData.segment = data);
fetch('data/mparticle.json').then(res => res.json()).then(data => allData.mparticle = data);
fetch('data/lytics.json').then(res => res.json()).then(data => allData.lytics = data);
fetch('data/zeotap.json').then(res => res.json()).then(data => allData.zeotap = data);

// Function to handle message send
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value;
    if (!userMessage.trim()) return;

    displayMessage(userMessage, "user");
    inputField.value = "";

    processQuestion(userMessage);
}

// Display messages in the chat window
function displayMessage(message, sender) {
    const messageContainer = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.textContent = message;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Process the user's question and find the answer
function processQuestion(question) {
    let platform = getPlatformFromQuestion(question);
    currentData = allData[platform];

    let answer = findAnswer(question);
    if (answer) {
        displayMessage(answer, "bot");
    } else {
        displayMessage("Sorry, I couldn't find an answer to that question.", "bot");
    }
}

// Extract platform name from the question (simple keyword matching)
function getPlatformFromQuestion(question) {
    if (question.toLowerCase().includes("segment")) return "segment";
    if (question.toLowerCase().includes("mparticle")) return "mparticle";
    if (question.toLowerCase().includes("lytics")) return "lytics";
    if (question.toLowerCase().includes("zeotap")) return "zeotap";
    return "segment";  // Default to Segment if not found
}

// Search through the current platform data for an answer
function findAnswer(question) {
    for (let item of currentData) {
        if (question.toLowerCase().includes(item.question.toLowerCase())) {
            return item.answer;
        }
    }
    return null;
}


// Initial prompt message when the page loads
window.onload = function() {
    setTimeout(() => {
        displayMessage("Welcome! I can help you with how-to questions for Segment, mParticle, Lytics, and Zeotap. Ask me anything, like: 'How do I set up a new source in Segment?' or 'How do I create a user profile in mParticle?'", "bot");
    }, 500); // Delay to simulate bot typing
};

// Send user input when they press the "Send" button
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value;
    if (!userMessage.trim()) return;

    displayMessage(userMessage, "user");
    inputField.value = "";

    processQuestion(userMessage);
}

// Function to display messages in the chat window
function displayMessage(message, sender) {
    const messageContainer = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.textContent = message;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Function to send prompt when user clicks a suggestion
function sendPrompt(promptText) {
    displayMessage(promptText, "user");
    processQuestion(promptText);
}

// Function to process the user's question and find the answer
function processQuestion(question) {
    let platform = getPlatformFromQuestion(question);
    currentData = allData[platform];

    let answer = findAnswer(question);
    if (answer) {
        displayMessage(answer, "bot");
    } else {
        displayMessage("Sorry, I couldn't find an answer to that question.", "bot");
    }
}

// Function to extract platform name from the question
function getPlatformFromQuestion(question) {
    if (question.toLowerCase().includes("segment")) return "segment";
    if (question.toLowerCase().includes("mparticle")) return "mparticle";
    if (question.toLowerCase().includes("lytics")) return "lytics";
    if (question.toLowerCase().includes("zeotap")) return "zeotap";
    return "segment";  // Default to Segment if not found
}

// Function to search through the current platform data for an answer
function findAnswer(question) {
    for (let item of currentData) {
        if (question.toLowerCase().includes(item.question.toLowerCase())) {
            return item.answer;
        }
    }
    return null;
}
