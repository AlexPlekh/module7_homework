// Задание 2

/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

function hasProperty(prop, obj) {
    return (prop in obj);
};

// Проверка:

const primary = {
    one : 1,
    two : 2,
    three : 3,
}
const secondary = Object.create(primary);
secondary["first"] = "1st";
secondary["second"] = "2nd";
secondary["trird"] = "3rd";

console.log(hasProperty("first", secondary));
console.log(hasProperty("three", secondary));
console.log(hasProperty("two", primary));
console.log(hasProperty("second", primary));

