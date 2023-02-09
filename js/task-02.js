const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.

const items = ingredients.map(item => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = item;
  ingredientEl.classList.add("item");
  return ingredientEl;
})

// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...items);

console.log(ingredientList)