let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const userInput = prompt("Введите количество дроидов");

if (userInput === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = Number(userInput) * pricePerDroid;
  console.log(totalPrice);
}
if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`
  );
}
