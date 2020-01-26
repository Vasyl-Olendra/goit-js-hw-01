let total = 0;
let inputNumber;

while (inputNumber !== null) {
  inputNumber = prompt('Укажите число к общей сумме:');
  total += +inputNumber;
}
  alert(`Общая сумма чисел равна ${total}`);

