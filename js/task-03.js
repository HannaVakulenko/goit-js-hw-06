const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Завдання 3: Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Знаходимо список за селектором класу в розмітці
const imageList = document.querySelector('.gallery');

// Перебираючі масив об'єктів, створюємо рядок з елементами розмітки через шаблонні рядки
const listMarkup = images.map(
  (image) => 
  `<li class="item"><img src="${image.url}" width="210" height="150" alt="${image.alt}"</li>`)
  .join("");

// Додаємо рядок з HTML-тегами в необхідне місце дерева DOM
imageList.insertAdjacentHTML('beforeend', listMarkup);

// Додаємо мінімальне оформлення галереї
imageList.style.listStyleType = "none";
imageList.style.width = "710px";
imageList.style.display = "flex";
imageList.style.gap = "10px";
imageList.style.padding = "30px";
imageList.style.borderRadius = "20px";
imageList.style.backgroundColor = "#BDB76B";

