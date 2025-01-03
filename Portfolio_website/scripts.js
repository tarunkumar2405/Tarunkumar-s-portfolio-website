function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function openChatbot() {
    // Show the chatbot container to take up the full screen
    document.getElementById("chatbot-container").style.display = "block";
}

function closeChatbot() {
    // Hide the chatbot container when the close button is clicked
    document.getElementById("chatbot-container").style.display = "none";
}
