// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const numberOfCategories = document.querySelectorAll('li.item').length;

console.log('Number of categories:', numberOfCategories)

// Для кожного элемента li.item у списку ul#categories, 
//знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
//і кількість елементів в категорії (усіх <li>, вкладених в нього).

const itemsEl = document.querySelectorAll('li.item')

itemsEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent)
    console.log('Elements:', item.querySelectorAll('ul>li').length)
})