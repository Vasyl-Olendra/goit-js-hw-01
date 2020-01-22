let credits = 23580;
const pricePerDroid = 3000;
let message;
let droidAmountInput = prompt('Введите количество дроидов для покупки');
if (droidAmountInput === null) {
  console.log('Отменено пользователем!');
} else {
  droidAmountInput = Number(droidAmountInput);
  let totalPrice = droidAmountInput * pricePerDroid;
  message =
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${droidAmountInput} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`;
  console.log(message);
}
