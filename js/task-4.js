let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const userInput = prompt('Введите количество дроидов');

if (userInput === null || userInput === '') {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(userInput) * pricePerDroid;
  if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`
    );
  }
}
