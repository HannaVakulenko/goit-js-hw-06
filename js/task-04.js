// Лічильник складається зі спану і кнопок, які по кліку 
// повинні збільшувати і зменшувати його значення на одиницю.

//Створюємо змінну counterValue, в якій буде зберігатися
//поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0;

//Шукаємо елементи
let counter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

//Додадодаємо слухачів кліків до кнопок:

decrementBtn.addEventListener('click', () => {
    // по кліку зменшується значення лічильника на 1
    counterValue -= 1;
    // передається нове значення лічильника
    counter.textContent = counterValue; 
});

incrementBtn.addEventListener('click', () => {
    // по кліку збільшується значення лічильника на 1
    counterValue += 1;
    // передається нове значення лічильника
    counter.textContent = counterValue;
});