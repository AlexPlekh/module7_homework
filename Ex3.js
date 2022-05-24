// Задание 3

/* Написать функцию, которая создает пустой объект, но без прототипа */

function makeBlankObject() {
    return Object.create(null);
};

// Проверка:

let object = {};
let blankObject = makeBlankObject();

console.log(Object.getPrototypeOf(object));
console.log(Object.getPrototypeOf(blankObject));
