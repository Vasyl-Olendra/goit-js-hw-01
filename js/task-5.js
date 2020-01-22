let cost;
let countryInput = prompt('Укажите вашу страну:');
let normalizedInput = countryInput.toLowerCase();
switch (normalizedInput) {
  case 'китай':
    (cost = 100), 'кредитов';
    break;

  case 'чили':
    (cost = 250), 'кредитов';
    break;

  case 'австралия':
    (cost = 170), 'кредитов';
    break;

  case 'индия':
    (cost = 80), 'кредитов';
    break;

  case 'ямайка':
    (cost = 120), 'кредитов';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${normalizedInput} будет стоить ${cost} кредитов`);
