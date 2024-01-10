let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
  currentInput += char;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '';
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    display.innerText = 'Error';
  }
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput;
}


