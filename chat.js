async function sendMessage() {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the user's message
  const input = document.getElementById("chat-input");
  const message = input.value;
  input.value = "";

  // Display the user's message
  const chatHistory = document.getElementById("chat-history");
  const messageElement = document.createElement("div");
  messageElement.classList.add("user-message");
  messageElement.textContent = message;
  chatHistory.appendChild(messageElement);

  // Scroll the chat history to the bottom
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Get a response from ChatGPT
  const chatgpt = new ChatGPT({
    apiKey: "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",
  });
  const response = await chatgpt.send(message);

  // Display the ChatGPT response
  const responseElement = document.createElement("div");
  responseElement.classList.add("chatgpt-response");
  responseElement.textContent = response;
  chatHistory.appendChild(responseElement);

  // Scroll the chat history to the bottom
  chatHistory.scrollTop = chatHistory.scrollHeight;

  return false;
}
