const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getNumberInput(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, input => {
            const number = parseFloat(input);
            if (isNaN(number)) {
                console.log('Invalid input, please enter a valid number');
                resolve(getNumberInput(prompt));
            } else
                resolve(number);
        });
    });
}

function getOperatorInput() {
    return new Promise(resolve => {
      rl.question('Enter operator (+, -, *, /): ', operator => {
        if (!['+', '-', '*', '/'].includes(operator)) {
          console.log('Invalid input. Please enter a valid operator (+, -, *, /).');
          resolve(getOperatorInput());
        } else {
          resolve(operator);
        }
      });
    });
}

async function calculate() {
    const num1 = await getNumberInput('Enter first number: ');
    const operator = await getOperatorInput();
    const num2 = await getNumberInput('Enter second number: ');
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid operator. Exiting...');
        rl.close();
        return;
    }
  
    console.log(`Result: ${result}`);
    rl.close();
  }
  
  calculate();