// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

//Шукаємо елементи: для введення тексту користувачем і вставки введеного значення тексту.
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухача події інпуту
nameInput.addEventListener("input", event => {
    // Присвоюємо введене значення в інпуті в спан
    nameOutput.textContent = event.currentTarget.value;
    // У випадку порожнього інпуту передаємо спану текст "Anonymous"
    if (event.currentTarget.value === '') {
        nameOutput.textContent = 'Anonymous';   
    }
});