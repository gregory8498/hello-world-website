// Select the elements from the HTML
const greetingElement = document.getElementById('greeting');
const button = document.getElementById('changeTextButton');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Change the text of the greeting element
    greetingElement.textContent = 'So much it could burst my heart in two so she should kiss me!';
});
