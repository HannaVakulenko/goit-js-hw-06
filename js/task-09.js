//Напиши скрипт, який змінює кольори фону елемента <body> 
//через інлайн-стиль по кліку на button.change-color 
//і виводить значення кольору в span.color.

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Пошук елементів: кнопка, елемент span для значення кольору та <body>
const changeColorBtn = document.querySelector('button.change-color');
const changedNameColor = document.querySelector('span.color');
const changedBgdColor = document.querySelector('body');

// Додаємо слухача на подію click на кнопку
changeColorBtn.addEventListener('click', () => {
  // Створюємо змінну, в якій через функцію getRandomHexColor
  // рандомно генерується випадковий кольор
  let randomColor = getRandomHexColor();

  // змінюємо кольори фону елемента <body> 
  changedBgdColor.style.backgroundColor = randomColor;

  // виводимо значення кольору в span.color
  changedNameColor.textContent = randomColor;
})

