// Лічильник складається зі спану і кнопок, які по кліку 
// повинні збільшувати і зменшувати його значення на одиницю.
//<div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
//</div>

//Створи змінну counterValue, в якій буде зберігатися
//поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких
// збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const CounterPlugin = function ({
    rootSelector,
    counterValue = 0,
    step = 1 
} = {}) {
    this._value = counterValue;
    this._step = step;

    this._refs = this._getRefs(rootSelector);

    this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incremenBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decremenBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');
    
    return refs;
}

CounterPlugin.prototype._bindEvents = function () {
    this._refs.incremenBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueNumber();
    })

    this._refs.decremenBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueNumber();
    })
};

CounterPlugin.prototype.updateValueNumber = function () {
    this._refs.value.textContent = this._value;
}

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter = new CounterPlugin({ rootSelector: '#counter', step: 1 });

counter.increment();
counter.decrement();