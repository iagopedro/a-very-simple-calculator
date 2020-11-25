const form = document.querySelector('#calculator-form');
const firstNumberInput = document.querySelector('#number1');
const secondNumberInput = document.querySelector('#number2');
const sum = document.querySelector('#sum');
const subtraction = document.querySelector('#subtraction');
const multiplication = document.querySelector('#multiplication');
const division = document.querySelector('#division');
const result = document.querySelector('#result');
const allClear = document.querySelector('#all-clear');



function handleSum(firstNumber, secondNumber) {
    const num1 = parseInt(firstNumber)
    const num2 = parseInt(secondNumber)
    let result = num1 + num2;
    return result;
}

function handleSubtraction(firstNumber, secondNumber) {
    const num1 = parseInt(firstNumber)
    const num2 = parseInt(secondNumber)
    let result = num1 - num2;
    return result;
}

function handleMultiplication(firstNumber, secondNumber) {
    const num1 = parseInt(firstNumber)
    const num2 = parseInt(secondNumber)
    let result = num1 * num2;
    return result;
}

function handleDivision(firstNumber, secondNumber) {
    const num1 = parseInt(firstNumber)
    const num2 = parseInt(secondNumber)
    let result = num1 / num2;
    return result;
}



firstNumberInput.addEventListener('focus', () => {
    firstNumberInput.placeholder = '';
});

firstNumberInput.addEventListener('blur', () => {
    firstNumberInput.placeholder = 'Enter the first number:';
});

secondNumberInput.addEventListener('focus', () => {
    secondNumberInput.placeholder = '';
});

secondNumberInput.addEventListener('blur', () => {
    secondNumberInput.placeholder = 'Enter the first number:';
});



sum.addEventListener('click', e => {
    e.preventDefault();
    
    let firstNumberValue = firstNumberInput.value;
    let secondNumberValue = secondNumberInput.value;
    result.innerHTML = handleSum(firstNumberValue, secondNumberValue);

    form.reset();
});

subtraction.addEventListener('click', e => {
    e.preventDefault();

    let firstNumberValue = firstNumberInput.value;
    let secondNumberValue = secondNumberInput.value;
    result.innerHTML = handleSubtraction(firstNumberValue, secondNumberValue);

    form.reset();
});

multiplication.addEventListener('click', e => {
    e.preventDefault();

    let firstNumberValue = firstNumberInput.value;
    let secondNumberValue = secondNumberInput.value;
    result.innerHTML = handleMultiplication(firstNumberValue, secondNumberValue);

    form.reset();
});

division.addEventListener('click', e => {
    e.preventDefault();

    let firstNumberValue = firstNumberInput.value;
    let secondNumberValue = secondNumberInput.value;
    result.innerHTML = handleDivision(firstNumberValue, secondNumberValue);

    form.reset();
});

allClear.addEventListener('click', e => {
    e.preventDefault();

    result.innerHTML = 0;
    form.reset();
})