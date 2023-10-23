const rectangle = document.getElementById('centerRectangle');

// Function to change the rectangle's background color to red
function setColorRed() {
  rectangle.style.backgroundColor = 'red';
}

// Function to change the rectangle's background color to blue
function setColorBlue() {
  rectangle.style.backgroundColor = 'blue';
}

// Function to reset the rectangle's background color to white
function resetColor() {
  rectangle.style.backgroundColor = 'white';
}

// Add event listeners for mouseenter and mouseleave
rectangle.addEventListener('mouseenter', (event) => {
  if (event.clientX < rectangle.getBoundingClientRect().left + rectangle.clientWidth / 2) {
    // Cursor is on the left side
    setColorRed();
  } else {
    // Cursor is on the right side
    setColorBlue();
  }
});

rectangle.addEventListener('mouseleave', () => {
  resetColor();
});