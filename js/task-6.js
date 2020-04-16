let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');

  if (input !== null) {
    input = Number(input);
    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      total += input;
    }
  }
}
alert(`Общая сумма чисел равна ${total}`);
