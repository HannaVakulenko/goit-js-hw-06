//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті,
//зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid,
//які ми вже додали у вихідні файли завдання.

// Пошук елементe інпут
const validationInput = document.querySelector('#validation-input');

// Додавання слухача на подію втрати фокусу на інпуті (подія blur)
validationInput.addEventListener('blur', (event) => {
    // Перевірка умови: кількість введених символів повинна дорівнювати кількості, зазначеній в атрибуті data-length 
    if (event.currentTarget.value.length ==
       validationInput.getAttribute('data-length')) {
        // Додавання CSS-класу valid у разі правдивого результату перевірки
        validationInput.classList.add('valid')

        // Перевірка на наявність CSS-класу invalid
        if (validationInput.classList.contains('invalid')) {
            validationInput.classList.remove('invalid')
        }
    } else {
        // Перевірка на наявність CSS-класу valid
        if (validationInput.classList.contains('valid')) {
            validationInput.classList.remove('valid')
        }
        // Додавання CSS-класу invalid у разі неправдивого результату перевірки
        validationInput.classList.add('invalid')
    } 
    // Очищення від CSS-класу стилів у разі, якщо в інпуті не введено жодного символу
    if (event.currentTarget.value === '') {
        validationInput.classList.remove('invalid')   
    }
    
  });