//Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр - число.
//Ф-ція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.
//Використовуй готову функцію getRandomHexColor для отримання кольору.
//Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//у такий спосіб видаляючи всі створені елементи.

// Пошук елементів
const inputField = document.querySelector('input');
const createBoxesBtn = document.querySelector("button[data-create]");
const destroyBoxesBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Додавання слухачів на клік по кнопкам Create та Destroy
createBoxesBtn.addEventListener("click", createBoxes);
destroyBoxesBtn.addEventListener("click", destroyBoxes);

// Функція для отримання рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення колекції елементів
function createBoxes() {
  
  let boxes = []; //Створюємо масив-колекцію для додавання нових створених елементів
  //Сворюємо елементи, перебираючи їх через цикл з метою зміни розміру та коліру кожного наступного елемента в колекції
  for (let i = 0; i < inputField.value; i++) {
    const boxDiv = document.createElement("div");
    //Стилізація елемента через js
    boxDiv.style.width = `${30 + 10 * i}px`;
    boxDiv.style.height = `${30 + 10 * i}px`;
    boxDiv.style.background = getRandomHexColor();
    //Додаємо в кінець колекції нвостворений елемент
    boxes.push(boxDiv);

  }
  // Додавання колекції в до існуючого елементу контейнеру div#boxes
  boxesContainer.append(...boxes);
 };

// Функція для очищення від колекції елементів та очищення поля інпуту
function destroyBoxes(event) {
  boxesContainer.innerHTML = "";
  inputField.value = '';
}