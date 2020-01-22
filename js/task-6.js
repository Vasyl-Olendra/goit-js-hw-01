let total = 0;
let inputNumber;
let result;

while (total >= 0) {
  inputNumber = prompt('Укажите число к общей сумме:');
  if (inputNumber === null) {
    break;
  }

  inputNumber = Number(inputNumber);
  let total = 0 + inputNumber;
  result = total + inputNumber;
}

if (inputNumber === null) {
  alert(`Общая сумма чисел равна ${result}`);
} 
