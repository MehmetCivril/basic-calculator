console.log("Script is running");

// Get the display element
//const display = document.querySelector('.my-input');
const display = document.querySelector('input[name="display"]');
console.log("Display element:", display); // Check if we found the display

function addToDisplay(value) {
  console.log("Adding to display:", value);
  display.value += value;
}

function deleteLastDigit() {
  console.log("Deleting last digit");
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  console.log("Clearing display");
  display.value = "";
}

function calculate() {
  console.log("Calculating");
  try {
    display.value = eval(display.value);
  } catch (error) {
    console.error("Calculation error:", error);
    display.value = "Error";
  }
}

// Let's wrap our setup code in a function so we can see if it runs
function setupCalculator() {
  console.log("Setting up calculator");
  const buttons = document.querySelectorAll('.calculator input[type="button"]');

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Button clicked:", button.value);
      switch (button.value) {
        case "AC":
          clearDisplay();
          break;
        case "DE":
          deleteLastDigit();
          break;
        case "=":
          calculate();
          break;
        default:
          addToDisplay(button.value);
          break;
      }
    });
  });
}

// Wait for the page to load, then set up the calculator
setupCalculator();
console.log("script.js is loaded!");
