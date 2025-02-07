let display = document.getElementById("resultado");
let currentInput = "";
let lastInput = "";
let operation = null;

function insert(num) {
    if (currentInput.length < 10) {
        currentInput += num;
        updateDisplay(currentInput);
    }
}

function insertOperation(op) {
    if (currentInput !== "") {
        if (lastInput !== "") {
            calculate();
        }
        operation = op;
        lastInput = currentInput;
        currentInput = "";
    }
}

function clearResult() {
    currentInput = "";
    lastInput = "";
    operation = null;
    updateDisplay("");
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "");
}

function calculate() {
    if (operation && lastInput !== "" && currentInput !== "") {
        let result;
        switch (operation) {
            case "+":
                result = parseFloat(lastInput) + parseFloat(currentInput);
                break;
            case "-":
                result = parseFloat(lastInput) - parseFloat(currentInput);
                break;
            case "*":
                result = parseFloat(lastInput) * parseFloat(currentInput);
                break;
            case "/":
                result = parseFloat(lastInput) / parseFloat(currentInput);
                break;
            case "%":
                result = (parseFloat(lastInput) * parseFloat(currentInput)) / 100;
                break;
        }
        currentInput = result.toString().slice(0, 10);
        lastInput = "";
        operation = null;
        updateDisplay(currentInput);
    }
}

function updateDisplay(value) {
    display.innerText = value;
}