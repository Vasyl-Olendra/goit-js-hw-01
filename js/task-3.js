const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const adminInput = prompt('Введите пароль:');
if (adminInput === null) {
  message = 'Отменено пользователем!';
  alert(message);
  console.log(message);
} else if (ADMIN_PASSWORD !== adminInput) {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
  console.log(message);
} else if (ADMIN_PASSWORD === adminInput) {
  message = 'Добро пожаловать!';
  alert(message);
  console.log(message);
}
