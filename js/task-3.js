const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Введите пароль');
let message;
if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  result = 'Доступ запрещен, неверный пароль!';
}
alert(result);
