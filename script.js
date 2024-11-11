// script.js

// Function to copy text to the clipboard
function copyToClipboard(command) {
  const textArea = document.createElement('textarea');
  textArea.value = command;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  // Show a confirmation message
  alert(`Command "${command}" copied to clipboard!`);
}

// Add event listeners to each copy button
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const command = button.getAttribute('data-command');
    copyToClipboard(command);
  });
});
