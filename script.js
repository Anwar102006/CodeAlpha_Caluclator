let currentInput = '';
        let operator = '';
        let firstOperand = null;

        function updateDisplay(value) {
            document.querySelector('.display').innerText = value;
        }

        function handleButtonClick(value) {
            if (value === 'C') {
                // Clear all inputs
                currentInput = '';
                firstOperand = null;
                operator = '';
                updateDisplay('0');
            } else if (value === '=') {
                // Calculate the result when '=' is pressed
                if (firstOperand !== null && operator) {
                    currentInput = String(calculate(firstOperand, parseFloat(currentInput), operator));
                    updateDisplay(currentInput);
                    firstOperand = null; // Reset for the next calculation
                    operator = '';
                }
            } else if (value === 'backspace') {
                // Remove the last character from current input
                currentInput = currentInput.slice(0, -1);
                updateDisplay(currentInput || '0'); // Show '0' if input is empty
            } else if (['+', '-', '×', '÷'].includes(value)) {
                // Set the operator and store the first operand
                if (currentInput) {
                    firstOperand = parseFloat(currentInput); // Store the first operand
                    operator = value; // Set the operator
                    currentInput = ''; // Clear current input for the next number
                }
            } else {
                // Append the number or decimal point to the current input
                currentInput += value;
                updateDisplay(currentInput);
            }
        }

        function calculate(a, b, op) {
            switch (op) {
                case '+': return a + b; // Addition
                case '-': return a - b; // Subtraction
                case '×': return a * b; // Multiplication
                case '÷': return a / b; // Division
                default: return b;
            }
        }