//Напиши скрипт, який реагує на зміну значення input#font-size-control
//(подія input) і змінює інлайн-стиль span#text, 
//оновлюючи властивість font-size. В результаті, перетягуючи повзунок,
//буде змінюватися розмір тексту.

// Пошук елементів: повзунок для зміни значення розміру шрифта та текст,
// який буде змінювати свій розмір, згідно значенню на повзунку

const fontSizeRange = document.querySelector('#font-size-control');
const fontSizeText = document.querySelector('#text');

// Додавання слухача на подію зміни значення
fontSizeRange.addEventListener('input', event => {
    
    //Оновлення властивості font-size тексту
    fontSizeText.style.fontSize = `${fontSizeRange.value}px`;
})