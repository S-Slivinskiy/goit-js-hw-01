const ADMIN_PASSWORD = 'jqueryismyjam';
let result;
const message = prompt('Введите пароль');

if (message === null) {
  result = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
  result = 'Добро пожаловать!';
} else {
  result = 'Доступ запрещен, неверный пароль!';
}
alert(result);
